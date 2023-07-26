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

export const Pirates: Song = {
    name: "Pirates",
    bpm: 160,
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
            note: [E]
        },
        {
            silence: false,
            duration: Eighth,
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
            duration: Eighth,
            note: [A]
        },
        {
            silence: false,
            duration: Eighth,
            note: [B]
        },
        {
            silence: false,
            duration: Quarter,
            note: [C2]
        },
        {
            silence: false,
            duration: Quarter,
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
        {
            silence: false,
            duration: Quarter,
            note: [B]
        },
        {
            silence: false,
            duration: Quarter,
            note: [B]
        },
        {
            silence: false,
            duration: Eighth,
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
            note: [G]
        },
        {
            silence: false,
            duration: Eighth,
            note: [A]
        },
        {
            silence: true,
            duration: Eighth,
            note: null
        },
        {
            silence: false,
            duration: Eighth,
            note: [E]
        },
        {
            silence: false,
            duration: Eighth,
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
            duration: Eighth,
            note: [A]
        },
        {
            silence: false,
            duration: Eighth,
            note: [B]
        },
        {
            silence: false,
            duration: Quarter,
            note: [C2]
        },
        {
            silence: false,
            duration: Quarter,
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
        {
            silence: false,
            duration: Quarter,
            note: [B]
        },
        {
            silence: false,
            duration: Quarter,
            note: [B]
        },
        {
            silence: false,
            duration: Eighth,
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
            note: [A]
        },
        {
            silence: true,
            duration: Eighth,
            note: null
        },
        {
            silence: true,
            duration: Eighth,
            note: null
        },
    ]
}