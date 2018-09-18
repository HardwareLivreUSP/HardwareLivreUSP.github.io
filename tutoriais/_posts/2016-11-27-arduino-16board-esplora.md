---
layout:     post
type:       tutorial
hidden:     true
title:      "Arduino #16: Placas - Esplora"
date:       2016-11-27
author:     "Leonardo Haddad Carlos"
author_url: ""
img:        "assets/images/tutoriais/arduino/arduino_oscomm.png"
img_url:    ""

redirect_from:
 - "2016/11/27/arduino-16board-esplora"
 - "2016/11/27/arduino-16board-esplora/"
---

#### Primeiros Passos com a Arduino Esplora

O Arduino Esplora é um dispositivo que tem um computador minúsculo chamado microcontrolador, e um número de entradas e saídas. Para entradas, há um joystick, quatro botões, um sensor de luz, um potenciômetro linear (slider), um microfone, um sensor de temperatura e um acelerômetro. Para as saídas há um buzzer (emossor de sons) e um LED de três cores. À primeira vista, parece um controle de videogame.

Com o Esplora, você pode escrever software que toma informações das entradas as usa para controlar as saídas na placa, ou controlar seu computador, tal como um mouse ou teclado.

O Esplora é diferente de todas as placas anteriores do Arduino no fato de possuir entradas e saídas já conectadas ao quadro. Isso significa que você não precisa saber como conectar sensores eletrônicos ou atuadores para usá-lo. Como resultado, a programação para ele é um pouco diferente do que para outras placas Arduino. Ele tem sua própria biblioteca que facilita a leitura dos sensores de entrada e gravação para os atuadores de saída. Você verá como usar a biblioteca neste guia e nas páginas de referência da [biblioteca do Esplora](https://www.arduino.cc/en/Reference/EsploraLibrary) também.

Este guia irá guiá-lo através do processo de conexão da placa ao seu computador e de upload de um programa Arduino, chamado de sketch (esboço).

#### 1. Obtenha uma Arduino Esplora e um cabo USB

Este tutorial é para a [Arduino Esplora](https://www.arduino.cc/en/Main/ArduinoBoardEsplora). Se você tiver outra placa, leia o [guia de primeiros passos]({{ site.baseurl }}/tutoriais/2016/11/20/arduino-1start/) correspondente à placa.

Você também precisa de um cabo Micro-USB apropriado (plug "A" para plug "Micro-B"). Alguns telefones celulares ou players de música portáteis usam esse tipo de cabo para transferir dados para/do PC, então você pode já possuir um desses. Esse cabo é diferente de um cabo USB-Mini, pois possui um conector mais fino. Você pode ver as diferenças [aqui](http://en.wikipedia.org/wiki/File:Usb_connectors.JPG) (o conector que você precisa é o conector à esquerda nesta foto).

#### 2. Faça o download do Ambiente de Desenvolvimento

Obtenha a versão mais recente do IDE do Arduino na [página de download](https://www.arduino.cc/en/Main/Software). Você precisará da versão 1.0.3 ou posterior do IDE do Arduino.

Quando o download terminar, descompacte o arquivo baixado em qualquer diretório. Certifique-se de preservar a estrutura de pastas. Clique duas vezes na pasta para abri-la. Deve haver alguns arquivos e subpastas dentro. Se você estiver em um Mac, a pasta zip contém apenas o aplicativo.

#### 3. Conecte a placa

Conecte a placa Arduino ao computador utilizando o cabo USB. O LED de energia verde (etiquetado como ON) deve acender, e o LED amarelo marcado como "L" deve começar a brilhar. Após cerca de 8 segundos, o LED amarelo deve começar a piscar e desligar.

#### 4. Instale os Drivers

##### Mac

A primeira vez que você conectar uma Esplora em um Mac, o "Assistente de Configuração do Teclado" será lançado. Não há nada para configurar com a Esplora, então você pode fechar esse diálogo clicando no botão vermelho no canto superior esquerdo da janela.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/install_mackey.png">
    <figcaption>Ignore a tela de configuração de teclado que abrirá no Mac</figcaption>
  </figure>
</div>

##### Windows

As instruções a seguir são para Windows 7. Elas também são válidas para Windows XP, com pequenas diferenças nas janelas de diálogo.

- Conecte sua placa e aguarde até que o Windows comece seu processo de instalação do driver. Se o instalador não iniciar automaticamente, navegue até o Gerenciador de Dispositivos do Windows (`Iniciar > Painel de Controle > Hardware`) e localize a opção referente à Arduino Esplora. Clique com o botão direito do mouse e escolha `Atualizar driver`.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/esplora_devmanager.png">
    <figcaption>Atualize o driver usando o Gerenciador de Dispositivos</figcaption>
  </figure>
</div>

- Na tela seguinte, escolha "Procurar o software do driver no computador" e clique em `Avançar`.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/esplora_browsedriver.png">
    <figcaption>Escolha a opção de encontrar o software do driver no computador</figcaption>
  </figure>
</div>

- Clique no botão `Procurar...` e outra caixa de diálogo será exibida: navegue até a pasta que contém o software Arduino que você acabou de baixar. Selecione a pasta de drivers e clique em `OK` e, em seguida, clique em `Avançar`.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/leo_driverurl.png">
    <figcaption>Escolha a opção de encontrar o software do driver no computador</figcaption>
  </figure>
</div>

- Você receberá uma notificação de que a placa não passou no teste de logotipo do Windows. Escolha continuar assim mesmo.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/leo_driverok.png">
    <figcaption>Escolha a opção de encontrar o software do driver no computador</figcaption>
  </figure>
</div>

- Depois de alguns momentos, você verá a mensagem dizendo que o assistente terminou de instalar o software para Arduino Leonardo. Pressione o botão `Fechar`.

##### Linux

Não há necessidade de instalar drivers para o Ubuntu 12.04

#### 5. Programando a placa

Clique duas vezes no aplicativo Arduino.

Nota: se o software Arduino for carregado no idioma errado, você poderá alterá-lo na caixa de diálogo de preferências. Consulte a [página de ambiente]({{ site.baseurl }}/tutoriais/2016/11/21/arduino-7environment/) para obter detalhes.

##### Abra o exemplo de Blink (Piscar) da Esplora

Abra o esboço de exemplo `LED Blink: File > Examples > Esplora > beginners > EsploraBlink`.

Nota: Se você não vir o exemplo EsploraBlink, talvez seja necessário atualizar a biblioteca Esplora. Para fazer isso, saia do IDE do Arduino e baixe [este arquivo .zip](https://www.arduino.cc/en/uploads/Guide/Esplora.zip). Quando você descompactá-lo, terá uma pasta chamada Esplora. Procure na pasta `Documentos` (no OSX ou no Ubuntu) ou na pasta `Meus Documentos` (no Windows), pela pasta de sketches da Arduino. Ela se chamará "Arduino" e deverá haver uma pasta dentro dela chamada "libraries". Caso contrário, crie uma pasta de bibliotecas (de nome "libraries") dentro da pasta de sketches. Mova a pasta Esplora que você descompactou para a pasta bibliotecas. Em seguida, reinicie o IDE do Arduino. Agora você deve ser capaz de abrir o esboço EsploraBlink como descrito acima.

##### Configure o IDE para a Esplora

Uma vez que o Arduino IDE é usado para muitas placas Arduino diferentes, você precisa dizer que você está trabalhando com a Esplora. Abra o menu `Tools > Board` e escolha `Arduino Esplora`.

##### Selecionando a porta USB correta

O IDE do Arduino precisa saber qual de suas portas USB está conectada com a Esplora. O menu `Files > Serial` lista as portas disponíveis:

- Se apenas um item for exibido, clique nessa;
- Se duas ou mais portas são mostradas, você pode desconectar a Esplora e reabrir o menu; a  entrada que desaparecer deverá ser a placa Esplora. Reconecte a placa e selecione essa porta serial.

##### Envie o programa

Agora, basta clicar no botão "Upload" no IDE. Espere alguns segundos - você deve ver os leds RX e TX da placa piscando. Se o envio for bem-sucedido, a mensagem "Done uploading." aparecerá na barra de status do software.

Alguns segundos após o carregamento terminar, você deve ver o LED RGB amarelo na placa começar a piscar, mudando a cor de vermelho para verde, para azul, para amarelo, para ciano, para magenta, e para branco. Se sim, parabéns! Você conseguiu rodar a Esplora.

#### 6. Manipule o LED RGB

Agora que você verificou que a Esplora consegue se conectar ao seu computador e você pode carregar o código, é hora de experimentar algumas de suas funções. A Esplora tem sensores de entrada, cujas informações são obtidas através dos comandos de leitura, e atuadores de saída, que você controla usando comandos de gravação. O LED RGB e o buzzer são os dois principais atuadores de saída. O joystick, potenciômetro linear (slider), microfone, acelerômetro, sensor de temperatura e botões são os sensores de entrada. Você também pode adicionar suas próprias entradas e saídas usando os conectores de entrada e saída TinkerKit.

Neste exemplo, você verá o LED RGB piscar cada uma de suas cores uma vez, depois as três ao mesmo tempo. A biblioteca Esplora, incluída no início do esboço, tem uma série de métodos que simplificarão o código que você precisa usar.

O esboço abaixo é semelhante ao exemplo EsploraBlink, mas controla o LED de uma maneira ligeiramente diferente. Você pode usar o comando `Esplora.writeRGB()` e dar-lhe valores vermelhos, verdes e azuis dessa forma:

<pre class="prettyprint">
Esplora.writeRGB(255, 255, 255); // Sets red, green and blue all to full brightness
</pre>

Ou você pode ativar cada cor individual usando os comandos `Esplora.writeRed()`, `Esplora.writeGreen()` e `Esplora.writeBlue()`, como você vê abaixo.

Copie o código abaixo e cole-o no IDE do Arduino. Certifique-se de ter selecionado corretamente a porta serial e a placa Esplora, como você fez anteriormente. Conecte sua placa e carregue o código. Uma vez carregado, você deve ver o LED RGB piscando.

<pre class="prettyprint">
// Include the Esplora library
#include &lt;Esplora.h&gt;

void setup () {
  // Nothing to setup
}

void loop () {
  // Write light level to the red LED
  // 0 means the LED is off, 255 is full brightness
  Esplora.writeRed(255);

  // Add a delay to keep the LED lit for
  // 1000 milliseconds (1 second)
  delay(1000);

  // Turn the red LED off, and the green LED on
  Esplora.writeRed(0);
  Esplora.writeGreen(255);

  // Add a delay
  delay(1000);

  // Turn the green LED off, and the blue LED on
  Esplora.writeGreen(0);
  Esplora.writeBlue(255);

  // Add a delay
  delay(1000);

  // Turn all the LEDs on together
  Esplora.writeRGB(255, 255, 255);

  // Add a delay
  delay(1000);

  // Turn the LEDs off
  Esplora.writeRGB(0, 0, 0);

  // Add a delay
  delay(1000);
}
</pre>

#### 7. Inputs manipulando outputs

A Esplora tem alguns sensores já em sua superfície. Neste exemplo, você usará o potenciômetro linear (o slider na parte inferior da placa) para alterar o brilho do LED RGB.

Entradas na Esplora fornecem valores 0 entre e 1023, com exceção para os botões, que retornam apenas 0 ou 1. Saídas não têm o mesmo intervalo, no entanto. A saída do LED varia de 0 a 255. Para mapear o valor de entrada em um valor de saída, você deverá dividir a entrada por 4. Este novo número será o nível de brilho do LED.

Copie o código abaixo e faça o upload, como fez com os exemplos anteriores. Uma vez carregado, mova o slider para frente e para trás. Você deve ver o LED vermelho mudar seu brilho.

<pre class="prettyprint">
// Include the Esplora library
#include &lt;Esplora.h&gt;

void setup () {
  // Nothing to setup
}

void loop () {
  // Read the sensor into a variable
  int slider = Esplora.readSlider();

  // Convert the sensor readings to light levels
  byte bright  = slider/4;

  // Write the light levels to the Red LED
  Esplora.writeRed(bright);

  // Add a small delay to keep the LED from flickering:
  delay(10);
}
</pre>

#### 8. Próximos passos

Há um número razoável de exemplos de esboço em `File > Examples > Esplora`, que lhe mostram mais sobre o que você pode fazer com sua Esplora. Eles são divididos em exemplos para a programação de Iniciantes ou Especialistas. Se você está apenas começando na programação, ou se quer ver como usar uma entrada ou saída de cada vez, comece com os exemplos de Iniciantes. Se você é um programador experiente, os exemplos avançados lhe darão mais algumas ideias.

Se você nunca programou em qualquer linguagem antes, há mais exemplos incluídos com o IDE para mostrar algumas das estruturas básicas de programação. Note, no entanto, que estes exemplos terão de ser modificados um pouco para trabalhar com a Esplora. Você precisará incluir a biblioteca Esplora, escolhendo `Import Library... > Esplora` no menu `Tools`, e você precisará alterar as entradas e saídas gerais do Arduino para as entradas e saídas Esplora. Para saber mais sobre isso, consulte o [Guia para usar a Esplora com os Exemplos do Arduino]({{ site.baseurl }}/tutoriais/2016/11/27/more-esplora-examples/).

Você dar uma olhada para as páginas de referência da [Biblioteca Esplora](https://www.arduino.cc/en/Reference/EsploraLibrary) para entender como usar vários sensores e atuadores com a biblioteca Esplora. Você pode ver mais exemplos na página de [exemplos](https://www.arduino.cc/en/Tutorial/HomePage).

Se você tiver problemas, consulte as sugestões de [solução de problemas]({{ site.baseurl }}/tutoriais/2016/11/25/arduino-10troubleshooting/).

----

Link para a página original: [Getting Started Guide - Boards - Esplora](https://www.arduino.cc/en/Guide/ArduinoEsplora).

----

#### Licença

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0](https://creativecommons.org/licenses/by-sa/3.0). Os exemplos de código do guia são disponibilizados para o domínio público.
