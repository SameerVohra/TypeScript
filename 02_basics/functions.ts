function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string): string {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

function getHello(s: string): string {
  return "";
}

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero): string => {
  return `Hero is ${hero}`;
});

const greet = (name: string): string => {
  return `Hello ${name}`;
};

function consoleError(errMsg: string): void {
  console.log(`Error is: ${errMsg}`);
}

function throwErr(errMsg: string): never {
  throw new Error(errMsg);
}

addTwo(5);
getUpper("hello");
signUpUser("sameer", "sameer@sameer.com", false);
loginUser("sameer", "sameer@sameer.com");
greet("sameer");
export {};
