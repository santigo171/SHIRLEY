// https://forum.arduino.cc/t/sd-card-connection-with-arduino-mega-2560/178436

#include "SD.h"
#include "TMRpcm.h"
#include "SPI.h"
#include "pinsConnection.h"
#include "ArduinoJson.h"

TMRpcm tmrpcm;

void setup()
{
  tmrpcm.speakerPin = 9;
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

  pinMode(C_LED_PIN, OUTPUT);
  pinMode(CS_LED_PIN, OUTPUT);
  pinMode(D_LED_PIN, OUTPUT);
  pinMode(DS_LED_PIN, OUTPUT);
  pinMode(E_LED_PIN, OUTPUT);
  pinMode(F_LED_PIN, OUTPUT);
  pinMode(FS_LED_PIN, OUTPUT);
  pinMode(G_LED_PIN, OUTPUT);
  pinMode(GS_LED_PIN, OUTPUT);
  pinMode(A_LED_PIN, OUTPUT);
  pinMode(AS_LED_PIN, OUTPUT);
  pinMode(C2_LED_PIN, OUTPUT);

  pinMode(CONTROL_BUTTON_PIN, INPUT);

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

int checkButtons() {
  CButtonState = digitalRead(C_BUTTON_PIN);
  CSButtonState = digitalRead(CS_BUTTON_PIN);
  DButtonState = digitalRead( D_BUTTON_PIN);
  DSButtonState = digitalRead(DS_BUTTON_PIN);
  EButtonState = digitalRead( E_BUTTON_PIN);
  FButtonState = digitalRead( F_BUTTON_PIN);
  FSButtonState = digitalRead(FS_BUTTON_PIN);
  GButtonState = digitalRead( G_BUTTON_PIN);
  GSButtonState = digitalRead(GS_BUTTON_PIN);
  AButtonState = digitalRead( A_BUTTON_PIN);
  ASButtonState = digitalRead(AS_BUTTON_PIN);
  C2ButtonState = digitalRead(C2_BUTTON_PIN);

  ControlButtonState = digitalRead(C2_BUTTON_PIN);

  if (ControlButtonState == HIGH) {
    if (CButtonState == HIGH) {
      return STOP_PLAYING;
    }
    if (CSButtonState == HIGH) {
      return PLAY_SONG_1;
    }
    if (DButtonState == HIGH) {
      return PLAY_SONG_2;
    }
    if (DSButtonState == HIGH) {
      return PLAY_SONG_3;
    }
    if (EButtonState == HIGH) {
      return PLAY_SONG_4;
    }
    if (FButtonState == HIGH) {
      return PLAY_SONG_5;
    }
    if (FSButtonState == HIGH) {
      return PLAY_SONG_6;
    }
    if (GButtonState == HIGH) {
      return PLAY_SONG_7;
    }
    if (GSButtonState == HIGH) {
      return PLAY_SONG_8;
    }
  } else {
    if (CButtonState == HIGH) {
      tmrpcm.play("C.wav");
    }
    if (CSButtonState == HIGH) {
      tmrpcm.play("C#.wav");
    }
    if (DButtonState == HIGH) {
      tmrpcm.play("D.wav");
    }
    if (DSButtonState == HIGH) {
      tmrpcm.play("D#.wav");
    }
    if (EButtonState == HIGH) {
      tmrpcm.play("E.wav");
    }
    if (FButtonState == HIGH) {
      tmrpcm.play("F.wav");
    }
    if (FSButtonState == HIGH) {
      tmrpcm.play("F#.wav");
    }
    if (GButtonState == HIGH) {
      tmrpcm.play("G.wav");
    }
    if (GSButtonState == HIGH) {
      tmrpcm.play("G#.wav");
    }
    if (AButtonState == HIGH) {
      tmrpcm.play("A.wav");
    }
    if (ASButtonState == HIGH) {
      tmrpcm.play("A#.wav");
    }
    if (BButtonState == HIGH) {
      tmrpcm.play("B.wav");
    }
    if (C2ButtonState == HIGH) {
      tmrpcm.play("C2.wav");
    }
  }
}

void playSongLeds(int songId) {

}

void loop() {
  int status = checkButtons();
  if (status == )
}
