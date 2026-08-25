import cv2
import numpy as np
import os
import sys

ref = cv2.imread(r"C:\Users\Admin\.gemini\antigravity-ide\brain\32934983-a263-4b75-85de-f17e0b70fd79\.user_uploaded\media_1787651279457.png", cv2.IMREAD_COLOR)
if ref is None:
    print("Could not load reference image")
    sys.exit(1)

ref_mask = np.any(ref > 5, axis=-1)
ref_mean = np.mean(ref[ref_mask], axis=0)
ref_std = np.std(ref[ref_mask], axis=0)
print(f"Target Mean: {ref_mean}")
print(f"Target Std: {ref_std}")

print("Processing frames 171 to 410 to match quality...")
for i in range(171, 411):
    filename = f'frame_{i:04d}.webp'
    if not os.path.exists(filename):
        continue
        
    src = cv2.imread(filename, cv2.IMREAD_COLOR)
    if src is None:
        continue
        
    src_mask = np.any(src > 5, axis=-1)
    
    src_mean = np.mean(src[src_mask], axis=0)
    src_std = np.std(src[src_mask], axis=0)
    
    # Avoid division by zero
    src_std[src_std == 0] = 1
    
    out = src.astype(np.float32)
    for c in range(3):
        out[..., c] = (out[..., c] - src_mean[c]) * (ref_std[c] / src_std[c]) + ref_mean[c]
        
    out = np.clip(out, 0, 255).astype(np.uint8)
    out[~src_mask] = 0
    
    # Sharpening
    gaussian = cv2.GaussianBlur(out, (5,5), 1.0)
    sharpened = cv2.addWeighted(out, 1.5, gaussian, -0.5, 0)
    sharpened[~src_mask] = 0
    
    cv2.imwrite(filename, sharpened, [cv2.IMWRITE_WEBP_QUALITY, 100])
    print(f"Processed {filename}")
    
print("All frames processed for better quality.")
