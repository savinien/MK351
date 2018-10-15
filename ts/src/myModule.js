"use strict";
exports.__esModule = true;
// myModule.ts file
function greetingsFunction(name) {
    console.log("hello, ", name);
}
exports.greetingsFunction = greetingsFunction;
var MyCurse = /** @class */ (function () {
    function MyCurse() {
        this.curse = "coucouille";
    }
    MyCurse.prototype.getCurse = function () {
        console.log(this.curse);
    };
    return MyCurse;
}());
exports.MyCurse = MyCurse;
