class Product {
    public fullName: string;
    private _price: number;
    public expiry: FullTime;

    public toString() {
        return "Full Name: " + this.fullName + ", Price: " + this.price + "<br/>" + " Expiry:<br/> " + this.expiry;
    }
    constructor(fullName: string, price: number, expiry: FullTime) {
        this.fullName = fullName;
        this.price = price;
        this.expiry = expiry;
        
    }

    get price(): number {
        return this._price;
    }

    set price(x: number) {
        this._price = (x >= 0) ? x : 0;
    }
}