// Mocking
// Promise<string> Promise<boolean> Promise<object>
const makePromiseString = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data is fetched";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data");
    }
  });
};

const getPromiseData = async () => {
  const data = await makePromiseString();
  return data;
};

const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data");
    }
  });
};

const getPromiseDataBoolean = async () => {
  const data = await makePromiseBoolean();
  return data;
};

const makePromiseObject = (): Promise<object> => {
  return new Promise<object>((resolve, reject) => {
    const data: object = {
      data: "data is fetched",
    };
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data");
    }
  });
};

const getPromiseDataObject = async () => {
  const data = await makePromiseObject();
  return data;
};

// fetch data from jsonplaceholder
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/3");
  const data = (await res.json()) as ITodo;
  return data;
};

const getTodoObject = async (): Promise<void> => {
  const data = await getTodo();
  console.log(
    "🚀 ~ file: asynchronous_typescript_3_8.ts:72 ~ getTodoObject ~ data:",
    data
  );
};

getTodoObject();
