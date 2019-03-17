---
layout:     post
type:       projeto
hidden:     true
title:      "LPT Musical"
date:       2019-03-02
author:     "Lucas Seiki Oshiro"
author_url: "https://linux.ime.usp.br/~lucasoshiro/"
img:        ""
img_url:    ""

---

Aqui iremos contar mais uma (f)utilidade para um computador velho: fazê-lo tocar
alguma música usando alto-falantes ligados na porta paralela! Este pequeno
projeto permite tocar até 8 canais de som diferentes usando a porta
paralela. Contudo, como os pinos são apenas digitais, só é possível fazer ondas
quadradas...

### Breve história

Há alguns meses, o Hardware Livre recebeu um computador velho, carinhosamente
apelidado de **Posidell**. Ele tem as seguintes (e bizarras) configurações:

- Gabinete Dell
- Placa-mãe Positivo
- Processador VIA C7 (??)
- 4GB de RAM DDR2 (nada mal, mas nunca usa tudo isso)
- Fax Modem
- Gravador de DVD
- Drive de disquete (que não tinha onde ser ligado na placa-mãe, vai entender)
- 0GB de HD (é, não tinha HD)

Após algum tempo exercendo a função de banquinho, coloquei um HD velho de
notebook nele e instalamos um Linux (no caso, um Fedora 32 bits com o mínimo
possível de software instalado). 

Como o Posidell tinha uma porta paralela, resolvi usá-lo para descobrir como
controlar essa porta. Relatei [aqui](/tutoriais/2019/03/02/porta_paralela/) como
que se faz isso. Nesse tutorial, está descrito uma demonstração simples de como
piscar leds com a porta paralela. 

### Preparação

Os alto falantes devem ser ligados com um fio no pino correspondente, e o outro
em um GND. Caso não sejam usados todos os 8 alto-falantes, pode-se ligar os
alto-falantes disponíveis apenas nos primeiros pinos de dados. Se ligados
diretamente nos pinos da porta paralela, os fios poderão (e irão) cair. Para
evitar isso, ligamos os alto-falantes a um plug macho que foi encaixado na porta
paralela do Posidell.

O programa em C que foi feito lê um arquivo com a descrição da música, cria uma
thread para cada canal, e cada thread oscila entre 0 e 1 na frequência de cada
nota o bit correspondente ao pino do alto-falante associado ao canal.

Apesar de exitirem vários formatos para representação de uma musica (MIDI,
MusicXML, etc), optei por fazer um que fosse fácil de ser parseado, ainda que
seja bastante limitado. O formato dele é assim:

```
% Linhas que começam com este caracter sao comentarios e serao ignoradas

% Andamento da musica, em bpm (no caso, 140 bpm)
TEMPO 140

% Numero de canais da musica (no caso, 2)
CHANNELS 2

% Inicio do canal 0 (sim, começa no 0)
BEGINCH 0

% Silencio de 1 tempo
- 1

% Si 5 tocando por 2 tempos
B 5 2

% Do sustenido 3 tocando por 1/2 tempo
C# 3 0.5

% La bemol 4 tocando por 3/4 tempo
Ab 4 0.75

% Ruido mais grave tocando por 3 tempos
~ 1 3

% Ruido mais agudo tocando por 4 tempos
~ 4 4

% Fim do canal 0
ENDCH 0

```

### O programa

Ao ler o arquivo, o parser cria uma lista encadeada de notas, silencios e ruídos
para cada canal. É criada uma thread para cada canal descrito no arquivo. Cada
thread lê nota por nota cada lista.

Uma variável global de 1 byte é acessada por todas as threads, sendo que a
thread __i__ altera apenas o valor do __i__-ésimo bit. Dada uma nota, é
cálculada sua frequência, em seguida seu período, e através de uma operação XOR,
a thread alterna o __i__-ésimo bit entre 0 e 1, dormindo metade do período nessa
alternância. Ruídos são feitos fazendo a mesma alternância, porém dormindo com
tempos aleatórios.

