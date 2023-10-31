#include <Arduino.h>
#include <SD.h>
#include <SPI.h>
#include <ArduinoJson.h>

#include "ReadJsonFromSD.h"
#include "settings.h"

File ReadJsonFromSD::_openFile()
{
    if (!SD.begin(SD_CHIP_PIN))
    {
        Serial.println("SD fail");
        return;
    }
    Serial.println("SD success");
    if (SD.exists(FILENAME) == 0)
    {
        Serial.println("Error, file doesnt exist");
        return;
    }
    File file = SD.open(FILENAME);
    Serial.print("File exists, file size: ");
    Serial.println(file.size());
    return file;
}

ReadJsonFromSD::ReadJsonFromSD()
{
    File file = ReadJsonFromSD::_openFile();
    int fileSize = file.size() + 1;
    char data[fileSize] = "\0";

    int i = 0;
    while (file.available())
    {
        char fileLine = file.read();
        data[i] = fileLine;
        i++;
    }
    file.close();
    Serial.println("File was readed");

    DynamicJsonDocument songs(fileSize);
    deserializeJson(songs, data);
    auto info = songs["0"]["name"].as<const char *>();
    Serial.println(info);

    auto info2 = songs["0"]["bpm"].as<int>();
    Serial.println(info2);

    // auto info3 = songs["0"]["notes"][3].as<int>();
    // int A[] = {songs["0"]["notes"]};
    // Serial.println(info3);
    // Serial.println(A[2]);
    // Serial.println(A[3]);
}