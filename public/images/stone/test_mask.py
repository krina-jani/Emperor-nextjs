import cv2
import numpy as np
import sys
from rembg import remove, new_session

img_path = 'frame_0171.webp'
img = cv2.imread(img_path)
if img is None:
    print("Could not read image")
    sys.exit(1)

session = new_session('u2net')
mask = remove(img, session=session, only_mask=True)

# Mask might be slightly smaller or same size. If same size:
if mask.shape[:2] != img.shape[:2]:
    mask = cv2.resize(mask, (img.shape[1], img.shape[0]))

# Apply mask to original image, with black background
bg = np.zeros_like(img)
alpha = mask.astype(float) / 255.0
alpha = np.expand_dims(alpha, axis=2)

result = (img * alpha + bg * (1 - alpha)).astype(np.uint8)
cv2.imwrite('frame_0171_test_mask.webp', result, [cv2.IMWRITE_WEBP_QUALITY, 100])
print("Saved test image using only_mask=True.")
