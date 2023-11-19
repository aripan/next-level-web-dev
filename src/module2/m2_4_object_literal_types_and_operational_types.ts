// type inference
const user = {
    name: 'Montu Mia',
    age: 52,
    isMarried: true,
    wife: 'Bibi'
}

// defined the types explicitly

const user2: {
    name: string,
    age: number,
    isMarried: boolean,
    wife?: string // optional type
} = {
    name: 'Montu Mia',
    age: 52,
    isMarried: true,
}

// defined the value of the property instead of type.
const user3: {
    name: string,
    age: number,
    isMarried: boolean,
    wife: 'Bibi' | 'Begum' //So in that case no other options are allowed to assign to this property except the given ones.
} = {
    name: 'Montu Mia',
    age: 52,
    isMarried: true,
    wife: 'Begum'
}


const user4: {
    name: string,
    age: number,
    isMarried: boolean,
    readonly wife: string // readonly does not allow the user to change its value
} = {
    name: 'Montu Mia',
    age: 52,
    isMarried: true,
    wife: 'Begum'
}

// user4.wife = 'Bibi' // Cannot assign to 'wife' because it is a read-only property.