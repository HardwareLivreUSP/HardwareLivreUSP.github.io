---
layout:     post
type:       tutorial
hidden:     true
title:      "Introdução: Matriz de LED"
date:       2016-09-15
author:     "Leonardo Haddad Carlos"
author_url: ""
img:        "assets/images/tutoriais/2016-09-15-introducao_matriz_de_led/matriz-20257ND.jpg"
img_url: 		""

redirect_from: "2016/09/15/led-matrix"
---

Esse tutorial, destinado a iniciantes, cobrirá o desenvolvimento de um software, escrito em Arduino, que controla uma Matriz de LED, tal como a montagem do hardware usando jumpers (cabos utilizados para conectar dispositivos às portas do Arduino) e uma protoboard (componente composto por circuitos, utilizado para prototipar projetos). Devido à sua simplicidade, a matriz de LED é um ótimo projeto para iniciantes que queiram dar os primeiros passos dentro do universo de programação de hardware livre, e por isso foi escolhida para esse tutorial inicial. Note que esse tutorial é feito para pessoas que sejam iniciantes no Arduino, mas que já conheçam as noções básicas de programação.

Uma matriz de LED é um dispositivo que contém diversos LEDs dispostos em linhas e colunas, as quais são controladas pelas portas do Arduino e associadas respectivamente às entradas e saídas de energia da matriz. Isso se dá porque os LEDs possuem polaridades, de forma que a polaridade positiva fica associada à linha, enquanto a polaridade negativa fica associada à coluna.

Por exemplo, vamos supor que queremos ligar o terceiro LED da segunda linha. Então, definimos a porta associada à segunda linha como porta de energia (configuramos a porta como potência alta, que no Arduino representa `5V`) e a porta associada à terceira coluna como porta de terra (configuramos a porta como potência baixa, que no Arduino representa `0V`).

Para a construção do exemplo desse tutorial, o modelo de matriz utilizado foi a `20257ND`.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/2016-09-15-introducao_matriz_de_led/matriz-20257ND.jpg">
    <figcaption>Matriz de LED modelo 20257ND</figcaption>
  </figure>
</div>

#### Verificando os pinos

O primeiro passo para conectar um dispositivo externo ao Arduino é entender seus circuitos, para saber o papel de cada pino no funcionamento desse dispositivo. Para isso, utilizamos documentos chamados de datasheets. No caso da nossa matriz de modelo `20257ND`, por exemplo, o *datasheet* associado se encontra [nesse link](http://pdf.datasheet.global/datasheets-1/american_bright_optoelectronics/BM-20257ND.pdf) (mais especificamente no canto inferior direito do documento).

Analisando o *datasheet*, é possível entender os pinos que devem ser configurados para ligar cada LED. Lembram que falamos sobre portas associadas a cada linha ou coluna de LEDs? O *datasheet* é o documento que nos diz qual é o pino asocciado a cada linha ou coluna da nossa matriz. Em alguns casos, há mais de um pino para a mesma linha ou coluna, mas, nesse caso, basta usar qualquer um dos pinos associados.

Voltando ao nosso exemplo da seção anterior, onde queremos ligar o terceiro LED da segunda linha: podemos ver, pelo *datasheet*, que a segunda linha está associada ao pino de número `14`, enquanto a terceira coluna está associada aos pinos de número `4` e `11`.

#### Conectando a matriz a um Arduino

Agora que você já sabe como usar o *datasheet* para identificar as funções de cada pino da matriz, é hora de conectar esses pinos com as portas do Arduino. Existem duas formas principais de fazer essa conexão: através de uma protoboard (veja a imagem abaixo) e cabos jumpers, no caso de projetos em fase de prototipação, ou através de um circuito impresso especificamente para o projeto em questão, no caso de produtos já validados na protoboard. Como esse tutorial visa introduzir o assunto a pessoas com pouco conhecimento na área, omitiremos o procedimento de criação de circuitos impressos e focaremos apenas na montagem dos protótipos utilizando a protoboard.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/2016-09-15-introducao_matriz_de_led/protoboard.jpg">
    <figcaption>Protoboard</figcaption>
  </figure>
</div>

Uma protoboard é uma placa repleta de furos, que são conectados entre si para formar um circuito eletrônico experimental. A protoboard se divide entre as fileiras principais, localizadas no meio da placa, e as fileiras secundárias, localizadas nas duas extremidades da placa. Nas fileiras principais, as conexões são feitas ao longo das linhas, ou seja, cada furo está eletronicamente conectado aos furos que estiverem localizados ao lado. Nas fileiras secundárias, por outro lado, as conexões são feitas ao longo das colunas, ou seja, cada furo está eletronicamente conectado aos furos que estiverem localizados embaixo ou em cima. Vale notar, no caso das fileiras principais, que elas são divididas entre 2 "grupos" de fileiras, um em cada metade de placa, e esses "grupos" não estão conectados entre si.

Usando, por exemplo, a protoboard ilustrada acima, podemos notar que os furos `a1`, `b1`, `c1`, `d1` e `e1` estão todos conectados (apenas) entre si. No entanto, esses furos não estão conectados aos furos `f1`, `g1`, `h1`, `i1` e `j1`, pois esses furos, apesar de também se encontrarem na linha `1`, pertencem à outra metade da placa, e portanto ao outro "grupo".  

O próximo passo é pegar alguns jumpers (condutores utilizados para conectar diferentes pontos de um circuito, ilustrados na imagem abaixo) e utilizá-los para conectar os pinos da matriz de LED às portas do Arduino. E é aí que entra a protoboard: ao invés de conectar um pino da matriz diretamente a uma porta do Arduino, basta conectá-los a quaisquer furos da protoboard que estejam conectados entre si.

Lembre-se sempre de registrar o mapeamento dos pinos para que seja possível manipular corretamente a matriz. Uma das formas mais eficientes de registrar esse mapeamento é através de arrays, pois esses mesmos arrays podem ser utilizados no código para simplificar as conversões que serão necessárias para acessar um determinado LED: a partir da linha e da coluna do LED em questão, descobrir os pinos associados e, a partir disso, as portas do Arduino às quais esses pinos estão ligados.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/2016-09-15-introducao_matriz_de_led/jumpers.jpg">
    <figcaption>Jumpers</figcaption>
  </figure>
</div>

Em nosso exemplo, utilizaremos os seguintes mapeamentos:

<pre class="prettyprint">
const int pinsPorts[] = {0, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 5, 13, 12};
const int linesPins[] = {9, 14, 8, 5, 1, 7, 2};
const int colsPins[] = {13, 3, 4, 10, 6};
</pre>

Os vetores `linesPins` e `colsPins` guardam o mapeamento entre os LEDs e os pinos da matriz, enquanto o vetor `pinsPorts` guarda o mapeamento entre os pinos da matriz e as portas do Arduino (que é definido pelas ligações feitas com os jumpers).

Isso significa que, segundo o vetor `pinPorts`, o primeiro pino da matriz está conectado na porta `11` do Arduino, enquanto o segundo pino está conectado na porta `2` e o terceiro pino da matriz está conectado na porta `3`. Além disso, os vetores `linesPins` e `colsPins` nos mostram que esses três pinos da matriz controlam, respectivamente, a quinta linha da matriz (pois o valor `1` está na quinta posição do `linesPins`), a sétima linha da matriz (pois o valor `2` está na sétima posição do `linesPins`) e a segunda coluna da matriz (pois o valor `3` está na segunda posição do `colsPins`).

A imagem abaixo ilustra nosso protótipo de matriz de LED, montada com base nos arrays de mapeamento definidos acima.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/2016-09-15-introducao_matriz_de_led/prototype.jpg">
    <figcaption>Protótipo</figcaption>
  </figure>
</div>

Note que foi necessário utilizar duas protoboards para montar o protótipo. Isso acontece devido à disposição dos oito pinos da matriz, que, conforme é possível ver na imagem abaixo, faz com que seja impossível encontrar um encaixe (usando uma única protoboard) no qual cada pino da matriz se conecte a um circuito (trilha) diferente da protoboard. Portanto, usamos uma protoboard para cada fileira de pinos da matriz.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/2016-09-15-introducao_matriz_de_led/pins.jpg">
    <figcaption>Pinos da Matriz</figcaption>
  </figure>
</div>

#### Desenvolvendo um software para controlar a matriz

Hora de colocar a mão na massa! O primeiro passo para programar para Arduino é baixar a IDE no [site oficial](https://www.arduino.cc).

Essa é a "cara" de um programa em Arduino:

<pre class="prettyprint">
// "Defines" e variáveis globais

// Rotinas e funções

// A função setup() é executada apenas uma vez, quando a placa é ligada ou resetada
void setup() {
  // Códigos de inicialização
}

// A função loop() é executada "infinitamente" até que a placa seja desligada
void loop() {
  // Códigos que serão executados em cada loop
}
</pre>

A função `setup` é função responsável pela inicialização do programa. Todos os valores iniciais e ajustes de ambiente devem ser feitos nessa função, que será executada uma única vez no início do programa, antes do `loop` iniciar sua execução.

A função `loop` é a função responsável pelo laço eterno do programa. Ou seja, ela fica repetindo seu código (como dentro de um `while (true)` até o fim da execução do programa, iniciando após a execução da função `setup`.

Esse paradigma de desenvolvimento baseado em `setup` e `loop` é muito semelhante ao paradigma usado no desenvolvimento de jogos.

Para terminar de montar seu ambiente de desenvolvimento, conecte o seu protótipo ao computador através do cabo USB, conforme mostra a imagem abaixo. Assim, você já estará pronto para enviar códigos para o dispositivo e testar seu programa quantas vezes precisar ao longo do desenvolvimento.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/2016-09-15-introducao_matriz_de_led/usb.jpg">
    <figcaption>Cabo USB</figcaption>
  </figure>
</div>

Naturalmente, nossa primeira implementação será uma função que, dada uma linha e uma coluna, acende o LED associado. Ou, melhor ainda, desenvolveremos uma função que recebe uma linha, uma coluna e um estado (ligado ou desligado) e atribui esse estado ao LED associado.

Lembra dos vetores `pinsPorts`, `linesPins` e `colsPins` que definimos quando falamos sobre mapeamentos? Esse é o momento de usar esse vetores, que servirão como conversores que transformarão os valores da linha e da coluna nos índices dos pinos cujos valores devem ser alterados para atingir o objetivo esperado (acender ou apagar o LED).

<pre class="prettyprint">
void setLedState (int lin, int col, int state)
{
  int energyPort = 13;
  int groundPort = 0;

  // Discover energyPort and groundPort from lin and col
  energyPort = pinsPorts[linesPins[lin]];
  groundPort = pinsPorts[colsPins[col]];

  if (state > 0) {
    digitalWrite(energyPort, HIGH);
    digitalWrite(groundPort, LOW);
  } else {
    digitalWrite(energyPort, LOW);
    digitalWrite(groundPort, HIGH);
  }
}
</pre>

Adicione uma chamada para essa função em sua função `setup` e envie esse código para a placa, para ver sua execução.

Depois, sinta-se livre para brincar e tentar criar coisas mais robustas.

Exemplo: um script que recebe uma configuração para a matriz de LED (informando quais LEDs devem estar acesos e quais não devem).

Para pensar: essa implementação não será tão simples quanto apenas chamar `setLedState(., .,1)` para os LEDs que devem estar acesos. Como sabemos, a matriz de LED opera através de uma lógica de multiplexação que coordena o envio de energia linha-a-linha e coluna-a-coluna. Digamos, por exemplo que queremos acender os LEDs `(2,2)`, `(2,3)` e `(3,3)` apenas. Para acender o LED `(2,2)`, nosso programa irá enviar energia para a segunda linha e para a segunda coluna, acendendo o LED correto. No entanto, ao ativar o LED `(3,3)`, as coisas saem do controle, pois:
 - Como a linha `2` e a coluna `2` estão recebendo energia, o LED `(2,2)` acende: tudo certo por enquanto.
 - Como a linha `3` e a coluna `3` estão recebendo energia, o LED `(3,3)` acende: tudo certo por enquanto.
 - Como a linha `2` e a coluna `3` estão recebendo energia, o LED `(2,3)` acende: tudo certo por enquanto.
 - Como a linha `3` e a coluna `2` estão recebendo energia, o LED `(3,2)` acende: **mas não queremos que isso aconteça**.

**Solução**: para resolver esse problema, brincamos com uma característica do corpo humano que diz que nossa visão, ao captar imagens que se alternam muito rapidamente, forma uma única imagem unindo todas as imagens captadas. Portanto, a lógica é simples:
 - Configuramos a coluna `2` como porta de energia (`HIGH`).
 - Configuramos a linha `2` como porta de energia (`HIGH`).
 - Esperamos um tempo (`delay`) muito curto. **// Aqui `(2,2)` está aceso**
 - Configuramos a linha `2` como porta de terra (`LOW`).
 - Configuramos a coluna `2` como porta de terra (`LOW`).
 - Configuramos a coluna `3` como porta de energia (`HIGH`).
 - Configuramos a linha `2` como porta de energia (`HIGH`).
 - Configuramos a linha `3` como porta de energia (`HIGH`).
 - Esperamos um tempo (`delay`) muito curto. **// Aqui `(2,3)` e `(3,3)` estão acesos**
 - Configuramos a linha `2` como porta de terra (`LOW`).
 - Configuramos a linha `3` como porta de terra (`LOW`).
 - Configuramos a coluna `3` como porta de terra (`LOW`).
 - Repetimos o processo.

Isso significa que nossa solução, dessa vez, terá que ser executada na função `loop`, e não na função `setup`. Note também que, nesse caso, estamos alternando por colunas, mas poderíamos muito bem ter feito a alternância por linhas:
 - Configuramos a linha `2` como porta de energia (`HIGH`).
 - Configuramos a coluna `2` como porta de energia (`HIGH`).
 - Configuramos a coluna `3` como porta de energia (`HIGH`).
 - Esperamos um tempo (`delay`) muito curto. **// Aqui `(2,2)` e `(2,3)` estão acesos**
 - Configuramos a coluna `2` como porta de terra (`LOW`).
 - Configuramos a coluna `3` como porta de terra (`LOW`).
 - Configuramos a linha `2` como porta de terra (`LOW`).
 - Configuramos a linha 3 como porta de energia (`HIGH`).
 - Configuramos a coluna `3` como porta de energia (`HIGH`).
 - Esperamos um tempo (`delay`) muito curto. **// Aqui `(3,3)` está aceso**
 - Configuramos a coluna `3` como porta de terra (`LOW`).
 - Configuramos a linha `3` como porta de terra (`LOW`).
 - Repetimos o processo.

E isso encerra nossa introdução à programação Arduino através da matriz de LED.
