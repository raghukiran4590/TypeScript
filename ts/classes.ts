class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name}, and I'm ${this.age} yrs old`;
    }
}

const newPerson = new Person('Dia', 22);
console.log(newPerson.greet());