# Importe das bibliotecas
import os, sys, time
import urllib.parse
import webbrowser
import pyautogui as pyg
import clipboard
from datetime import datetime, timedelta

# Dashboard Credenciais
pyg.click(x=37, y=326, button='left', clicks=2, interval=0.25)
def main(args):
    def quote(arg): 
        if ' ' in arg:
            arg = '"%s"' % arg
        return urllib.parse.quote_plus(arg)

    qstring = '+'.join(quote(arg) for arg in args)
    url = urllib.parse.urljoin('https://datastudio.google.com/u/0/reporting/fc878f02-2f40-49cf-bfff-70242666e5f4/page/hYAMB', '?q=' + qstring)
    webbrowser.open(url)

if __name__ == '__main__':
   main(sys.argv[1:])

# Minha Claro Residencial App
time.sleep(12)
pyg.click(x=484, y=293, button='left', clicks=1, interval=0.50)
time.sleep(5)
pyg.click(x=466, y=300, button='left', clicks=1, interval=0.50)
time.sleep(5)
pyg.click(x=473, y=589, button='left', clicks=1, interval=0.50) # Ontem
time.sleep(5)
pyg.click(x=455, y=619, button='left', clicks=21, interval=0.50) # Aplicar
time.sleep(8)
pyg.scroll(-500) # Rolar página
pyg.click(x=408, y=447, button='left', clicks=2, interval=0.25) # Pegar login sucesso
pyg.hotkey('Ctrl','c')

var = clipboard.paste()

with open(r"C:\input\Credencial_Login_Sucesso.txt", "w") as text_file:
    text_file.write("String Variable: %s" % var)
    
time.sleep(8)

# Dashboard Flex - Visão Geral - iJoin   
def main(args):
    def quote(arg): 
        if ' ' in arg:
            arg = '"%s"' % arg
        return urllib.parse.quote_plus(arg)

    qstring = '+'.join(quote(arg) for arg in args)
    url = urllib.parse.urljoin('https://datastudio.google.com/u/0/reporting/8d2d47fd-0880-4669-b456-024a8de57298/page/gSw5', '?q=' + qstring)
    webbrowser.open(url)

if __name__ == '__main__':
   main(sys.argv[1:])
   
time.sleep(5)
pyg.click(x=710, y=221, button='left', clicks=1, interval=0.50) # Data
time.sleep(3)
pyg.click(x=684, y=235, button='left', clicks=1, interval=0.50) # Data
time.sleep(3)
pyg.click(x=862, y=133, button='left', clicks=16, interval=0.50) # Scroll
time.sleep(3)
pyg.click(x=623, y=436, button='left', clicks=1, interval=0.50) # Ontem
time.sleep(5)
pyg.click(x=690, y=547, button='left', clicks=1, interval=0.50) # Aplica

time.sleep(5)
pyg.click(x=590, y=469, button='left', clicks=2, interval=0.25) # Usuários com login
pyg.hotkey('Ctrl','c')
var2 = clipboard.paste()
with open(r"C:\input\Usuarios_com_login.txt", "w") as text_file:
    text_file.write(var2)

time.sleep(5)
pyg.click(x=595, y=565, button='left', clicks=2, interval=0.25) # Logins
pyg.hotkey('Ctrl','c')
var3 = clipboard.paste()
with open(r"C:\input\Logins.txt", "w") as text_file:
    text_file.write(var3)

# Fechar chrome
time.sleep(3)
pyg.click(x=1342, y=12, button='left', clicks=1, interval=0.50) # Aplica
