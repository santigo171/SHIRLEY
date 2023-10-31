import {Estrellita} from "../assets/songs/Song1"
import {Cumpleannos} from "../assets/songs/Song2"
import {Pirates} from "../assets/songs/Song3"
import {Shark} from "../assets/songs/Song4"
import {Sovietico} from "../assets/songs/Song5"
import {Alegria} from "../assets/songs/Song6"
import {Titanic} from "../assets/songs/Song7"
import {Take_on_me} from "../assets/songs/Song8"

import {silence} from "../assets/songs/SongInterface"

import { writeFileSync } from 'fs'

const songsToExport = [Estrellita, Cumpleannos, Pirates,
    Shark,
    Sovietico,
    Alegria,
    Titanic,
    Take_on_me];
const jsonToExport: any = {}

let i = 0
songsToExport.forEach((song) => {
    const songInJson = {
        name: song.name,
        bpm: song.bpm,
        notes: song.sheet.map((musicalFigure) => {
            if (musicalFigure.silence === true) {
                return silence
            } else if (musicalFigure.silence === false && musicalFigure.note !== null){
                return musicalFigure.note[0]
            }
        }),
        durations: song.sheet.map((musicalFigure) => {
            return musicalFigure.duration
        })
    }
    jsonToExport[i] = songInJson
    i++
    console.log(`written ${song.name}`)
})

try {
    writeFileSync('../SHIRLEY_ARDUINO/songs.json', JSON.stringify(jsonToExport))
    console.log("File written")
} catch (err) {
    console.error(err)
}

console.log(jsonToExport)
