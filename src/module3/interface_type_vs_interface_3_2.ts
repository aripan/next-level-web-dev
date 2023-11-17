//@ type alias
//* incase of primitive types data => type is being used(not interface type)
//* string, number, boolean
type User = {
    name: string;
    age: number;
}

// extending the type alias
type ExtendUser = User & {
    role: string;
}

const userType: ExtendUser = {
    name: 'New User',
    age: 30,
    role: 'Admin'
}

//@ interface
//* incase of object types data => mostly interface is being used
//* Object, Function, Array
interface IUser {
    name: string;
    age: number;
}

// extending the interface
interface IExtendedUser extends IUser {
    role: string;
}

const userInterface: IExtendedUser = {
    name: 'New User',
    age: 30,
    role: 'Admin'
}

// special note for array types
type rollNumbersType = number[]

const rollNumbersWithType: rollNumbersType = [1, 2, 6]

// incase of array types data => need to specify the index type
// in object: we don't need to so as object is already key and value pair. So we are specifying the property type using their key.
interface IRollNumbersInterface {
    [index: number]: number;
}

const rollNumbersWithInterface: IRollNumbersInterface = [1, 2, 6]
const rollNumbersWithInterface2: IRollNumbersInterface = [1, 2, '6'] // here we are getting error as we have specified the index as number