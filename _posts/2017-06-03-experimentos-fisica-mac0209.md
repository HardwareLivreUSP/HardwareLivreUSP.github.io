---
layout:     post
title:      "Experimentos de física de MAC0209"
date:       2017-06-03
author:     "Marcelo Schmitt"
img:        "post_img/fisica_mac0209/rampa_visao_geral.png"
---

<p>
Nessas últimas semanas fizemos algumas experiências de física vinculadas à disciplina MAC0209 – Modelagem e Simulação do Instituto de Matemática e Estatística da Universidade de São Paulo (IME-USP). Esse post fala um pouco sobre essas experiências.
</p>

Foram um total de 4 experiências:

- Realização de um movimento retilíneo uniforme (MRU)
- Realização de um movimento retilíneo uniformemente variado (MRUV)
- Realização de um movimento pendular
- Realização de um movimento de descida sobre um plano inclinado / rampa


<p>
Em cada uma dessas experiências nosso objetivo era mensurar / coletar dados experimentais de posição em relação ao tempo do objeto foco do experimento. Por exemplo, para o experimento de MRU queríamos mensurar a posição de um carrinho em um determinado instante de tempo. A partir desses dados experimentais eram então estimadas outras medidas experimentais, por exemplo a velocidade do carrinho no instante t. Em seguida comparamos os resultados experimentais com resultados obtidos por modelos matemáticos que descrevem os movimentos de interesse ou então com aproximações obtidas por métodos numéricos, a fim de criar uma discussão sobre a qualidade de se aproximar matematicamente movimentos reais por esses modelos e/ou métodos.
</p>

#### Movimento Retilíneo Uniforme  (MRU) e Movimento Retilíneo Uniformemente Variado (MRUV)
<p>
Construimos um carrinho controlado por bluetooth de maneira que fosse possível controlar sua direção e também sua velocidade (Figura 1). O carrinho foi feito a partir de um antigo brinquedo de radio doado para o grupo HardwareLivreUSP, ele é formado por três componentes: LD293(ponte H) circuito integrado para controlar os motores, módulo bluetooth (HC05) e Arduino pro mini (descrição mais detalha em: <a href="http://hardwarelivreusp.org/projetos/">http://hardwarelivreusp.org/projetos/</a> ).
</p>
<p>
Para marcar o tempo ao invés de cronômetros foi utilizado o relógio interno do microcontrolador da placa ArduinoUNO. Para detectar quando o carrinho passou por certo ponto foram utilizados quatro sensores de luminosidade do tipo LDR (Light Dependent Resistor) (Figura 2). No carrinho colocamos um celular com um aplicativo (<a href="https://play.google.com/store/apps/details?id=com.chrystianvieyra.physicstoolboxsuite">PhysicsToolBoxSuite</a>) para medir o acelerômetro interno do celular e uma pequena lanterna de modo que ao passar do lado do sensor esse seria ativado e mandaria um sinal para ArduinoUNO que por sua vez envia o tempo percorrido para serial do computador (Figura 3).
O percurso total percorrido pelo carrinho em cada um dos experimentos foi de 6 metros (Figura 4). Assim quando o carrinho passa pelo o LDR 1 , o cronômetro do microcontrolador começa e para cada ponto é enviado o tempo para computador. Segue um vídeo mostrando o funcionamento do experimento que também pode ser visto no canal da disciplina em <a href="https://youtu.be/TAoXn8SciPo">https://youtu.be/TAoXn8SciPo</a>.
</p>

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/fisica_mac0209/carrinho_bt.jpg" style="margin: 0 auto; max-height: 390px;" />
Figura 1: Carrinho controlado por bluetooh usado nos experimentos
</p>

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/fisica_mac0209/ldr.jpg" style="margin: 0 auto; max-height: 390px;" />
Figura 2 : Sensor LDR usado para marcar a passagem do carrinho.
</p>

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/fisica_mac0209/arduino.jpg" style="margin: 0 auto; max-height: 390px;" />
Figura 3: Placa Arduino usada para ler os sensores LDR e cronometrar os tempos do carrinho em cada um dos pontos da trajetória.
</p>

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/fisica_mac0209/experiment_setup.jpg" style="margin: 0 auto; max-height: 390px;" />
Figura 4: Setup dos experimentos.
</p>

<p>
<iframe width="584" height="329" src="https://youtu.be/TAoXn8SciPo" frameborder="0" allowfullscreen>Experimentos de pêndulo e descida na rampa</iframe>
</p>

#### Pêndulo
<p>
Para os experimentos pendulares utilizamos um pêndulo de madeira cuja haste media aproximadamente 65 centímetros do seu ponto de rotação até o seu ponto mais distante (Figura 5). Usamos também uma ArduinoUNO junto com um sensor ultrassônico HC-SR04 e medimos a distância da ponta do pêndulo ao sensor (que ficou preso à uma parede) em vários instantes de tempo e de forma contínua de modo que pudéssemos obter a posição experimental x_e (t) do pêndulo ao longo de todo o experimento (Figura 6). Usamos também um celular acoplado ao pêndulo para medir o ângulo inicial dos experimentos.
</p>
<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/fisica_mac0209/experimento_pendulo.png" style="margin: 0 auto; max-height: 390px;" />
Figura 5: Experimento do pêndulo.
</p>
<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/fisica_mac0209/componentes_pendulo.jpg" style="margin: 0 auto; max-height: 390px;" />
Figura 6: Pêndulo em detalhes.
</p>


#### Descida sobre plano inclinado / rampa
<p>
Os experimentos de descida sobre plano inclinado foram realizados com um cano de PVC de 3 metros de comprimento ao longo do qual foram acoplados 11 sensores de luminosidade (do tipo LDR) em pontos equiespaçados (Figura 7). Os sensores ficaram posicionados no "topo"do cano (Figura 8) e, por dentro do cano, debaixo deles passamos um carrinho com uma lanterna focalizada (Figura 9) que iluminava cada um deles no instante de sua passagem. Usamos então as leituras dos sensores e uma ArduinoMEGA para marcar em que instante de tempo o carrinho passava por cada um dos pontos x_e ao longo do cano. Também usamos um celular acoplado à rampa para medir o ângulo inicial dos experimentos.
</p>
<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/fisica_mac0209/rampa_visao_geral.png" style="margin: 0 auto; max-height: 390px;" />
Figura 7: Visão geral do experimento de decida sobre plano inclinado (com um cano de
PVC de 3 metros!).
</p>
<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/fisica_mac0209/interior_rampa.jpg" style="margin: 0 auto; max-height: 390px;" />
Figura 8: Interior do cano de PVC usado como plano inclinado / rampa.
</p>
<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/fisica_mac0209/carrinho.jpg" style="margin: 0 auto; max-height: 390px;" />
Figura 9: Carrinho utilizado como objeto para descer pelo plano inclinado / rampa.
</p>

<p>
Segue um vídeo mostrando o funcionamento dos experimentos com o pêndulo e com a rampa que também pode ser visto no canal da disciplina MAC0209 em <a href="https://youtu.be/9crAZOr8Pkw">https://youtu.be/9crAZOr8Pkw</a> .
</p>
<p>
<iframe width="584" height="329" src="https://youtu.be/9crAZOr8Pkw" frameborder="0" allowfullscreen>Experimentos de pêndulo e descida na rampa</iframe>
</p>

#### Resultados Obtidos
<p>
Seguem (Figuras 10 e 11) os resultados obtidos com os experimentos de MRU e MRUV.
</p>

</p>
<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/fisica_mac0209/mru_1.png" style="margin: 0 auto; max-height: 390px;" />
Figura 10: Gráfco para a análise de um dos experimentos de MRU realizados.
</p>
</p>
<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/fisica_mac0209/mra_1.png" style="margin: 0 auto; max-height: 390px;" />
Figura 11: Gráfco para a análise de um dos experimentos de MRUV realizados.
</p>

Seguem agora (Figuras TODO) os resulatados obtidos com os experimentos de pêndulo.



#### Agradecimentos Especiais:

- Leonardo Daneu

Por auxiliar na filmagem dos experimentos de MRU e MRUV.

- Lucas Sung Jun Hong

Por auxiliar na filmagem dos experimentos e na edição dos vídeos de MRU e MRUV.

- Roberto Hirata Junior

Por emprestar o pêndulo, o cano que serviu de rampa para os experimentos, a ArduinoMEGA, e os sensores de luminosidade utilizados na rampa.

- Dario Vargas

Pela filmagem de um dos experimentos de pêndulo.

- Grupo HardwareLivreUSP

Por ceder ferramentas e componentes para a montagem dos experimentos.


<br />
<br />

Este trabalho não teria ficado tão completo sem a ajuda de vocês. Muito Obrigado!

