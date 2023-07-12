export const Whole = Symbol();
export const Half = Symbol();
export const Quarter = Symbol();
export const QuarterD = Symbol();
export const Eighth = Symbol();
export const EighthD = Symbol();
export const Semiquaver = Symbol();

export const C = Symbol();
export const Cs = Symbol();
export const D = Symbol();
export const Ds = Symbol();
export const E = Symbol();
export const F = Symbol();
export const Fs = Symbol();
export const G = Symbol();
export const Gs = Symbol();
export const A = Symbol();
export const As = Symbol();
export const B = Symbol();
export const C2 = Symbol();


export interface MusicalFigure {
    silence: boolean,
    duration: typeof Whole | typeof Half |typeof Quarter | typeof QuarterD | typeof Eighth | typeof EighthD | typeof Semiquaver,
    note: Array<typeof C | typeof Cs | typeof D | typeof Ds | typeof E | typeof F | typeof Fs | typeof G | typeof Gs | typeof A | typeof As | typeof B | typeof C2> | null
}

export interface Song {
    name: string,
    bpm: number,
    metric: string,
    sheet: Array<MusicalFigure>
}