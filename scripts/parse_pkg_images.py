#!/usr/bin/env python3
"""Parse the z-ai image-search raw outputs and extract just the URLs."""
import json
import os
import re
from pathlib import Path

RAW_DIR = Path("/tmp/pkg_images")
OUT_FILE = Path("/tmp/pkg_image_urls.json")

# Map raw filenames to destination keys
FILE_MAP = {
    "egypt_1": "egypt",
    "egypt_2": "egypt",
    "egypt_3": "egypt",
    "egypt_4": "egypt",
    "reunion_1": "reunion",
    "reunion_2": "reunion",
    "reunion_3": "reunion",
    "reunion_4": "reunion",
    "mad_1": "madagascar",
    "mad_2": "madagascar",
    "mad_3": "madagascar",
    "mad_4": "madagascar",
}

result = {k: [] for k in set(FILE_MAP.values())}

for stem, dest in FILE_MAP.items():
    raw_path = RAW_DIR / f"{stem}.raw"
    if not raw_path.exists():
        print(f"  MISSING: {stem}")
        continue
    content = raw_path.read_text()
    # Find the JSON block
    start = content.find('{\n  "success"')
    if start == -1:
        start = content.find('{"success"')
    if start == -1:
        print(f"  NO JSON in {stem}")
        continue
    # Find matching closing brace
    depth = 0
    end = -1
    for i, c in enumerate(content[start:]):
        if c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0:
                end = start + i + 1
                break
    if end == -1:
        continue
    try:
        data = json.loads(content[start:end])
    except json.JSONDecodeError as e:
        print(f"  JSON ERROR in {stem}: {e}")
        continue
    for r in data.get("results", []):
        url = r.get("original_url")
        if url:
            result[dest].append(url)

# Print summary
for dest, urls in result.items():
    print(f"{dest}: {len(urls)} urls")
    for u in urls:
        print(f"  {u}")

OUT_FILE.write_text(json.dumps(result, indent=2))
print(f"\nSaved to {OUT_FILE}")
