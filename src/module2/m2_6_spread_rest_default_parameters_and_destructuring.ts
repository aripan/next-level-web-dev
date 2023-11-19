//@ default parameter
function add1(num1: number = 10, num2: number): number {
    return num1 + num2;
}

console.log(add1(undefined, 30)) // if you there is a default parameter in the arguments and that is not the last parameter

function add2(num1: number, num2: number = 15): number {
    return num1 + num2;
}

console.log(add2(30)) // if the default parameter is the last parameter

//@ spread operator
const friends = ['Abul', 'kabul', 'Babul']
const newFriends = ['Mokbul', 'Iqbal']

friends.push(...newFriends)
console.log(friends)

//@ run the file locally without using the script: npx ts-node-dev --respawn fileLocation/fileName.ts

//@ rest parameter
const greetFriends = (friend1: string, friend2: string, friend3: string): void => {
    console.log(`Hi ${friend1}\n Hi ${friend2}\n Hi ${friend3}\n`) // shift + option + 7 => \
}

greetFriends('Kashem', 'Hashem', 'Abdul')

// now if i need to add more friends, then every time need to update the main function. This could be cumbersome sometimes. So here we can use the rest parameter here.

const greetFriends2 = (...friends: string[]): void => {
    friends.map((friend: string) => console.log(`Hi ${friend}`))
}

greetFriends2('Kashem', 'Hashem', 'Abdul', 'Rahim', 'Karim')


//@ array and object destructuring
const myFriends = ['Abul', 'kabul', 'Babul']
const [bestFriend1, bestFriend2] = myFriends
console.log("🚀 ~ file: spread_rest_default_parameters_and_destructuring_2_6.ts:42 ~ bestFriend:", bestFriend2)

const myBestFriend = {
    name: 'Abdul Bashar',
    age: 32
}

const { name } = myBestFriend
console.log("🚀 ~ file: spread_rest_default_parameters_and_destructuring_2_6.ts:50 ~ name:", name)

const { name: friendName } = myBestFriend // alias
console.log("🚀 ~ file: spread_rest_default_parameters_and_destructuring_2_6.ts:51 ~ friendName:", friendName)
