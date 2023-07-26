import {Estrellita} from "./Song1"
const songsToExport = [Estrellita];
const jsonToExport: any = {}

songsToExport.forEach((song) => {
    const songInJson = {
        name: song.name,
        bpm: song.bpm,
        notes: song.sheet.map((musicalFigure) => {
            if (musicalFigure.silence === true) {
                return 13
            } else {
                return musicalFigure.note
            }
        }),
        durations: song.sheet.map((musicalFigure) => {
            return musicalFigure.duration
        })
    }
    jsonToExport[song.id] = songInJson
    console.log(`written ${song.name}`)
})

console.log(jsonToExport)
