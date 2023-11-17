// if i can write something generally => then it is generic

const rollNumbers: number[] = [1, 2, 3, 4, 5]
const rollNumbers2: string[] = ['1', '2', '3', '4', '5']

const rollNumbers3: Array<number> = [1, 2, 3, 4, 5]
const rollNumbers4: Array<string> = ['1', '2', '3', '4', '5']
const userNameAndRollNumber: Array<{ name: string; roll: number }> = [{
    name: 'Mr. X', roll: 1
}]

//@ Generic type
type GenericArray<T> = Array<T> // passing T as a parameter as we don't know the type and expecting that it will be decided in the time of declaration

const rollNumbersGeneric3: GenericArray<number> = [1, 2, 3, 4, 5]
const rollNumbersGeneric4: GenericArray<string> = ['1', '2', '3', '4', '5']

const userNameAndRollNumberGeneric: GenericArray<{ name: string; roll: number }> = [{
    name: 'Mr. X', roll: 1
}]

// we can pass more parameter to the generic type
type GenericTuple<X, Y> = [X, Y]

const relation: GenericTuple<string, string> = ['Persian', 'kate']
const salary: GenericTuple<string, number> = ['salary', 3500]

const relationWithSalary: GenericTuple<{ name: string; salary: number }, string> = [
    { name: 'Persian', salary: 3500 },
    'Kate'
]