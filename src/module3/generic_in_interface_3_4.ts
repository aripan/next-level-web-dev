//@ Generic interface

interface ICrushInterface<T> {
    name: string;
    husband: T;
}

const crush1: ICrushInterface<boolean> = {
    name: "Kate Winslet",
    husband: true,
};
const crush2: ICrushInterface<string> = {
    name: "Kate Winslet",
    husband: "Persian",
};
const crush3: ICrushInterface<{ name: string; salary: number }> = {
    name: "Kate Winslet",
    husband: {
        name: "Persian",
        salary: 4000,
    },
};

interface IHusbandInterface {
    name: string;
    age?: number;
    salary?: number;
}

const crush4: ICrushInterface<IHusbandInterface> = {
    name: "Kate Winslet",
    husband: {
        name: "Persian",
        salary: 4000,
    },
};

// passing a optional parameter in generic interface
// Here U is the optional parameter
interface IRelationWithSalary<T, U = null> {
    name: string;
    salary: T;
    age?: U;
}

const eligible1: IRelationWithSalary<number> = {
    name: "eligible bachelor", salary: 4000,
}