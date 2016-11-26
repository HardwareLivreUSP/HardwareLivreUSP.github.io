---
layout:     post
title:      "Tutoriais Arduino #10: Solução de Problemas"
date:       2016-11-25
author:     "Leonardo Haddad Carlos"
img:        "post_img/arduino_oscomm.png"
---

## Por que não consigo carregar meus programas para a placa Arduino?

Há muitas peças envolvidas no envio de um programa para a sua placa Arduino, e se algum deles não estiver certo, o upload pode falhar. Eles incluem: os drivers para a placa, a placa e as seleções/configurações de porta serial no software so Arduino, o acesso à porta serial, a conexão física à placa, o firmware no 8U2 (no Uno e Mega 2560), o bootloader no microcontrolador principal da placa, as configurações do fusível do microcontrolador, e muito mais. Aqui estão algumas sugestões específicas para a solução de problemas de cada uma das peças.

### Software do Arduino

 - Certifique-se de que a placa correta está selecionada no menu `Tools`> `Board`. Por exemplo: se você tem um Arduino Uno, você precisará escolhê-lo na lista. Além disso, placas mais recentes como Arduino Duemilanove vêm com um ATmega328, enquanto os mais antigos têm um ATmega168. Para verificar, leia o texto no microcontrolador (o chip maior) em sua placa Arduino. Para obter mais informações sobre os itens do menu de placas, consulte o [guia de Ambiente de Desenvolvimento][environment].
 - Em seguida, verifique se a porta apropriada está selecionada no menu `Tools`> `Serial Port` (se sua porta não aparecer, tente reiniciar o IDE com a placa conectada ao computador). No Mac, a porta serial deve ser algo como `/dev/tty.usbmodem621` (para o Uno ou Mega 2560) ou `/dev/tty.usbserial-A02f8e` (para placas antigas baseadas em FTDI). No Linux, deve ser `/dev/ttyACM0` ou similar (para o Uno ou Mega 2560) ou `/dev/ttyUSB0` ou similar (para placas mais antigas). No Windows, será uma porta COM, mas você precisará verificar no Gerenciador de Dispositivos (na parte de Portas) para ver qual é a porta COM correta. Se parecer que você não tem uma porta serial para sua placa Arduino, veja as informações sobre drivers abaixo.

### Drivers

Os drivers fornecem uma forma do software em seu computador (ou seja, o software do Arduino) se comunicar com o hardware que você conectar ao seu computador (a placa Arduino). No caso do Arduino, os drivers funcionam fornecendo uma porta serial virtual (ou porta COM virtual). O Arduino Uno e Mega 2560 usam drivers padrão (CDC USB) fornecidos pelo sistema operacional para se comunicar com o ATmega8U2 na placa. Outras placas Arduino usam drivers FTDI para se comunicar com o chip FTDI na placa (ou no conversor serial USB).

A maneira mais fácil de verificar se os drivers da placa estão instalados corretamente é abrindo o menu `Tools`> `Serial Port` no software do Arduino com a placa Arduino conectada ao computador. Itens adicionas de menu devem aparecer em relação a quando você abre o menu sem o Arduino conectado ao computador. Note que não importa o nome que a porta serial da placa Arduino recebe, desde que seja a que você escolher no menu.

 - No Windows 7 (particularmente na versão de 64 bits), você pode precisar entrar no Gerenciador de Dispositivos e atualizar os drivers para o Uno ou Mega 2560. Basta clicar com o botão direito do mouse no dispositivo (a placa deve estar conectada ao computador) e mandar o Windows apontar novamemente para o arquivo .inf apropriado. O arquivo .inf estará no diretório `drivers/` do diretório do software do Arduino (não no subdiretório Drivers USB FTDI dele).
 - No Linux, o Uno e o Mega 2560 aparecem como dispositivos da forma `/dev/ttyACM0`. No entanto, eles não são suportados pela versão padrão da biblioteca RXTX que o software do Arduino utiliza para comunicação serial. O download do software Arduino para Linux inclui uma versão da biblioteca RXTX incluída para também procurar por estes dispositivos `/dev/ttyACM *`. Há também [um pacote Ubuntu][rxtxpack] (para 11.04) que inclui suporte para esses dispositivos. Se, no entanto, você estiver usando o pacote RXTX da sua distribuição, talvez seja necessário fazer um link simbólico de `/dev/ttyACM0` para `/dev/ttyUSB0` (por exemplo) para que a porta serial apareça no software Arduino.
Execute:
```sh
$ sudo usermod -a -G tty seuUsuario
$ sudo usermod -a -G dialout seuUsuario
```
Faça logoff e logon novamente para que as alterações entrem em vigor.

### Acesso à Porta Serial

 - No Windows, se o software for lento para iniciar ou falhar no lançamento, ou o menu Ferramentas for lento para abrir, talvez seja necessário desabilitar portas serial Bluetooth ou outras portas COM em rede no Gerenciador de dispositivos. O software Arduino verifica todas as portas seriais (COM) no seu computador quando ele é iniciado e quando você abre o menu Ferramentas, e essas portas em rede podem causar, por vezes, grandes atrasos ou falhas.
 - Verifique se você não está executando nenhum programa que analise todas as portas seriais, como o software USB Cellular Wifi Dongle (por exemplo, da Sprint ou Verizon), aplicativos de sincronização PDA, drivers Bluetooth-USB (por exemplo, BlueSoleil), ferramentas virtuais de daemon, etc.
 - Certifique-se de que você não tem software de firewall que bloqueia o acesso à porta serial (por exemplo, ZoneAlarm).
 - Você pode precisar sair do Processing, PD, vvvv, etc. se você estiver usando-os para ler dados através da conexão USB ou serial para a placa Arduino.
 - No Linux, você pode tentar executar o software Arduino como root, ao menos temporariamente, para ver se ele corrige o upload.

### Conexão Física

 - Primeiro, certifique-se de que a placa está ligada (o LED verde está aceso) e conectada ao computador.
 - O Arduino Uno e o Mega 2560 podem ter problemas para se conectar a um Mac através de um hub USB. Se nada aparecer no menu `Tools`> `Serial Port`, tente conectar a placa diretamente ao computador e reiniciar o IDE do Arduino.
 - Desconecte os pinos digitais 0 e 1 durante o carregamento, pois eles são compartilhados com a comunicação serial com o computador (eles podem ser conectados/usados normalmente após o upload do código).
 - Experimente fazer o upload sem nada conectado à placa (além do cabo USB, é claro).
 - Certifique-se de que a placa não está tocando em nada metálico ou condutor.
 - Experimente um cabo USB diferente; às vezes eles podem falhar.

### Auto-reset (reinício automático)

 - Se você tiver uma placa que não suporta auto-reset, certifique-se de que você está redefinindo a placa alguns segundos antes de fazer o upload. O Arduino Diecimila, Duemilanove e Nano suportam auto-reset, como fazem o LilyPad, Pro e Pro Mini com cabeçalhos de programação de 6 pinos.
 - No entanto, note que alguns Diecimila foram acidentalmente gravados/queimados com o bootloader errado e podem exigir que você pressione fisicamente o botão de reinicialização (Reset) antes de fazer o upload; veja esta questão  na seção "Por que o meu Diecimila demora tanto tempo (6-8 segundos) para iniciar o meu esboço?".
 - No entanto, em alguns computadores, talvez seja necessário pressionar o botão `Reset` na placa depois de clicar no botão de upload no ambiente Arduino. Experimente diferentes intervalos de tempo entre os dois, até 10 segundos ou mais.
 - Se você receber esse erro: `[VP 1] Device is not responding correctly.` (O dispositivo não está respondendo corretamente.), tente fazer o upload novamente (ou seja, reinicializar a placa e pressionar o botão de download novamente).

### Bootloader

Certifique-se de que há um bootloader gravado na placa Arduino. Para verificar, reinicialize a placa. O LED L interno (que está conectado ao pino 13) deve piscar. Se não, pode não haver um bootloader em sua placa.

### Suporte no Fórum

Se ainda assim não funcionar, você pode pedir ajuda [no fórum][forum]. Inclua as seguintes informações:

 - Seu sistema operacional.
 - Que tipo de placa você tem. Se for um Mini, LilyPad ou outra placa que necessite de fiação extra, inclua uma foto do seu circuito, se possível.
 - Se você já foi ou não capaz de fazer o upload para a placa. Se sim, o que você estava fazendo com a placa antes / quando ela parou de funcionar e qual software você adicionou recentemente ou removeu do seu computador?
 - As mensagens exibidas quando você tenta fazer upload com saída detalhada (verbose) ativada. Para ativar a saída detalhada, marque a caixa ao lado de `File`> `Preferences`> `Show verbose output during:`> `upload`.
 - Clique no botão `Copy error messages` (Copiar mensagens de erro) no lado direito da caixa. Ao submeter no fórum use tags de código (botão </> na barra de ferramentas do site do fórum) para postar a saída. Assim, ela será corretamente formatada.

## Por que vejo a mensagem "Build folder disappeared or could not be written" no Mac OS X?

`A pasta de compilação desapareceu ou não pôde ser escrita.`

Você arrastou o Arduino.app para fora da imagem de disco (e para, digamos, a pasta Aplicativos)? Caso contrário, você não poderá fazer o upload dos exemplos.

## Por que o software do Arduino não é executado depois que eu atualizei o Java no meu Mac?

A última atualização Java da Apple tenta usar a versão de 64 bits de bibliotecas nativas, mas o aplicativo Arduino vem com uma versão de 32 bits da biblioteca RXTX. Se você iniciar o Arduino, você receberá um erro como:

```sh
Uncaught exception in main method: java.lang.UnsatisfiedLinkError: /Applications/arduino-0016/Arduino 16.app/Contents/Resources/Java/librxtxSerial.jnilib: no suitable image found.  Did find: /Applications/arduino-0016/Arduino 16.app/Contents/Resources/Java/librxtxSerial.jnilib: no matching architecture in universal wrapper
```

Para corrigir isso, clique no aplicativo Arduino (por exemplo, Arduino 16.app) no `Finder` e selecione `Get Info` (Obter Informações) no menu `File` (Arquivo). No painel de informações, clique na caixa de seleção `Open` (Abrir) em modo de 32 bits. Em seguida, você deve ser capaz de iniciar o Arduino normalmente.

## Por que eu recebo o erro java.lang.StackOverflowError quando tento compilar meu programa?

O ambiente Arduino faz algum processamento preliminar no seu esboço manipulando o código através de expressões regulares. Isso às vezes fica confuso por certas strings (seqüências de texto). Se você vir um erro como:

```sh
java.lang.StackOverflowError
at java.util.Vector.addElement(Unknown Source)
at java.util.Stack.push(Unknown Source)
at com.oroinc.text.regex.Perl5Matcher._pushState(Perl5Matcher.java) 
```
ou:

```sh
at com.oroinc.text.regex.Perl5Matcher._match(Perl5Matcher.java)
at com.oroinc.text.regex.Perl5Matcher._match(Perl5Matcher.java)
at com.oroinc.text.regex.Perl5Matcher._match(Perl5Matcher.java)
at com.oroinc.text.regex.Perl5Matcher._match(Perl5Matcher.java)
at com.oroinc.text.regex.Perl5Matcher._match(Perl5Matcher.java)
at com.oroinc.text.regex.Perl5Matcher._match(Perl5Matcher.java)
at com.oroinc.text.regex.Perl5Matcher._match(Perl5Matcher.java) 
```

Então é isso o que está acontecendo. Procure por seqüências incomuns envolvendo "aspas duplas", 'aspas simples', \ barras invertidas, comentários, etc. Por exemplo, a ausência de uma das aspas pode causar problemas, assim como a seqüência '\"' (use '"' no lugar).

## Que tipo de fonte devo usar com a placa Arduino?

Normalmente, a placa Arduino pode funcionar satisfatoriamente com a energia disponível na porta USB do computador ao qual está conectada, dependendo do número e tipos de módulos Shield opcionais usados ​​com a placa Arduino e da corrente nominal de alimentação USB disponível no Computador (varia de acordo com o fabricante e modelo do computador). Se você achar que a placa Arduino precisa de energia adicional para operar corretamente, ou se você precisa operar a placa Arduino desconectada de uma porta USB, ou quando a usa com uma que não fornece energia, então você precisa adquirir uma fonte de energia Fornecendo de 7 a 12V (Volts) de corrente DC (Corrente Direta) com capacidade de corrente suficiente para suas necessidades. Os adaptadores de corrente alternada geralmente disponíveis em lojas de varejo para uso com produtos de consumo são muitas vezes adequados, mas certifique-se de que ele tem o conector adequado para conectar no conector de energia de sua placa Arduino: plug cilíndrico de 5.5mm de diâmetro com 2.1mm de pin hole, e que ele fornece tensão positiva no pin hole interno e tensão negativa (ou comum/terra) na parte cilíndrica externa do conector. Para a maioria das aplicações, 1A (Amp) da capacidade de fornecimento de corrente é suficiente, mas você pode achar que você precisará de mais se tiver um módulo Shield específico que precise ou uma pilha de vários módulos Shield que, juntamente com a placa Arduino, somam uma corrente total mais elevada. Você deve somar o requisito de corrente de alimentação de entrada nominal para cada Shield que você está usando junto com sua placa Arduino para obter o total necessário e adquirir um adaptador de energia/fornecimento que fornece um mínimo desse total. Você também tem que lembrar que o regulador de 5V a bordo não pode fornecer uma corrente infinita (na verdade 800mA é uma boa escolha para não superaquecer a placa), então se um de seus projetos precisar de uma grande quantidade de energia, você pode considerar fornecer os 5V necessários (ou o que for) seletivamente para os vários equipamentos (usando um número adequado de fontes de alimentação e reguladores, se necessário) e fazê-los trabalhar juntos conectando todos os GNDs no mesmo ponto.

## Por que meu esboço não inicia quando estou alimentando a placa com uma fonte de alimentação externa? (Arduino Diecimila ou anterior)

Como o pino RX está desconectado, o bootloader na placa pode estar vendo dados de lixo chegando, o que significa que ele nunca expira e inicia seu esboço. Tente ligar o pino RX à terra com um resistor de 10K (ou conectar RX diretamente ao pino TX).

## Por que o software do Arduino é congelado quando tento carregar um programa? (No Windows)

Isso pode ser causado por um conflito com o processo Logitech 'LVPrcSrv.exe'. Abra o Gerenciador de Tarefas e veja se este programa está em execução e, em caso afirmativo, mate-o antes de tentar o upload.

## E se a placa não ligar (o LED de energia verde não acende)?

Se você estiver usando uma Diecimila ou placa USB mais antiga (por exemplo, NG), certifique-se de que o jumper (pedaço de plástico perto do plug USB) está nos pinos corretos. Se você estiver alimentando a placa com uma fonte de alimentação externa (conectada à tomada), o jumper deve estar nos dois pinos mais próximos da tomada. Se você estiver alimentando a placa através do USB, o jumper deve estar nos dois pinos mais próximos do plugue USB.

## Por que o meu Diecimila demorar tanto tempo (6-8 segundos) para iniciar o meu esboço?

Algumas das placas Arduino Diecimila foram acidentalmente gravadas/queimadas com o Arduino NG bootloader. Ele deve funcionar bem, mas tem um atraso maior quando a placa é redefinida (porque o NG não tem um reset automático, então você tem que sincronizar os uploads manualmente). Você pode reconhecer o bootloader NG porque o LED no pino 13 piscará três vezes quando você redefinir a placa (em comparação com uma única piscada do bootloader do Diecimila). Se o seu Diecimila tem o bootloader NG nele, você pode precisar pressionar fisicamente o botão de reinicialização na placa antes de carregar seu esboço. Alternativamente, você pode gravar o bootloader correto em seu Diecimila, veja a página [bootloader][bootloader] para mais detalhes.

## O que devo fazer se receber um erro ao iniciar arduino.exe no Windows?

Se você receber um erro ao clicar duas vezes no executável arduino.exe no Windows, por exemplo:

`Arduino has encountered a problem and needs to close.`

`Arduino encontrou um problema e precisa ser fechado.`

Você precisará iniciar o Arduino usando o arquivo run.bat. Por favor, seja paciente, o ambiente Arduino pode levar algum tempo para abrir.

## Por que o Arduino não roda em versões antigas do Mac OS X?

Se você receber um erro como este:

```sh
Link (dyld) error: 

dyld: /Applications/arduino-0004/Arduino 04.app/Contents/MacOS/Arduino Undefined symbols: 
/Applications/arduino-0004/librxtxSerial.jnilib undefined reference to _printf$LDBL128 expected to be defined in /usr/lib/libSystem.B.dylib
```

Você provavelmente precisará atualizar para o Mac OS X 10.3.9 ou posterior. As versões mais antigas têm versões incompatíveis de algumas bibliotecas de sistema.

Créditos/agradecimentos ao Gabe462 por reportar isso.

## O que devo fazer se receber um erro UnsatisfiedLinkError (sobre a biblioteca nativa librxtxSerial.jnilib) ao iniciar o Arduino?

Se você receber um erro como este ao iniciar o Arduino:

```sh
Uncaught exception in main method: java.lang.UnsatisfiedLinkError: Native Library /Users/anu/Desktop/arduino-0002/librxtxSerial.jnilib already loaded in another classloader
```

Você provavelmente tem uma versão antiga da biblioteca de comunicações em algum lugar. Procure por comm.jar ou jcl.jar em /System/Library/Frameworks/JavaVM.framework/ ou em diretórios nas variáveis de ambiente CLASSPATH ou PATH. (Relatado por Anurag Sehgal)

## E o erro "Could not find the main class."?

`Não foi possível encontrar a classe principal.`

Se você receber esse erro ao iniciar o Arduino:

```sh
Java Virtual Machine Launcher: Could not find the main class. Program will exit.
```

Certifique-se de que você extraiu corretamente o conteúdo do arquivo .zip do Arduino - em particular, garanta que o diretório lib está diretamente dentro do diretório Arduino e contém o arquivo 'pde.jar'.

## O que posso fazer sobre os conflitos cygwin no Windows?

Se você já tem cygwin instalado em sua máquina, você pode obter um erro como este quando você tenta compilar um esboço em Arduino:

```sh
6 [main] ? (3512) C:\Dev\arduino-0006\tools\avr\bin\avr-gcc.exe: *** fatal error - C:\Dev\arduino-0006\tools\avr\bin\avr-gcc.exe: *** system shared memory version mismatch detected - 0x75BE0084/0x75BE009C.
```

`Este problema é provavelmente devido a utilizar versões incompatíveis da DLL cygwin.`

```sh
Search for cygwin1.dll using the Windows Start->Find/Search facility and delete all but the most recent version.  The most recent version *should* reside in x:\cygwin\bin, where 'x' is the drive on which you have installed the cygwin distribution.  Rebooting is also suggested if you are unable to find another cygwin DLL.
```

Em caso afirmativo, primeiro certifique-se de que você não tem cygwin em execução quando você usa Arduino. Se isso não ajudar, você pode tentar apagar cygwin1.dll do diretório do Arduino e substituí-lo pelo cygwin1.dll de sua instalação existente do cygwin (provavelmente em C:\cygwin\bin).

Créditos/agradecimentos ao karlcswanson pela sugestão.

## Por que o software do Arduino e o menu Tools levam muito tempo para serem abertos (no Windows)?

Se o software do Arduino levar muito tempo para iniciar e parecer congelar quando você tenta abrir o menu Ferramentas, há por um conflito com outro dispositivo em seu sistema. O software Arduino, durante a inicialização e quando você abre o menu `Tools`, tenta obter uma lista de todas as portas COM no seu computador. É possível que uma porta COM criada por um dos dispositivos no seu computador desacelere este processo. Dê uma olhada no Gerenciador de Dispositivos. Tente desabilitar os dispositivos que fornecem portas COM (por exemplo, dispositivos Bluetooth).

## Por que minha placa não aparece no menu Tools> Serial Port?

Se você estiver usando uma placa Arduino USB, certifique-se de que instalou os drivers FTDI (consulte o [Guia de Primeiros Passos][howto] para instruções). Se você estiver usando um adaptador USB-para-Serial com uma placa serial, certifique-se de que instalou seus drivers.

Certifique-se de que a placa está conectada: o menu da porta serial é atualizado sempre que você abre o menu `Tools`, então se você acabou de desconectar a placa, ela não estará no menu.

Verifique se você não está executando nenhum programa que verifique todas as portas seriais, como aplicativos de sincronização PDA, drivers Bluetooth-USB (por exemplo, BlueSoleil), ferramentas virtuais de daemon, etc.

No Windows, a porta COM atribuída à placa pode ser muito alta. De zeveland:

"One little note if you aren't able to export and your USB board is trying to use a high COM port number: try changing the FTDI chip's COM port assignment to a lower one."

("Uma pequena nota se você não é capaz de exportar e sua placa USB está tentando usar um número de porta COM alta: tente mudar a atribuição de porta COM do chip FTDI para uma menor.")

"I had a bunch of virtual COM ports set up for Bluetooth so the board was set to use COM17. The IDE wasn't able to find the board so I deleted the other virtual ports in Control Panel (on XP) and moved the FTDI's assignment down to COM2. Make sure to set Arduino to use the new port and good luck."

("Eu tinha um monte de portas COM virtuais configuradas para Bluetooth, então a placa estava configurada para usar COM17. O IDE não foi capaz de encontrar a placa, então eu excluí as outras portas virtuais no Painel de Controle (no XP) e movi a atribuição FTDI para COM2. Certifique-se de definir Arduino para usar a nova porta e boa sorte.")

No Mac, se você tiver uma versão antiga dos drivers FTDI, talvez seja necessário removê-los e reinstalar a versão mais recente. Consulte [este tópico do fórum][updateftdi] para obter instruções (créditos/agradecimentos ao gck).

## E se eu receber uma gnu.io.PortInUseException ao carregar o código ou usando o monitor serial (no Mac)?

```sh
Error inside Serial.<init>() 
gnu.io.PortInUseException: Unknown Application 
     at gnu.io.CommPortIdentifier.open(CommPortIdentifier.java:354) 
     at processing.app.Serial.<init>(Serial.java:127) 
     at processing.app.Serial.<init>(Serial.java:72)
```

Isso provavelmente significa que a porta está realmente em uso por outro aplicativo. Certifique-se de que você não está executando outros programas que acessam portas serial ou USB, como o aplicativo de sincronização PDA, gerenciadores de dispositivos bluetooth, determinados firewalls, etc. Além disso, note que alguns programas (por exemplo, Max/MSP) mantêm a porta serial aberta mesmo quando não estiver usando - você pode precisar fechar todos os patches que usam a porta serial ou sair da aplicação inteiramente.

Se você receber esse erro com o Arduino 0004 ou anterior, ou com o Processing, será necessário executar o `macosx_setup.command` e, em seguida, reiniciar o computador. Arduino 0004 inclui uma versão modificada deste script que todos os usuários precisam para executar (mesmo aqueles que executaram o que veio com Arduino 0003). Você também pode precisar excluir o conteúdo do diretório `/var/spool/uucp`.

## Estou tendo problemas com os drivers FTDI USB.

Experimente instalar os [drivers mais recentes do FTDI][ftdidrivers] ou entrar em contato com o suporte em support1@ftdichip.com.

## Por que meu esboço não inicia quando aciono a rede ou reinicializo a placa Arduino?

Muito provavelmente porque você está enviando dados em série para a placa quando ele inicializa pela primeira vez. Durante os primeiros segundos, o bootloader (um programa pré-gravado no chip na placa) escuta o computador e aguarda o envio de um novo esboço para ser carregado para a placa. Após alguns segundos sem comunicação, o bootloader vai atingir timeout (limite de tempo) e iniciar o esboço que já está na placa. Se você continuar a enviar dados para o bootloader, ele nunca atingirá timeout e o seu esboço nunca será iniciado. Você precisará ou encontrar uma maneira de impedir que os dados em série cheguem nos primeiros segundos após a placa ser ativada (por exemplo, ativando o chip que envia os dados da sua função de configuração) ou gravar seu programa na placa com um [programador externo][programmer], substituindo o bootloader.

## Por que o meu esboço parece ser enviado com êxito, mas não fazer nada?

Você selecionou o item errado no menu `File`> `Microcontroller`. Certifique-se de que o microcontrolador selecionado corresponde ao da sua placa (ATmega8 ou ATmega168) - o nome será gravado no chip maior da placa.

Verifique se há uma fonte de alimentação barulhenta. É possível que isso possa fazer com que o chip perca seu esboço.

Alternativamente, o esboço pode ser muito grande para a placa. Ao fazer o upload do seu esboço, o Arduino 0004 verifica se ele é muito grande para o ATmega8, mas baseia seu cálculo em um carregador de inicialização de 1 Kb. Você pode ter um gerenciador de inicialização mais antigo que ocupe 2 Kb dos 8 Kb de espaço de programa (flash) no ATmega8 em vez do 1 Kb usado pelo gerenciador de inicialização atual. Se o seu for maior, apenas parte do esboço será carregado, mas o software não saberá, e sua placa irá continuamente redefinir, pausar, redefinir, e por aí vai.

Se você tiver acesso a um AVR-ISP ou programador de porta paralela, você pode gravar a versão mais recente do bootloader para sua placa com o item `Tools`> `Burn Bootloader` do menu. Caso contrário, você pode informar ao ambiente Arduino a quantidade de espaço disponível para esboços editando a variável `upload.maximum_size` no arquivo de preferências (consulte: [instruções sobre como localizar o arquivo][https://www.arduino.cc/en/Hacking/Preferences]). Altere 7168 para 6144 e o ambiente deve avisar corretamente quando seu esboço for muito grande.

## Como posso reduzir o tamanho do meu esboço?

O chip ATmega168 da placa Arduino é barato, mas tem apenas 16 Kb de código de programa, o que não é muito (e 2 Kb são usados pelo bootloader).

Se você estiver usando ponto flutuante, tente reescrever seu código com matemática inteira, o que deve economizar cerca de 2 Kb. Exclua quaisquer instruções #include (na parte superior do seu esboço) para bibliotecas que não estiverem sendo usadas.

Caso contrário, veja se você pode tornar seu programa mais curto.

Estamos sempre trabalhando para reduzir o tamanho do núcleo do Arduino para deixar mais espaço para seus esboços.

## Por que não recebo um PWM (uma saída analógica) quando chamo analogWrite() em pinos diferentes de 3, 5, 6, 9, 10 ou 11?

O microcontrolador na placa Arduino (o ATmega168) suporta apenas PWM/analogWrite() em determinados pinos. A chamada de analogWrite() em qualquer outro pino dará alta (5 volts) para valores maiores que 128 e baixa (0 volts) para valores menores que 128. (Placas Arduino mais antigas com um ATmega8 só suportam saída PWM nos pinos 9, 10 e 11.)

## Por que recebo erros sobre funções não declaradas ou tipos não declarados?

O ambiente Arduino tenta gerar automaticamente protótipos para as suas funções, para que você possa chamá-las como quiser em seu esboço. Este processo, no entanto, não é perfeito, e às vezes leva a mensagens de erro obscuras.

Se você declarar um tipo personalizado no seu código e criar uma função que aceita ou retorna um valor desse tipo, você receberá um erro ao tentar compilar o sketch (esboço). Isso ocorre porque o protótipo gerado automaticamente para essa função aparecerá acima da definição de tipo.

Se você declarar uma função com um tipo de retorno de duas palavras (por exemplo, "unsigned int"), o ambiente não perceberá que é uma função e não criará um protótipo para ela. Isso significa que você precisa fornecer o seu próprio, ou colocar a definição da função acima de qualquer chamada para ela.

## Por que recebo erros sobre uma assinatura de dispositivo inválida ao tentar carregar um esboço?

Se você receber um erro como:

```sh
Avrdude: Yikes! Assinatura inválida do dispositivo.
        Verifique as ligações e tente novamente, ou utilize -F para substituir
        Esta verificação.
```

Pode significar uma de duas coisas. Ou você tem a placa errada selecionada no menu `Tools`> `Board`, ou você não está usando a versão correta do `avrdude`. O Arduino usa uma versão ligeiramente modificada do avrdude para carregar esboços para a placa Arduino. A versão padrão consulta a assinatura do dispositivo da placa de uma forma não compreendida pelo bootloader, resultando neste erro. Certifique-se de que você está usando a versão do avrdude que vem com Arduino.

License
----

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0][ccasa3]. Os exemplos de código do guia são disponibilizados para o domínio público.

```sh
Tradução feita com base na versão que estava no ar no dia 25/11/2016.
```

Link para a página original: [Getting Started Guide - Troubleshooting][originalpage].

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [placeholder]: <>
   [preferences]: <https://www.arduino.cc/en/Hacking/Preferences>
   [programmer]: <https://www.arduino.cc/en/Hacking/Programmer>
   [ftdidrivers]: <http://www.ftdichip.com/Drivers/VCP.htm>
   [updateftdi]: <http://forum.arduino.cc/index.php/topic,27266.0.html>
   [howto]: </2016/11/20/arduino-1start/>
   [bootloader]: <https://www.arduino.cc/en/Hacking/Bootloader>
   [forum]: <http://www.arduino.cc/cgi-bin/yabb2/YaBB.pl?board=troubleshoot>
   [rxtxpack]: <https://launchpad.net/ubuntu/+source/rxtx/2.2pre2-3>
   [environment]: </2016/11/21/arduino-7environment/>
   [originalpage]: <https://www.arduino.cc/en/Guide/Troubleshooting>
   [ccasa3]: <https://creativecommons.org/licenses/by-sa/3.0>
   [arduino]: <https://www.arduino.cc>
