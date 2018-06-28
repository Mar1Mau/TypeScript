var BasicDate = /** @class */ (function () {
    function BasicDate(day, year, month) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    BasicDate.prototype.toString = function () {
        return "Year: " + this.year + ", Month: " + this.month + ", Day: " + this.day + "<br/>";
    };
    Object.defineProperty(BasicDate.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (num) {
            this._day = (num >= 1 && num <= 31) ? num : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDate.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (num) {
            this._year = (num >= 2020 && num <= 2050) ? num : 2020;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDate.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (num) {
            this._month = (num >= 1 && num <= 12) ? num : 1;
        },
        enumerable: true,
        configurable: true
    });
    return BasicDate;
}());
//# sourceMappingURL=basicdate.js.map