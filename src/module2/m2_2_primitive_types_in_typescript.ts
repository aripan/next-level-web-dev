//@ Primitive types => string, number, boolean, null, undefined
// string
// ERROR: Cannot redeclare block-scoped variable 'name'.ts(2451) lib.dom.d.ts(18092, 15): 'name' was also declared here.
// SOLVED: Edit tsconfig.json in the TypeScript project directory.
/*
    {
        "compilerOptions":{
            "lib": ["es6"]
        }
    }

    https://stackoverflow.com/questions/35758584/cannot-redeclare-block-scoped-variable
*/
const name: string = "Asad";
// number
const rollNumber: number = 123;
// boolean
const isAdmin: boolean = true;
// null
const notValid: null = null;
// undefined
const notDefined = undefined;


//? will we use typescript only for this type specifications?
// No actually there are few method which only available to strings or to numbers. So when we declare the type, the variable automatically get access to all of them.

name.includes('A')
console.log("🚀 ~ file: primitive_types_in_typescript_2_2.ts:27 ~ name.includes('A'):", name.includes('A')) // true
rollNumber.toFixed(2)
console.log("🚀 ~ file: primitive_types_in_typescript_2_2.ts:29 ~ rollNumber.toFixed(2):", rollNumber.toFixed(2)) // 123.00


// Types by Inference: creating a variable and assigning it to a particular value, TypeScript will use the value as its type. let helloWorld: string
let helloWorld = "Hello World";

// explicit types: defining the type
const newValue: string = "Hello World"