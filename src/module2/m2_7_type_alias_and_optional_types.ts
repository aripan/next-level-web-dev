const friend1: {
    name: string;
    age: number;
    profession: string;
    country: string;
} = {
    name: "John",
    age: 35,
    profession: 'Frontend Developer',
    country: "USA"
}

const friend2: {
    name: string;
    age?: number; // optional type as girls do not share their age
    profession: string;
    country: string;
} = {
    name: "Jane",
    profession: 'UI Designer',
    country: "USA"
}

// now imagine if i need to define another friend or even more then each time i need to repeat the whole process. So here we can use type alias.
//@ type alias

type FriendType = {
    name: string;
    age?: number;
    profession: string;
    country: string;
}

const friend3: FriendType = {
    name: "Will",
    age: 38,
    profession: 'Backend Developer',
    country: "Canada"
}
const friend4: FriendType = {
    name: "Monica",
    profession: 'Frontend Developer',
    country: "Canada"
}

// this can be used in strings, boolean and in array

type GenderType = boolean

const isFriendMale: GenderType = false

type CourseNameType = string

const courseName: CourseNameType = 'Next level ...'


type OperationType = (x: number, y: number) => number

const calculate = (number1: number, number2: number, operation: OperationType) => {
    return operation(number1, number2)
}

const addition = calculate(20, 10, (x, y) => x + y)
const subtraction = calculate(20, 10, (x, y) => x - y)
const multiplication = calculate(20, 10, (x, y) => x * y)

console.log({ addition }, { subtraction }, { multiplication })