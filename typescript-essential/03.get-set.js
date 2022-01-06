/**
 * Created by vega on 2017-05-29.
 * tsc --target es5  tsfilename
 */
var passcode = "secret passcode";
var Employees = (function () {
    function Employees() {
    }
    Object.defineProperty(Employees.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employees;
}());
var employees = new Employees();
employees.fullName = "Bob Smith";
if (employees.fullName) {
    console.log(employees.fullName);
}
