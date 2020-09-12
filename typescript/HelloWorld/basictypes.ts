// There are 3 basic types
let isDone: boolean = false;
let lines: number = 42;
let myName: string = "Anders";

// Without type declaration
let isNotDone = true;
let nbLines = 42;
let mySurnmae = "Anderson";

// The Any type as a default like in Scala
let notSure: any = 4;
notSure = "mybe a string instead";
notSure = false;

// const for constant
const numLivesForCat = 9;
//numLivesForCat = 1; // Compilation Error FTW :)

// Collections: typed array or generic arrays
let listTypedArray: number[] = [1, 2, 3];
let listGenericArray: Array<number> = [1, 2, 3];
listGenericArray = listTypedArray; // This works
// Readonly arrays
let roNumbers: ReadonlyArray<number> = listGenericArray;
//roNumbers[0] = 1; // Compilation fails as it is read only
// listTypedArray = roNumbers; // Fails because mutating methods are missing

// Enumerations
enum Color { Red, Green, Blue };
let c: Color = Color.Green;

// Type void specific for function returning nothing
function bigHorribleAlert(): void {
    alert("I'm a little annoying box!");
}

// String
let newName = 'Tyrone';
let greeting = `Hi ${newName}, how are you?`;
let multiline = `This is an example
of a multiline string`;
console.log(multiline);

// Tagged Union Types for modelling state that can be in one of many shapes
type State =
    | { type: "loading" }
    | { type: "success", value: number }
    | { type: "error", message: string };

declare const state: State;

if (state.type === "success") {
    console.log(state.value);
} else if (state.type === "error") {
    console.error(state.message);
}

class Success<T> {

    constructor(readonly result: T) { }

    map<U>(f: (t: T) => U): Result<U> {
        return new Success(f(this.result));
    }

    flatMap<U>(f: (t: T) => Result<U>): Result<U> {
        return f(this.result);
    }
}

class Failure {
    constructor(readonly errorMessager: any) { }

    map<U>(f: (t: any) => U): Result<U> {
        return this;
    }

    flatMap<U>(f: (t: any) => Result<U>): Result<U> {
        return this;
    }
}

type Result<T> =
    | Success<T>
    | Failure

let result = function <A, B>(f: (a: A) => B, a: A): Result<B> {
    try {
        return new Success(f(a));
    } catch (error) {
        return new Failure(error);
    }
}