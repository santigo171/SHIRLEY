// https://forum.arduino.cc/t/sd-card-connection-with-arduino-mega-2560/178436
// https://forum.arduino.cc/t/parsing-an-string-from-an-sd-card-with-the-arduinojson-h-library/482810/5
// https://forum.arduino.cc/t/explorar-y-abrir-archivos-de-una-sd/164569 See all files from SD

#include <ArduinoJson.h>

#include "settings.h"
#include "Note.h"
#include "ReadJsonFromSD.h"

Note notes[13];

void setup()
{
    // Start Serial and start sd
    Serial.begin(115200);
    Serial.println("\n\n\nSHIRLEY Started :D");
    ReadJsonFromSD();

    notes[0] =
        Note(22, 36, "C.wav");
    notes[1] =
        Note(23, 37, "C#.wav");
    notes[2] =
        Note(24, 38, "D.wav");
    notes[3] =
        Note(25, 39, "D#.wav");
    notes[4] =
        Note(26, 40, "E.wav");
    notes[5] =
        Note(27, 41, "F.wav");
    notes[6] =
        Note(28, 42, "F#.wav");
    notes[7] =
        Note(29, 43, "G.wav");
    notes[8] =
        Note(30, 44, "G#.wav");
    notes[9] =
        Note(31, 45, "A.wav");
    notes[10] =
        Note(32, 46, "A#.wav");
    notes[11] =
        Note(33, 47, "B.wav");
    notes[12] =
        Note(34, 48, "C2.wav");

    playIntro();
};

// const int songNotes[] = {0, 0, 7, 7, 9, 9, 7, 5, 5, 4, 4, 2, 2, 0, 7, 7, 5, 5, 4, 4, 2, 7, 7, 5, 5, 4, 4, 2};
// const int songDurations[] = {2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1};
// const int bpm = 60;

const int songNotes[] = {0, 1, 0, 0};
const int songDurations[] = {0, 0, 0, 1};
const int bpm = 120;


void playSong() {
    unsigned long clockDelay = 0;
    int i = 0;
    
    Serial.println("Playing song");
    for (int songNote : songNotes) {
        Serial.print("Note: ");
        Serial.println();
        notes[songNote].turnLedOn();
        
        // Translate from bpm to milliseconds that a quarter last:
        int millisecondsThatAQuarterLast = (bpm / 60) * 1000;
        // How long will be the led turned on?
        int noteDuration = songDurations[i];
        unsigned long clockDelayPeriod;
        if (noteDuration == 0) { // Whole
          clockDelayPeriod = millisecondsThatAQuarterLast * 4;
        } else if (noteDuration == 1) { // Half
          clockDelayPeriod = millisecondsThatAQuarterLast * 2;
        } else if (noteDuration == 2) { // Quarter
          clockDelayPeriod = millisecondsThatAQuarterLast;
        } else if (noteDuration == 3) { // QuarterD
          clockDelayPeriod = millisecondsThatAQuarterLast + (millisecondsThatAQuarterLast / 2);
        } else if (noteDuration == 4) { // Eigth
          clockDelayPeriod = millisecondsThatAQuarterLast / 2;
        } else if (noteDuration == 5) { // EigthD
          clockDelayPeriod = millisecondsThatAQuarterLast / 2 + millisecondsThatAQuarterLast / 4;
        } else if (noteDuration == 6) { // Semiquaver
          clockDelayPeriod = millisecondsThatAQuarterLast / 4;
        }
        while (millis() <= clockDelay + clockDelayPeriod) {
          for (int j = 0; j < 12; j++) { // 12 is the number of notes
            notes[j].checkIfPlaySound();
          }
        }
        clockDelay += clockDelayPeriod;
        i++;
        notes[songNote].turnLedOff();
    }
}

void freePractice() {
    for (int j = 0; j < 12; j++) { // 12 is the number of notes
        notes[j].checkIfPlaySound();
    }
}

void loop()
{
  // playSong();
    freePractice();
}
