let something: any;

something = 'Next level web development';

// type assertion => providing a type to the variable
(something as string)

function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000
        return `The value is ${value}`
    }
    if (typeof param === 'number') {
        const value = param * 1000
        return value
    }
}

const resultToBeNumber = kgToGram(1000) as number
const resultToBeString = kgToGram(1000) as string


type CustomErrorType = {
    message: string
}

try {

} catch (error) {
    console.log((error as CustomErrorType).message)
}