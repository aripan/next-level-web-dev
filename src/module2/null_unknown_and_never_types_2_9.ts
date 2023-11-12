console.clear()

//@ nullable
const searchName = (value: string) => {
    if (value === null) {
        console.log('There is nothing to search')
    } else {
        console.log('Searching...')
    }
}

searchName('Asad')
// searchName(null) // ERROR: it is not possible to give null as an argument
// SOLVED: there is a workaround for this. But it is not recommended to do.
/*
    tsconfig.json file =>
        "strictNullChecks": false
*/

const searchName2 = (value: string | null) => {
    if (value === null) {
        console.log('There is nothing to search')
    } else {
        console.log('Searching...')
    }
}

searchName2('Asad')
searchName2(null) // no issue with null


//@ unknown type
// if not sure about the type during definition.
const getMyCarSpeed = (speed: unknown) => {
    if (typeof speed === 'number') {
        console.log(speed * 10)
    } else if (typeof speed === 'string') {
        console.log(speed)
    } else {
        console.log('Wrong type')
    }
}

getMyCarSpeed(10)
getMyCarSpeed(`speed is 10`)
getMyCarSpeed(true)


//@ never type
function throwError(message: string): never {
    throw new Error(message)
}

throwError('Error ocurred...')