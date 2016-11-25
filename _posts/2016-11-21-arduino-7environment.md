---
layout:     post
title:      "Tutoriais Arduino #7: Ambiente de Desenvolvimento"
date:       2016-11-21
author:     "Leonardo Haddad Carlos"
img:        "post_img/arduino_oscomm.png"
---

## Software do Arduino (IDE)

O Ambiente Integrado de Desenvolvimento Arduino - ou software do Arduino (IDE) - contém um editor de texto para escrever código, uma área de mensagem, um console de texto, uma barra de ferramentas com botões para funções comuns e uma série de menus. Ele se conecta ao hardware Arduino/Genuino para fazer o upload (envio) dos programas desenvolvidos e também para se comunicar com esses programas.

## Escrevendo sketches (esboços)

Os programas escritos usando o software do Arduino (IDE) formam sketches (esboços). Estes esboços são escritos no editor de texto e são salvos com a extensão de arquivo .ino. O editor possui recursos para cortar/colar e para pesquisar/substituir texto. A área de mensagens mostra feedbacks durante os processos de salvar e de exportar, além de exibir erros. O console exibe a saída de texto pelo software do Arduino (IDE), incluindo mensagens de erro completas e outras informações. O canto inferior direito da janela exibe a placa configurada e a porta serial. Os botões da barra de ferramentas permitem verificar/carregar programas, criar/abrir/salvar esboços e abrir o monitor serial, uma ferramenta usada para gerenciar a comunicação serial com a placa.

`Nota: Versões do software do Arduino (IDE) anteriores a 1.0 salvam os esboços com a extensão .pde. No entanto, é possível abrir esses arquivos com a versão 1.0, e você será instruído a salvar o esboço com a extensão .ino.`

<img src="{{ site.baseurl }}/post_img/arduinotutorials/env_verify.png" style="float: left; max-height: 50px;" /> &nbsp;
Verify (verificar): compila seu código e busca os erros existentes.

<img src="{{ site.baseurl }}/post_img/arduinotutorials/env_upload.png" style="float: left; max-height: 50px;" /> &nbsp;
Upload (enviar): compila seu código e faz o upload para a placa configurada. Falaremos mais sobre upload ainda nesse tutorial.
Nota: Se você estiver usando um programador externo com sua placa, você pode segurar (manter pressionada) a tecla "shift" do computador ao usar este ícone. Se fizer isso, o texto mudará para "Upload using Programmer" (Envio usando Programador).

<img src="{{ site.baseurl }}/post_img/arduinotutorials/env_new.png" style="float: left; max-height: 50px;" /> &nbsp;
New (novo): cria um novo esboço.

<img src="{{ site.baseurl }}/post_img/arduinotutorials/env_open.png" style="float: left; max-height: 50px;" /> &nbsp;
Open (abrir): apresenta um menu com todos os esboços do seu sketchbook (caderno de esboços). Ao clicar em um esboço, ele será carregado dentro da janela atual, substituindo seu conteúdo.
Nota: devido a um bug em Java, este menu não se desloca (scroll); se você precisar abrir um esboço que esteja no final da lista, use o menu `File` (Arquivo)> `Sketchbook` (Caderno de Esboços).

<img src="{{ site.baseurl }}/post_img/arduinotutorials/env_save.png" style="float: left; max-height: 50px;" /> &nbsp;
Save (salvar): salva seu esboço.

<img src="{{ site.baseurl }}/post_img/arduinotutorials/env_serial.png" style="float: left; max-height: 50px;" /> &nbsp;
Serial Monitor (monitor serial): abre o monitor serial. Falaremos mais sobre o monitor serial ainda nesse tutorial.

Outros comandos são encontrados nos cinco menus: `File` (arquivo), `Edit` (editar), `Sketch` (esboço), `Tools` (ferramentas), `Help` (ajuda). Os menus são sensíveis a contexto, o que significa que apenas os itens relevantes para o trabalho atual estarão disponíveis.

### File (arquivo)

 - New (novo): cria uma nova instância do editor, com a estrutura mínima de um esboço já em vigor.
 - Open (abrir): permite carregar um arquivo de esboço navegando pelas unidades e pastas do computador.
 - Open Recent (abrir arquivo recente): fornece uma pequena lista dos esboços mais recentes, prontos para serem abertos.
 - Sketchbook (caderno de esboços): mostra os esboços salvos dentro da estrutura de pastas do sketchbook (caderno de esboços); clicar em qualquer nome abre o esboço correspondente em uma nova instância do editor.
 - Examples (exemplos): qualquer exemplo fornecido pelo software do Arduino (IDE) ou pelas bibliotecas aparece neste item de menu. Todos os exemplos são estruturados em uma árvore que permite o acesso fácil por tópico ou biblioteca.
 - Close (fechar):
Fecha a instância do software Arduino do qual é clicado.
 - Save (salvar)
Salva o esboço com o nome atual. Se o arquivo não tiver sido nomeado anteriormente, um nome será fornecido em uma janela de "Salvar como...".
 - Save as... (salvar como...): permite salvar o esboço atual com um nome diferente.
 - Page Setup (configurações da página): mostra a janela de configuração de página para impressão.
 - Print (imprimir): envia o esboço atual para a impressora de acordo com as configurações definidas na janela Page Setup.
 - Preferences (preferências): abre a janela de preferências, onde algumas configurações do IDE podem ser personalizadas, como, por exemplo, o idioma da interface do IDE.
 - Close (sair): fecha todas as janelas do IDE. Os mesmos esboços que estiverem abertos quando o botão `Quit` for pressionado serão reabertos automaticamente na próxima vez que o IDE for iniciado.

### Edit (editar)

 - Undo/Redo (desfazer/refazer): o botão `Undo` desfaz a última ação que você fez durante a edição; quando uma ação é desfeita dessa forma, você ainda pode recuperá-la com o botão `Redo`.
 - Cut (cortar): remove o texto selecionado e o coloca na área de transferência.
 - Copy (copiar) copia o texto selecionado no editor para a área de transferência.
 - Copy for Forum (copiar para o fórum): copia o código do seu esboço para a área de transferência em um formato adequado para ser postado no fórum: completo e com coloração de sintaxe.
 - Copy as HTML (copiar como HTML): copia o código do seu esboço para a área de transferência como HTML, adequado para incorporação em páginas da Web.
 - Paste (colar): coloca o conteúdo da área de transferência na posição do cursor, no editor.
 - Select All (selecionar tudo): seleciona e destaca todo o conteúdo do editor.
 - Comment/Uncomment (comentar/descomentar): coloca ou remove o // (marcador de comentário) no início de cada linha selecionada.
 - Increase/Decrease Indent (aumentar/diminuir recuo): adiciona ou subtrai um espaço no início de cada linha selecionada, movendo o texto um espaço à direita ou eliminando um espaço no início.
 - Find (encontrar): abre a janela Find and Replace (Localizar e Substituir), onde é possível especificar um texto a ser pesquisado dentro do esboço atual e seguindo um conjunto de várias opções configuráveis.
 - Find Next (encontrar o próximo): destaca a próxima ocorrência - se houver - da string (seqüência de caracteres) especificada como item de pesquisa na janela Find (Localizar), relativo à posição do cursor.
 - Find Previous (encontrar o anterior: destaca a ocorrência anterior - se houver - da string (seqüência de caracteres) especificada como item de pesquisa na janela Find (Localizar), relativo à posição do cursor.

### Sketch (esboço)

 - Verify/Compile (verificar/compilar): verifica se o seu esboço contém erros compilando-o; ele relatará o uso da memória do código e as variáveis ​​na área do console.
 - Upload (envio): compila e carrega o arquivo binário na placa configurada através da porta configurada.
 - Upload Using Programmer (carregar usando programador): isso substituirá o bootloader na placa; você precisará usar Tools (Ferramentas) -> Burn Bootloader (Gravar Bootloader) para restaurá-lo e ser capaz de fazer upload para a porta serial USB novamente. No entanto, ele permite que você use a capacidade total da memória Flash para o seu esboço. Tenha em mente que este comando NÃO irá queimar/gravar os fusíveis. Para fazer isso, um comando Tools -> Burn Bootloader deve ser executado.
 - Export Compiled Binary (exportar binário compilado): salva um arquivo .hex que pode ser mantido como arquivo ou enviado para a placa usando outras ferramentas.
 - Show Sketch Folder (mostrar pasta de esboços): abre a pasta atual de esboços.
 - Include Library (incluir biblioteca): adiciona uma biblioteca ao seu esboço inserindo instruções #include no início do seu código. Falaremos mais sobre bibliotecas ainda nesse tutorial. Além de incluir bibliotecas (já importadas para o IDE) em seu projeto, você também pode usar esse menu para acessar o Library Manager (Gerenciador de Bibliotecas) e importar novas bibliotecas a partir de arquivos .zip.
 - Add File... (adicionar arquivo...): adiciona um arquivo de código ao esboço (ele será copiado do seu local atual). O novo arquivo aparece em uma nova guia na janela do esboços. Os arquivos podem ser removidos do esboço usando o menu de abas que pode ser acessado clicando no pequeno ícone triangular abaixo do monitor serial, do lado direito da barra de ferramentas.

### Tools (ferramentas)

 - Auto Format (formatar automaticamente): formata o seu código de uma forma agradável, identando-o de forma que as aberturas e fechamentos de chaves ("{" , "}") fiquem alinhados e as instruções contidas entre as chaves estejam corretamente identadas.
 - Archive Sketch (arquivar esboço): arquiva uma cópia do esboço atual no formato .zip. O arquivo resultante é colocado no mesmo diretório que o esboço.
 - Fix Encoding & Reload (corrigir codificação e recarregar): corrige possíveis discrepâncias entre a codificação do mapa de caracteres do editor e os mapas de caracteres de sistemas operacionais.
 - Serial Monitor (monitor serial): abre a janela do monitor serial e inicia a troca de dados com qualquer placa conectada na porta atualmente selecionada. Isso normalmente reinicia a placa, se a placa suportar a reinicialização a partir da abertura da porta serial.
 - Placa (board): selecione a placa que você está usando. Falaremos mais sobre as diferentes placas ainda nesse tutorial.
 - Port (porta): este menu contém todos os dispositivos seriais (reais ou virtuais) da sua máquina. Ele deverá ser atualizado automaticamente sempre que o menu Tools (ferramentas) for acessado.
 - Programmer (programador): permite selecionar um programador harware ao programar uma placa ou um chip e não usar a conexão USB serial em série. Normalmente, você não precisará disto, mas se você estiver [gravando um bootloader][bootloader] em um novo microcontrolador, você usará essa funcionalidade.
 - Gravar Bootloader (burn bootloader): os itens neste menu permitem gravar um [Bootloader][bootloader] ("carregador de inicialização") no microcontrolador em uma placa Arduino. Isso não é necessário para o uso normal de um Arduino ou placa Genuino, mas é útil se você comprar um novo microcontrolador ATmega (que normalmente vem sem um bootloader). Certifique-se de que selecionou a placa correta no menu `Boards` (placas) antes de gravar o bootloader na placa de destino.

### Help (ajuda)

Aqui você encontra fácil acesso a vários documentos que vêm com o software do Arduino (IDE). Você tem acesso à página de Introdução, à página de Referência e até mesmo a este guia para o IDE, além de outros documentos. O acesso é feito localmente, sem uma conexão à Internet. Os documentos são uma cópia local dos documentos online e podem possuir links para os tutoriais no site do Arduino.
 - Localizar nas Referência
Esta é a única função interativa do menu Help (ajuda): essa função seleciona, diretamente na cópia local da Referência do Arduino, a página relevante para a função ou comando que estiver sob o cursor.

## Sketchbook (caderno de esboços)

O software do Arduino (IDE) usa o conceito de um sketchbook: um lugar padrão para armazenar seus programas (ou esboços). Os esboços do seu sketchbook podem ser abertos a partir do menu `File` (Arquivo)> `Sketchbook` (Caderno de Esboços) ou do botão `Open` (Abrir) na barra de ferramentas. Na primeira vez que você executar o software do Arduino, ele criará automaticamente um diretório para o seu sketchbook. É possível visualizar ou alterar a localização do sketchbook partir da caixa de diálogo (janela) de `Preferências`.

`A partir da versão 1.0, os arquivos são salvos com uma extensão de arquivo .ino. Versões anteriores usam a extensão .pde. Você ainda pode abrir arquivos nomeados .pde na versão 1.0 e posterior, e o software renomeará automaticamente a extensão para .ino.`

## Abas/Guias, Múltiplos Arquivos e Compilação

Permite gerenciar esboços com mais de um arquivo (cada um deles aparece em sua própria guia). Estes podem ser arquivos de código Arduino normais (sem extensão visível), arquivos C (extensão .c), arquivos C++ (.cpp) ou arquivos de cabeçalho (.h).

## Enviando o código para a placa (Uploading)

Antes de carregar seu esboço, você precisa selecionar os itens corretos nos menus `Tools` (Ferramentas)> `Board` (Placa) e `Tools` (Ferramentas)> `Port` (Porta). As placas, como já foi mencionado, estão descritas ainda ness tutorial, mais abaixo. No Mac, a porta serial é provavelmente algo como `/dev/tty.usbmodem241` (para uma placa Uno, uma Mega2560 ou uma Leonardo) ou `/dev/tty.usbserial-1B1` (para uma placa USB Duemilanove ou anterior), ou `/dev/tty.USA19QW1b1P1.1` (para uma placa serial conectada com um Keyspan USB-to-Serial adapter (adaptador Keyspan USB-para-Serial). No Windows, provavelmente é `COM1`/`COM2` (para uma placa serial) ou `COM4`/​​`COM5`/`COM7`/superior (para uma placa USB) - para descobrir, você procura o dispositivo serial USB na seção de portas do Gerenciador de Dispositivos (Device Manager) do Windows. No Linux, deve ser `/dev/ttyACMx`, `/dev/ttyUSBx` ou similar. Depois de selecionar a porta serial e a placa correta, pressione o botão de upload na barra de ferramentas ou selecione o item `Upload` no menu `Sketch`. As placas Arduino atuais serão redefinidas automaticamente e o upload será iniciado. Com placas mais antigas (pré-Diecimila), que não têm auto-reset, você precisará pressionar o botão de reinicialização na placa antes de iniciar o upload. Na maioria das placas, os LEDs RX e TX piscam à medida que o esboço é carregado. O software do Arduino (IDE) exibirá uma mensagem quando o upload estiver concluído (ou mostrar um erro, caso o upload falhe).

Quando você faz o upload de um esboço, você está usando o `bootloader` (carregador de inicialização) Arduino, um pequeno programa que foi carregado no microcontrolador em sua placa. Ele permite que você envie o código sem usar qualquer hardware adicional. O bootloader está ativo por alguns segundos quando a placa é reinicializada; então ele inicia o último esboço que foi enviado para o microcontrolador. O bootloader piscará o LED on-board (pino 13) quando ele for iniciado (ou seja, quando a placa é reiniciada).

## Bibliotecas

As bibliotecas proporcionam uma funcionalidade adicional para utilização em esboços (ex. trabalhando com hardware ou manipulando dados). Para usar uma biblioteca em um esboço, selecione-a no menu `Sketch`> `Import Library`. Isso irá inserir uma ou mais instruções `#include` na parte superior do esboço e compilar a biblioteca com o seu esboço. Como as bibliotecas são carregadas para a placa com o seu esboço, elas aumentam a quantidade de espaço ocupado. Portanto, caso um esboço não precise mais de uma biblioteca, é de bom tom excluir suas instruções #include da parte superior do seu código.

Há uma [lista de bibliotecas][listoflibs] na Referência do Arduino. Algumas bibliotecas estão incluídas no software do Arduino (IDE). Outras podem ser baixadas de uma variedade de fontes ou através do Library Manager (Gerenciador de Bibliotecas). A partir da versão 1.0.5 do IDE, você pode importar uma biblioteca de um arquivo Zip e usá-la em um esboço aberto. Consulte estas [instruções para instalar uma biblioteca de terceiros][libraries].

Para escrever sua própria biblioteca, veja [este tutorial][libshack].

## Hardware de terceiros (third-party)

O suporte para hardware de terceiros pode ser adicionado ao diretório `hardware` do diretório do sketchbook. As plataformas instaladas podem incluir definições de placa (que aparecem no menu da placa), bibliotecas essenciais, bootloaders e definições de programador. Para instalar, crie o diretório `hardware` e descompacte a plataforma de terceiros em seu próprio subdiretório. (Não use arduino como nome do subdiretório ou você substituirá a plataforma Arduino embutida.) Para desinstalar, basta excluir o diretório.

Para obter detalhes sobre a criação de pacotes para hardware de terceiros, consulte a [especificação de hardware de terceiros da IDE 1.5 do Arduino][thirdparty].

## Monitor Serial

Exibe os dados seriais enviados pela placa Arduino ou Genuino (placa USB ou serial). Para enviar dados para a placa, digite o texto e clique no botão `send` (enviar) ou pressione `enter`. Escolha a taxa de transmissão que corresponde à taxa passada para `Serial.begin` no seu esboço. Note que no Windows, Mac ou Linux, a placa Arduino ou Genuino será reiniciada (executar novamente o esboço a partir do início) quando você a conectar com o monitor serial.

Você também pode se comunicar com a placa através de Processing, Flash, MaxMSP, etc. (consulte a [página de interface][interfacing] para obter detalhes).

## Preferências

Algumas preferências podem ser definidas na caixa de diálogo de preferências (encontrada no menu `Arduino` no Mac ou `File` no Windows e no Linux). O resto pode ser encontrado no arquivo de preferências, cuja localização é mostrada na caixa de diálogo de preferências.

## Suporte de Idiomas

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/env_language.png" style="margin: 0 auto; max-height: 390px;" />
Ambiente de Desenvolvimento - Idioma
</p>

Desde a versão 1.0.1, o software do Arduino (IDE) foi traduzido para mais de 30 idiomas. Por padrão, o IDE é carregado no idioma selecionado pelo sistema operacional. (Nota: no Windows e possivelmente no Linux, isso é determinado pela configuração de `locale`, que controla os formatos de moeda e data, e não pela linguagem em que o sistema operacional é exibido).

Se você quiser alterar o idioma manualmente, inicie o software do Arduino (IDE) e abra a janela `Preferências`. Ao lado do `Editor Language` (Idioma do Editor) existe um menu dropdown de idiomas atualmente suportados. Selecione o idioma desejado no menu e reinicie o software para usar o idioma selecionado. Se o idioma do sistema operacional não for suportado, o Arduino Software (IDE) usará o inglês padrão.

Você pode retornar o software à configuração padrão de seleção de idioma com base em seu sistema operacional, selecionando `System Default` (Padrão do Sistema) na lista dropdown `Editor Language` (Idioma do Editor). Esta definição terá efeito quando o software do Arduino (IDE) for reiniciado. Da mesma forma, após alterar as configurações do sistema operacional, é necessário reiniciar o software Arduino (IDE) para atualizá-lo para o novo idioma padrão.

## Placas

A seleção de placa tem dois efeitos: define os parâmetros (por exemplo, velocidade da CPU e taxa de transmissão) usados na compilação e upload de esboços; e define as configurações de arquivo e fusível usadas pelo comando Burn Bootloader. Algumas das definições de placa diferem apenas no segundo quesito e, por isso, mesmo se você tiver feito o upload com êxito com uma seleção específica, você deve verificar antes de gravar o bootloader. Você pode encontrar uma tabela de comparação entre as várias placas [aqui][compareboards].

O software do Arduino (IDE) inclui o suporte embutido para as placas na lista a seguir, todas baseadas no AVR Core. O Boards Manager (Gerenciador de Placas) incluído na instalação padrão permite adicionar suporte para o crescente número de novas placas baseadas em diferentes núcleos como Arduino Due, Arduino Zero, Edison, Galileo e assim por diante.

 - Arduino Yùn: uma ATmega32u4 rodando a 16 MHz com auto-reset, 12 Entradas Analógicas, 20 I/O Digitais e 7 PWM.
 - Arduino/Genuino Uno: uma ATmega328 rodando a 16 MHz com auto-reset, 6 Entradas Analógicas, 14 I/O Digitais e 6 PWM.
 - Arduino Diecimila ou Duemilanove c/ ATmega168: uma ATmega168 rodando a 16 MHz com auto-reset.
 - Arduino Nano c/ ATmega328: uma ATmega328 rodando a 16 MHz com auto-reset. Possui 8 Entradas Analógicas.
 - Arduino/Genuino Mega 2560: uma ATmega2560 rodando a 16 MHz com auto-reset, 16 Entradas Analógicas, 54 I/O Digitais e 15 PWM.
 - Arduino Mega: uma ATmega1280 rodando a 16 MHz com auto-reset, 16 Entradas Analógicas, 54 I/O Digitais e 15 PWM.
 - Arduino Mega ADK: uma ATmega2560 rodando a 16 MHz com auto-reset, 16 Entradas Analógicas, 54 I/O Digitais e 15 PWM.
 - Arduino Leonardo: uma ATmega32u4 rodando a 16 MHz com auto-reset, 12 Entradas Analógicas, 20 I/O Digitais e 7 PWM.
 - Arduino/Genuino Micro: uma ATmega32u4 rodando a 16 MHz com auto-reset, 12 Entradas Analógicas, 20 I/O Digitais e 7 PWM.
 - Arduino Esplora: uma ATmega32u4 rodando a 16 MHz com auto-reset.
 - Arduino Mini c/ ATmega328: uma ATmega328 rodando a 16 MHz com auto-reset, 8 Entradas Analógicas, 14 I/O Digitais e 6 PWM.
 - Arduino Ethernet: equivalente à Arduino UNO com um Shield de Ethernet: uma ATmega328 rodando a 16 MHz com auto-reset, 6 Entradas Analógicas, 14 I/O Digitais e 6 PWM.
 - Arduino Fio: uma ATmega328 rodando a 8 MHz com auto-reset. Equivalente à Arduino Pro ou Pro Mini (3.3V, 8 MHz) c/ ATmega328, 6 Entradas Analógicas, 14 I/O Digitais e 6 PWM.
 - Arduino BT c/ ATmega328: ATmega328 rodando a 16 MHz. O bootloader gravado (4 KB) inclui código para inicializar o módulo bluetooth on-board (incluso na placa), 6 Entradas Analógicas, 14 I/O Digitais e 6 PWM.
 - LilyPad Arduino USB: uma ATmega32u4 rodando a 8 MHz com auto-reset, 4 Entradas Analógicas, 9 I/O Digitais e 4 PWM.
 - LilyPad Arduino: uma ATmega168 ou ATmega132 rodando a 8 MHz com auto-reset, 6 Entradas Analógicas, 14 I/O Digitais e 6 PWM.
 - Arduino Pro ou Pro Mini (5V, 16 MHz) c/ ATmega328: uma ATmega328 rodando a 16 MHz com auto-reset. Equivalente à Arduino Duemilanove ou Nano c/ ATmega328; 6 Entradas Analógicas, 14 I/O Digitais e 6 PWM.
 - Arduino NG ou anterior c/ ATmega168: uma ATmega168 rodando a 16 MHz sem auto-reset. Compilação e upload são equivalent às da Arduino Diecimila ou Duemilanove c/ ATmega168, mas o bootloader gravado possui um timeout mais lento (e pisca o LED do pino 13 três vezes ao reiniciar); 6 Entradas Analógicas, 14 I/O Digitais e 6 PWM.
 - Arduino Robot Control: uma ATmega328 rodando a 16 MHz com auto-reset.
 - Arduino Robot Motor: uma ATmega328 rodando a 16 MHz com auto-reset.
 - Arduino Gemma: uma ATtiny85 rodando a 8 MHz com auto-reset, 1 Entradas Analógicas, 3 I/O Digitais e 2 PWM.

Para obter instruções sobre como instalar o suporte para outras placas, consulte a seção Hardware de terceiros (third-party) acima.

License
----

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0][ccasa3]. Os exemplos de código do guia são disponibilizados para o domínio público.

```sh
Tradução feita com base na revisão de 07/09/2015 feita por "SM".
```

Link para a página original: [Getting Started Guide - Environment][originalpage].

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [placeholder]: <>
   [cores]: <https://www.arduino.cc/en/Guide/Cores>
   [compareboards]: <https://www.arduino.cc/en/Products/Compare>
   [interfacing]: <http://playground.arduino.cc/Main/Interfacing>
   [thirdparty]: <https://github.com/arduino/Arduino/wiki/Arduino-IDE-1.5-3rd-party-Hardware-specification>
   [libshack]: <https://www.arduino.cc/en/Hacking/LibraryTutorial>
   [libraries]: <https://www.arduino.cc/en/Guide/Libraries>
   [listoflibs]: <https://www.arduino.cc/en/Reference/Libraries>
   [bootloader]: <https://www.arduino.cc/en/Hacking/Bootloader>
   [originalpage]: <https://www.arduino.cc/en/Guide/Environment>
   [ccasa3]: <https://creativecommons.org/licenses/by-sa/3.0>
   [arduino]: <https://www.arduino.cc>
