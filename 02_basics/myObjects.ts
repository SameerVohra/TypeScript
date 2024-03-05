function createUser({ name: string, isPaid: boolean }) {}

/*createUser({
  name: "Sameer",
  isPaid: false,
  email: "s@s.com",
});*/ // THIS IS NOT ALLOWED BUT IF YOU DO,

let newUser = { name: "sameer", isPaid: false, email: "s@s.com" };
createUser(newUser); // THIS IS ALLOWED

function createCourse(): { name: string; price: number } {
  return { name: "typescript", price: 199 };
}

console.log(createCourse());

// ---------------------------------------------TYPE---------------------------------------------------------

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createNewUser(user: User) {
  console.log(`Username: ${user.name}`);
  console.log(`Email: ${user.email}`);
  console.log(`Is Active: ${user.isActive}`);
}

createNewUser({ name: "Sameer", email: "s@s.com", isActive: false });

// -------------------------------------------------READONLY AND OPTIONAL--------------------------------------------------------

type newUser2 = {
  readonly _id: string;
  name: string;
  email: string;
  creditCard?: number; // EVEN IF YOU LEAVE THIS EMPTY IT WON'T GIVE YOU ERROR BECAUSE WE HAVE GIVEN IT AS OPTIONAL
};

let myUser: newUser2 = {
  _id: "1234",
  name: "Sameer",
  email: "s@s.com",
};

myUser.email = "s@gmail.com";
console.log(myUser);
// myUser._id = "abc"; // this will give error

// ----------------------------------------USING &------------------------------------------
type cardNum = {
  cNum: string;
};

type cardDate = {
  cDate: string;
};

type cardDetails = cardDate &
  cardNum & {
    cvv: number;
  };

export {};
