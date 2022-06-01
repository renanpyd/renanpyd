# Comando que retorna um loop de posicionamento do mouse.
# Usado para programar o bot com PyAutoGUI.

import pyautogui
import sys
import time

print('Ctrl-C para sair')
try:
    while True:
        x, y = pyautogui.position()
        posicao = 'X: ' + str(x) + ' Y: ' + str(y) +('\n')
        time.sleep(2)
        print(posicao, end='')
except KeyboardInterrupt:
    print('\n')
