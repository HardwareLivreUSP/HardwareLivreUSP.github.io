---
layout:     post
type:       projeto
hidden:     true
title:      "Impressora 3D"
date:       2020-06-19
author:     "Lucas Seiki Oshiro"
author_url: "https://linux.ime.usp.br/~lucasoshiro"
img:        "assets/images/projetos/2020-06-19-impressora_3d/hermione.jpg"
#img:        "Link de imagem local"
#img_url:    "Link de imagem da internet"
---

### Introdução

Bom, se você chegou até esta página, você já deve saber o que é uma impressora
3D, então, sem muitas apresentações e vamos ao que interessa!

Neste projeto, que fiz durante minhas férias, construí esta impressora 3D de
filamento. Ela tem as seguintes características:

- Mesa aquecida;
- Compatível com G-code;
- Software e hardware livres;
- Bowden;
- Nivelamento automático;
- Display gráfico;
- Interface em português;
- Suporte para cartão SD;
- Jogos;

Esta impressora é ~~uma cópia~~ baseada na
[Cianofícea](https://linux.ime.usp.br/~brunobra/3Dprinter.html), construída pelo
também membro do Hardware Livre [Bruno](https://linux.ime.usp.br/~brunobra).

### Estrutura

A estrutura da impressora 3D é feita de MDF, cortado a laser no InovaLab, na
POLI-USP. O modelo usado é o [Graber i3](https://github.com/sgraber/Graber),
criado por Shanon Graber, e que é baseado na impressora Prusa i3, porém feito
para ser feito com partes cortadas a laser em vez de impressas.

Para isso foi comprada uma placa de MDF de 90cm x 1m, cortada em duas
partes para caber na cortadora laser. As partes cortadas foram
pintadas com spray automotivo preto, para maior resistencia contra a
umidade.

Essa estrutura, porém, não foi feita para o display que eu usei. Para usá-lo,
precisei cortar a laser outra peça, disponível
[aqui](https://www.thingiverse.com/thing:1186465#Summary).

Para cada eixo há um par de barras de aço com espessura de 8mm. Aqui vai uma
dica: evite comprar barras específicas para impressoras 3D aqui. Elas são caras
e são iguais às que podem ser encontradas em impressoras jato de tinta
inoperantes e em serralherias, por um preço bem mais barato.

Preços:
- MDF: R$50,00
- Parafusos ≃ R$30,00
- Barras de inox 8mm: R$30,00

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2020-06-19-impressora_3d/hermione1.jpg">
    <figcaption>Estrutura de MDF, depois de cortada</figcaption>
  </figure>
</div>

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2020-06-19-impressora_3d/hermione2.jpg">
    <figcaption>Estrutura de MDF, depois de cortada, e pintada</figcaption>
  </figure>
</div>

### Eletrônica

O coração da impressora é um Arduino Mega, com um shield RAMPS acoplado. O
RAMPS é um shield feito para o controle dos componentes elétricos de uma
impressora 3D.

Sobre o RAMPS foram encaixados 4 drivers DRV8825. Eles são responsáveis pelo
controle dos motores de passo. Cada driver controla um dos três eixos da
impressora, além de um quarto para o controle do fluxo de filamento para a
extrusora. O RAMPS ainda permite mais um motor de passo para uma segunda
extrusora, mas não usei isso porque ela só terá uma (bom, pelo menos por
enquanto...).

Também está conectado ao RAMPS o display RepRap Full Graphics Display, com
um encoder rotativo para controle da interface e porta para cartão SD. Ao
contrário de outros displays mais simples, este consegue desenhar algumas
figuras e ter uma interface mais gráfica do que outros que mostram apenas texto
puro. Também permite alguns joguinhos 😉.

O Arduino Mega, o RAMPS, os drivers e o display foram comprados em um único kit,
junto de alguns outros componentes. É bom pesquisar se compensa comprar um kit
como esse ou comprar as peças avulsas.

Preço:
- Kit de impressora 3D: 279,95

  - Arduino Mega
  - Mesa
  - 6x Endstops
  - Arduino Mega
  - RAMPS
  - RepRap Full Graphics Display
  - 5x Drivers de motor de passo DRV8825
  - Cabo USB

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2020-06-19-impressora_3d/eletronicos.jpg">
    <figcaption>Eletrônicos. Azul: Arduino Mega; Vermelho: RAMPS; Roxo: DRV8825</figcaption>
  </figure>
</div>



### Motores

Foram usados 5 motores de passo NEMA 17. Um para o eixo X, um para o eixo Y,
dois para o eixo Z e um para a extrusora. Esses motores de passo devem ser
ligados no RAMPS ao lado de seus respectivos drivers. Os motores do eixo Z
compartilham o mesmo driver de motor de passo.

Ao instalar os motores de passo, deve-se regular cada driver para fornecer a
corrente correta. Isso deve ser feito com o auxílio de um multímetro, fazendo a
regulagem no potênciometro que fica na parte de cima do driver. Para fazer isso,
deve-se ler o datasheet do motor de passo e consultar qual deve ser a leitura da
diferença de potencial entre a parte de metal do potenciômetro e o GND, tomando
o **máximo** de cuidado para não deixar a ponta de prova do multímetro escapar e
provocar algum curto-circuito. Isso pode inutilizar o Arduino (sim, isso
aconteceu comigo).

Preço:
- 5x NEMA 17: 5x R$ 59,95 = R$299,90

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2020-06-19-impressora_3d/nema.jpg">
    <figcaption>Motores de passo NEMA 17. Veio tão bem embalado que deu até dó de tirar...</figcaption>
  </figure>
</div>

### Alimentação

Uma fonte chaveada provê tensão de 12V para o shield RAMPS. Ele, por sua vez,
alimenta o Arduino e as outros componentes. O Arduino em si pode ser alimentado
por USB a 5V, conseguindo alimentar também o display e o servo (falarei dele
mais para frente), mas sendo incapaz de mover os motores de passo e aquecer a
mesa e a extrusora.

Fonte chaveada 12V 30A: R$120

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2020-06-19-impressora_3d/fonte.jpg">
    <figcaption>Fonte</figcaption>
  </figure>
</div>


### Aquecimento

Durante a impressão, um dos motores de passo empurra o filamento em direção ao
bico que, aquecido, derrete o filamento e o faz sair pelo seu orifício. Um
cartucho aquecedor e um termistor são acoplados ao bloco de aquecimento onde
fica encaixado o bico. Sobre eles, há um dissipador de calor e um cooler. Esse
conjunto permite controlar a temperatura, que deve estar na faixa recomendada
para o tipo de filamento escolhido.

A mesa aquecida permite melhor aderência e melhor qualidade de impressão. Sob
ela foi preso um termistor igual ao da extrusora com cola de silicone,
resistente a altas temperaturas. A mesa nada mais é que um grande resistor, que
é alimentado pelo RAMPS a 12V. Ela é fixada sobre sua base por quatro molas,
cada uma com um parafuso passando por dentro.

A impressão não deve ser feita diretamente sobre a mesa aquecida: é necessário
usar um vidro sobre ela como base para a impressão. Pode-se usar um vidro comum
de 3mm, de um tamanho que caiba sobre a mesa sem encostar nos parafusos.

Preço:

- Extrusora: R$ 95,00

  - Hotend
  - Bico 0.4mm
  - Cooler
  - Bowden
  - Termistor

- Termisor para mesa: R$13,50
- Vidro R$7,00

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2020-06-19-impressora_3d/tralhas.jpg">
    <figcaption>Mesa aquecida, extrusora, etc...</figcaption>
  </figure>
</div>

### Partes mecânicas

A mesa se move sobre o eixo Y, o eixo X se move sobre o eixo Z, e a extrusora se
move sobre o eixo X. O movimento sobre esses eixos é guiado por rolamentos
lineares, no caso, os rolamentos lineares LM8UU.

O movimento dos motores dos eixos X e Y é transmitido através de um conjunto de
correia dentada, polia e rolamento para cada um desses eixos. A correia não deve
estar muito tensionada, e nem muito frouxa.

Quanto ao eixo Z, ele é movimentado através de de porcas que se locomovem
conforme o movimento das barras roscadas que são presas aos dois motores de
passo desse eixo através de dois acoplamentos flexíveis.

Da mesma forma que as barras lisas de aço, esta barra roscada pode ser comprada
em lojas de parafuso ou de construção por um preço mais barato que as
específicas para impressoras 3D.

Quanto ao sistema de movimentação do filamento, há um conjunto de uma alavanca
com uma mola e um rolamento que, juntos, pressionam o filamento contra uma polia
preso ao motor de passo da extrusora, que o empurra através da mangueira do
bowden.

- Kit gadgets de impressora 3D: R$111,09

  - 12x Rolamento linear LM8UU
  - 2x polia GT2
  - 2m correia GT2
  - 5x Rolamentos
  - 2x acoplamentos 5mmx5mm

- Kit para extrusora (alavanca): R$60,00

- Barras roscadas 5mm: R$5,00

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2020-06-19-impressora_3d/motor_filamento.jpg">
    <figcaption>Conjunto de movimentação do filamento</figcaption>
  </figure>
</div>


### Endstops

Os endstops servem para detectar que um eixo chegou no fim ou no começo de seu
curso.

Devido ao formato da fonte que comprei, esta impressora tem o eixo X
espelhado em relação ao que normalmente é usado para a Graber. Desta forma, a
montagem ficava mais limpa em usar um endstop no eixo X no fim de seu curso,
enquanto que nos eixos Y e Z o endstop indica o começo do curso.

Os endstops, então, ficaram montados da seguinte forma:

- Eixo X: Preso junto à estrutura de MDF que segura o motor, na direita;
- Eixo Y: Preso sob a mesa, na parte de trás, encostando na traseira da
  impressora quando Y = 0;
- Eixo Z: Preso a uma peça impressa, que é baixada por um servo, possibilitando
  que o endstop fique em uma posição segura que não atrapalhe a impressão;

Obs.: a peça em que o endstop é preso foi feita na própria impressora 😁.

Preço:
- Servo 9g: R$15,44

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2020-06-19-impressora_3d/endstop.jpg">
    <figcaption>Conjunto de movimentação do endstop do eixo Z</figcaption>
  </figure>
</div>


### Suporte para a bobina do filamento

Como o projeto Graber i3 não traz um suporte para o rolo de filamento, como é
nas Sethi AiP do Lab3D, meu pai fez esse suporte com alguns restos de acrílico e
ferro. Ficou legal:

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2020-06-19-impressora_3d/suporte.jpg">
    <figcaption>Suporte da bobina de filamento</figcaption>
  </figure>
</div>


### Et Cetera


Preço:
- Organizadores de cabos, pacote de fita hellerman, fios, terminais, etc: R$ 20,00

### Firmware

O firmware usado é o [Marlin](https://marlinfw.org/). Esse firmware é fácil de
ser configurado apenas definindo algumas constantes em dois arquivos de
cabeçalho (.h), contando com uma ótima documentação oficial.

Até o momento, precisei configurar isto:

- Baudrate: de 250000 para 115200
- Diâmetro do filmaneto: de 3mm para 1.75mm
- Ativar o termistor da mesa
- Inversão da lógica dos endstops
- Endstop do eixo indicando a posição máxima
- Passos/mm para cada um dos eixos
- Dimensões do espaço de impressão
- PID tuning
- Configurações do servo
- Interface em português
- Permitir diferentes frequências no buzzer
- Ativar cartão SD
- Usar display Full Graphics
- Ativar jogo brickout

Eu mantenho meu fork com as configurações e alterações específicas para esta
impressora [aqui](https://github.com/lucasoshiro/Hermione3D)

### Resultado

A impressora, pronta, ficou assim:

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2020-06-19-impressora_3d/hermione.jpg">
    <figcaption>!!!</figcaption>
  </figure>
</div>

Aqui estão algumas impressões feitas nela:

<div id="impressoes" style="text-align:center">
<div class="img-container" style="display:inline-block">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2020-06-19-impressora_3d/scrat.jpg">
    <figcaption>Scrat carregando sua noz. E cheio de suporte embaixo...</figcaption>
  </figure>
</div>

<div class="img-container" style="display:inline-block">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2020-06-19-impressora_3d/vaso.jpg">
    <figcaption>Vaso</figcaption>
  </figure>
</div>

<div class="img-container" style="display:inline-block">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/projetos/2020-06-19-impressora_3d/transparente.jpg">
    <figcaption>Para aqueles que dizem ser impossível imprimir transparente...</figcaption>
  </figure>
</div>
</div>

E por último, uma impressão que desde o começo eu gostaria de fazer: o chaveiro
do Mr. FLUSP. Em maio de 2019, o Marcelo imprimiu nas impressoras Goku e Vegeta
[estes chaveiros](http://localhost:4000/lab3d/2019/08/10/maio_de_2019/), que 
ficaram muito bons. Como eu tenho um desses chaveiros, e como estão disponíveis
[os modelos e as configurações do slicer CuraEngine](https://gitlab.com/flusp/arts/-/tree/master/3D/mr_flusp_high_relief),
foi possível comparar a qualidade de impressão com a das impressoras do Lab3D. O
resultado pode ser visto na foto a seguir, sendo que o chaveiro azul e branco é
o feito no Lab3D e o transparente e cinza é o que foi feito nesta impressora
3D. Nada mal para uma impressora que custou 70% a menos 😉.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/projetos/2020-06-19-impressora_3d/mr_flusp.jpg">
    <figcaption>Chaveiros</figcaption>
  </figure>
</div>

