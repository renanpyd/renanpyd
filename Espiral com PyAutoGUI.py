# Criando uma espiral com PyAutoGUI

import pyautogui

screenWidth, screenHeight = pyautogui.size() # Obter o tamanho do monitor
screenWidth, screenHeight
(2560, 1440)

currentMouseX, currentMouseY = pyautogui.position() # Obter a posição XY do mouse
currentMouseX, currentMouseY
(1314, 345)

pyautogui.moveTo(100, 150) # Mover o mouse para as coordenadas XY

pyautogui.click()          # Clicar com o mouse
pyautogui.click(100, 200)  # Mover o mouse para as coordenadas XY e clicar nele
pyautogui.click('button.png') # Encontra onde button.png aparece na tela e clique nele

pyautogui.move(400, 0)      # Move o mouse 400 pixels à direita de sua posição atual
pyautogui.doubleClick()     # Double click com o mause
pyautogui.moveTo(500, 500, duration=2, tween=pyautogui.easeInOutQuad)  # Usa a função tweening/easing para mover o mouse por mais de 2 segundos

pyautogui.write('Hello world!', interval=0.25)  # digita com pausa de um quarto de segundo entre cada tecla
pyautogui.press('esc')     # Pressiona a tecla Esc. Todos os nomes de chave estão em pyautogui.KEY_NAMES

with pyautogui.hold('shift'):  # Pressiona a tecla Shift para baixo e segure-a
    pyautogui.press(['left', 'left', 'left', 'left'])  # Pressiona a tecla de seta para a esquerda 4 vezes
# A tecla Shift é liberada automaticamente

pyautogui.hotkey('ctrl', 'c') # Pressiona a combinação de teclas de atalho Ctrl-C.

pyautogui.alert('This is the message to display.') # Faz aparecer uma caixa de alerta e pause o programa até clicar em OK