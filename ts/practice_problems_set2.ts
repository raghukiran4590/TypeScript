/* create a Bank account class: Write a Bank Account class with the required properties

accountNumber : string
balance: number(private)

The class should have below methods:

deposit(amount: number) : void (to add to balance)
withDraw(amount: number) : void (to substract from balance)
getBalance(): number (to return current balance)

class BankAccount {
    accountNumber : string;
    private balance : number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    depositAmount(amount : number) : void {
        this.balance += amount;
    }

    withdrawAmount(amount : number) : void {
        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }

}

const chaseBank = new BankAccount('234FCGDVB4657', 1000);
chaseBank.depositAmount(1000);
chaseBank.withdrawAmount(500);
console.log(chaseBank.getBalance());
*/

/* Create an Employee Class with Inheritance:
Define an Employee class with properties name and salary
Create a subclass Manager that adds a department property
Both classes should have a getDetails method that returns
a string with the employee's details. */

class Employee {

    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    getDetails() {
        console.log(`Employee Name : ${this.name} and Salary : ${this.salary}`);
    }

}

class Manager extends Employee {
    department: string;

    constructor(name: string, salary: number, department: string) {
        super(name, salary);
        this.department = department;
    }

    getDetails() {
        console.log(`Manager Name : ${this.name} and Salary : ${this.salary} and Department : ${this.department}`);
    }

}

const emp1 = new Employee('Satish', 50000);
const mgr1 = new Manager('Ramu', 75000, 'Business');

emp1.getDetails();
mgr1.getDetails();


