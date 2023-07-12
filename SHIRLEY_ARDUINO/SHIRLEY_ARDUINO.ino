// https://forum.arduino.cc/t/sd-card-connection-with-arduino-mega-2560/178436

#include "SD.h"
#include "TMRpcm.h"
#include "SPI.h"
#include "pinsConnection.h"

TMRpcm tmrpcm;

void setup()
{
  tmrpcm.speakerPin=9;
  Serial.begin(9600);
  Serial.println("SHIRLEY Started");
  Serial.println(SD.begin(SD_CHIP_PIN));
  if(!SD.begin(SD_CHIP_PIN))
  {
    Serial.println("SD fail");
    return;
  }
  tmrpcm.setVolume(6);

  tmrpcm.play("C2.wav");
  delay(3000);
  
  pinMode(C_BUTTON_PIN, INPUT);
}

int buttonState = 0; 
void loop() {
  buttonState = digitalRead(C_BUTTON_PIN);
  if (buttonState == HIGH) {
    Serial.println("BOTON");
  } else {
    Serial.println("NADA");
  }
}
