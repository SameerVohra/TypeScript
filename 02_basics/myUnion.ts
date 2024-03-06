let score: number | string = 44;
score = "55";

type user = {
  name: string;
  id: number;
};

type admin = {
  userName: string;
  id: number;
};

let sameer: user | admin = {
  name: "Sameer",
  id: 122,
};

console.log(sameer);

sameer = {
  userName: "SameerVohra",
  id: 122,
};

console.log(sameer);

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: number[] | string[] = [1, 2, 3, 4]; // IT MEANS THE ARRAY CAN EITHER BE OF NUMBERS OR OF STRINGS BUT NOT A MIXTURE OF BOTH
const data4: (number | string)[] = [1, 2, "3", "4"]; // IT MEANS THE ARRAY CAN BE A MIXTURE OF BOTH STRINGS AND NUMBERS

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
// seatAllotment = "crew"; // will give error

export {};
