---
layout:     post
type:       tutorial
hidden:     true
title:      "Arduino #21: Placas - LilyPad USB"
date:       2016-11-27
author:     "Leonardo Haddad Carlos"
author_url: ""
img:        "assets/images/tutoriais/arduino/arduino_oscomm.png"
img_url:    ""

redirect_from:
 - "2016/11/27/arduino-21lilypadusb"
 - "2016/11/27/arduino-21lilypadusb/"
---

#### Primeiros Passos com a Arduino LilyPad USB

Para programar a Arduino LilyPad USB, conecte-a ao computador com um cabo Micro-USB. Selecione `LilyPad Arduino USB` no menu `Tools > Board`.

#### 1. Visão Geral

Como as outras placas Arduino LilyPad, a [LilyPad Arduino USB](https://www.arduino.cc/en/Main/ArduinoBoardLilyPadUSB) foi projetada para ser costurada em roupas e outros tecidos com fio condutor. A Arduino LilyPad pode ser alimentada a partir da conexão USB ou uma bateria de 3.7V LiPo. `A placa funciona em 3.3V; aplicar mais voltagem (por exemplo, 5V) aos seus pinos pode danificá-la`. Se você conectar um cabo USB de um computador e uma bateria LiPo à LilyPad, ela utilizará a bateria. O interruptor na LilyPad permite ligar ou desligar a placa (use a posição `CHG` para desligar a placa).

Semelhante à Arduino Leonardo e Micro, a Arduino LilyPad usa apenas um único microcontrolador (o Atmel ATmega32U4) para executar seus esboços e se comunicar por USB com o computador. Isso significa que você só precisa de um cabo USB para programar a Arduino LilyPad USB (em oposição a também precisar de um adaptador USB serial FTDI como acontece com outras LilyPads), mas também significa que há algumas diferenças na forma como a comunicação USB funciona.

Para obter informações sobre como fazer conexões entre a Arduino LilyPad e outros componentes com fio condutor, consulte o [tutorial para Arduino LilyPad de Leah Buechley](http://web.media.mit.edu/~leah/LilyPad/) (em inglês).

#### 2. Diferenças com outras placas Arduino LilyPad

A Arduino LilyPad USB usa um único processador (o ATmega32U4) para executar seus esboços e se comunicar via USB com o computador. Isso fornece mais flexibilidade - por exemplo, a placa pode emular um teclado ou mouse - mas também significa que a conexão USB é redefinida sempre que o processador é redefinido (por exemplo, quando você carrega um novo esboço).

Para obter detalhes sobre essas diferenças, consulte o [guia para as Arduino Leonardo e Micro]({{ site.baseurl }}/tutoriais/2016/11/20/arduino-14board-leonardo/). Além disso, consulte a seção a seguir para algumas diferenças entre a Arduino LilyPad USB e o Leonardo ou Micro.

#### 3. Diferenças com as Arduino Leonardo e Micro

Por funcionar em 3.3V, a Arduino LilyPad USB é limitada a uma velocidade de clock de 8 MHz contra 16 MHz para a Leonardo e Micro. Seus esboços devem se comportar da mesma forma em qualquer placa (por exemplo, o `delay(1000)` pausará por 1 segundo), mas é importante selecionar corretamente a placa apropriada no menu de placas. Carregar em uma Arduino LilyPad USB com a placa configurada para Arduino Leonardo ou Arduino Micro significará que seu esboço não será capaz de se comunicar por USB. Se isso acontecer, você precisará recuperar usando o método descrito na próxima seção.

#### 4. Enviando esboços para a Arduino LilyPad

Normalmente, você enviará esboços para a Arduino LilyPad USB faz mesma forma que faz com outras placas Arduino: selecione `LilyPad Arduino USB` no menu `Tools > Board` e a porta serial apropriada no menu `Tools > Serial Port` e pressione o botão de upload. Isso irá redefinir a LilyPad, lançando o bootloader (gerenciador de inicialização), que recebe o novo esboço do computador e armazena-o na placa. O bootloader então lança automaticamente o novo sketch (esboço). Você pode saber quando o bootloader está sendo executado porque o LED integrado (pino 13) irá acender e apagar (respirar).

Por vezes, no entanto, esta reinicialização automática falha. Isso pode acontecer, por exemplo, se você enviar um esboço para a LilyPad com uma placa diferente (por exemplo, a Leonardo ou Micro) selecionada no menu `Tools > Board`. Se isso acontecer, há uma correção fácil: você pode pressionar o botão de reinicialização na LilyPad duas vezes em rápida sucessão para iniciar o bootloader. Para fazer o upload com esta técnica, primeiro pressione o botão upload no software do Arduino; em seguida, quando vir a mensagem de estado "Uploading...", aperte duas vezes o botão de reinicialização. Isso deve iniciar o bootloader, e o software do Arduino carregará seu esboço. Você pode ter que "jogar" um pouco com o timing relativo de pressionar o botão de upload no software versus apertar duas vezes o botão de reinicialização na placa.

#### 5. Recursos Adicionais

- [Página do produto Arduino LilyPad USB](https://www.arduino.cc/en/Main/ArduinoBoardLilyPadUSB): detalhes sobre o hardware e software da placa.
- [lilypadarduino.org](http://lilypadarduino.org/): um guia completo para começar com a LilyPad.
- [Categoria LilyPad no SparkFun](https://www.sparkfun.com/categories/135): sensores, atuadores e outras placas para uso com a Arduino LilyPad.

----

Link para a página original: [Getting Started Guide - Boards - LilyPad USB](https://www.arduino.cc/en/Guide/ArduinoLilyPadUSB).

----

#### Licença

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0](https://creativecommons.org/licenses/by-sa/3.0). Os exemplos de código do guia são disponibilizados para o domínio público.
