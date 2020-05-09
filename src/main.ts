// typy danych

// boolean
let value: boolean = false;

// number
let decimal: number = 10;
let hex: number = 0xf00;
let binary: number = 0b010;

// string
let text: string = 'Hello!';
let text2: string = "Hello2"
let text3: string = `Hello ${text}`;

// typy mieszane

let mixed: number | string = 'Ala';

// tablice
let array1: string[] = ['ala', 'ma', 'kota'];
let array2: boolean[] = [false, true, false];

let mixedArray: (number | boolean)[] = [1, 2, 3, true];

let altArray1: Array<string> = ['ala', 'ma', 'kota'];
let altMixedArray: Array<number | boolean> = [1, 2, false];

let el0: number = mixedArray[0] as number;
let el1: number = <number>mixedArray[1];


