---
layout:     post
type:       tutorial
hidden:     true
title:      "Arduino #14: Placas - Leonardo/Micro"
date:       2016-11-25
author:     "Leonardo Haddad Carlos"
author_url: ""
img:        "assets/images/tutoriais/arduino/arduino_oscomm.png"
img_url:    ""

redirect_from:
 - "2016/11/25/arduino-14board-leonardo"
 - "2016/11/25/arduino-14board-leonardo/"
---

#### Primeiros Passos com a Arduino Leonardo e Micro

As placas Leonardo e Micro usam um ATmega32U4 para oferecer mais recursos em comparação com a Uno. Neste guia, explicamos como colocar a placa em operação e quais são as diferenças com a Uno.

#### Botando a Mão na Massa

A Leonardo e a Micro são programadas usando o software do Arduino (IDE), nosso Ambiente de Desenvolvimento Integrado, comum a todas as nossas placas. Antes de poder avançar, você deve ter instalado o software do Arduino (IDE) no seu PC, conforme explicado na [página inicial de nosso Guia de Primeiros Passos]({{ site.baseurl }}/tutoriais/2016/11/20/arduino-1start/).

##### Instale os Drivers para Arduino e Micro

###### Mac

A primeira vez que você conectar uma Leonardo ou Micro em um Mac, o "Assistente de Configuração do Teclado" será lançado. Não há nada para configurar com a Leonardo/Micro, então você pode fechar esse diálogo clicando no botão vermelho no canto superior esquerdo da janela.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/install_mackey.png">
    <figcaption>Ignore a tela de configuração de teclado que abrirá no Mac</figcaption>
  </figure>
</div>

###### Windows

As instruções a seguir são para Windows 7, Vista e 10. Elas também são válidas para Windows XP, com pequenas diferenças nas janelas de diálogo. Conecte sua placa e aguarde até que o Windows comece seu processo de instalação do driver. Se o instalador não iniciar automaticamente, navegue até o Gerenciador de Dispositivos do Windows (`Iniciar > Painel de Controle > Hardware`) e localize a opção referente à Arduino Leonardo. Clique com o botão direito do mouse e escolha `Atualizar driver`.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/leo_devmanager.png">
    <figcaption>Atualize o driver usando o Gerenciador de Dispositivos</figcaption>
  </figure>
</div>

Na tela seguinte, escolha "Procurar o software do driver no computador" e clique em `Avançar`.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/leo_browsedriver.png">
    <figcaption>Escolha a opção de encontrar o software do driver no computador</figcaption>
  </figure>
</div>

Clique no botão `Procurar...` e outra caixa de diálogo será exibida: navegue até a pasta que contém o software Arduino que você acabou de baixar. Selecione a pasta de drivers e clique em `OK` e, em seguida, clique em `Avançar`.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/leo_driverurl.png">
    <figcaption>Escolha a opção de encontrar o software do driver no computador</figcaption>
  </figure>
</div>

Você receberá uma notificação de que a placa não passou no teste de logotipo do Windows. Escolha continuar assim mesmo.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/leo_driverok.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

Depois de alguns momentos, você verá a mensagem dizendo que o assistente terminou de instalar o software para Arduino Leonardo. Pressione o botão `Fechar`.

###### Linux

Não há necessidade de instalar drivers para o Ubuntu 10.0.4

##### Abra o Exemplo do Blink

Agora que sua placa está conectada ao seu computador e os drivers estão instalados corretamente, abra o esboço do exemplo de piscar de LED: `File > Examples > 1.Basics > Blink`.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/arduino/exp_blink.jpg">
    <figcaption>File > Examples > 01.Basics > Blink</figcaption>
  </figure>
</div>

##### Selecione sua Placa

Você precisará Leonardo ou Micro no menu `Tools > Board`.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/leo_chooseboard.jpg">
    <figcaption>Escolha ou a Arduino/Leonardo Uno ou a Arduino/Genuino Micro</figcaption>
  </figure>
</div>

##### Selecione sua Porta Serial

Selecione o dispositivo serial da placa a partir do menu `Tools > Serial Port`. A maneira mais fácil de descobrir a porta é desconectar sua placa e reabrir o menu; a entrada que desaparecer é a sua placa Arduino/Genuino. Reconecte a placa, reinicie o IDE e selecione essa porta serial.

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/arduino/mega_chooseserial.jpg">
    <figcaption>Selecione a porta serial correspondente</figcaption>
  </figure>
</div>

##### Envie e Execute seu Primeiro Esboço

Clique no botão `Enviar` no canto superior esquerdo para carregar e executar o esboço na sua placa:

<div class="img-container">
  <figure>
    <img src="{{ site.baseurl }}/assets/images/tutoriais/arduino/exp_blink_send.png">
    <figcaption>&nbsp;</figcaption>
  </figure>
</div>

Após o processo de compilação e upload, você verá a mensagem Done Uploading eo LED interno da placa deve começar a piscar.

#### Se Inspire!

Agora que você configurou e programou sua placa Leonardo ou Micro, você pode encontrar inspiração em nossa plataforma de tutoriais [Project Hub](https://create.arduino.cc/projecthub/products/arduino-mega-2560-genuino-mega-2560) ou aprender a usar os recursos específicos das placas Leonardo e Micro.

Para obter mais detalhes sobre o Leonardo e Micro, consulte a [página de hardware da Leonardo](https://www.arduino.cc/en/Main/ArduinoBoardLeonardo) e [página de hardware da Micro](https://www.arduino.cc/en/Main/ArduinoBoardMicro). Para obter informações adicionais sobre as capacidades USB, consulte as [páginas de referência do Mouse e do Teclado](https://www.arduino.cc/en/Reference/MouseKeyboard).

#### Por Favor, Leia...

##### Diferenças com a Arduino Uno

Em geral, você programa e usa a Leonardo e Micro como faria com outras placas do Arduino. Existem, no entanto, algumas diferenças importantes.

###### Processador único para esboços e comunicação USB

A Leonardo e Micro diferem de outras placas Arduino no fato de usarem um único microcontrolador para executar seus esboços e para realizar a comunicação USB com o computador. O Uno e outras placas utilizam microcontroladores separados para estas duas funções, o que significa que a ligação USB ao computador permanece estabelecida independentemente do estado do microcontrolador principal. Ao combinar estas duas funções em um único processador, a Leonardo permite mais flexibilidade na sua comunicação com o computador. Ela também ajuda a reduzir o custo da placa, removendo a necessidade de um processador adicional.

###### Re-enumeração serial ao reiniciar.

Uma vez que as placas não têm um chip dedicado para lidar com a comunicação serial, isso significa que a porta serial é virtual - é uma rotina de software, tanto no seu sistema operacional, quanto na própria placa. Assim como seu computador cria uma instância do driver de porta serial quando você conecta qualquer Arduino, a Leonardo/Micro cria uma instância serial sempre que executa o bootloader. A placa é uma instância do driver Connected Device Class (CDC) do USB.

Isso significa que cada vez que você reinicia a placa, a conexão serial USB é quebrada e restabelecida. A placa irá desaparecer da lista de portas seriais, e a lista será re-enumerada. Qualquer programa que tenha uma conexão serial aberta com a Leonardo perderá sua conexão. Isso contrasta com a Arduino Uno, com o qual você pode reiniciar o processador principal (o ATmega328P) sem fechar a conexão USB (que é mantida pelo processador ATmega8U2 ou ATmega16U2 secundário). Essa diferença tem implicações na instalação, upload e comunicação do driver; essas implicações serão vistas abaixo.

###### Sem reset quando você abre a porta serial.

Ao contrário da Arduino Uno, a Leonardo e a Micro não reiniciam o seu esboço quando você abre uma porta serial no computador. Isso significa que você não verá dados em série que já foram enviados para o computador pela placa, incluindo, por exemplo, a maioria dos dados enviados na função `setup()`.

Esta alteração significa que se você estiver usando qualquer instrução entre `Serial.print()`, `println()` e `write()` em sua configuração, elas não aparecerão quando você abrir o monitor serial. Para contornar isso, você pode verificar para ver se a porta serial está aberta após chamar `Serial.begin()` assim:

<pre class="prettyprint">
Serial.begin(9600);
// Enquanto o fluxo serial não está aberto, não faça nada:
while (!Serial);
</pre>

###### Emulação de teclado e mouse

Uma vantagem de usar um único chip para seus esboços e para USB é a maior flexibilidade na comunicação com o computador. Enquanto a placa aparece como uma porta serial virtual para o seu sistema operacional (também chamado de CDC) para programação e comunicação (ex.: com a Arduino Uno), ela também pode se comportar como um teclado (HID) ou mouse. Consulte a seção "Boas Práticas de Programação" abaixo para obter um aviso sobre o uso dessa funcionalidade.

###### Separação de comunicação USB e serial

Na Leonardo e Micro, a classe Serial principal faz referência ao driver serial virtual na placa para conexão com o computador por USB. Não está ligado aos pinos físicos 0 e 1 , ao contrário do que acontece na Uno e placas anteriores. Para usar a porta serial de hardware (pinos 0 e 1, RX e TX), use Serial1. (Consulte as [páginas de referência Serial](https://www.arduino.cc/en/Reference/Serial) para obter mais informações.)

###### Diferenças nas capacidades dos pinos

A Leonardo tem algumas pequenas diferenças nas capacidades e atribuições de vários pinos (especialmente para SPI e TWI). Estes são detalhados na [página de hardware](https://www.arduino.cc/en/Main/ArduinoBoardLeonardo).

#### Upload de código para a Leonardo e Micro

Em geral, você carrega o código para a Leonardo ou Micro como faria com a Uno ou outras placas do Arduino. Clique no botão de upload no IDE do Arduino e o seu esboço será automaticamente carregado para a placa e, então, iniciado. Isso funciona mais ou menos do mesmo modo que com a Uno: o software Arduino inicia uma reinicialização da placa, iniciando o bootloader - que é responsável por receber, armazenar e iniciar o novo esboço.

No entanto, como a porta serial é virtual, ela desaparece quando a placa é redefinida, o software Arduino usa uma estratégia de sincronização de upload diferente da estratédia da Uno e outras placas. Em particular, depois de iniciar a reinicialização automática da Leonardo ou da Micro (usando a porta serial selecionada no menu `Tools > Serial Port`), o software do Arduino aguarda uma nova porta serial / COM virtual (CDC) aparecer - uma que ela assume que representa o bootloader. Em seguida, o software do Arduino executa o upload nesta porta recém-aparecida.

Essas diferenças afetam a maneira como você usa o botão físico de reset para executar upload se o auto-reset não estiver funcionando. Aperte e mantenha pressionado o botão de reinicialização na Leonardo ou Micro e, em seguida, aperte o botão de upload no software do Arduino. Solte o botão de reinicialização apenas após ver a mensagem "Uploading..." (Enviando...) aparecer na barra de status do software. Quando você fizer isso, o bootloader será iniciado, criando uma nova porta serial virtual (CDC) no computador. O software verá essa porta aparecer e executará o upload usando-a. Novamente, isso só é necessário se o processo de upload normal (ou seja, apenas pressionar o botão de upload) não estiver funcionando. (Observe que a reinicialização automática é iniciada quando o computador abre a porta serial em 1200 baud e, em seguida, fecha-a; isso não funcionará se algo interferir naa comunicação USB da placa - por exemplo, interrupções desativadas.

#### Boa prática de codificação com o Leonardo e Micro

##### Uma palavra de cautela sobre o uso de bibliotecas de Mouse e Teclado USB

Se a biblioteca de Mouse ou Teclado estiver em execução constantemente, será difícil programar sua placa. Funções como `Mouse.move()` e `Keyboard.print()` moverão o cursor ou enviarão batidas de teclas para um computador conectado e só devem ser chamadas quando você estiver pronto para lidar com elas. Recomenda-se usar um sistema de controle para ativar essa funcionalidade, como um switch físico ou responder apenas a entradas específicas que você pode controlar. Ao usar a biblioteca Mouse ou Teclado, pode ser melhor testar sua saída primeiro usando `Serial.print()`. Dessa forma, você pode ter certeza de quais valores estão sendo relatados. Consulte os exemplos de Mouse e Teclado para saber como gerenciar isso.

##### Usando o monitor serial de forma eficaz

Como a serial está passando por apenas um processador, a placa é capaz de preencher o buffer serial do computador mais rápido do que a Uno ou placas anteriores. Você pode notar que se você enviar serial continuamente, por exemplo, como isso:

<pre class="prettyprint">
void loop () {
  int sensorReading = analogicalRead(A0);
  Serial.println(sensorReading);
}
</pre>

O Monitor Serial no IDE diminui de velocidade consideravelmente enquanto tenta manter-se. Se isso acontecer, adicione um pequeno atraso ao seu laço (loop) para que o buffer serial do computador não seja preenchido tão rápido. Mesmo um atraso de milissegundos ajudará:

<pre class="prettyprint">
void loop () {
  int sensorReading = analogicalRead(A0);
  Serial.println(sensorReading);
  delay(1);
}
</pre>

Aplicações seriais que usam bibliotecas nativas que não sejam a biblioteca RXTX lêem o buffer serial mais rápido, portanto, você não deve encontrar muito esse erro fora do Monitor Serial, Processing ou outros aplicativos seriais baseados em RXTX.

----

Link para a página original: [Getting Started Guide - Boards - Leonardo/Micro](https://www.arduino.cc/en/Guide/ArduinoLeonardoMicro).

----

#### Licença

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0](https://creativecommons.org/licenses/by-sa/3.0). Os exemplos de código do guia são disponibilizados para o domínio público.
