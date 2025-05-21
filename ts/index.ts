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
    server :'va12',
    port : 1525,
    secure : true,
    timeout : 1000
};


//TS Topics

//any - any
//unknown - unknown
//never - never
//void - undefined
//undefined - undefined
//tuple - tuple literal
//array - array literal
//Enum - enum
//Type Inference - let, const
//Type Assertion - as, angle-bracket
//Union types - |
//Type Narrowing - type guards
//Interface - interface, interface inheritance
//Type Aliases - type
//Objects - object, object literal
//Optional - ?
//Functions - function, arrow function, rest parameters, default parameters
//Generics - generic function, generic class, generic interface
//Literal Types - string literal, numeric literal, boolean literal
//Type Guards - typeof, instanceof, custom fn
//Key of - keyof
//Index Signature - [Key: string]: any
//Utility Types - Partial, Required, Readonly, Record, Pick, Omit, Exclude, Extract, NonNullable, ReturnType, 
//Utility Types - Parameters, ConstructorParameters
//Modules - import, export
//Namespaces - namespace
//Decorators - class decorators, method decorators, property decorators, parameter decorators
//Mixins -  class mixin
//Abstract Classes - abstract class
//Async/Await - async function, await
//Non-Null Assertion (variable!)
//Discriminated Unions : Discriminated unions use a common property across multiple types to distinguish
//'in' operator - if('propertyName' in ObjectName)
//infer keyword 









