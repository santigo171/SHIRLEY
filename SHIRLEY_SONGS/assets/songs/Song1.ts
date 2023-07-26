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

export const Estrellita: Song = {
    name: "Estrellita",
    bpm: 60,
    metric: "4/4",
    sheet: [
        {
            silence: false,
            duration: Quarter,
            note: [C]
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
        },
        {
            silence: false,
            duration: Quarter,
            note: [G]
        },
        {
            silence: false,
            duration: Quarter,
            note: [A]
        },
        {
            silence: false,
            duration: Quarter,
            note: [A]
        },
        {
            silence: false,
            duration: Half,
            note: [G]
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
        {
            silence: false,
            duration: Quarter,
            note: [E]
        },
        {
            silence: false,
            duration: Quarter,
            note: [E]
        },
        {
            silence: false,
            duration: Quarter,
            note: [D]
        },
        {
            silence: false,
            duration: Quarter,
            note: [D]
        },
        {
            silence: false,
            duration: Half,
            note: [C]
        },
        {
            silence: false,
            duration: Quarter,
            note: [G]
        },
        {
            silence: false,
            duration: Quarter,
            note: [G]
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
        {
            silence: false,
            duration: Quarter,
            note: [E]
        },
        {
            silence: false,
            duration: Quarter,
            note: [E]
        },
        {
            silence: false,
            duration: Half,
            note: [D]
        },
        {
            silence: false,
            duration: Quarter,
            note: [G]
        },
        {
            silence: false,
            duration: Quarter,
            note: [G]
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
        {
            silence: false,
            duration: Quarter,
            note: [E]
        },
        {
            silence: false,
            duration: Quarter,
            note: [E]
        },
        {
            silence: false,
            duration: Half,
            note: [D]
        }
    ]
}