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

export const Sovietico: Song = {
    name: "Sovietico 🌠",
    bpm: 70,
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
            silence: true,
            duration: Eighth,
            note: null
        },
        {
            silence: false,
            duration: Eighth,
            note: [G]
        },
        //
        {
            silence: false,
            duration: Quarter,
            note: [C2]
        },
        {
            silence: false,
            duration: EighthD,
            note: [G]
        },
        {
            silence: false,
            duration: Semiquaver,
            note: [A]
        },
        {
            silence: false,
            duration: Quarter,
            note: [B]
        },
        {
            silence: false,
            duration: Eighth,
            note: [E]
        },
        {
            silence: false,
            duration: Eighth,
            note: [E]
        },
        //
        {
            silence: false,
            duration: Quarter,
            note: [A]
        },
        {
            silence: false,
            duration: EighthD,
            note: [G]
        },
        {
            silence: false,
            duration: Semiquaver,
            note: [F]
        },
        {
            silence: false,
            duration: Quarter,
            note: [G]
        },
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
        //
        {
            silence: false,
            duration: Quarter,
            note: [D]
        },
        {
            silence: false,
            duration: EighthD,
            note: [D]
        },
        {
            silence: false,
            duration: Semiquaver,
            note: [E]
        },
        {
            silence: false,
            duration: Quarter,
            note: [F]
        },
        {
            silence: false,
            duration: EighthD,
            note: [F]
        },
        {
            silence: false,
            duration: Semiquaver,
            note: [G]
        },
        //
        {
            silence: false,
            duration: Quarter,
            note: [A]
        },
        {
            silence: false,
            duration: Eighth,
            note: [B]
        },
        {
            silence: false,
            duration: Eighth,
            note: [C2]
        },
        {
            silence: false,
            duration: QuarterD,
            note: [C2]
        },
        {
            silence: true,
            duration: Eighth,
            note: null
            //
        },
    ]
}