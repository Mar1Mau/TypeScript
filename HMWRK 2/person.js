var Person = /** @class */ (function () {
    function Person(fullname, age, id, isMale) {
        this._fullname = fullname;
        this.age = age;
        this.id = id;
        this.isMale = isMale;
    }
    Person.prototype.print = function () {
        var male;
        if (this.isMale) {
            male = "Male";
        }
        else {
            male = "Female";
        }
        document.write(this._fullname + " is " + male + ", " + this.age + " years old. ID number: " + this.id + "<br/>");
    };
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (num) {
            this._age = (num >= 0 && num <= 120) ? num : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "isMale", {
        get: function () {
            return this._isMale;
        },
        set: function (p) {
            this._isMale = p;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (x) {
            if (x.length == 9) {
                this._id = x;
            }
            else {
                document.write("000000000");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
//# sourceMappingURL=person.js.map