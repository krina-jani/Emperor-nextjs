import cv2
import numpy as np
from rembg import remove

# Read the fresh frame_0200
img = cv2.imread('frame_0200.webp')

# Run rembg
out = remove(img)

# out is BGRA. We want a pure black background.
bgr = out[:, :, :3]
alpha = out[:, :, 3] / 255.0

bg = np.zeros_like(bgr)
result = (bgr * alpha[:, :, np.newaxis] + bg * (1 - alpha[:, :, np.newaxis])).astype(np.uint8)

cv2.imwrite('frame_0200_rembg_test.webp', result)
