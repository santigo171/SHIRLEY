export const Whole = 0;
export const Half = 1;
export const Quarter = 2;
export const QuarterD = 3;
export const Eighth = 4;
export const EighthD = 5;
export const Semiquaver = 6;

export const C = 0;
export const Cs = 1;
export const D = 2;
export const Ds = 3;
export const E = 4;
export const F = 5;
export const Fs = 6;
export const G = 7;
export const Gs = 8;
export const A = 9;
export const As = 10;
export const B = 11;
export const C2 = 12;
export const silence = 13;


export interface MusicalFigure {
    silence: boolean,
    duration: typeof Whole | typeof Half |typeof Quarter | typeof QuarterD | typeof Eighth | typeof EighthD | typeof Semiquaver,
    note: Array<typeof C | typeof Cs | typeof D | typeof Ds | typeof E | typeof F | typeof Fs | typeof G | typeof Gs | typeof A | typeof As | typeof B | typeof C2> | null
}

export interface Song {
    id: number,
    name: string,
    bpm: number,
    metric: string,
    sheet: Array<MusicalFigure>
}