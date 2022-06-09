import pandas as pd
from datetime import datetime, timedelta
import os


class ETLblip:
    def __init__(self) -> None:
        hora = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        arquivo = open(r'C:\log\log.txt', 'a')
        arquivo.write(f'\n\n ---------- {hora} ---------- \n\n')
        arquivo.close()

    def carregasheet (self):    
        csv = pd.read_excel('C:\\input\\Usuários Únicos.xlsx')
        self.df = pd.DataFrame(csv)
        self.df = self.df.drop([0,1])
        self.log('Arquivo carregado no dataframe!')
    
    def filtrocoluna (self,col):
        filtro = self.df['Unnamed: 2'] == col
        self.df = self.df[filtro]
        self.df['DT'] = datetime.today() - timedelta(days = 1 )
        self.df['DT_SAFRA'] = self.df['DT'].dt.strftime('%d/%m/%Y')
        self.df['ANOMES'] = self.df['DT'].dt.strftime('%Y%m')
        self.df = self.df.rename(columns={'Unnamed: 1':'VOL_KPI'})
        self.df = self.df[['DT_SAFRA','ANOMES','VOL_KPI']]
        self.log('Filtro aplicado com o valor: '+col)       

    def log(self,te):
        arquivo = open(r'C:\log\log.txt', 'a')
        arquivo.write(str(te))
        arquivo.write('\n')
        arquivo.close()

    def addcolunas(self,df,seg,tec,subcanal):
        df['DT_ATUALIZACAO'] = datetime.now().strftime('%d/%m/%Y')
        df['NM_RELATORIO'] = 'Acessos e Usuários Únicos Diario'
        df['NM_RESP_RELATORIO'] = 'Leandro Lima'
        df['NM_ORIGEM'] = 'Blip'
        df['NM_KPI'] = 'Usuários Únicos'
        df['VOL_KPI_DIV'] = 0
        df['PER_KPI'] = 0
        df['NM_SEGMENTO'] = seg
        df['NM_TECNOLOGIA'] = tec
        df['NM_CANAL'] = 'Assistente Virtual'
        df['NM_SUBCANAL'] = subcanal
        df['NM_TRIBO'] = 'Assistente Virtual'
        df = df[['DT_ATUALIZACAO',	'NM_RELATORIO',	'NM_RESP_RELATORIO'	,'NM_ORIGEM',	'NM_KPI',	'DT_SAFRA',	'ANOMES',	'VOL_KPI_DIV',	'VOL_KPI',	'PER_KPI',	'NM_SEGMENTO',	'NM_TECNOLOGIA',	'NM_CANAL',	'NM_SUBCANAL'	,'NM_TRIBO']]
        self.log('Estrutura as 15 colunas ')
        return df

    def salvacsv(self,df,nomearq):
        df.to_csv(f'C:\\output\\etlblipuu{nomearq}.csv',index=False)    
        self.log('Arquivo salvo! '+nomearq)

    def deletararq(self):
        file = 'C:\\input\\Usuários Únicos.xlsx'
        os.remove(file)   
        self.log('Arquivo deletado! ')         

    def iniciar(self):
        #--------------- DTH
        self.carregasheet()
        self.filtrocoluna('Claro Tv')
        subcanal = 'WhatsApp - Res. DTH'
        df = self.addcolunas(self.df,'Residencial - DTH','DTH',subcanal)
        self.salvacsv(df,subcanal)

        #--------------- HFC
        self.carregasheet()
        self.filtrocoluna('NET Residencial')
        subcanal = 'WhatsApp - Res. HFC'
        df = self.addcolunas(self.df,'Residencial - HFC','HFC',subcanal)
        self.salvacsv(df,subcanal)

        #--------------- Movel
        self.carregasheet()
        self.filtrocoluna('Móvel')
        subcanal = 'WhatsApp -  Móvel'
        df = self.addcolunas(self.df,'Móvel','CMV',subcanal)
        self.salvacsv(df,subcanal)        

        #--------------- Deleta Arquivo da Pasta Input
        self.deletararq()

start = ETLblip()
start.iniciar()                          