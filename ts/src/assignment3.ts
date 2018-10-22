import { User } from "./user";

let user1 = new User("Jeannot Lapin", "carrotes");
user1.printUserInfo();
let date: string = user1.getCreationDate("karot");
console.log("creation date: ", date);
date = user1.getCreationDate("carrotes");
console.log("creation date: ", date);
user1.updateSubscription("carrotes","mykoupon");
user1.updateSubscription("karot","mycoupon");
user1.updateSubscription("carrotes","mycoupon");
user1.printUserInfo();
