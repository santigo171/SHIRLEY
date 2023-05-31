const Whole = Symbol();
const Half = Symbol();
const Quarter = Symbol();
const QuarterD = Symbol();
const Eighth = Symbol();
const EighthD = Symbol();
const Semiquaver = Symbol();

const C = Symbol();
const Cs = Symbol();
const D = Symbol();
const Ds = Symbol();
const E = Symbol();
const F = Symbol();
const Fs = Symbol();
const G = Symbol();
const Gs = Symbol();
const A = Symbol();
const As = Symbol();
const B = Symbol();
const C2 = Symbol();


interface MusicalFigure {
    silence: boolean,
    duration: typeof Whole | typeof Half |typeof Quarter | typeof QuarterD | typeof Eighth | typeof EighthD | typeof Semiquaver,
    note: Array<typeof C | typeof Cs | typeof D | typeof Ds | typeof E | typeof F | typeof Fs | typeof G | typeof Gs | typeof A | typeof As | typeof B | typeof C2>
}

interface Song {
    name: string,
    bpm: number,
    sheet: Array<MusicalFigure>
}

const estrellita: Song = {
    name: "Estrellita 🌠",
    bpm: 60,
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