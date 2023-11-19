type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newType = "name" | "age" | "address"; // manually created

//@ using key

type newTypeUsingKeyOf = keyof PersonType; // this will give the same result what was created manually as newType

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  return obj[key];
}
