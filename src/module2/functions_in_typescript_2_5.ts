// normal function
// function add(num1, num2) {
//     return num1 + num2;
// }

//! here we have not given any types to the arguments. So typescript will infer any type.
//! we can stop that inference by going to tsconfig.json file:
/*
    'noImplicitAny': false
*/

//! But this is not recommended at any case.

function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(2, 3);

// arrow function
const addArrow = (num1: number, num2: number): number => {
    return num1 + num2;
}
addArrow(3, 5)

// callback function
const arr = [1, 2, 3, 4, 5]

const newArray = arr.map((elem: number) => elem * 2)

// if a function is being used inside an object then it is called method instead of function
const person: {
    name: string,
    balance: number,
    addBalance(money: number): number, // if there is a return value then specify the value
    sayHello(name: string): void // if there is no return value then mention void
} = {
    name: 'person',
    balance: 5,
    addBalance(money: number) {
        return this.balance + money
    },
    sayHello(name: string){
        console.log(name) // provided name
        console.log(this.name) // name of this object
    }
}

person.sayHello('new')