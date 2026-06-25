"""
Process the uploaded logo with color-distance-based approach.
Only remove pixels close to the dark navy background color (23, 37, 77).
This preserves all logo details (gold/bronze/etc).
"""
from PIL import Image
import numpy as np
import os

SRC = '/home/z/my-project/upload/pasted_image_1782379542960.png'
DST_DIR = '/home/z/my-project/download/sunzee-assets'

img = Image.open(SRC).convert('RGBA')
W, H = img.size
print(f"Original size: {W} x {H}")

arr = np.array(img).astype(np.int32)
r, g, b = arr[:,:,0], arr[:,:,1], arr[:,:,2]

# Background color reference (sample from corners)
bg_r, bg_g, bg_b = 23, 37, 77

# Color distance (Euclidean) to background
dist = np.sqrt((r - bg_r)**2 + (g - bg_g)**2 + (b - bg_b)**2)

# Use a tighter threshold - only remove pixels that are very close to the navy background
# Anything within color distance < 50 is considered background
threshold = 50
bg_mask = dist < threshold
print(f"Background pixels (within distance {threshold}): {bg_mask.sum()} ({bg_mask.sum()*100//(W*H)}%)")

# Find bounding box of foreground (non-background)
fg_mask = ~bg_mask
ys, xs = np.where(fg_mask)
x_min, x_max = xs.min(), xs.max()
y_min, y_max = ys.min(), ys.max()
print(f"Foreground bbox: x=[{x_min},{x_max}], y=[{y_min},{y_max}]")

# Crop to bounding box with small margin
margin = 4
crop_box = (max(0, x_min - margin), max(0, y_min - margin), 
            min(W, x_max + margin + 1), min(H, y_max + margin + 1))
cropped = img.crop(crop_box)
cw, ch = cropped.size
print(f"Cropped size: {cw} x {ch}")

# Apply alpha transparency to background pixels within the cropped region
cropped_arr = np.array(cropped).astype(np.int32)
cr, cg, cb = cropped_arr[:,:,0], cropped_arr[:,:,1], cropped_arr[:,:,2]
cdist = np.sqrt((cr - bg_r)**2 + (cg - bg_g)**2 + (cb - bg_b)**2)
cbg_mask = cdist < threshold

# Set alpha to 0 for background pixels, keep 255 for foreground
cropped_arr[:,:,3] = np.where(cbg_mask, 0, 255).astype(np.uint8)
# Convert back to uint8
cropped_arr = cropped_arr.astype(np.uint8)
transparent_logo = Image.fromarray(cropped_arr, 'RGBA')

# Save versions
transparent_path = os.path.join(DST_DIR, 'logo-transparent.png')
transparent_logo.save(transparent_path)
print(f"Saved: {transparent_path}")

# Square version for header
side = max(cw, ch)
square = Image.new('RGBA', (side, side), (0, 0, 0, 0))
offset = ((side - cw) // 2, (side - ch) // 2)
square.paste(transparent_logo, offset, transparent_logo)
square_path = os.path.join(DST_DIR, 'logo-square.png')
square.save(square_path)
print(f"Saved: {square_path} ({side}x{side})")

# Stats
total = cropped_arr.shape[0] * cropped_arr.shape[1]
opaque = (cropped_arr[:,:,3] > 0).sum()
print(f"Opaque pixels: {opaque} ({opaque*100//total}%)")
print(f"Transparent pixels: {total - opaque} ({(total-opaque)*100//total}%)")

print("\nDone processing logo!")
