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

- Modelei e imprimi um outro fixador para a célula de carga pois não havia percebido que o anterior não ficaria bem acoplado com o restante do sistema. `[1h10min]`

- Ajustei o sketch arduino para calcular o volume de água considerando as medidas reais da cistena da EMEF Olavo Pezzotti. `[1h20min]`

- Montei e testei todo o sistema de medição de volume de água no apartamento onde moro e me deparei com alguns problemas:

	- O cano atritava com o adaptador de encaixe da célula de carga atrapalhando o início das medições.
	- As presilhas que comprei são mais altas que o diâmetro do cano mas eu tive que fazer uma adaptação para conseguir usá-las porque o cano fica um pouco afastado da parede de fixação (isso acontece por causa do adaptador de encaixe e do fixador da célula de carga).
	- As presilhas (acabei usando apenas uma) são boas para evitar que o cano vire na horizontal mas podem acabar absorvendo parte da força que seria medida pela célula de carga e isso pode atrabalhar a estimativa final do volume de água. Ainda não sei como resolver isso. Toda ajuda é bem vinda. =)
	- Algo que não havia pensado é que, devido ao peso do cano, é necessário uma altura mínima de água para que o cano flute e faça força contra o sensor. Por causa disso, medidas de volume muito baixas podem ser imprecisas.
	- Sem perceber acabei presumindo que a parede da cisterna é chata/reta. Instalar o aparato de medição pode ser um pouco mais complicado se a superfície da parede da cisterna não for plana.

`[2h30min]`

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

<iframe class="youtube" src="https://www.youtube.com/embed/AkCujOrr3nY?rel=0" frameborder="0" allowfullscreen></iframe>

`[2h30min]`

#### Resumo da semana do dia 17/09

- Neste sábado eu estive junto com o pessoal da ONG Engenheiros sem Fronteiras para instalar o medidor de volume de água na cisterna instalada na escola Amorim Lima (parece que o EsF-SP não conseguiu mais entrar em contato com a gerência da EMEF Olavo Pezzotti). Foi muito bacana ver o trabalho do EsF-SP na escola. Havia um mural com várias fotos onde apareciam os alunos interagindo e ajudando na instalação da cisterna. Quando chegamos percebemos que havia um vazamento na flange que dava saída a uma torneira instalada para permitir o uso da água da cisterna. Tive a oportunidade de ajudar o pessoal no conserto do vazamento e de ter uma grande ajuda e várias ideias na hora de tentar instalar o aparato para medição do volume de água. No entanto, não conseguimos instalar o sistema porque nem adesivo plástico para PVC nem fita dupla face eram capazes de fixar uma peça de ABS na parede interna da cisterna. Isso foi inesperado e ruim porque o sistema que projetei precisava que duas peças fossem fixadas nas paredes da cisterna logo, não foi possível com instalar o sistema que eu havia projetado. `[4h45min]`

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/fixador_para_base.jpg">
    <figcaption>
      Nova peça projetada para guiar o cano na cisterna instalada na escola Amorim Lima.<br/>
      Essa peça deveria ficar fixada no fundo da cisterna.
    </figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/fixador_para_base2.jpg">
    <figcaption>
      Nova peça projetada para guiar o cano na cisterna instalada na escola Amorim Lima (lado)<br/>
      &nbsp;
    </figcaption>
  </figure>
</div>

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/cisterna_amorim_lima.jpg">
    <figcaption>Foto da cisterna instalada na escola Amorim Lima</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/cisterna_amorim_lima_lado.jpg">
    <figcaption>Foto da cisterna instalada na escola Amorim Lima (lado)</figcaption>
  </figure>
</div>

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/saida_cisterna_am.jpg">
    <figcaption>Uma saída de 3/4 de polegada por onde poderia passar a fiação de um sensor</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/saida_cisterna_am_alto.jpg">
    <figcaption>A saída de 3/4 de polegada fica próxima a janela de uma sala da zeladoria</figcaption>
  </figure>
</div>

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/conferindo_encaixe_peca.jpg">
    <figcaption>Conferindo o encaixe do sensor no topo da cisterna</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/preparando_cano.jpeg">
    <figcaption>Cortando o cano para o tamanho apropriado</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/lixando_peca.jpg">
    <figcaption>Lixando a peça guia do cano para melhorar a aderência com a parede da cisterna</figcaption>
  </figure>
</div>

#### Resumo da semana do dia 24/09

- Modifiquei o programa Arduino para usar um sensor de infravermelho (SharpGP2Y0A02Y) no lugar de um sensor de força. Fiz vários testes para me certificar de que as medidas de distância do sharp estavam corretas, os cálculos de volume não continham erros, e o todo o sistema de medição estava funcionando. `[5h30min]`

- Modelei e imprimi uma haste para fixar o sensor sharp num orifício no topo da cisterna (será possível parafusar a haste na borda desse orifício). `[1h]`

- Fiz pequenas alterações no site para exibir corretamente a capacidade da nova cisterna. `[1h30min]`

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/haste_sharp.jpg">
    <figcaption>Haste impressa para fixar o sensor num orifício no topo da cisterna</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/haste_sharp_conjunto.jpg">
    <figcaption>Sensor Sharp parafusado na haste de fixação</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/cabo_microUSB_adaptado.jpg">
    <figcaption>Cabo microUSB adaptado / hackeado para o projeto</figcaption>
  </figure>
</div>

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/teste_nodemcu_arduino.jpg">
    <figcaption>Usando NodeMCU e Arduino durante os testes de calibração do Sharp</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/teste_nodemcu_aplicacao.jpg">
    <figcaption>NodeMCU e sensor Sharp para medir o nível de água</figcaption>
  </figure>
</div>

<iframe class="youtube" src="https://www.youtube.com/embed/XehT8hyI7mg?rel=0" frameborder="0" allowfullscreen></iframe>

#### Resumo da semana do dia 01/10

- Alterei o sketch para fazer uma série de medidas e tomar a mediana delas, tornando assim a medida final de volume de água mais confiável. `[1h]`

- Soldei fios mais longos aos fios de conexão do sensor Sharp para permitir que a placa que coletará os dados possa ficar fora do ambiente da cisterna. `[45min]`

- Realizei mais alguns testes com o sensor infravermelho SharpGP2Y0A02Y. `[1h]`

- Estive na escola Amorim Lima falando um pouco sobre a parte de IoT do projeto Cisternas nas Escolas para as crianças envolvidas com a parte educaional do projeto. `[1h]`

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/explicando_iot.jpeg">
    <figcaption>Falando sobre a técnica para medir o volume de água</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/explicando_curva_sharp.jpeg">
    <figcaption>Explicando a curva de tensão do sensor infravermelho</figcaption>
  </figure>
</div>

#### Resumo da semana do dia 08/10

- Calibrei um sensor SharpGP2Y0A21 para usá-lo em testes na caixa da água da minha própria casa. `[2h30min]`

- Corrigi um bug no cálculo da distância entre o sensor e o corpo de água. `[1h]`

- Instalei o sistema de mediação de volume de água na caixa da água da minha casa para testá-lo em funcionamento. `[3h]`

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/SharpGP2Y0A21.jpg">
    <figcaption>Sensor infravermelho SharpGP2Y0A21 que utilizei na minha casa</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/haste_e_cano_pvc.jpg">
    <figcaption>Haste de madeira e cano de PVC para fixar o sensor</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/suporte_sharp_completo.jpg">
    <figcaption>Sensor pronto para instalação</figcaption>
  </figure>
</div>

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/sharp_posicionado.jpg">
    <figcaption>Sensor instalado na caixa da água</figcaption>
  </figure>
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/nodeMCU_shapGP2Y0A21.jpg">
    <figcaption>NodeMCU e fonde de alimentação usandos junto com o sensor</figcaption>
  </figure>
</div>

#### Resumo da semana do dia 15/10

<!-- - Soldagemm de fios `[30min]` -->

- Tive que comprar mais componentes para instalação na cisterna pois alguns dos que eu tinha reservado para isso ficaram na minha casa tirando medidas da caixa da água de lá.

- Quinta-feira o sensor instalado na minha casa completou uma semana de funcionamento. Tudo funcionando bem.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/graf_casa01.png">
    <figcaption>Gráfico dos dados da caixa da água em casa</figcaption>
  </figure>
</div>

#### Resumo da semana do dia 22/10

- Quinta-feira o sensor instalado na minha casa completou duas semanas de funcionamento.

#### Resumo da semana do dia 29/10

- Adaptei um cabo microUSB para uso na cisterna. `[2h]`

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2018-08-11-cisternas_nas_escolas_iot/cabo_USB_hackeado.jpg">
    <figcaption>Cabo microUSB adaptado</figcaption>
  </figure>
</div>

- Quinta-feira o sensor instalado na minha casa completou três semanas de funcionamento. Nesta noite eu o desativei temporariamente para realizar alguns testes.

- Soldei fios mais longos no conector do sensor para poder colher os dados com uma placa nodeMCU que deve ficar fora da cisterna, a mais ou menos 1 metro de distância. Tive dificuldade em determinar qual deveria ser o tamanho dos fios pois fios muito longos (1 metro e meio ou mais) influenciam na leitura do sensor torando-a incorreta. `[4h]`

- Sexta-feira estive novamente na escola Amorim Lima conferi alguns detalhes que havia esquecido da última vez (altura que o sensor vai ficar em relação à base da cisterna, distância da cisterna até onde o nodeMCU deve ficar instalado). Não consegui instalar o cistema devido aos problemas envolvendo comprimento dos fios e corretude das leituras. `[1h]`


Mais novidades em breve.

----

#### Autores

- [Marcelo Schmitt](https://github.com/marceloschmitt1)
