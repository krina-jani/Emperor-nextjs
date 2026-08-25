import cv2
import numpy as np

# Load reference
ref = cv2.imread(r"C:\Users\Admin\.gemini\antigravity-ide\brain\32934983-a263-4b75-85de-f17e0b70fd79\.user_uploaded\media_1787651279457.png", cv2.IMREAD_COLOR)

# Load current frame
src = cv2.imread('frame_0171.webp', cv2.IMREAD_COLOR)

# Create masks (where pixels are not pure black)
ref_mask = np.any(ref > 5, axis=-1)
src_mask = np.any(src > 5, axis=-1)

# Calculate mean and std for each channel
ref_mean = np.mean(ref[ref_mask], axis=0)
ref_std = np.std(ref[ref_mask], axis=0)

src_mean = np.mean(src[src_mask], axis=0)
src_std = np.std(src[src_mask], axis=0)

print("Ref mean:", ref_mean, "Ref std:", ref_std)
print("Src mean:", src_mean, "Src std:", src_std)

# Match colors
out = src.astype(np.float32)
for i in range(3):
    # (x - mean_s) * (std_r / std_s) + mean_r
    out[..., i] = (out[..., i] - src_mean[i]) * (ref_std[i] / src_std[i]) + ref_mean[i]

out = np.clip(out, 0, 255).astype(np.uint8)
out[~src_mask] = 0

# Apply unsharp mask for sharpness
gaussian = cv2.GaussianBlur(out, (5,5), 1.0)
sharpened = cv2.addWeighted(out, 1.5, gaussian, -0.5, 0)
sharpened[~src_mask] = 0

cv2.imwrite('test_matched.webp', sharpened)
print("Saved test_matched.webp")
