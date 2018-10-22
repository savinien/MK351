export class User {
  public fullName: string;
  private creationDate: string;
  private passWord: string;
  readonly coupon: string = "mycoupon";


  constructor(name: string, private pwd: string){
    this.fullName = name;
    this.creationDate = "1-1-2000"; //this.todaysDate();
    this.passWord = pwd;
  }

  private todaysDate(){
    let today = new Date();
    let todaysDate: string = today.getDate().toString() + "-" + (today.getMonth()+1).toString() + "-" + today.getFullYear().toString();
    return todaysDate;
  }

  printUserInfo(){
    console.log("User Id: ", this.fullName, " - Account creation date: ", this.creationDate);
  }

  getCreationDate(pwd: string){
    if (pwd === this.passWord) {
      return this.creationDate
    }
    else {
      console.log("Access denied - invalid password");
    }
  }

  updateSubscription(pwd: string, cp: string){
    if (pwd === this.passWord && cp === this.coupon) {
      console.log("Subscription updated");
      this.creationDate = this.todaysDate();
    }
    else {
      console.log("Subscription update denied");
    }
  }
}
