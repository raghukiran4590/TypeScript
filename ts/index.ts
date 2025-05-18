// let a1:number = 10;
// a1 = 1;
// console.log(a1);

// function add(a:number, b:number):number {
//     return a + b;
// }

// const x = add(1, 2);
// console.log(x);

// a1 = x;
// console.log(x);

//Arrays
let numArray : number[] = [1, 2, 3, 4, 5];
let strArray : string[] = ['a', 'b', 'c', 'd', 'e'];
let boolArray : boolean[] = [true, false, true, false, true];

// strArray.forEach((item) => {
//     console.log(item.toUpperCase());
// }   );

enum Size {
    Small = 1,
    Medium,
    Large
};

let size : Size = Size.Large;
// console.log(size);

let someValue : any = 'Hello';
let strLength : number = (someValue as string).length;
// console.log(strLength);

let config: {server: string, port : number} & {secure : boolean, timeout: number} = {
    server :'va12';
}


//TS Topics

//any
//unknown
//never
//void
//undefined
//tuple
//array
//Enum
//Type Inference
//Type Assertion
//Union types
//Type Narrowing
//Interface
//Type Aliases
//Objects
//Optional
//Function




