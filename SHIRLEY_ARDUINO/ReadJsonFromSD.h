#ifndef READSD_H
#define READSD_H

#include <Arduino.h>
#include <SD.h>

class ReadJsonFromSD
{
public:
    ReadJsonFromSD();

private:
    File _openFile();
};

#endif