#ifndef NOTE_H
#define NOTE_H

#include <Arduino.h>

void playIntro();

class Note
{
public:
    Note() : _buttonPin(0), _ledPin(0), _filename(nullptr) {}
    Note(byte buttonPin, int ledPin, char *filename);
    void checkIfPlaySound();
    void turnLedOn();
    void turnLedOff();
    void setSpeaker();

private:
    byte _buttonPin;
    int _buttonState = 0;
    int _lastButtonState = 0;
    int _ledPin;
    char *_filename;
};

#endif