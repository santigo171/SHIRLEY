// https://forum.arduino.cc/t/sd-card-connection-with-arduino-mega-2560/178436

#include "SD.h"
#define SD_ChipSelectPin 53
#include "TMRpcm.h"
#include "SPI.h"

TMRpcm tmrpcm;

void setup()
{
tmrpcm.speakerPin=9;
Serial.begin(9600);
Serial.println("SHIRLEY Started");
Serial.println(SD.begin(SD_ChipSelectPin));
if(!SD.begin(SD_ChipSelectPin))
{
  Serial.println("SD fail");
  return;
}
tmrpcm.setVolume(6);

tmrpcm.play("C.wav");
delay(3000);
tmrpcm.play("D.wav");
delay(3000);
tmrpcm.play("E.wav");
delay(3000);
tmrpcm.play("A#.wav");
}

void loop() {
  // put your main code here, to run repeatedly:

}
