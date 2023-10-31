#include <Arduino.h>
#include <TMRpcm.h>
#include <SPI.h>

#include "Note.h"

TMRpcm audio;

Note::Note(byte buttonPin, int ledPin, char *filename)
{
    _buttonPin = buttonPin;
    _ledPin = ledPin;
    _filename = filename;
    _lastButtonState = 0;

    pinMode(_buttonPin, INPUT_PULLUP);
    pinMode(_ledPin, OUTPUT);
    Note::setSpeaker();
    Serial.print("Created note: ");
    Serial.println(filename);
}

void playIntro() {
  Serial.println("Play intro");
  audio.play("inicio.wav");
  delay(6800);
}

void Note::setSpeaker() {
  Serial.println("Set Speaker 11");
  audio.speakerPin = 11;
  // audio.setVolume(7);
}

void Note::checkIfPlaySound()
{
    _buttonState = digitalRead(_buttonPin);
    if (_buttonState != _lastButtonState)
    {
      if (_buttonState == LOW)
      {
        Serial.print("Playing: ");
        Serial.println(_filename);
        audio.play(_filename);
      }
      else if (_buttonState == HIGH)
      {
        audio.stopPlayback();
      };
    };
    _lastButtonState = _buttonState;
}

void Note::turnLedOn()
{
    Serial.print("Turned on: ");
    Serial.println(_filename);
    digitalWrite(_ledPin, HIGH);
}

void Note::turnLedOff()
{
    Serial.print("Turned off: ");
    Serial.println(_filename);
    digitalWrite(_ledPin, LOW);
}