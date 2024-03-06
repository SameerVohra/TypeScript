//class user {
//  public email: string;
//  name: string;
//  private readonly city: string = "Jaipur";
//  constructor(email: string, name: string) {
//    this.email = email;
//    this.name = name;
//  }
//}
// +++++++++++++++++++++++++++ANOTHER WAY OF WRITING IT++++++++++++++++++++++++++++++++
var user = /** @class */ (function () {
    function user(email, name, mobileNo) {
        this.email = email;
        this.name = name;
        this.mobileNo = mobileNo;
        this.city = "Jaipur";
    }
    return user;
}());
var sameer = new user("s@s.com", "Sameer", 8099304903);
console.log(sameer);
