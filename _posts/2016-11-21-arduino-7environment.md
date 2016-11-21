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

Nota: Versões do software do Arduino (IDE) anteriores a 1.0 salvam os esboços com a extensão .pde. No entanto, é possível abrir esses arquivos com a versão 1.0, e você será instruído a salvar o esboço com a extensão .ino.

<img src="{{ site.baseurl }}/post_img/arduinotutorials/env_verify.png" style="float: left; max-height: 50px;" /> &nbsp;
Verify (verificar): compila seu código e busca os erros existentes.

<img src="{{ site.baseurl }}/post_img/arduinotutorials/env_upload.png" style="float: left; max-height: 50px;" /> &nbsp;
Upload (enviar): compila seu código e faz o upload para a placa configurada. Falaremos mais sobre upload ainda nesse tutorial.
Nota: Se você estiver usando um programador externo com sua placa, você pode segurar (manter pressionada) a tecla "shift" do computador ao usar este ícone. Se fizer isso, o texto mudará para "Upload using Programmer" (Envio usando Programador).

<img src="{{ site.baseurl }}/post_img/arduinotutorials/env_new.png" style="float: left; max-height: 50px;" /> &nbsp;
New (novo): cria um novo esboço.

<img src="{{ site.baseurl }}/post_img/arduinotutorials/env_open.png" style="float: left; max-height: 50px;" /> &nbsp;
Open (abrir): apresenta um menu com todos os esboços do seu sketchbook (caderno de esboços). Ao clicar em um esboço, ele será carregado dentro da janela atual, substituindo seu conteúdo.
Nota: devido a um bug em Java, este menu não se desloca (scroll); se você precisar abrir um esboço que esteja no final da lista, use o menu File | Sketchbook (Arquivo | Caderno de Esboços).

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
Salva o esboço com o nome atual. Se o arquivo não tiver sido nomeado anteriormente, um nome será fornecido em um "Salvar como .." janela.
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
 - Upload Using Programmer (carregar usando programador): isso substituirá o bootloader na placa; você precisará usar Tools (Ferramentas) | Burn Bootloader (Gravar Bootloader) para restaurá-lo e ser capaz de fazer upload para a porta serial USB novamente. No entanto, ele permite que você use a capacidade total da memória Flash para o seu esboço. Tenha em mente que este comando NÃO irá queimar/gravar os fusíveis. Para fazer isso, um comando Tools | Burn Bootloader deve ser executado.
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
 - Gravar Bootloader (burn bootloader): os itens neste menu permitem gravar um [Bootloader][bootloader] ("carregador de inicialização") no microcontrolador em uma placa Arduino. Isso não é necessário para o uso normal de um Arduino ou placa Genuino, mas é útil se você comprar um novo microcontrolador ATmega (que normalmente vem sem um bootloader). Certifique-se de que selecionou a placa correta no menu Boards (placas) antes de gravar o bootloader na placa de destino.

### Help (ajuda)

Aqui você encontra fácil acesso a vários documentos que vêm com o software do Arduino (IDE). Você tem acesso à página de Introdução, à página de Referência e até mesmo a este guia para o IDE, além de outros documentos. O acesso é feito localmente, sem uma conexão à Internet. Os documentos são uma cópia local dos documentos online e podem possuir links para os tutoriais no site do Arduino.
 - Localizar nas Referências
Esta é a única função interativa do menu Help (ajuda): essa função seleciona, diretamente na cópia local da Referência do Arduino, a página relevante para a função ou comando que estiver sob o cursor.

License
----

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0][ccasa3]. Os exemplos de código do guia são disponibilizados para o domínio público.

```sh
Tradução feita com base na revisão de 07/09/2015 feita por "SM".
```

Link para a página original: [Getting Started Guide - Introduction][originalpage].

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [placeholder]: <>
   [placeholder]: <>
   [bootloader]: <https://www.arduino.cc/en/Hacking/Bootloader>
   [originalpage]: <https://www.arduino.cc/en/Guide/Environment>
   [ccasa3]: <https://creativecommons.org/licenses/by-sa/3.0>
   [arduino]: <https://www.arduino.cc>
