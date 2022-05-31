# Importe das bibliotecas
import os, sys
import shutil
import urllib.parse
import webbrowser
import pyautogui as pyg
import time
from datetime import datetime, timedelta
import pyperclip as pc

# Acessa ao site do App Power BI
# (Novo) Usuários Únicos por Segmento / Sessão e Interações / Sessão e Interações
def main(args):
    def quote(arg):
        if ' ' in arg:
            arg = '"%s"' % arg
        return urllib.parse.quote_plus(arg)

    qstring = '+'.join(quote(arg) for arg in args)
    url = urllib.parse.urljoin('https://app.powerbi.com/groups/me/apps/6af91ff5-12ea-4ba4-b2b0-dfe41aae1c96/reports/a3ba7eae-686d-44d9-b8fc-6af4c08f155e/ReportSection5eefa1f85d190b456776', '?q=' + qstring)
    webbrowser.open(url)

if __name__ == '__main__':
   main(sys.argv[1:])

time.sleep(8)
pyg.click(x=818, y=246, button='left', clicks=1, interval=0.50) # Origem: Tracking
time.sleep(5)

# Seleção campo data inicio
pyg.click(x=936, y=210, button='left', clicks=1, interval=2)
pyg.click(x=1036, y=208, button='left', clicks=1, interval=2)
pyg.hotkey('Ctrl','a')

# Preenche o campo data D-1 (data inicio)
hoje = datetime.now()
yday = hoje - timedelta(1)
ontem = (yday.strftime('%d/%m/%Y'))
pc.copy(ontem)
pyg.hotkey('Ctrl','v')
time.sleep(5)

# Seleção campo data fim
pyg.click(x=989, y=212, button='left', clicks=1, interval=2)
pyg.click(x=1036, y=208, button='left', clicks=1, interval=2)
pyg.hotkey('Ctrl','a')
time.sleep(2)
pyg.hotkey('Ctrl','v')
time.sleep(2)

# Exportando gráfico
pyg.moveTo(1136,295)
pyg.click(x=1146, y=264, button='left', clicks=1, interval=2)
pyg.click(x=975, y=338, button='left', clicks=1, interval=2)
pyg.click(x=827, y=614, button='left', clicks=1, interval=2)
time.sleep(5)

# Acessa ao site do App Power BI
# (Novo) Usuários Únicos por Segmento / Usuários Únicos e Iterações / Usuários Únicos
def main(args):
    def quote(arg):
        if ' ' in arg:
            arg = '"%s"' % arg
        return urllib.parse.quote_plus(arg)

    qstring = '+'.join(quote(arg) for arg in args)
    url = urllib.parse.urljoin('https://app.powerbi.com/groups/me/apps/6af91ff5-12ea-4ba4-b2b0-dfe41aae1c96/reports/a3ba7eae-686d-44d9-b8fc-6af4c08f155e/ReportSection', '?q=' + qstring)
    webbrowser.open(url)

if __name__ == '__main__':
   main(sys.argv[1:])


# Seleção campo data inicio
pyg.click(x=905, y=209, button='left', clicks=1, interval=2)
pyg.click(x=996, y=205, button='left', clicks=1, interval=2)
pyg.hotkey('Ctrl','a')

# Preenche o campo data D-1 (data inicio)
hoje = datetime.now()
yday = hoje - timedelta(1)
ontem = (yday.strftime('%d/%m/%Y'))
pc.copy(ontem)
pyg.hotkey('Ctrl','v')
time.sleep(5)

# Seleção campo data fim
pyg.click(x=955, y=206, button='left', clicks=1, interval=2)
pyg.click(x=996, y=205, button='left', clicks=1, interval=2)
pyg.hotkey('Ctrl','a')
time.sleep(2)
pyg.hotkey('Ctrl','v')
time.sleep(2)

# Exportando gráfico
pyg.moveTo(656,277)
pyg.click(x=659, y=254, button='left', clicks=1, interval=2)
pyg.click(x=662, y=324, button='left', clicks=1, interval=2)
pyg.click(x=825, y=582, button='left', clicks=1, interval=2)

time.sleep(10)

# (Novo) Usuários Únicos por Segmento / Usuários Únicos e Iterações / Origem Notificação
pyg.click(x=804, y=226, button='left', clicks=1, interval=2)
time.sleep(5)
pyg.moveTo(439,210)
time.sleep(5)
pyg.click(x=440, y=235, button='left', clicks=1, interval=2)
time.sleep(5)

# Exportar dados
pyg.click(x=521, y=308, button='left', clicks=1, interval=2)
time.sleep(5)
pyg.click(x=837, y=569, button='left', clicks=1, interval=2)

time.sleep(2)
# Fechar chrome
time.sleep(3)
pyg.click(x=1338, y=11, button='left', clicks=1, interval=0.50) # Aplica

pyg.click(x=120, y=470, button='left', clicks=2, interval=0.50)
time.sleep(8)
