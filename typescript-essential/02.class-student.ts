/**
 * Created by vega on 2017-03-07.
 * tsc --target es5  tsfilename
 */
class Student {
    private _fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this._fullName = firstName + " " + middleInitial + " " + lastName;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        this._fullName = newName;
    }
}

var user = new Student("Jane", "M.", "User");

console.log(user.firstName + ':' + user.middleInitial + ':' + user.lastName);
console.log(user.fullName);
user.fullName = 'john resig';
console.log(user.fullName);