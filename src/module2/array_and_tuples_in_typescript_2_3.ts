const names: string[] = ['Abul', 'Kabul', 'Babul']
const rollNumber: number[] = [1, 2, 3, 4, 5]

// ERROR: Cannot redeclare block-scoped variable 'rollNumber'.ts(2451) . Because this has been declared in other file as well.

// SOLVED: https://www.totaltypescript.com/cannot-redeclare-block-scoped-variable

const newNameList = ['Abul', 'Kabul', 'Babul', 77, true]

// non-tuple
const user1 = [412, 'User'] // allow both number and string for both elements
// tuple => kind of array
const user2: [number, string] = [512, 'User'] // only allows number to the first element and string to second element

