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

//class user {
//  readonly city: string = "Jaipur";
//  constructor(
//    public email: string,
//    public name: string,
//    private mobileNo: number,
//  ) {}
//}
//
//const sameer = new user("s@s.com", "Sameer", 8099304903);
//console.log(sameer);
//// console.log(sameer.mobileNo); //WILL GIVE ERROR

//++++++++++++++++++++++++++++++++++++++++++++GETTERS AND SETTERS++++++++++++++++++++++++++++++++++++++
class user {
  protected _courseCount = 1;
  readonly city: string = "JAIPUR";
  constructor(
    public email: string,
    public name: string,
    private Mnumber: number,
  ) {}

  private deleteToken() {
    console.log("token deleted successfully");
  }

  get emailId(): string {
    return `new${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("WAISE HI BAS");
    }
    this._courseCount = courseNum;
  }
}

class subUser extends user {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 7;
  }
}
