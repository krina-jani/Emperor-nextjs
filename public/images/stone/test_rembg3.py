import sys
from rembg import remove, new_session
import cv2

try:
    session = new_session("u2net")
    print('Session created successfully')
except Exception as e:
    print('Error:', e)
