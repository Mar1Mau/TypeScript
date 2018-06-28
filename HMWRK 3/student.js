var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(fullname, age, id, isMale, institution, profession) {
        var _this = _super.call(this, fullname, age, id, isMale) || this;
        _this.institution = institution;
        _this.profession = profession;
        return _this;
    }
    Student.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write(this._fullname + " is studying " + this.profession + " in " + this.institution + "<br/>");
    };
    Object.defineProperty(Student.prototype, "institution", {
        get: function () {
            return this._institution;
        },
        set: function (x) {
            this._institution = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "profession", {
        get: function () {
            return this._profession;
        },
        set: function (x) {
            this._profession = x;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}(Person));
//# sourceMappingURL=student.js.map