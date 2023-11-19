//@ ternary operator
const age: number = 22

age >= 18 ? console.log('Adult') : console.log('Not adult')

//@ nullish coalescing operator
//this operator only work for => null and undefined

const isAuthenticatedUser = undefined // use => null or undefined
const userName = isAuthenticatedUser ?? 'Guest' // if isAuthenticatedUser is anything else apart from null and undefined => 'Guest' will never be the result
console.log({ userName })

type Manush = {
    name: string;
    age: number;
    address: {
        city: 'No city' | 'New York' | 'Las Vegas';
        road: 'No road' | 'street 123' | 'street unknown';
        home?: '' | 'new home'
    }
}

const manush1: Manush = {
    name: 'Manush',
    age: 25,
    address: {
        city: 'New York',
        road: 'street unknown'
    }
}
const manush2: Manush = {
    name: 'Manush',
    age: 25,
    address: {
        city: 'New York',
        road: 'street unknown',
        home: 'new home'
    }
}

const isHomePresent1 = manush1?.address?.home ?? 'Not present'
const isHomePresent2 = manush2?.address?.home ?? 'Not present'
console.log({ isHomePresent1 }, {isHomePresent2})