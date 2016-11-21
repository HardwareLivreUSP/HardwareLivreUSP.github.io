---
layout:     post
title:      "Tutoriais Arduino #5: Usando uma versão portátil da IDE"
date:       2016-11-20
author:     "Leonardo Haddad Carlos"
img:        "post_img/arduino_oscomm.png"
---

## Como criar e usar uma versão portátil do software do Arduino (IDE)

Este documento explica como fazer uma instalação portátil do software do Arduino (IDE) para máquinas Windows e Linux. Uma instalação portátil contém todos os arquivos e diretórios necessários para que o software do Arduino (IDE) funcione em um computador sem afetar seus arquivos fora da pasta designada para a instalação portátil.

## Por que usar uma versão portátil?

Em quase todas as escolas, os alunos não têm privilégios de administrador, para que eles não tenham acesso de gravação em algumas pastas. Isso leva a algum problema na utilização do software do Arduino (IDE), uma vez que suas preferências e sketchbook (caderno de esboços) são salvos em uma dessas pastas. Usando uma versão portátil do IDE, você pode resolver esse problema.

Outro cenário pode ser o seguinte: você quer organizar um workshop e você precisa de alguma [biblioteca][libraries] adicional ou um [núcleo][cores] específico. Como a versão portátil armazena o sketchbook (caderno de esboços), as bibliotecas e a pasta de hardware localmente, você pode ter um ponto de partida igual para todas as pessoas que participarem do workshop apenas replicando a mesma pasta em todas as máquinas. Isso também é bastante útil se, por algum motivo, você não tiver uma conexão com a internet e quiser preparar tudo para o seu projeto sem downloads e atrasos.

Além disso, uma instalação portátil pode estar em um pendrive, permitindo que você carregue seu conjunto pessoal de esboços, núcleos e bibliotecas para ser usado em qualquer computador sem afetá-lo com seus arquivos.

## Como criar um Arduino portátil

O procedimento é composto por algumas etapas simples. Você pode usar um pendrive ou uma pasta local em sua máquina. Uma vez feito, com as bibliotecas e núcleos adicionais onde necessário, essa pasta pode ser copiada para outras máquinas.
 - [Faça o download][downloadpage] de uma versão compactada (.zip) do IDE do Arduino de acordo com o sistema operacional;
 - Uma vez concluído o download, extraia o conteúdo do arquivo na unidade escolhida (local ou pendrive);
 - Abra a pasta extraída e, em sua raiz, crie um novo diretório chamado `portable`, ao lado dos outros;

<p style="text-align: center;">
    <img src="{{ site.baseurl }}/post_img/arduinotutorials/portable_dirstructure.png" style="margin: 0 auto; max-height: 390px;" />
Instalação Portátil - Estrutura de Diretórios
</p>

A estrutura da árvore de arquivos deve ser como esta; a pasta `portable` será preenchida pelo software do Arduino (IDE), conforme necessário, pelas bibliotecas, esboços e núcleos.

Para usar esta instalação, inicie o executável do Arduino;

A partir de agora, todos os sketches (esboços), bibliotecas e núcleos adicionais serão instalados na pasta `portable`. Você pode copiar toda a pasta principal e trazê-la consigo para onde quiser: ela guardará todas as suas preferências, bibliotecas, núcleos e sketches (esboços).

## Nota

Se você quiser atualizar uma instalação portátil para uma versão mais recente, baixe a nova versão em formato compactado e, em seguida, extraia o conteúdo em uma pasta temporária. Então, você pode mover a pasta `portable` da antiga instalação para a pasta da nova instalação, ou então você pode copiar todos os arquivos da nova versão para a pasta antiga, sobrescrevendo todos os arquivos. De qualquer maneira, ao final do processo, você deverá ter a instalação portátil atualizada do software do Arduino (IDE) com todos os seus núcleos, bibliotecas e sketches (esboços) preservados. Lembre-se de renomear a pasta raiz para referenciar a versão de lançamento adequada, se necessário. Você deve sempre lançar o arquivo executável "Arduino" de dentro da pasta de sua instalação portátil para usar os esboços, núcleos e bibliotecas contidos nela. Se você tiver outra instalação do software do Arduino (IDE) na máquina que estiver usando, essa versão não será afetada. Bibliotecas e núcleos já instalados na máquina não serão vistos ou utilizados pela instalação portátil.

License
----

O texto do guia de iniciação do Arduino está publicado sob a licença [Creative Commons Attribution-ShareAlike 3.0][ccasa3]. Os exemplos de código do guia são disponibilizados para o domínio público.

```sh
Tradução feita com base na revisão de 16/08/2016 feita por "SM".
```

Link para a página original: [Getting Started Guide - IDE Portátil][originalpage].

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [placeholder]: <>
   [cores]: <https://www.arduino.cc/en/Guide/Cores>
   [libraries]: <https://www.arduino.cc/en/Guide/Libraries#toc3>
   [originalpage]: <https://www.arduino.cc/en/Guide/PortableIDE>
   [downloadpage]: <https://www.arduino.cc/en/Main/Software>
   [ccasa3]: <https://creativecommons.org/licenses/by-sa/3.0>
   [arduino]: <https://www.arduino.cc>
