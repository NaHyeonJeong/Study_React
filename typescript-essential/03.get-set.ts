/**
 * Created by vega on 2017-05-29.
 * tsc --target es5  tsfilename
 */
let passcode = "secret passcode";

class Employees {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employees = new Employees();
employees.fullName = "Bob Smith";
if (employees.fullName) {
    console.log(employees.fullName);
}