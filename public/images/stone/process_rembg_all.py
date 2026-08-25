import os
import glob
import cv2
import numpy as np
import sys
import traceback

try:
    from rembg import remove, new_session
except ImportError:
    print("rembg not installed yet, waiting...")
    sys.exit(1)

def process():
    print("Renaming 200-439 to 171-410...")
    for i in range(200, 440):
        old_name = f'frame_{i:04d}.webp'
        new_num = i - 29
        new_name = f'frame_{new_num:04d}.webp'
        
        if os.path.exists(old_name):
            # Replace if exists
            if os.path.exists(new_name):
                os.remove(new_name)
            os.rename(old_name, new_name)
            
    print("Running rembg on 171-410...")
    session = new_session('u2net')
    
    count = 0
    for i in range(171, 411):
        filename = f'frame_{i:04d}.webp'
        if os.path.exists(filename):
            print(f"Processing {filename}...")
            img = cv2.imread(filename)
            if img is not None:
                out = remove(img, session=session)
                bgr = out[:, :, :3]
                alpha = out[:, :, 3] / 255.0
                bg = np.zeros_like(bgr)
                result = (bgr * alpha[:, :, np.newaxis] + bg * (1 - alpha[:, :, np.newaxis])).astype(np.uint8)
                cv2.imwrite(filename, result, [cv2.IMWRITE_WEBP_QUALITY, 100])
                count += 1
            else:
                print(f"Could not read {filename}")
    print(f"Done! Processed {count} files.")

if __name__ == '__main__':
    try:
        process()
    except Exception as e:
        traceback.print_exc()
