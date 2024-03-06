let user: [string, number, boolean];
user = ["Sameer", 12, true];
// user = [12, "sameer", true]; // WILL GIVE ERROR

let rgb: [number, number, number];
rgb = [255, 125, 234];
// rgb = [255, 124, 543, 990] // WILL GIVE ERROR

type User = [number, string];
let newUser: User;
newUser = [12, "sameer"];

newUser[1] = "SameerVohra";

console.log(newUser);

export {};
