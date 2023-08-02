// https://forum.arduino.cc/t/sd-card-connection-with-arduino-mega-2560/178436

#include "SD.h"
#include "TMRpcm.h"
#include "SPI.h"
#include "pinsConnection.h"
#include "ArduinoJson.h"

TMRpcm tmrpcm;

void setup()
{
  tmrpcm.speakerPin=9;
  Serial.begin(9600);
  Serial.println("\nSHIRLEY Started");
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
  pinMode(CS_BUTTON_PIN, INPUT);
  pinMode(D_BUTTON_PIN, INPUT);
  pinMode(DS_BUTTON_PIN, INPUT);
  pinMode(E_BUTTON_PIN, INPUT);
  pinMode(F_BUTTON_PIN, INPUT);
  pinMode(FS_BUTTON_PIN, INPUT);
  pinMode(G_BUTTON_PIN, INPUT);
  pinMode(GS_BUTTON_PIN, INPUT);
  pinMode(A_BUTTON_PIN, INPUT);
  pinMode(AS_BUTTON_PIN, INPUT);
  pinMode(C2_BUTTON_PIN, INPUT);

  File songs = SD.open("songs.json");
  if (songs) {
    Serial.println("songs.txt:");
    while (songs.available()) {
      Serial.write(songs.read());
    }
    songs.close();
  } else {
    Serial.println("error opening file");
  }
}

int buttonState = 0; 
void loop() {
  buttonState = digitalRead(C_BUTTON_PIN);
  if (buttonState == HIGH) {
    // Serial.println("BOTON");
  } else {
    // Serial.println("NADA");
  }
}
