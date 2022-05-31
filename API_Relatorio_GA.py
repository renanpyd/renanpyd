# API de relatórios do Google Analytics

# Este script solicita um relatório da 'API de relatórios do Google Analytics' e retorna a resposta como um dataframe. 
# Ele pode lidar com relatórios dinâmicos, relatórios resumidos sem dinâmica e relatórios simples sem dimensões.

# Para estabelecer credenciais adequadas, você precisa:
#  1.  Criar um projeto na plataforma do Google Cloud
#  2.  Ativar a API de relatórios do Google Analytics para este projeto
#  3.  Criar uma conta de serviço associada ao projeto
#  4.  Gerar chaves de API para a conta de serviço
#  5.  No painel de administração do GA, conceda à sua conta de serviço (parece um endereço de e-mail) acesso de leitura aos dados do GA do seu site.

# Links:

# Criando projetos: https://cloud.google.com/resource-manager/docs/creating-managing-projects 
# Como criar chaves de conta de serviço: https://cloud.google.com/iam/docs/creating-managing-service-account-keys 
# Metricas e dimensões: https://ga-dev-tools.appspot.com/dimensions-metrics-explorer/

# IMPORTANDO BIBLIOTECAS:

import numpy as np
import pandas as pd
from google.oauth2 import service_account
from apiclient.discovery import build

# FUNÇÃO:

def format_summary(response):
    try:
        # criar índice de linha
        try: 
            row_index_names = response['reports'][0]['columnHeader']['dimensions']
            row_index = [ element['dimensions'] for element in response['reports'][0]['data']['rows'] ]
            row_index_named = pd.MultiIndex.from_arrays(np.transpose(np.array(row_index)), 
                                                        names = np.array(row_index_names))
        except:
            row_index_named = None
        
        # extrair nomes de colunas
        summary_column_names = [item['name'] for item in response['reports'][0]
                                ['columnHeader']['metricHeader']['metricHeaderEntries']]
    
        # extrair valores da tabela
        summary_values = [element['metrics'][0]['values'] for element in response['reports'][0]['data']['rows']]
    
        # combinar. Eu usei o tipo 'float', o padrão é objeto, mas todos os valores são numéricos
        df = pd.DataFrame(data = np.array(summary_values), 
                          index = row_index_named, 
                          columns = summary_column_names).astype('float')
    
    except:
        df = pd.DataFrame()
        
    return df

def format_pivot(response):
    try:
        # extrair valores da tabela
        pivot_values = [item['metrics'][0]['pivotValueRegions'][0]['values'] for item in response['reports'][0]
                        ['data']['rows']]
        
        # criar índice de coluna
        top_header = [item['dimensionValues'] for item in response['reports'][0]
                      ['columnHeader']['metricHeader']['pivotHeaders'][0]['pivotHeaderEntries']]
        column_metrics = [item['metric']['name'] for item in response['reports'][0]
                          ['columnHeader']['metricHeader']['pivotHeaders'][0]['pivotHeaderEntries']]
        array = np.concatenate((np.array(top_header),
                                np.array(column_metrics).reshape((len(column_metrics),1))), 
                               axis = 1)
        column_index = pd.MultiIndex.from_arrays(np.transpose(array))
        
        # criar índice de linha
        try:
            row_index_names = response['reports'][0]['columnHeader']['dimensions']
            row_index = [ element['dimensions'] for element in response['reports'][0]['data']['rows'] ]
            row_index_named = pd.MultiIndex.from_arrays(np.transpose(np.array(row_index)), 
                                                        names = np.array(row_index_names))
        except: 
            row_index_named = None
        # combinar em um dataframe
        df = pd.DataFrame(data = np.array(pivot_values), 
                          index = row_index_named, 
                          columns = column_index).astype('float')
    except:
        df = pd.DataFrame()
    return df

def format_report(response):
    summary = format_summary(response)
    pivot = format_pivot(response)
    if pivot.columns.nlevels == 2:
        summary.columns = [['']*len(summary.columns), summary.columns]
    
    return(pd.concat([summary, pivot], axis = 1))

def run_report(body, credentials_file):
    # Criar credenciais de serviço
    # Esta seção mostra como a resposta se parece por dentro e como o código chega aos dados.
    credentials = service_account.Credentials.from_service_account_file(credentials_file, 
                                scopes = ['https://www.googleapis.com/auth/analytics.readonly'])
    # Criar um objeto de serviço
    service = build('analyticsreporting', 'v4', credentials=credentials)
    
    # Obter dados do GA
    response = service.reports().batchGet(body=body).execute()
    
    return(format_report(response))

# A solicitação de relatório está no formato de dicionário/JSON e pode ter uma seção Resumo e Pivot. 
# A solicitação deve ter um intervalo de datas e métricas. ID da vista é o número no GA que identifica seu site e 
# a visualização de dados associada a ele (imediatamente à direita do logotipo do Google Analytics no canto superior direito do GA).

# Credencial é o link para o arquivo JSON, chave da sua conta de serviço.

# Referência: Noções básicas de criação de relatórios: https://developers.google.com/analytics/devguides/reporting/core/v4/basics 
# Dimensões e métricas: https://ga-dev-tools.appspot.com/dimensions-metrics-explorer/

your_view_id = '00000000'
ga_keys = 'api_keys.json'

body = {'reportRequests': [{'viewId': your_view_id, 
                            'dateRanges': [{'startDate': '2021-01-01', 'endDate': '2021-04-30'}],
                            'metrics': [{'expression': 'ga:users'}, 
                                        {"expression": "ga:bounceRate"}],
                            'dimensions': [{'name': 'ga:yearMonth'}],
                            "pivots": [{"dimensions": [{"name": "ga:channelGrouping"}],
                                        "metrics": [{"expression": "ga:users"},
                                                    {"expression": "ga:bounceRate"}]
                                       }]
                          }]}
                          
summary_body = {'reportRequests': [{'viewId': your_view_id, 
                            'dateRanges': [{'startDate': '2021-01-01', 'endDate': '2021-02-28'}],
                            'metrics': [{'expression': 'ga:sessions'}, 
                                        {'expression': 'ga:totalEvents'}, 
                                        {"expression": "ga:avgSessionDuration"}],
                            'dimensions': [{'name': 'ga:country'}],
                          }]}
                          
pivot_body = {'reportRequests': [{'viewId': your_view_id, 
                            'dateRanges': [{'startDate': '2021-01-01', 'endDate': '2021-02-28'}],
                            'dimensions': [{'name':  "ga:channelGrouping"}],
                            "pivots": [{"dimensions": [{"name": 'ga:yearMonth'}],
                                        "metrics": [{"expression": "ga:users"},
                                                    {"expression": "ga:newUsers"},
                                                    {"expression": "ga:timeOnPage"}]
                                       }]
                          }]}
                          
short_body = {  "reportRequests":
  [{
      "viewId": your_view_id,
      "dateRanges": [{"startDate": "7daysAgo", "endDate": "yesterday"}],
      "metrics": [{"expression": "ga:users"}]
    }]}
    
untidy_body = {'reportRequests': [{'viewId': your_view_id, 
                            'dateRanges': [{'startDate': '2021-01-01', 'endDate': '2021-02-28'}],
                            "pivots": [{"dimensions": [{"name": 'ga:yearMonth'}, {"name": "ga:channelGrouping"}],
                                        "metrics": [{"expression": "ga:users"},
                                                    {"expression": "ga:timeOnPage"}]
                                       }]
                          }]}