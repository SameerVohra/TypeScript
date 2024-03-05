"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
/*createUser({
  name: "Sameer",
  isPaid: false,
  email: "s@s.com",
});*/ // THIS IS NOT ALLOWED BUT IF YOU DO,
var newUser = { name: "sameer", isPaid: false, email: "s@s.com" };
createUser(newUser); // THIS IS ALLOWED
function createCourse() {
    return { name: "typescript", price: 199 };
}
console.log(createCourse());
function createNewUser(user) {
    console.log("Username: ".concat(user.name));
    console.log("Email: ".concat(user.email));
    console.log("Is Active: ".concat(user.isActive));
}
createNewUser({ name: "Sameer", email: "s@s.com", isActive: false });
var myUser = {
    _id: "1234",
    name: "Sameer",
    email: "s@s.com",
};
myUser.email = "s@gmail.com";
console.log(myUser);
