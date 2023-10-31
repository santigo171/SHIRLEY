#include <ArduinoJson.h>

const byte buttonPin = 22;
int ledPin = 36;

void setup()
{
    Serial.begin(115200);
    Serial.println("\n\n\nSHIRLEY Leds y button test Started :D");
    pinMode(buttonPin, INPUT);
    
    pinMode(ledPin, OUTPUT);

    digitalWrite(ledPin, HIGH);
};

byte buttonState = HIGH;

void loop()
{
    buttonState = digitalRead(buttonPin);
    Serial.print("\nButton State: ");
    Serial.print(buttonState);

    if (buttonState == HIGH) {
      digitalWrite(ledPin, HIGH);
    } else {
      digitalWrite(ledPin, LOW);
    }
}
