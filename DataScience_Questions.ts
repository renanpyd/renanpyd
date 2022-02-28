Algumas dicas, sacadas, perguntas e respostas para ser sair bem em uma entrevista para Cientista de Dados.


I.		O que significa “ingênuo” em Naive Bayes? 
S:		O Algoritmo Naive Bayes é baseado no Teorema de Bayes. O teorema de Bayes descreve a probabilidade de um evento, 
	com base no conhecimento prévio das condições que podem estar relacionadas ao evento. 
	É chamado de ingênuo porque pressupõe independência entre os preditores.

II.		Quais são as diferenças entre overfitting e underfitting? 
S:		Em estatística e aprendizado de máquina, uma das tarefas mais comuns é ajustar um modelo a um conjunto de dados de treinamento, 
	para poder fazer previsões confiáveis ​​sobre dados gerais não treinados. 
	No overfitting, um modelo estatístico descreve erro aleatório ou ruído em vez da relação subjacente. 
	O sobreajuste ocorre quando um modelo é excessivamente complexo, como ter muitos parâmetros relativos ao número de observações. 
	Um modelo com overfitting tem desempenho preditivo pobre, pois reage exageradamente a pequenas flutuações nos dados de treinamento

III.	Python ou R para análise de texto? 
S:		Iremos preferir o Python pelos seguintes motivos: Python seria a melhor opção porque tem uma biblioteca Pandas que fornece estruturas de dados fáceis de usar 
	e ferramentas de análise de dados de alto desempenho. R é mais adequado para aprendizado de máquina do que apenas análise de texto. 
	Python tem desempenho mais rápido para todos os tipos de análise de texto.

IV.		O que é Amostragem de Cluster? 
S:		A amostragem por conglomerados é uma técnica usada quando se torna difícil estudar a população-alvo espalhada por uma área ampla 
	e a amostragem aleatória simples não pode ser aplicada. 
	Uma amostra de cluster é uma amostra de probabilidade em que cada unidade de amostragem é uma coleção ou cluster de elementos.

V.		O que são vetores próprios e valores próprios? 
S:		Autovetores são usados ​​para entender as transformações lineares. Na análise de dados, geralmente calculamos os vetores próprios para uma matriz de correlação ou covariância. 
	Os vetores próprios são as direções ao longo das quais uma transformação linear específica atua girando, comprimindo ou esticando.

VI.		Você pode explicar a diferença entre um conjunto de validação e um conjunto de teste? 
S:		Um conjunto de validação pode ser considerado como parte do conjunto de treinamento, pois é usado para seleção de parâmetro e para evitar sobreajuste do modelo
	que está sendo construído. Por outro lado, um conjunto de testes é usado para testar ou avaliar o desempenho de um modelo de aprendizado de máquina treinado. 
	Em termos simples, as diferenças podem ser resumidas como: O conjunto de treinamento é para ajustar os parâmetros, ou seja, pesos, 
	e o conjunto de testes é para avaliar o desempenho do modelo, ou seja, avaliar o poder preditivo e generalização.

VII.	Você pode explicar a validação cruzada? 
S:		A validação cruzada é uma técnica de validação de modelo para avaliar como os resultados da análise estatística serão generalizados para um conjunto de dados independente. 
	Usado principalmente em planos de fundo onde o objetivo é previsto e se deseja estimar com que precisão um modelo realizará na prática. 
	O objetivo da validação cruzada é definir um conjunto de dados para testar o modelo na fase de treinamento (ou seja, conjunto de dados de validação), 
	a fim de limitar problemas como overfitting e obter uma visão de como o modelo irá generalizar para um conjunto de dados independente.

VIII.	O que é vetorização TF/IDF?
S:		TF-IDF significa frequência de documentos inversa de frequência. É uma estatística numérica que é usada para 
	determinar a importância de uma palavra em um documento em uma coleção ou corpus.

IX.		O que é aprendizagem supervisionada? 
S:		O aprendizado supervisionado é a tarefa de aprendizado de máquina de inferir uma função a partir de dados de treinamento rotulados. 
	Os dados de treinamento consistem em um conjunto de exemplos de treinamento. 
	Algoritmos: Máquinas de Vetores de Suporte, Regressão, Naive Bayes, Árvores de Decisão, Algoritmo K-vizinho mais próximo e Redes Neurais.

X.		Como você vai definir o número de clusters em um algoritmo de clustering?
S:		O objetivo principal do agrupamento é agrupar identidades semelhantes de forma que as entidades dentro do grupo permaneçam as mesmas, 
	mas os grupos permaneçam diferentes uns dos outros.

XI.		O que é aprendizagem não supervisionada? 
S:		Aprendizagem não supervisionada é um tipo de algoritmo de aprendizagem de máquina usado para fazer inferências de conjuntos de dados que consistem 
	em dados de entrada sem respostas rotuladas. Algoritmos: Clustering, detecção de anomalias, redes neurais e modelos de variáveis ​​latentes.
 
XII.	Em qualquer intervalo de 15 minutos, há 20% de probabilidade de que você veja pelo menos uma estrela cadente. 
		Qual é a probabilidade de você ver pelo menos uma estrela cadente no período de uma hora? 
S:	A probabilidade de não ver nenhuma estrela cadente em 15 minutos é = 1 - P (ver uma estrela cadente) = 1–0,2 = 0,8.
	Probabilidade de não ver nenhuma estrela cadente no período de uma hora = (0,8) ^ 4 = 0,4096. 
	Probabilidade de ver pelo menos uma estrela cadente em uma hora = 1 - P (não ver nenhuma estrela) = 1–0,4096 = 0,5904

XIII.	O que são redes neurais artificiais? 
S:		As redes neurais artificiais são um conjunto específico de algoritmos que revolucionaram o aprendizado de máquina. 
	Eles são inspirados por redes neurais biológicas. As redes neurais podem se adaptar às mudanças de entrada para que a rede gere 
	o melhor resultado possível sem a necessidade de reprojetar os critérios de saída.

XIV.	Você pode descrever a estrutura das redes neurais artificiais? 
S:		Redes Neurais Artificiais (RNA) são sistemas computacionais projetados para simular o cérebro humano. 
	Consiste em entradas que são processadas com somas ponderadas e Bias, com a ajuda das Funções de Ativação.

XV.		O que é a função de ativação? 
S:		Em redes neurais artificiais, a função de ativação de um nó define a saída desse nó dada uma entrada ou conjunto de entradas. 
	Um circuito integrado padrão pode ser visto como uma rede digital de funções de ativação que pode ser “ON” (1) ou “OFF” (0), dependendo da entrada. 
	Isso é semelhante ao comportamento do perceptron linear em redes neurais . No entanto, apenas funções de ativação não lineares permitem que 
	tais redes computem problemas não triviais usando apenas um pequeno número de nós, e tais funções de ativação são chamadas de não linearidades.

XVI.	O que é um Perceptron? 
S:		O perceptron é um algoritmo para aprendizagem supervisionada de classificadores binários . 
	Um classificador binário é uma função que pode decidir se uma entrada, representada por um vetor de números, 
	pertence ou não a alguma classe específica. É um tipo de classificador linear , ou seja, um algoritmo de classificação que 
	faz suas previsões com base em uma função preditora linear combinando um conjunto de pesos com o vetor de características .

XVII.	Quais funções de ativação você conhece? 
S:		Função sigmóide, função tangente hiperbólica (Tanh), função Softmax, função Softsign, unidade linear retificada (ReLU), função de unidades lineares exponenciais (ELUs).

XVIII.	Qual é a diferença entre as funções Sigmóide e Tanh? 
S:		A função tanh é muito semelhante à função sigmóide. A única diferença é que é simétrico em torno da origem. 
	A faixa de valores neste caso é de -1 a 1. Portanto, as entradas para as próximas camadas nem sempre terão o mesmo sinal. 
	A função Tanh é definida como: “tanh (x) = 2sigmóide (2x) -1”.

XIX.	Por que ReLU é a função de ativação mais popular? 
S:		A função ReLU é outra função de ativação não linear que ganhou popularidade no domínio do aprendizado profundo. 
	ReLU significa Unidade Linear Retificada. A principal vantagem de usar a função ReLU sobre outras funções de ativação é que ela não ativa 
	todos os neurônios ao mesmo tempo. Isso significa que os neurônios só serão desativados se a saída da transformação linear for menor que 0.

XX.		Qual é a função de propagação em Redes Neurais? 
S:		É uma função que calcula a entrada para um neurônio a partir das saídas de seus neurônios predecessores e suas conexões como uma soma ponderada.
	Um termo de polarização pode ser adicionado ao resultado da propagação.

XXI.	O que são hiperparâmetros no Deep Learning? 
S:		Um hiperparâmetro é um parâmetro constante cujo valor é definido antes do início do processo de aprendizagem. 
	Os valores dos parâmetros são derivados por meio do aprendizado. Exemplos de hiperparâmetros incluem taxa de aprendizado , 
	o número de camadas ocultas e tamanho do lote. Os valores de alguns hiperparâmetros podem ser dependentes daqueles de outros hiperparâmetros. 
	Por exemplo, o tamanho de algumas camadas pode depender do número total de camadas.
		
XXII.	Qual é a taxa de aprendizado? 
S:		A taxa de aprendizado é um parâmetro de ajuste em um algoritmo de otimização que determina o tamanho do passo 
	em cada iteração enquanto se move em direção a um mínimo de uma função de perda.
		
XXIII.	Qual é a importância do tamanho do lote? 
S:		O tamanho do lote é um hiperparâmetro que define o número de amostras a serem trabalhadas 
	antes de atualizar os parâmetros do modelo interno. Quando o tamanho do lote é mais de uma amostra e menor que 
	o tamanho do conjunto de dados de treinamento, o algoritmo de aprendizado é chamado de descida gradiente de minilote.
		
XXIV.	O que significa o número de épocas? 
S:		O número de épocas é o número de passagens completas pelo conjunto de dados de treinamento. 
	O tamanho de um lote deve ser maior ou igual a um e menor ou igual ao número de amostras no conjunto de dados de treinamento. 
	O número de épocas pode ser definido como um valor inteiro entre um e infinito.
		
XXV.	O que é gradiente descendente? 
S:		A descida gradiente é um algoritmo de otimização usado para minimizar algumas funções movendo-se iterativamente na direção da descida mais íngreme, 
	conforme definido pelo negativo do gradiente. No aprendizado de máquina, usamos gradiente descendente para atualizar os parâmetros do nosso modelo.
		
XXVI.	O que é o Grid - pesquisando? 
S:		É o processo de verificação dos dados para configurar os parâmetros ideais para um determinado modelo. 
	Dependendo do tipo de modelo utilizado, alguns parâmetros são necessários. A pesquisa em grade pode ser aplicada 
	ao aprendizado de máquina para calcular os melhores parâmetros a serem usados ​​para qualquer modelo.
		
XXVII.	Qual é a importância da Função de Perda? 
S:		Em otimização matemática e teoria da decisão, uma função de perda ou custo função é uma função que mapeia um evento ou valores de uma ou mais variáveis 
	em um número real intuitivamente que representa cerca de “custo” associado ao evento. No controle ideal, a perda é a penalidade por não conseguir atingir o valor desejado.
		
XXVIII.	Como os neurônios são organizados em redes neurais? 
S:		Os neurônios são normalmente organizados em várias camadas, especialmente no aprendizado profundo. 
	Os neurônios de uma camada se conectam apenas aos neurônios das camadas imediatamente anteriores e posteriores. 
	A camada que recebe dados externos é a camada de entrada . A camada que produz o resultado final é a camada de saída. 
	No meio, eles são zero ou mais camadas ocultas. Redes de camada única e sem camada também são usadas. Entre duas camadas, vários padrões de conexão são possíveis. 
	Eles podem ser totalmente conectados , com cada neurônio em uma camada conectando-se a todos os neurônios na próxima camada. 
	Eles podem ser agrupamentos, onde um grupo de neurônios em uma camada se conecta a um único neurônio na próxima camada, reduzindo assim o número de neurônios nessa camada.
		
XXIX.	O que são redes Feedforward? 
S:		Os neurônios com apenas conexões de pooling formam um gráfico acíclico direcionado e são conhecidos como redes feedforward. 
	Alternativamente, as redes que permitem conexões entre neurônios na mesma camada ou em camadas anteriores são conhecidas como redes recorrentes.
		
XXX.	Quais são os principais tipos de redes neurais? 
S:		Podemos classificá-los como Redes Neurais Artificiais simples (RNA), Redes Neurais Convolucionais (CNN), Redes Neurais Recorrentes (RNN).
		
XXXI.	O que são redes neurais convolucionais? 
S:		No aprendizado profundo, uma rede neural convolucional é uma classe de redes neurais profundas, mais comumente aplicada à análise de imagens visuais. 
	Eles também são conhecidos como redes neurais artificiais invariantes de deslocamento ou invariantes de espaço, 
	com base em sua arquitetura de pesos compartilhados e características de invariância de tradução.
		
XXXII.	O que são redes adversárias geradoras? 
S:		Eles são uma classe de frameworks de aprendizado de máquina desenvolvidos por Ian Goodfellow e seus colegas em 2014. 
	Duas redes neurais competindo entre si em um jogo. Dado um conjunto de treinamento, essa técnica aprende a gerar novos dados 
	com as mesmas estatísticas do conjunto de treinamento. Portanto, eles são usados ​​para gerar dados sintéticos.
		
XXXIII.	O que mede a função de verossimilhança? 
S:		Em estatística, a função de verossimilhança mede a qualidade do ajuste de um modelo estatístico 
	a uma amostra de dados para determinados valores dos parâmetros desconhecidos.
		
XXXIV.	O que é uma distribuição conjunta? 
S:		Uma distribuição conjunta é uma distribuição de probabilidade com duas ou mais variáveis ​​aleatórias independentes. 
	Em uma distribuição conjunta, cada variável aleatória ainda terá sua própria distribuição de probabilidade, valor esperado, variância e desvio padrão.
		
XXXV.	O que é uma função de densidade? 
S:		Na teoria da probabilidade, uma função de densidade de probabilidade, ou densidade de uma variável aleatória contínua, 
	é uma função cujo valor em qualquer amostra dada no espaço amostral pode ser interpretado como fornecendo 
	uma probabilidade relativa de que o valor da variável aleatória seria igual àquela amostra.
		
XXXVI.	O que é uma função de massa? 
S:		Em probabilidade e estatística, uma função de massa de probabilidade é uma função que fornece a probabilidade de que 
	uma variável aleatória discreta seja exatamente igual a algum valor. Às vezes, também é conhecida como função de densidade discreta.
		
XXXVII.	O que é vetorização no aprendizado de máquina? 
S:		Vetorização é o processo de conversão de um algoritmo de operar em elementos individuais da matriz, um de cada vez, para operar em um lote de valores em uma única operação.
	
XXXVIII.	O que é computação paralela? 
S:			A computação paralela é um tipo de computação onde muitos cálculos ou a execução de processos são realizados simultaneamente. 
		Muitas vezes, problemas grandes podem ser divididos em problemas menores, que podem ser resolvidos ao mesmo tempo.
	
XXXIX.	Que critérios você usaria para descrever Big Data? 
S:		Volume, velocidade, variedade e veracidade são as quatro chaves para definir dados como big data.
		
XL.		O que é Hadoop? 
S:		Apache Hadoop é uma coleção de utilitários de software de código aberto que facilita o uso de uma rede de muitos computadores 
	para resolver problemas que envolvem grandes quantidades de dados e computação. Ele fornece uma estrutura de software 
	para armazenamento distribuído e processamento de big data usando o modelo de programação MapReduce.
		
XLI.	O que é Spark? 
S:		Apache Spark é um mecanismo analítico unificado de código aberto para processamento de dados em grande escala. 
	O Spark fornece uma interface para programar clusters inteiros com paralelismo de dados implícito e tolerância a falhas.
		
XLII.	O que é um cluster na computação distribuída? 
S:		Um cluster de sistemas distribuídos é um grupo de máquinas que estão virtualmente ou geograficamente separadas 
	e que trabalham juntas para fornecer o mesmo serviço ou aplicativo aos clientes. 
	Ele é definido como um cluster porque os servidores são tolerantes a falhas e fornecem acesso contínuo a um serviço.
		
XLIII.	O que são bancos de dados não relacionais? 
S:		Um banco de dados NoSQL fornece um mecanismo para armazenamento e recuperação de dados que são modelados em outros meios 
	além das relações tabulares usadas em bancos de dados relacionais.
		
XLIV.	O que significa ACID em sistemas de gerenciamento de banco de dados? 
S:		Uma transação em um sistema de banco de dados deve manter a atomicidade, consistência, isolamento e durabilidade - 
	comumente conhecidas como propriedades ACID - a fim de garantir precisão, integridade e integridade dos dados.
		
XLV.	Quais são as principais características da linguagem Python? 
S:		É interpretado, de alto nível, digitado dinamicamente e oferece suporte a vários paradigmas de programação, como programação orientada a objetos e funcional.
		
XLVI.	O que significa digitado dinamicamente na programação? 
S:		Uma linguagem é digitada dinamicamente se o tipo de uma variável é verificado durante o tempo de execução. 
	Exemplos comuns de linguagens tipadas dinamicamente incluem JavaScript, Objective-C, PHP, Python, Ruby, Lisp e Tcl. 
	A verificação de tipo dinâmico normalmente resulta em código menos otimizado do que a verificação de tipo estático.
			
XLVII.	O que são linguagens interpretadas? 
S:		Uma linguagem interpretada é um tipo de linguagem de programação para a qual existe um interpretador que é executado em uma máquina virtual. 
	O interpretador executa o código linha por linha e o converte em linguagem de máquina de baixo nível . 
	Java e C # são compilados em bytecode, a linguagem interpretada amigável à máquina virtual .
		
XLVIII.	O que é programação orientada a objetos? 
S:		A programação orientada a objetos é um paradigma de programação baseado no conceito de “objetos”, que podem conter dados e código: 
	dados na forma de campos e código, na forma de procedimentos. Uma característica dos objetos é que os próprios 
	procedimentos de um objeto podem acessar e frequentemente modificar os próprios campos de dados.
		
XLIX.	O que é programação funcional? 
S:		Em ciência da computação, a programação funcional é um paradigma de programação onde os programas são construídos aplicando e compondo funções.
		
L.		Como você pode acelerar seu código Python? 
S:		Você deve escrever código otimizado evitando loops for e usando compreensão de lista. Você deve usar bibliotecas como Numpy para 
	cálculos numéricos e também pode compilar código Python para código de bytes que roda muito mais rápido, usando bibliotecas como CPython ou Numba.
		
LI.		O que é probabilidade condicional? 
S:		Na teoria da probabilidade, a probabilidade condicional é uma medida da probabilidade de um evento ocorrer, dado que outro evento já ocorreu.
		
LII.	Qual é a utilidade da inferência em estatísticas? 
S:		Inferência estatística é o processo de usar análise de dados para inferir propriedades de uma distribuição de probabilidade subjacente. 
	A análise estatística inferencial infere propriedades de uma população, por exemplo, testando hipóteses e derivando estimativas.
		
LIII.	Quais são os tipos de enviesamentos que podem ocorrer durante a amostragem?
S:		Viés de seleção , Subjacente à cobertura , Viés de Sobrevivência

LIV.	Como você pode eliminar linhas duplicadas de um resultado de consulta?
S:		Uma maneira de eliminar linhas duplicadas de um resultado de uma consulta é com a cláusula DISTINCT.

LV.		Qual é a diferença entre SQL e MySQL ou SQL Server?
S:		SQL significa Structured Query Language (Linguagem de Consulta Estruturada). É uma linguagem padrão empregada para avaliar e manipular bancos de dados. 
	MySQL é um sistema de gerenciamento de banco de dados, como o SQL Server, Oracle, etc.

LVI.	O que é a amostragem?
S:		Amostragem de dados é uma técnica de análise estatística usada para selecionar e analisar um subconjunto representativo de dados para determinar padrões em um conjunto maior.

LVII.	O que é a Lei dos Grandes Números?
S:		É um teorema que lida com os resultados produzidos quando a mesma experiência é realizada várias vezes.

LVIII.	O que o teste A/b pretende alcançar?
S:		É um teste estatístico de hipóteses usado para detectar quaisquer alterações na página web para que se possam tomar medidas para maximizar a possibilidade do resultado desejado.

LIX.	O que são vetores de característica (Feature Vectors)?
S:		Os Vetores de Característica são vetores n-dimensionais de características numéricas que representam algum objeto.

LX.		O que é uma Regressão Linear?
S:		A Regressão Linear é uma ferramenta estatística empregada para uma rápida análise preditiva. Na regressão linear, a pontuação de uma variável (digamos A) 
	é prevista a partir do que é a pontuação de outra variável (digamos B). Por exemplo, o preço de uma casa que depende de factores como o seu tamanho ou localização.

LXI.	Por que a Limpeza de Dados é de importância crítica na Análise de Dados?
S:		Os dados são acumulados a partir de uma variedade de fontes. É importante garantir que os dados coletados sejam suficientemente bons para análise. 
	A limpeza de dados garante que os dados sejam completos e precisos e desprovidos de componentes redundantes ou irrelevantes.
	
LXII.	O que é Regressão Logística?
S:		É uma técnica estatística usada para prever um resultado binário que é zero ou um, ou um sim ou um não.
	
LXIII.	Qual é a diferença entre ML Supervisionado e não Supervisionado?
S:		O ML supervisionado utiliza conjunto de dados de treinamento, e os dados de entrada são etiquetados. O ML não supervisionado usa o conjunto de dados de entrada 
	e os dados de entrada permanecem sem rotulagem. Além disso, o ML supervisionado é usado para previsão, e o ML não supervisionado é usado para análise.
	
LXIV.	Qual é a diferença entre dados estruturados e não estruturados?
S:		Dados estruturados, como o nome sugere, são dados que são altamente organizados e bem formatados para que sejam facilmente 
	pesquisáveis em bancos de dados relacionais. Os dados não estruturados, por outro lado, são dados que não estão organizados ou formatados.
	
LXV.	Que conhecimento você precisa ter para extrair as informações pretendidas dos dados brutos?
S:		Os cientistas e analistas de dados precisam ter bons conhecimentos de matemática, estatística, informática, 
	aprendizagem de máquinas, visualização de dados, análise de clusters e modelagem de dados.
	
LXVI.	O que é Data Science?
S:		Data Science, para colocá-lo na forma mais simples, é o estudo de dados que são coletados de diferentes fontes e depois armazenados, 
	organizados e analisados para obter informações significativas a partir deles.
	
LXVII.	Três amigos em Salvador disseram que está chovendo. Cada um mente com probabilidade 1/3. Qual a probabilidade de estar chovendo em Salvador?
S:		Aqui novamente a solução sai fácil pelo complementar do que se pede. Chove em Salvador se pelo menos um dos amigos falar a verdade.
	Então, só não está chovendo em Salvador se os três amigos estiverem mentindo. Supondo que cada amigo passa a informação de forma independente, 
	a probabilidade dos três estarem mentindo simultaneamente é de (1/3)^3.
	Logo, a probabilidade de pelo menos um deles estar falando a verdade sobre a chuva em Salvador é 1 – (1/3)^3 = 0,9629 = 96,29%.
	
LXVIII.	O que é o poder de um teste? Como explicar para esse conceito para um leigo? O que são os falsos positivos e falsos negativos?
S:		Em geral, um teste de hípoteses é formado pela hipótese nula (H_0H0) e a hipótese alternativa (H_1H1). 
	No teste, o objetivo é tomar a decisão de rejeitar ou não H_0H0. O poder do teste é a probabilidade de se rejeitar a hipótese nula quando a mesma não é verdadeira.
	Em testes de hipóteses, temos o erro tipo 1 e o erro tipo 2. O erro tipo 1, também chamado nesse contexto de falso positivo,  
	é quando rejeitamos a hipótese nula mas ela é verdadeira. O erro tipo 2, também chamado de falso negativo, é quando não rejeitamos a hipótese nula mas ela é falsa.
	O objetivo em se calcular o poder do teste é avaliar o quanto um teste de hipóteses.
	O poder do teste tem como objetivo conhecer o quanto o teste de hipóteses controla um erro do tipo II (probabilidade de aceitar a hipótese nula 
	dado que a hipótese alternativa é verdadeira, chamado também de falso negativo, nesse contexto), ou seja, qual a probabilidade de rejeitar a hipótese nula 
	quando realmente ela é falsa. Logo, o poder de um teste é a probabilidade de tomar a decisão correta, rejeitando uma hipótese (nula) quando realmente ela é falsa.
	Em termos para um leigo: considere novamente o exemplo da questão #3. O poder do teste seria a probabilidade do teste 
	indicar que o amigo pescou sim uma tilápia de 8kg, sendo que a história é de fato verdadeira.
	
LXIX.	Você tem um saco com 6 bolas. Uma das bolas é branca. Você retira, com reposição, 100 bolas. Qual a probabilidade de retirar uma bola branca pelo menos uma vez?
S:		Esse problema é simples quando calculado através do complementar do que se pede. A probabilidade de se retirar uma bola branca 
	pelo menos uma vez é equivalente a 1 menos a probabilidade de não se retirar a bola branca nenhuma vez, nas 100 tentativas.
	A probabilidade de não retirar uma bola branca é de 5/6. Como as retiradas são independentes, 
	a probabilidade de não se retirar nenhuma bola branca em 100 tentativas é de (5/6)^100.
	Logo, a probabilidade desejada é de 1 – (5/6)^100 = 0,999999987925327. Praticamente 1.
	Em geral, problemas de probabilidade como esse são resolvidos através da distribuição binomial.
	
LXX.	Como você faz para identificar se uma nova observação é um outlier?
S:		Um outlier é um ponto fora da curva, um valor atípico, um valor aberrante em relação aos demais dados de uma amostra. 
	Eles podem acontecer por algum erro de digitação, por exemplo, ao digitar a altura de uma pessoa, alguém poderia colocar a vírgula no lugar errado 
	e trocar 1,77m por 17,7m. Ou também pode ser apenas a representação de uma observação incomum, como um aluno mais velho numa turma de jovens.
	Os outliers podem facilmente alterar bruscamente medidas como a média (uma das razões pra sempre dar uma conferida na mediana de uma amostra, 
	que é uma medida pouco influenciada por outliers). Muitas vezes, atrapalham na construção de alguns modelos também.
	Podem ser detectados de muitas maneiras, as mais comuns são via:
		•	boxplot – quando a observação se encontra fora do intervalo definido pelos limites inferiores e superiores;
		•	z-score – quando a observação se encontra fora do intervalo definido por algum múltiplo do desvio padrão predeterminado. 
			Aqui, supõe-se que a distribuição dos dados em questão seja normal.
	
LXXI.	Qual a definição de p-valor? Como explicar o p-valor para clientes?
S:		O p-valor é a probabilidade que representa o quão improvável uma observação é em relação a uma hipótese previamente atribuída.
	É utilizada no contexto de testes de hipóteses. Em termos mais rigorosos, o p-valor é a probabilidade de uma estatística ser igual ou 
	mais extrema que aquela observada em uma amostra, quando a hipótese nula é verdadeira. Ou seja, é a probabilidade de rejeitar a hipótese nula. 
	Em geral, em testes de hipóteses, rejeita-se a hipótese nula caso o p-valor seja menor que 5%.
	Explicando para um leigo: suponha que um amigo seu disse que foi pescar e fisgou uma tilápia de 8kg. 
	Sabendo que tilápias pesam em média 1,5kg, com uma variação comum indo até uns 3kg. O p-valor é a probabilidade de que uma seu amigo de fato 
	tenha pescado uma tilápia de peso igual ou superior a 8kg. É a probabilidade desse conto todo ser apenas uma história de pescador.
	
LXXII.	Como você geraria 7 inteiros com igual probabilidade a partir de uma função que retorna 0 ou 1, com probabilidade (1-p) e p, respectivamente?
S:		Suponha que queremos gerar os números inteiros 0, 1, 2, 3, 4, 5, 6, com igual probabilidade. (7 inteiros). Temos que trabalhar com ensaios de Bernoulli de probabilidade p.
	Vamos apresentar uma maneira, bem direta e pouco eficiente, de conseguir o que se pede. Primeiro, associe a sequência de 7 ensaios com resultados da seguinte maneira:
		•	(1, 0, 0, 0, 0, 0, 0) = 0
		•	(0, 1, 0, 0, 0, 0, 0) = 1
		•	(0, 0, 1, 0, 0, 0, 0) = 2
		•	(0, 0, 0, 1, 0, 0, 0) = 3
		•	(0, 0, 0, 0, 1, 0, 0) = 4
		•	(0, 0, 0, 0, 0, 1, 0) = 5
		•	(0, 0, 0, 0, 0, 0, 1) = 6
	Veja que todos essas sequências tem mesma probabilidade de ocorrer, p(1-p)^6.
	Agora, basta realizar a coleção de 7 ensaios, até acontecer 7 sequências dessas. Os números gerados são aqueles obtidas pelas sequências geradas.
	Como você deve ter imaginado, é um método pouco eficiente, pois todas as vezes que sair uma sequencia diferente dessas listadas, 
	o experimento deve ser repetido. A eficiência ainda pode diminuir bastante se p for um valor muito alto.
	Uma maneira de diminuir o esforço computacional é pensando em um ensaio binomial menor, mas que contenha pelo menos 7 eventos diferentes com mesma probabilidade.
	Toda a ideia desse problema é gerar situações em que se há a mesma probabilidade de ocorrer, e então associar aos inteiros que se deseja gerar.
	Deixamos como desafio ao leitor.
	
LXXIII.	Qual a diferença entre regressão Lasso e Ridge?
S:		LASSO e Ridge são técnicas de regularização de modelos. A regularização é utilizada para limitar os efeitos das covariáveis através de penalizações, 
	de forma a evitar sobreajustes e, em muitos casos, ajudar a melhorar a interpretação dos modelos. São também conhecidas como penalizações L1 e L2, respectivamente. 
	Essas penalizações são equivalentes a uma inserção de viés no modelo (veja logo a abaixo a questão sobre o dilema viés-variância).
	A regressão LASSO é um acrônimo para Least Absolute Shrinkage and Selection Operator, e como próprio nome diz, 
	a técnica trabalha com um “encolhimento” utilizando o valor absoluto dos parâmetros.
	Já na regressão Ridge o que acontece é muito similar ao LASSO, mas ao invés de utilizar a valor absoluto dos coeficientes, são utilizados seus termos quadráticos.
	Uma diferença importante entre as duas é que no LASSO, quando há variáveis altamente correlacionadas, o método vai deixar uma e diminuir o coeficiente da outra para zero. 
	Já na regressão Ridge, os coeficientes dessas mesmas variáveis ficariam similares. Além disso, a penalização L1 não é diferenciável, 
	ao contrário da penalização L2, o que matematicamente é um inconveniente.
	Outro método de regularização popular é a conhecida como Elastic Net, que é a combinação entre o LASSO e o Ridge.
