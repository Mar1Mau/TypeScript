var Product = /** @class */ (function () {
    function Product(fullName, price, expiry) {
        this.fullName = fullName;
        this.price = price;
        this.expiry = expiry;
    }
    Product.prototype.toString = function () {
        return "Full Name: " + this.fullName + ", Price: " + this.price + "<br/>" + " Expiry:<br/> " + this.expiry;
    };
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (x) {
            this._price = (x >= 0) ? x : 0;
        },
        enumerable: true,
        configurable: true
    });
    return Product;
}());
//# sourceMappingURL=product.js.map