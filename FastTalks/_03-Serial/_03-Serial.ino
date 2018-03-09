/*  Hardware Livre USP
 *  Aula 02 - Comunicação Serial 
 *  por: Bruno Aricó
 */
int data; //variavel que recebe o conteudo da serial
int led = 13; //define o pido do led como  pino 13

void setup() {
  Serial.begin(9600);                                   //inicia a comunicação serial
  Serial.println("Comunicacao Serial iniciada");        //Manda uma mensagem pela serial para o computador
  pinMode(led, OUTPUT);                                 //define o pino do led como uma saida de tensão
}

void loop() {
  if(Serial.available()) {                              //verifica se tem algo na serial
    data = Serial.parseInt();                           //se tiver e for um interio lê 
    if(data == 1){                                      //se for 1 
      digitalWrite(led, HIGH);                          // liga o led          
    }
    else if( data = 2) {                                //se for 2 
      digitalWrite(led, LOW);                           //apaga o led
    }
  }
}
