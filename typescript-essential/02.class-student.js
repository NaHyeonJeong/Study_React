/**
 * Created by vega on 2017-03-07.
 * tsc --target es5  tsfilename
 */
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this._fullName = firstName + " " + middleInitial + " " + lastName;
    }
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            this._fullName = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var user = new Student("Jane", "M.", "User");
console.log(user.firstName + ':' + user.middleInitial + ':' + user.lastName);
console.log(user.fullName);
user.fullName = 'john resig';
console.log(user.fullName);
