---
layout:     post
title:      "Tutoriais Arduino #9: Núcleos"
date:       2016-11-24
author:     "Leonardo Haddad Carlos"
img:        "post_img/arduino_oscomm.png"
---

## Instalando Núcleos Adicionais no Arduino

A partir do IDE versão 1.6.2, somente placas AVR Arduino são instaladas por padrão. Algumas placas Arduino requerem que um núcleo adicional esteja instalado.

Um exemplo é a Arduino Due, que usa um microcontrolador ARM/SAM. Para que o Arduino IDE possa programar um Arduino Due, você precisa instalar o ´SAM Core´ (Núcleo SAM) usando o ´Boards Manager´ (Gerenciados de Placas).

## Como Instalar um Núcleo

Neste exemplo, instalaremos o núcleo requerido pela placa Arduino Due.

Clique no menu `Tools` (Ferramentas) e, em seguida, em `Boards` (Placas)> `Boards Manager` (Gerenciador de Placas).

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/cores_boards.png" style="margin: 0 auto; max-height: 390px;" />
`Boards`> `Boards Manager`
</p>

O gerenciador da placa abrirá e você verá uma lista de placas instaladas e disponíveis.

Selecione o núcleo SAM, escolha a versão no menu drop-down e clique em instalar.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/cores_version.png" style="margin: 0 auto; max-height: 390px;" />
Escolha a versão do núcleo
</p>

O tempo de download dependerá da velocidade da sua conexão.

Após a conclusão da instalação, uma tag Installed aparece ao lado do nome do núcleo, indicando que você já pode fechar o gerenciador e encontrar a nova placa no menu `Board` (Placa).

License
----

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0][ccasa3]. Os exemplos de código do guia são disponibilizados para o domínio público.

Link para a página original: [Getting Started Guide - Cores][originalpage].

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [placeholder]: <>
   [originalpage]: <https://www.arduino.cc/en/Guide/Cores>
   [ccasa3]: <https://creativecommons.org/licenses/by-sa/3.0>
   [arduino]: <https://www.arduino.cc>
