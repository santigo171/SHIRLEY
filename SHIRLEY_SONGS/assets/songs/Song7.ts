import {
    Whole,
    Half,
    Quarter,
    QuarterD,
    Eighth,
    EighthD,
    Semiquaver,
    C,
    Cs,
    D,
    Ds,
    E,
    F,
    Fs,
    G,
    Gs,
    A,
    As,
    B,
    C2
} from "./SongInterface";
import { Song } from "./SongInterface";

export const Titanic: Song = {
    name: "Titanic",
    bpm: 100,
    metric: "4/4",
    sheet: [
        {
            silence: true,
            duration: Half,
            note: null
        },
        {
            silence: true,
            duration: Quarter,
            note: null
        },
        {
            silence: false,
            duration: Eighth,
            note: [F]
        },
        {
            silence: false,
            duration: Eighth,
            note: [G]
        },
        //
        {
            silence: false,
            duration: Eighth,
            note: [G]
        },
        {
            silence: false,
            duration: Eighth,
            note: [A]
        },
        {
            silence: false,
            duration: Half,//Ligada
            note: [A]
        },
        {
            silence: false,
            duration: Eighth,
            note: [G]
        },
        {
            silence: false,
            duration: Eighth,
            note: [F]
        },
        //
        {
            silence: false,
            duration: Eighth,
            note: [G]
        },
        {
            silence: false,
            duration: Eighth,
            note: [C2]
        },
        {
            silence: false,
            duration: Half,//Ligada
            note: [C2]
        },
        {
            silence: false,
            duration: Eighth,
            note: [As]
        },
        {
            silence: false,
            duration: Eighth,
            note: [A]
        },
        //
        {
            silence: false,
            duration: Half,
            note: [F]
        },
        {
            silence: false,
            duration: Quarter,//Ligada
            note: [F]
        },
        {
            silence: true,
            duration: Quarter,
            note: null
        },
        //
        {
            silence: true,
            duration: Half,
            note: null
        },
        {
            silence: true,
            duration: Quarter,
            note: null
        },
        {
            silence: false,
            duration: Eighth,
            note: [F]
        },
        {
            silence: false,
            duration: Eighth,
            note: [G]
        },
        //
        {
            silence: false,
            duration: Half,
            note: [A]
        },
        {
            silence: false,
            duration: Quarter,//Ligada
            note: [A]
        },
        {
            silence: false,
            duration: Semiquaver,
            note: [As]
        },
        {
            silence: false,
            duration: Semiquaver,
            note: [A]
        },
        {
            silence: false,
            duration: Semiquaver,
            note: [G]
        },
        {
            silence: false,
            duration: Semiquaver,
            note: [F]
        },
        //
        {
            silence: false,
            duration: Eighth,
            note: [G]
        },
        {
            silence: false,
            duration: Eighth,
            note: [C2]
        },
        {
            silence: false,
            duration: Half,//Ligada
            note: [C2]
        },
        {
            silence: false,
            duration: Eighth,
            note: [A]
        },
        {
            silence: false,
            duration: Eighth,
            note: [C2]
        },
        //
        {
            silence: false,
            duration: Half,
            note: [C2]
        },
        {
            silence: false,
            duration: Eighth,//ligada
            note: [C2]
        },
        {
            silence: false,
            duration: Eighth,
            note: [A]
        },
        {
            silence: false,
            duration: Eighth,
            note: [C2]
        },
        //
        {
            silence: false,
            duration: Half,
            note: [C2]
        },
        {
            silence: false,
            duration: Half,
            note: [C2]
        },
        //
        {
            silence: false,
            duration: Half,
            note: [G]
        },
        {
            silence: true,
            duration: Half,
            note: null
        },
        ////
        {
            silence: false,
            duration: QuarterD,
            note: [F]
        },
        {
            silence: false,
            duration: Eighth,
            note: [F]
        },
        {
            silence: false,
            duration: Quarter,
            note: [F]
        },
        {
            silence: false,
            duration: Quarter,
            note: [F]
        },
        //
        {
            silence: false,
            duration: Quarter,
            note: [E]
        },
        {
            silence: false,
            duration: Half,
            note: [F]
        },
        {
            silence: false,
            duration: Quarter,
            note: [F]
        },
        //
        {
            silence: false,
            duration: Quarter,
            note: [E]
        },
        {
            silence: false,
            duration: Half,
            note: [F]
        },
        {
            silence: false,
            duration: Quarter,
            note: [G]
        },
        //
        {
            silence: false,
            duration: Half,
            note: [A]
        },
        {
            silence: false,
            duration: Half,
            note: [G]
        },
        ////////////////////
        {
            silence: false,
            duration: QuarterD,
            note: [F]
        },
        {
            silence: false,
            duration: Eighth,
            note: [F]
        },
        {
            silence: false,
            duration: Quarter,
            note: [F]
        },
        {
            silence: false,
            duration: Quarter,
            note: [F]
        },
        //
        {
            silence: false,
            duration: Quarter,
            note: [E]
        },
        {
            silence: false,
            duration: Half,
            note: [F]
        },
        {
            silence: false,
            duration: Quarter,
            note: [F]
        },
        //
        {
            silence: false,
            duration:Whole,
            note: [C]
        },
        //
        {
            silence: false,
            duration: Eighth,
            note: [C]
        },
        {
            silence: false,
            duration: Eighth,
            note: [C]
        },
        {
            silence: false,
            duration: Eighth,
            note: [D]
        },
        {
            silence: false,
            duration: Eighth,
            note: [F]
        },
        {
            silence: false,
            duration: Eighth,
            note: [As]
        },
        {
            silence: false,
            duration: Eighth,
            note: [C2]
        },
        {
            silence: false,
            duration: Eighth,
            note: [C2]
        },
        {
            silence: false,
            duration: Eighth,
            note: [C2]
        },
        //
        {
            silence: false,
            duration: QuarterD,
            note: [F]
        },
        {
            silence: false,
            duration: Eighth,
            note: [F]
        },
        {
            silence: false,
            duration: Quarter,
            note: [F]
        },
        {
            silence: false,
            duration: Quarter,
            note: [F]
        },
        //
        {
            silence: false,
            duration: Quarter,
            note: [E]
        },
        {
            silence: false,
            duration: Half,
            note: [F]
        },
        {
            silence: false,
            duration: Quarter,
            note: [F]
        },
        //
        {
            silence: false,
            duration: Quarter,
            note: [E]
        },
        {
            silence: false,
            duration: Half,
            note: [F]
        },
        {
            silence: false,
            duration: Quarter,
            note: [G]
        },
        //
        {
            silence: false,
            duration: Half,
            note: [A]
        },
        {
            silence: false,
            duration: Half,
            note: [G]
        },
        //
        {
            silence: false,
            duration: Whole,
            note: [C]
        },
        //
        {
            silence: false,
            duration: Whole,
            note: [C]
        },
        //
    ]
}