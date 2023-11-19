const arrayOfNumbers = [1, 2, 3];

const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
console.log(
  "🚀 ~ file: mapped_types_3_10.ts:4 ~ arrayOfStrings:",
  arrayOfStrings
);

type AreaNumber = {
  height: number;
  width: number;
};

type AreaString = {
  height: string;
  width: string;
};
type AreaNumberReadOnly = {
  readonly height: number;
  readonly width: number;
};

// accessing the any of the property of the type
type A = AreaNumber["height"]; // look up types
type B = keyof AreaNumber; // 'height' | 'width'

// doing the above work dynamically
type Volume = {
  height: number;
  width: number;
  depth: number;
};

// mapping  the type
type Area = {
  [key in keyof Volume]: Volume[key]; // Volume['height'], Volume['width']
};

type AreaGeneric<T> = {
  [key in keyof T]: T[key];
};

const area1: AreaGeneric<Volume> = {
  height: 10,
  width: 20,
  depth: 5,
};

const area2: AreaGeneric<{ height: number; width: string; depth: number }> = {
  height: 10,
  width: "20",
  depth: 5,
};
