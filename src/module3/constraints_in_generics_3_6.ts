const myInfoAndMyCrush = <T>(myInfo: T) => {
    const crush = "Kate";
    const newData = { ...myInfo, crush };
    return newData;
};

type MyInfoType = {
    name: string
    age: number
    salary: number
}
const myInfo: MyInfoType = {
    name: "myInfo",
    age: 36,
    salary: 5000,
};

myInfoAndMyCrush<MyInfoType>(myInfo);

// forcing the generic type to accept all properties but of course including the mentioned ones using constraints
// so here => name, age and salary are must required.
const myInfoAndMyCrushWithConstraints = <T extends { name: string, age: number, salary: number }>(myInfo: T) => {
    const crush = "Kate";
    const newData = { ...myInfo, crush };
    return newData;
};