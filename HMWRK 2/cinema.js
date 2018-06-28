var Cinema = /** @class */ (function () {
    function Cinema(cinemaname, price, studDiscount, lectureDiscount) {
        if (studDiscount === void 0) { studDiscount = ((Math.random() * 10) + 10); }
        if (lectureDiscount === void 0) { lectureDiscount = ((Math.random() * 5) + 5); }
        this.CinemaName = cinemaname;
        this.price = price;
        this.studDiscount = studDiscount;
        this.lectureDiscount = lectureDiscount;
    }
    Object.defineProperty(Cinema.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (x) {
            this._price = (x >= 30 && x <= 200) ? x : 30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "persons", {
        get: function () {
            return this._persons;
        },
        set: function (p) {
            this._persons = p;
        },
        enumerable: true,
        configurable: true
    });
    return Cinema;
}());
//# sourceMappingURL=cinema.js.map