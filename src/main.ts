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

let el2: number | boolean = mixedArray[0];

if (typeof el2 === 'boolean') {
  let el3: boolean = el2;
}

// krotki

let tuple: [string, number, boolean, undefined] = ['ala', 123, false, undefined];

let first: string = tuple[0];

// undefined

let undef: number | undefined = undefined;

if (typeof undef !== 'undefined') {
}

if (undef !== undefined) {
}

// any
let somtehing: any = 123;


// unknown
let unknownValue: unknown = {};

if (typeof unknownValue !== undefined) {
  if (typeof unknownValue === 'number') {
    const num: number = unknownValue;
  }
}

// void

function sayHellog(): void {
  console.log('hello!');
}


// never

function throwError(): never | number {
  throw new Error();
}


// klasy

class Person1 {
  public firstName: string;
  private age: number;

  constructor(name: string, age: number) {
    this.firstName = name;
    this.age = age;
  }

  sayHello(): string {
    return `Hello ${this.firstName}`
  }
}

// analogiczny zapis w innej notacji:

class Person2 {
  constructor(public firstName: string, private age: number) {}

  sayHello(): string {
    return `Hello ${this.firstName}`
  }
}

const p1 = new Person2('Adrian', 12);

const x: string = p1.sayHello();


// interfejsy (interface)

interface Person {
  firstName: string;
  age: number;
  sayHello(): void;
}

const obj1: Person = {
  firstName: 'Adrian',
  age: 30,
  sayHello() {
    console.log('hello!');
  },
}

interface WorkingStudent {
  hasJob: boolean;
}

class Student implements Person, WorkingStudent {
  static counter: number = 0;

  public readonly index: number;
  public hasJob: boolean = true;

  constructor(public firstName: string, public age: number) {
    this.index = Student.counter++;
  }

  sayHello(): void {}
}

class SeniorStudent extends Student {}


// typy generyczne

class Group<T> {
  private items: Array<T> = []

  public getItems(): Array<T> {
    return this.items;
  }

  public addItem(arg: T): void {
    this.items.push(arg);
  }
}

const strings: Group<string> = new Group<string>();
const numbers: Group<number> = new Group<number>();
const students: Group<Student> = new Group<Student>();
