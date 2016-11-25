---
layout:     post
title:      "Tutoriais Arduino #14: Placas - Leonardo"
date:       2016-11-25
author:     "Leonardo Haddad Carlos"
img:        "post_img/arduino_oscomm.png"
---

## Primeiros Passos com a Arduino/Genuino Leonardo e Micro

As placas Leonardo e Micro usam um ATmega32U4 para oferecer mais recursos em comparação com a Uno. Neste guia, explicamos como colocar a placa em operação e quais são as diferenças com a Uno.

## Botando a Mão na Massa

A Leonardo e a Micro são programadas usando o software do Arduino (IDE), nosso Ambiente de Desenvolvimento Integrado, comum a todas as nossas placas. Antes de poder avançar, você deve ter instalado o software do Arduino (IDE) no seu PC, conforme explicado na [página inicial de nosso Guia de Primeiros Passos][firststeps].

### Instale os Drivers para Arduino e Micro

#### Mac

A primeira vez que você conectar uma Leonardo ou Micro em um Mac, o "Assistente de Configuração do Teclado" será lançado. Não há nada para configurar com o Leonardo, então você pode fechar esse diálogo clicando no botão vermelho no canto superior esquerdo da janela.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/leo_mackey.png" style="margin: 0 auto; max-height: 390px;" />
Ignore a tela de configuração de teclado que abrirá no Mac
</p>

#### Windows

As instruções a seguir são para Windows 7, Vista e 10. Elas são válidos também para Windows XP, com pequenas diferenças nas janelas de diálogo. Conecte sua placa e aguarde até que o Windows comece seu processo de instalação do driver. Se o instalador não iniciar automaticamente, navegue até o Gerenciador de Dispositivos do Windows (`Iniciar`> `Painel de Controle`> `Hardware`) e localize a opção referente à Arduino Leonardo. Clique com o botão direito do mouse e escolha `Atualizar driver`.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/leo_devmanager.png" style="margin: 0 auto; max-height: 390px;" />
Atualize o driver usando o Gerenciador de Dispositivos
</p>

Na tela seguinte, escolha "Procurar o software do driver no computador" e clique em `Avançar`.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/leo_browsedriver.png" style="margin: 0 auto; max-height: 390px;" />
Escolhe a opção de encontrar o software do driver no computador
</p>

Clique no botão `Procurar...` e outra caixa de diálogo será exibida: navegue até a pasta que contém o software Arduino que você acabou de baixar. Selecione a pasta de drivers e clique em `OK` e, em seguida, clique em `Avançar`.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/leo_driverurl.png" style="margin: 0 auto; max-height: 390px;" />
Escolha a opção de encontrar o software do driver no computador
</p>

Você receberá uma notificação de que a placa não passou no teste de logotipo do Windows. Escolha continuar assim mesmo.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/leo_driverok.png" style="margin: 0 auto; max-height: 390px;" />
</p>

Depois de alguns momentos, você verá a mensagem dizendo que o assistente terminou de instalar o software para Arduino Leonardo. Pressione o botão `Fechar`.

#### Linux

Não há necessidade de instalar drivers para o Ubuntu 10.0.4

### Abra o Exemplo do Blink

Agora que sua placa está conectada ao seu computador e os drivers estão instalados corretamente, abra o esboço do exemplo de piscar de LED: `File`> `Examples`> `1.Basics`> `Blink`.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/exp_blink.jpg" style="margin: 0 auto; max-height: 390px;" />
`File`> `Examples`> `01.Basics`> `Blink`
</p>

### Selecione sua Placa

Você precisará Leonardo ou Micro no menu `Tools`> `Board`.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/leo_chooseboard.jpg" style="margin: 0 auto; max-height: 390px;" />
Escolha ou a Arduino/Leonardo Uno ou a Arduino/Genuino Micro
</p>

### Selecione sua Porta Serial

Selecione o dispositivo serial da placa a partir do menu `Tools` | `Serial Port`. A maneira mais fácil de descobrir a porta é desconectar sua placa e reabrir o menu; a entrada que desaparecer é a sua placa Arduino/Genuino. Reconecte a placa, reinicie o IDE e selecione essa porta serial.

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/mega_chooseserial.jpg" style="margin: 0 auto; max-height: 390px;" />
Selecione a porta serial correspondente
</p>

## To Be Continued

Esse tutorial está incompleto, aguarde por mais novidades nos próximos capítulos!

License
----

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0][ccasa3]. Os exemplos de código do guia são disponibilizados para o domínio público.

```sh
Tradução feita com base na revisão de 1/08/2016 feita por "SM".
```

Link para a página original: [Getting Started Guide - Boards - Leonardo][originalpage].

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [placeholder]: <>
   [reference]: <https://www.arduino.cc/en/Reference/HomePage>
   [tutexamples]: <https://www.arduino.cc/en/Tutorial/HomePage>
   [megahub]: <https://create.arduino.cc/projecthub/products/arduino-mega-2560-genuino-mega-2560>
   [troubleshooting]: </2016/11/25/arduino-10troubleshooting/>
   [environment]: </2016/11/21/arduino-7environment/>
   [stepsxp]: <https://www.arduino.cc/en/Guide/UnoDriversWindowsXP>
   [firststeps]: </2016/11/20/arduino-1start/>
   [originalpage]: <https://www.arduino.cc/en/Guide/ArduinoMega2560>
   [ccasa3]: <https://creativecommons.org/licenses/by-sa/3.0>
   [arduino]: <https://www.arduino.cc>
