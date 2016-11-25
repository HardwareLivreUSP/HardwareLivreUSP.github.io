---
layout:     post
title:      "Tutoriais Arduino #8: Bibliotecas"
date:       2016-11-24
author:     "Leonardo Haddad Carlos"
img:        "post_img/arduino_oscomm.png"
---

## Instalando Bibliotecas Adicionais do Arduino

Uma vez que você esteja confortável com o software Arduino e usando as funções internas, pode surgir a vontade de estender a capacidade de seu Arduino, adicionando bibliotecas.

## O que são Bibliotecas?

As bibliotecas são coleções de códigos que facilitam a conexão a um sensor, a uma tela, a um módulo, etc. Por exemplo, a biblioteca LiquidCrystal facilita o uso de visores LCD de caracteres. Há centenas de bibliotecas adicionais disponíveis para download na Internet. As bibliotecas internas e algumas dessas bibliotecas adicionais são [listadas na referência do Arduino][reflib]. Para usar as bibliotecas adicionais, você precisará instalá-las.

## Como Instalar a Bibilioteca?

### Usando o Library Manager (Gerenciador de Bibliotecas)

Para instalar uma nova biblioteca em seu IDE Arduino, você pode usar o Library Manager (Gerenciador de Bibliotecas, disponível a partir da versão 1.6.2 do IDE). Abra o IDE e clique no menu `Sketch` (Esboço) e, em seguida, Include Library (Incluir Biblioteca)> Manage Libraries (Gerenciar Bibliotecas).

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/library_manage.png" style="margin: 0 auto; max-height: 390px;" />
Include Library> Manage Libraries
</p>

Em seguida, o gerenciador de bibliotecas será aberto e você verá lista de bibliotecas que já estão instaladas ou prontas para instalação. Neste exemplo, instalaremos a biblioteca Bridge. Percorra a lista para localizá-la e, em seguida, selecione a versão da biblioteca que deseja instalar. Às vezes, apenas uma versão da biblioteca está disponível. Se o menu de seleção de versão não aparecer, não se preocupe: é normal.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/library_version.png" style="margin: 0 auto; max-height: 390px;" />
Escolha de versão através de menu dropdown
</p>

Por fim, clique em instalar e aguarde até que o IDE instale a nova biblioteca. O download pode levar algum tempo, dependendo da velocidade da sua conexão. Quando terminar, uma tag `Installed` deve aparecer ao lado da biblioteca Bridge. Você pode fechar o gerenciador de biblioteca.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/library_installed.png" style="margin: 0 auto; max-height: 390px;" />
Tag `Installed`
</p>

Agora você pode encontrar a nova biblioteca disponível no menu `Include Library` (Incluir Biblioteca). Se você quiser adicionar sua própria biblioteca, abria um novo [`issue` no github][gh-issues].

### Importando uma Biblioteca .zip

Muitas vezes, bibliotecas são distribuídas como um arquivo Zip ou pasta. O nome da pasta é o nome da biblioteca. Dentro da pasta haverá um arquivo .cpp, um arquivo .h e, muitas vezes, um arquivo keywords.txt, pasta de exemplos e outros arquivos necessários para a biblioteca. A partir da versão 1.0.5, você pode instalar bibliotecas de terceiros no IDE. Não descompacte a biblioteca baixada, deixe-a como está.

No IDE do Arduino, navegue até `Skectch` (Esboço)> `Include Library` (Incluir Biblioteca). Na parte superior da lista dropdown	, selecione a opção `Add .ZIP Library` (Adicionar biblioteca .ZIP).

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/library_zip.png" style="margin: 0 auto; max-height: 390px;" />
Você será instruído a selecionar a biblioteca que gostaria de adicionar. Navegue até o local do arquivo .zip e selecione-o.
</p>

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/library_zip_select.png" style="margin: 0 auto; max-height: 390px;" />
</p>

Retorne ao menu `Skectch` (Esboço)> `Import Library` (Importar Biblioteca). Agora você deve ver a biblioteca na parte inferior do menu dropdown. Ela está pronta para ser usada em seu esboço. O arquivo zip terá sido extraído na pasta de bibliotecas do diretório de esboços do Arduino.

Nota: a Biblioteca estará disponível para uso em esboços, mas os exemplos para a biblioteca não serão expostos no  menu `File` (Arquivo)> 'Examples' (Exemplos) até que o IDE seja reiniciado.

### Instalação Manual

Para instalar a biblioteca, primeiro feche a aplicação Arduino. Em seguida, descompacte o arquivo Zip que contém a biblioteca. Por exemplo, se você estiver instalando uma biblioteca chamada "ArduinoParty", descompacte ArduinoParty.zip, que deverá conter uma pasta chamada ArduinoParty, com arquivos como ArduinoParty.cpp e ArduinoParty.h dentro.

Nota: Se os arquivos .cpp e .h não estiverem em uma pasta, você precisará criar uma. Neste caso, você criaria uma pasta chamada "ArduinoParty" e moveria para ela todos os arquivos que estavam no arquivo Zip, como ArduinoParty.cpp e ArduinoParty.h.

Arraste a pasta ArduinoParty para a sua pasta de bibliotecas. No Windows, ela provavelmente estará em "My Documents\Arduino\libraries". Para usuários de Mac, provavelmente será "Documents/Arduino/libraries". No Linux, será a pasta "libraries" em seu sketchbook.

Sua pasta de bibliotecas do Arduino deve ficar assim (no Windows):

```sh
  My Documents\Arduino\libraries\ArduinoParty\ArduinoParty.cpp
  My Documents\Arduino\libraries\ArduinoParty\ArduinoParty.h
  My Documents\Arduino\libraries\ArduinoParty\examples
  ....
```

Ou assim (no Mac e no Linux):

```sh
  Documents/Arduino/libraries/ArduinoParty/ArduinoParty.cpp
  Documents/Arduino/libraries/ArduinoParty/ArduinoParty.h
  Documents/Arduino/libraries/ArduinoParty/examples
  ....
```

Pode haver mais arquivos do que apenas os arquivos .cpp e .h, apenas certifique-se de que eles estão todos lá.

Nota: A biblioteca não funcionará se você colocar os arquivos .cpp e .h diretamente na pasta de bibliotecas ou se eles estiverem aninhados em uma pasta extra. Por exemplo: Documents\Arduino\libraries\ArduinoParty.cpp e Documents\Arduino\libraries\ArduinoParty\ArduinoParty\ArduinoParty.cpp não funcionarão.

Por fim, reinicie o aplicativo Arduino. Certifique-se de que a nova biblioteca aparece no item de menu `Sketch` (Esboço)> `Import Library` (Importar Biblioteca) do IDE. E é isso aí! Você instalou uma biblioteca!

License
----

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0][ccasa3]. Os exemplos de código do guia são disponibilizados para o domínio público.

Esse tutorial se baseia em um texto feito por Limor Fried.
Link para a página original: [Getting Started Guide - Libraries][originalpage].

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [placeholder]: <>
   [gh-issues]: <https://github.com/arduino/Arduino/issues>
   [reflib]: <https://www.arduino.cc/en/Reference/Libraries>
   [originalpage]: <https://www.arduino.cc/en/Guide/Libraries>
   [ccasa3]: <https://creativecommons.org/licenses/by-sa/3.0>
   [arduino]: <https://www.arduino.cc>
