---
layout:     post
type:       tutorial
hidden:     true
title:      "Arduino #9: Núcleos"
date:       2016-11-24
author:     "Leonardo Haddad Carlos"
author_url: ""
img:        "assets/images/tutoriais/arduino/arduino_oscomm.png"
img_url:    ""

redirect_from:
 - "2016/11/24/arduino-9cores"
 - "2016/11/24/arduino-9cores/"
---

#### Instalando Núcleos Adicionais no Arduino

A partir do IDE versão 1.6.2, somente placas AVR Arduino são instaladas por padrão. Algumas placas Arduino requerem que um núcleo adicional esteja instalado.

Um exemplo é a Arduino Due, que usa um microcontrolador ARM/SAM. Para que o Arduino IDE possa programar um Arduino Due, você precisa instalar o `SAM Core` usando o `Boards Manager`.

#### Como Instalar um Núcleo

Neste exemplo, instalaremos o núcleo requerido pela placa Arduino Due.

Clique no menu `Tools` e, em seguida, em `Boards > Boards Manager`.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/core_boards.png">
    <figcaption>Boards > Boards Manager</figcaption>
  </figure>
</div>

O gerenciador da placa abrirá e você verá uma lista de placas instaladas e disponíveis.

Selecione o núcleo SAM, escolha a versão no menu drop-down e clique em instalar.

<div class="img-container">
  <figure>
    <img class="large" src="{{ site.baseurl }}/assets/images/tutoriais/arduino/core_version.png">
    <figcaption>Escolha a versão do núcleo</figcaption>
  </figure>
</div>

O tempo de download dependerá da velocidade da sua conexão.

Após a conclusão da instalação, uma tag `INSTALLED` aparece ao lado do nome do núcleo, indicando que você já pode fechar o gerenciador e encontrar a nova placa no menu `Board`.

----

Link para a página original: [Getting Started Guide - Cores](https://www.arduino.cc/en/Guide/Cores).

----

#### Licença

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0](https://creativecommons.org/licenses/by-sa/3.0). Os exemplos de código do guia são disponibilizados para o domínio público.
