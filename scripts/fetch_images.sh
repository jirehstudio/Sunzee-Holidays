#!/bin/bash
# Run image searches and save JSON to files (extracting only the JSON portion)

run_search() {
    local query="$1"
    local outfile="$2"
    local count="${3:-2}"
    
    echo "Searching: $query -> $outfile"
    # Run search, capture all output
    z-ai image-search -q "$query" --count $count --gl us --no-rank > "${outfile}.raw" 2>&1
    
    # Extract just the JSON portion (starts with { and ends with })
    python3 -c "
import json, sys
with open('${outfile}.raw') as f:
    content = f.read()
# Find the JSON object
start = content.find('{\n  \"success\"')
if start == -1:
    start = content.find('{')
if start == -1:
    print('ERROR: No JSON found in output')
    sys.exit(1)
# Find matching closing brace
depth = 0
end = -1
for i, c in enumerate(content[start:]):
    if c == '{': depth += 1
    elif c == '}': 
        depth -= 1
        if depth == 0:
            end = start + i + 1
            break
if end == -1:
    print('ERROR: Incomplete JSON')
    sys.exit(1)
json_str = content[start:end]
data = json.loads(json_str)
with open('${outfile}', 'w') as out:
    json.dump(data, out, indent=2)
urls = [r.get('original_url') for r in data.get('results', []) if r.get('original_url')]
print(f'  Got {len(urls)} URLs')
for u in urls:
    print(f'    {u}')
"
    rm -f "${outfile}.raw"
}

run_search "Egypt pyramids Giza desert sunset cinematic landscape" /tmp/img_egypt.json 2
run_search "Kenya safari elephant herd Maasai Mara savanna" /tmp/img_kenya.json 2
run_search "Zanzibar Tanzania turquoise ocean white sand beach aerial" /tmp/img_zanzibar.json 2
run_search "Mauritius island tropical beach palm trees turquoise water" /tmp/img_mauritius.json 2
run_search "Madagascar baobab tree avenue sunset red earth" /tmp/img_madagascar.json 2
run_search "Reunion island volcano Piton de la Fournaise lush green mountain" /tmp/img_reunion.json 2
run_search "luxury tropical resort infinity pool ocean view sunset cinematic" /tmp/img_hero.json 3
run_search "luxury beach resort swimming pool palm trees aerial view" /tmp/img_cta.json 2

echo ""
echo "=== Summary ==="
python3 -c "
import json, os
files = ['egypt','kenya','zanzibar','mauritius','madagascar','reunion','hero','cta']
results = {}
for key in files:
    path = f'/tmp/img_{key}.json'
    if not os.path.exists(path):
        print(f'{key}: MISSING')
        continue
    with open(path) as f:
        data = json.load(f)
    urls = [r['original_url'] for r in data.get('results', []) if r.get('original_url')]
    results[key] = urls
    print(f'{key}: {len(urls)} urls, first: {urls[0] if urls else \"none\"}')
with open('/tmp/image_urls.json','w') as f:
    json.dump(results, f, indent=2)
print('Saved to /tmp/image_urls.json')
"
