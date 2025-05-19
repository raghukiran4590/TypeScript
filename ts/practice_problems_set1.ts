/* Write a TypeScript function to calculate the factorial of a number with proper type annotations

function factorial(num : number) : number {
    if(num == 0 || num == 1) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(4));
console.log(factorial(8));
*/

/* Define a function that accepts a user object (with name, age, and email)
and return a formatted string

interface UserData {
    name: string,
    age: number,
    email : string
};

function formateUserData(user: UserData) : string {
    return `User ${user.name} (${user.age} yrs) can be contacted via ${user.email}`;
}

const user: UserData = {
    name: 'Alice',
    age: 20,
    email: 'alice@gmail.com'
};

console.log(formateUserData(user));
*/

/* Calculate the total price of products with price and quantity
defined in a product array

interface Product {
  price: number;
  quantity: number;
}

function calculateTotal(products: Product[]): number {
  return products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
}

let cart : Product[] = [
    {price: 100, quantity: 2},
    {price : 500, quantity : 3}
];


console.log(calculateTotal(cart));
*/

/* Print Car or Bike details of the Vehicley based on its type */

type CarDetails = {
    type: string,
    make: string,
    model: string,
    year: number
};

type BikeDetails = {
    type: string,
    make: string,
    model: string,
    year: number
};


type vehicleDetails =  CarDetails | BikeDetails;

function printVehicleDetails (vehicle: vehicleDetails) : void {
    if(vehicle.type === 'car') {
        console.log(`Car Details: ${vehicle.make}, ${vehicle.model}, ${vehicle.year}`);
    } else if(vehicle.type === 'bike') {
        console.log(`Bike Details: ${vehicle.make}, ${vehicle.model}, ${vehicle.year}`);
    }
}

let carData : vehicleDetails = {
    type : 'car',
    make: 'Tesla',
    model: 'X',
    year: 2025
};

let bikeData : vehicleDetails = {
    type : 'bike',
    make: 'BMW',
    model: 'a10',
    year: 2024
};

printVehicleDetails(carData);
printVehicleDetails(bikeData);

