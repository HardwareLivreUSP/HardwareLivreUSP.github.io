---
layout:     post
type:       projeto
hidden:     true
title:      "Cisternas nas Escolas IoT"
date:       2018-08-11
author:     "Marcelo Schmitt"
author_url: "https://github.com/marceloschmitt1"
img:        "assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/cisterna.jpg"
img_url:    ""

redirect_from:
 - "projetos/cisternas-nas-escolas-iot"
 - "projetos/cisternas-nas-escolas-iot/"
---

Página do projeto no [GitHub](https://github.com/marceloschmitt1/ProjetoCisternasNasEscolasIoT).

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/cisterna.jpg">
    <figcaption>Cisterna instalada na EMEF Olavo Pezzotti</figcaption>
  </figure>
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/dimensoes_cisterna.jpg">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

#### Resumo da semana do dia 13/08

- Tentei modificar o sketch Arduino para enviar o timestamp correto do momento em que é feita cada medição do volume de água (ainda está com problema, devo corrigir na semana do dia 20/08). `[3h10min]`

- Melhorei um pouco a interface do site. Coloquei a contegem correta de cisternas e medições na página principal. Refatorei a página de detalhes da cisterna e incluí um gauge chart nela. `[3h40min]`

- Planejei a utilização do sensor, qual o diâmetro deveria ter o cano que será utilizado em conjunto com o sensor, e comprei algumas das coisas necessárias (presilhas, cano de pvc, cola de pvc). `[3h]`

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/plano.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/cano.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

#### Resumo da semana do dia 20/08

- Corrigi o sketch Arduino para obter timestamp correto. `[3h]`

- Arrumei o label de valor do gauge. Associei as informação da página de listagem de cisternas com os dados reais que estão no BD. O site pode ser visto em [CisternasNasEscolasIoT](http://marcelosc.pythonanywhere.com/). `[1h30min]`

- Detalhei um pouco mais o processo de obtenção do volume de água da cisterna. `[1h]`

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/plano_detalhado.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

- Modelei e imprimi um adapador para manter o cano fixado à ponta da célula de carga e outro adaptador para fixar a célula na parede da cisterna. `[2h]`

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/adaptador_sensor_cano.jpg">
    <figcaption>&nbsp;</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/adaptador_sensor_cano_baixo.jpg">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

- Calibrei a célula de carga para retornar medidas em gramas. `[1h30min]`

#### Resumo da semana do dia 27/08

- Infelizmente ainda não instalei o sistema de medição de volume de água nas cisternas. No dia 24 de agosto eu enviei um e-mail para os meus contatos da ESF São Paulo perguntando sobre um possível dia para ir até a EMEF Olavo Pezzotti mas até o momento não tive resposta.

- Soldei alguns fios para usar junto com a célula de carga. `[1h]`

#### Resumo da semana do dia 03/09

- Melhorei as emendas dos fios com abraçadeiras de nylon, soldei conectores fêmea em uma das pontas de cada fio, e testei tudo de novo com a nova fiação garantindo que tudo estava funcionando. `[3h]`

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/fios_longos.jpg">
    <figcaption>&nbsp;</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/vedacao_cano.jpg">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

#### Resumo da semana do dia 10/09

- Modelei e imprimi um outro fixador para a célula de carga pois 
não havia percebido que o anterior não ficaria bem acoplado com 
o restante do sistema. `[1h10min]`

- Ajustei o sketch arduino para calcular o volume de água 
considerando as medidas reais da cistena da EMEF Olavo Pezzotti. `[1h20min]`

- Montei e testei todo o sistema de medição de volume de água 
no apartamento onde moro e me deparei com alguns problemas:

	- O cano atritava com o adaptador de encaixe da célula
		de carga atrapalhando o início das medições.
	- As presilhas que comprei são mais altas que o diâmetro 
		do cano mas eu tive que fazer uma adaptação para 
		conseguir usa-las porque o cano fica um pouco 
		afastado da parede de fixação (isso acontece 
		por causa do adaptador de encaixe e do fixador 
		da célula de carga.
	- As presilhas (acabei usando apenas uma) são boas
		para evitar que o cano vire na horizontal 
		mas podem acabar absorvendo parte da força 
		que seria medida pela célula de carga e 
		isso pode atrabalhar a estimativa final 
		do volume de água. Ainda não sei como resolver 
		isso. Toda ajuda é bem vinda. =)
	- Algo que não havia pensado é que, devido ao peso do 
		cano, é necessário uma altura mínima de água
		para que o cano flute e faça força contra o 
		sensor. Por causa disso, medidas de volume 
		muito baixas podem ser imprecisas.
	- Sem perceber acabei presumindo que a parede da cisterna 
		é chata / reta. Instalar o aparato de medição 
		pode ser um pouco mais complicado se a superfície 
		da parede da cisterna não for plana.


Seguem algumas fotos e um vídeo que fiz enquanto testava o aparato.


<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/sistema_medicao_frente.jpg">
    <figcaption>Aparato de medição de nível de água (visão frontal)</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/sistema_medicao_lado.jpg">
    <figcaption>Aparato de medição de nível de água (visão lateral)</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/sistema_medicao_sensor.jpg">
    <figcaption>Aparato de medição de nível de água (célula de carga em foco)</figcaption>
  </figure>
</div>


<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/sistema_medicao_teste.jpg">
    <figcaption>Aparato de medição de nível de água (em teste)</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/sistema_medicao_base.jpg">
    <figcaption>Aparato de medição de nível de água (em teste)</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/sistema_medicao_circuitaria.jpg">
    <figcaption>Aparato de medição de nível de água (circuitaria)</figcaption>
  </figure>
</div>

<iframe class="youtube" src="https://www.youtube.com/embed/AkCujOrr3nY" frameborder="0" allowfullscreen></iframe>

`[2h30min]`




Mais novidades em breve.

----

#### Autores

- [Marcelo Schmitt](https://github.com/marceloschmitt1)
