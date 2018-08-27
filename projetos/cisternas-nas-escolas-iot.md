---
layout:     post
title:      "Cisternas nas Escolas IoT"
subtitle:   ""
date:       2018-08-11
author:     "Marcelo Schmitt"
---

Página do projeto <a href="https://github.com/marceloschmitt1/ProjetoCisternasNasEscolasIoT">Cisternas nas Escolas IoT</a>.
Fotos da cisterna instalada na EMEF Olavo Pezzotti:

<img src="{{ site.baseurl }}/post_img/cisternas_iot/cisterna20180206_130338.jpg" style="margin: 0 auto; max-height: 390px;">

<img src="{{ site.baseurl }}/post_img/cisternas_iot/dimensões_cisterna.jpg" style="margin: 0 auto; max-height: 390px;">

-------------------------------------
Resumo da semana do dia 13/08

* Tentei modificar o sketch Arduino para enviar o timestamp correto do momento em que é feita cada medição do volume de água(ainda está com problema, devo corrigir na semana do dia 20/08). [3h10min]

* Melhorei um pouco a interface do site. Coloquei a contegem correta de cisternas e medições na página principal. Refatorei a página de detalhes da cisterna e incluí um gauge chart nela. [3h40min]

* Planejei a utilização do sensor, qual o diâmetro deveria ter o cano que será utilizado em conjunto com o sensor, e comprei algumas das coisas necessárias (presilhas, cano de pvc, cola de pvc). [3h]

<img src="{{ site.baseurl }}/post_img/cisternas_iot/plano.jpg" style="margin: 0 auto; max-height: 390px;">

<img src="{{ site.baseurl }}/post_img/cisternas_iot/cano.jpg" style="margin: 0 auto; max-height: 390px;">

--------------------------------------

Resumo da semana do dia 20/08

* Corrigi o sketch Arduino para obter timestamp correto. [3h]

* Arrumei o label de valor do gauge. Associei as informação da página de listagem de cisternas com os dados reais que estão no BD. O site pode ser visto em <a href="http://marcelosc.pythonanywhere.com/">CisternasNasEscolasIoT</a>. [1h30min]

* Detalhei um pouco mais o processo de obtenção do volume de água da cisterna. [1h]

<img src="{{ site.baseurl }}/post_img/cisternas_iot/plano_detalhado.jpg" style="margin: 0 auto; max-height: 390px;">

* Modelei e imprimi um adapador para manter o cano fixado à ponta da célula de carga e outro adaptador para fixar a célula na parede da cisterna. [2h]

<img src="{{ site.baseurl }}/post_img/cisternas_iot/adaptador_sensor_cano.jpg" style="margin: 0 auto; max-height: 390px;">

<img src="{{ site.baseurl }}/post_img/cisternas_iot/adaptador_sensor_cano_baixo.jpg" style="margin: 0 auto; max-height: 390px;">

* Calibrei a célula de carga para retornar medidas em gramas. [1h30min]

--------------------------------------

Mais novidades em breve. 



Responsável pelo projeto: *Marcelo Schmitt*
