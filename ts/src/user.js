"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(name, pwd) {
        this.pwd = pwd;
        this.coupon = "mycoupon";
        this.fullName = name;
        this.creationDate = "1-1-2000"; //this.todaysDate();
        this.passWord = pwd;
    }
    User.prototype.todaysDate = function () {
        var today = new Date();
        var todaysDate = today.getDate().toString() + "-" + (today.getMonth() + 1).toString() + "-" + today.getFullYear().toString();
        return todaysDate;
    };
    User.prototype.printUserInfo = function () {
        console.log("User Id: ", this.fullName, " - Account creation date: ", this.creationDate);
    };
    User.prototype.getCreationDate = function (pwd) {
        if (pwd === this.passWord) {
            return this.creationDate;
        }
        else {
            console.log("Access denied - invalid password");
        }
    };
    User.prototype.updateSubscription = function (pwd, cp) {
        if (pwd === this.passWord && cp === this.coupon) {
            console.log("Subscription updated");
            this.creationDate = this.todaysDate();
        }
        else {
            console.log("Subscription update denied");
        }
    };
    return User;
}());
exports.User = User;
