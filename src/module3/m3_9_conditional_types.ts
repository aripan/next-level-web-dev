//@ conditional type

type a1 = string;
type a3 = undefined;
type a4 = number;

type a2 = a1 extends string ? string : null;

// nested conditional type
type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

type Habibi = {
  wife1: string;
  wife2: string;
};

// check =>Habibi contains the wife2 property
//! remember => two similar type of data can extend each other
type CheckProperty<T> = T extends { wife2: string } ? true : false;

type CheckWife2 = CheckProperty<Habibi>;

// using two parameters
type CheckPropertyTwoParam<M, N> = N extends keyof M ? true : false;
type CheckTwoParamWife2 = CheckPropertyTwoParam<Habibi, "wife2">; // true
type CheckTwoParamWife3 = CheckPropertyTwoParam<Habibi, "wife3">; // false

// matha kharap example
type Bandhubi = "Monika" | "Anika" | "Lonica";

type RemoveBandhubi<T, K> = T extends K ? never : T;

type CurrentBandhubi = RemoveBandhubi<Bandhubi, 'Lonica'>