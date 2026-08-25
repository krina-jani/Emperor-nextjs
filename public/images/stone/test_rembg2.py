import sys
import traceback
try:
    from rembg import remove
    import cv2
    import numpy as np

    print('Reading image...')
    img = cv2.imread('frame_0200.webp')
    if img is None:
        print('Image not found!')
        sys.exit(1)
        
    print('Removing bg...')
    out = remove(img)
    
    print('Processing output...')
    bgr = out[:, :, :3]
    alpha = out[:, :, 3] / 255.0

    bg = np.zeros_like(bgr)
    result = (bgr * alpha[:, :, np.newaxis] + bg * (1 - alpha[:, :, np.newaxis])).astype(np.uint8)

    print('Writing output...')
    cv2.imwrite('frame_0200_rembg_test.webp', result)
    print('Done!')
except Exception as e:
    print('Error:', e)
    traceback.print_exc()
