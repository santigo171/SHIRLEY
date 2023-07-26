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

export const Cumpleannos: Song = {
    name: "Cumpleaños",
    bpm: 70,
    metric: "3/4",
    sheet: [
        {
            silence: true,
            duration: Half,
            note: null
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
            //
        },
        {
            silence: false,
            duration: Quarter,
            note: [D]
        },
        {
            silence: false,
            duration: Quarter,
            note: [C]
        },
        {
            silence: false,
            duration: Quarter,
            note: [F]
            //
        },
        {
            silence: false,
            duration: Half,
            note: [E]
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
            //
        },
        {
            silence: false,
            duration: Quarter,
            note: [D]
        },
        {
            silence: false,
            duration: Quarter,
            note: [C]
        },
        {
            silence: false,
            duration: Quarter,
            note: [G]
            //
        },
        {
            silence: false,
            duration: Half,
            note: [F]
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
            //
        },
        {
            silence: false,
            duration: Quarter,
            note: [C2]
        },
        {
            silence: false,
            duration: Quarter,
            note: [A]
        },
        {
            silence: false,
            duration: Quarter,
            note: [F]
            //
        },
        {
            silence: false,
            duration: Quarter,
            note: [E]
        },
        {
            silence: true,
            duration: Half,
            note: [D]
            //
        },
        {
            silence: false,
            duration: Eighth,
            note: [As]
        },
        {
            silence: false,
            duration: Eighth,
            note: [As]
        },
        {
            silence: false,
            duration: Quarter,
            note: [A]
        },
        {
            silence: false,
            duration: Quarter,
            note: [F]
            //
        },
        {
            silence: false,
            duration: Quarter,
            note: [G]
        },
        {
            silence: false,
            duration: Half,
            note: [A]
            //
        },
    ]
}