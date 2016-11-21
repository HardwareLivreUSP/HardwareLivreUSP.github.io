---
layout:     post
title:      "Tutoriais Arduino #4: Instalando a IDE no Linux"
date:       2016-11-20
author:     "Leonardo Haddad Carlos"
img:        "post_img/arduino_oscomm.png"
---

## Instalar o software do Arduino (IDE) em computadores com Linux

Este documento explica como instalar o software do Arduino (IDE) em máquinas Linux.

## Iniciando a instalação

O build (compilação) do software do Arduino (IDE) para Linux é, agora, um pacote que não requer procedimentos específicos para as várias distribuições Linux disponíveis aos usuários. A única informação sobre o sistema que influencia na instalação é o fato de a versão ser de 32 bits ou de 64 bits.

### Faça o download do software do Arduino (IDE)

Obtenha a versão mais recente na [página de download][downloadpage]. Você pode escolher entre as versões 32, 64 e ARM. É muito importante que você escolha a versão certa para sua distribuição Linux. Clicando na versão escolhida, você vai para a página de doações e, então, pode abrir ou salvar o arquivo. Guarde-o no seu computador.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/linux_savefile.jpg" style="margin: 0 auto; max-height: 390px;" />
Instalação Linux - Salvando o Arquivo
</p>

### Extraia o pacote

O arquivo é compactado e você precisa extraí-lo em uma pasta adequada, lembrando que ele será executado a partir desta pasta.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/linux_extract.jpg" style="margin: 0 auto; max-height: 390px;" />
Instalação Linux - Extração
</p>

### Execute o script de instalação

Abra a pasta `arduino-1.6.x` criada pelo processo de extração e localize o arquivo `install.sh`. Clique com o botão direito do mouse sobre ele e escolha a opção `Executar no Terminal` do menu contextual. O processo de instalação irá terminar rapidamente e você deverá ver um novo ícone em sua área de trabalho (desktop).

Se você não encontrar a opção para executar o script a partir do menu contextual, você deve abrir uma janela do Terminal e mover (usando o comando `cd`) para a pasta `arduino-1.6.x`. Digite o comando `./install.sh` e aguarde o processo terminar. Então, você deverá ver um novo ícone em sua área de trabalho (desktop).

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/linux_installscript.jpg" style="margin: 0 auto; max-height: 390px;" />
Instalação Linux - Script de Instalação
</p>

## Siga as instruções específicas de sua placa

Quando o software do Arduino (IDE) estiver instalado corretamente, você pode acessar a [página original desse guia][guidehome] (em inglês) para encontrar, na lista localizada no lado direito da página, o link contendo as instruções específicas para a placa que você estiver usando.

## Atenção! Por favor, leia isso...

Pode acontecer de, quando você enviar um sketch (esboço) (após ter selecionado sua placa e porta serial), você receber um erro `Erro ao abrir a porta serial`. Se você receber esse erro, precisará definir a permissão da porta serial.

Abra o Terminal e digite:

```sh
ls -l /dev/ttyACM*
```

Você obterá algo parecido com isso:

```sh
crw-rw---- 1 root dialout 188, 0 5 apr 23.01 ttyACM0
```

O "0", no final do ACM, pode ser um número diferente, ou várias entradas podem ser retornadas. O dado que precisamos é o "dialout" (que é o grupo proprietário do arquivo).

Então, basta adicionarmos nosso usuário ao grupo do arquivo:

```sh
sudo usermod -a -G dialout <username>
```

Onde <username> é o seu nome de usuário no Linux. Você precisará reiniciar seu usuário (fazer logout e, em seguida, login) para que essa mudança realmente tenha efeito.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/linux_usermod.jpg" style="margin: 0 auto; max-height: 390px;" />
Instalação Linux - Adicionando o Usuário ao Grupo
</p>

Após este procedimento, você deverá ser capaz de prosseguir normalmente e fazer o upload do sketch (esboço) para a sua placa ou usar o Serial Monitor.

License
----

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0][ccasa3]. Os exemplos de código do guia são disponibilizados para o domínio público.

```sh
Tradução feita com base na revisão de 10/08/2016 feita por "SM".
```

Link para a página original: [Getting Started Guide - Linux][originalpage].

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [placeholder]: <>
   [originalpage]: <https://www.arduino.cc/en/Guide/Linux>
   [guidehome]: <https://www.arduino.cc/en/Guide/HomePage>
   [downloadpage]: <https://www.arduino.cc/en/Main/Software>
   [ccasa3]: <https://creativecommons.org/licenses/by-sa/3.0>
   [arduino]: <https://www.arduino.cc>
