// Arrow function
const createArray1 = (param: string): string[] => {
    return [param];
};

const result1 = createArray1("Bangladesh");

// creating a generic type in function
const createArray2 = <T>(param: T): T[] => {
    return [param];
};

const result2 = createArray2<string>("Bangladesh");
const result3 = createArray2<boolean>(true);

type CountryLang = {
    name: string;
    lang: string;
};
const result4 = createArray2<CountryLang>({ name: "Bangladesh", lang: "bd" });
console.log(
    "🚀 ~ file: generic_in_function_3_5.ts:14 ~ result2:",
    result2,
    result3,
    result4
);


// create arrays with more params
const createArray3 = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2];
};

const result5 = createArray3<string, boolean>("Bangladesh", true);
console.log("🚀 ~ file: generic_in_function_3_5.ts:35 ~ result5:", result5)

// spread operator
const crush = 'Kate'
const myInfo = {
    name: 'myInfo',
    age: 36,
    salary: 5000
}

const newData = { ...myInfo, crush }

// do the above thing using a function
const myInfoAndMyCrush = <T>(myInfo: T) => {
    const crush = 'Kate'
    const newData = { ...myInfo, crush }
    return newData
}

myInfoAndMyCrush(myInfo)