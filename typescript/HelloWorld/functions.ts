// Functions are first class citizens, support the lambda "fat arrow" syntax and
// use the type inference

// The following are equivalent, the same signature will be inferred by the compiler, and the same
// javascript will be emitted
// Full description
let f1 = function (i: number): number { return i * i; }
// Return type inferred
let f2 = function (i: number) { return i * i; }
// Fat arrow syntax
let f3 = (i: number): number => { return i * i; }
// Fat arrow with inferred returned type
let f4 = (i: number) => { return i * i; }
// Fat arrow with inferred returned type. No braces which implies that no return is needed
let f5 = (i: number) => i * i;