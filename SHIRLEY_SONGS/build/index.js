"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Song1_1 = require("./Song1");
const songsToExport = [Song1_1.Estrellita];
const jsonToExport = {};
songsToExport.forEach((song) => {
    const songInJson = {
        name: song.name,
        bpm: song.bpm,
        notes: song.sheet.map((musicalFigure) => {
            if (musicalFigure.silence === true) {
                return 13;
            }
            else {
                return musicalFigure.note;
            }
        }),
        durations: song.sheet.map((musicalFigure) => {
            return musicalFigure.duration;
        })
    };
    jsonToExport[song.id] = songInJson;
    console.log(`written ${song.name}`);
});
console.log(jsonToExport);
