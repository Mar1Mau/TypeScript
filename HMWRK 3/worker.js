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
var Worker1 = /** @class */ (function (_super) {
    __extends(Worker1, _super);
    function Worker1(fullname, age, id, isMale, salary) {
        var _this = _super.call(this, fullname, age, id, isMale) || this;
        _this.salary = salary;
        return _this;
    }
    Worker1.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write(this._fullname + " is worker and have a salary: " + this.salary + " NIS <br/>");
    };
    Object.defineProperty(Worker1.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (x) {
            this._salary = (x > 0) ? x : 1;
        },
        enumerable: true,
        configurable: true
    });
    return Worker1;
}(Person));
//# sourceMappingURL=worker.js.map