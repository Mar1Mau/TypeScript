class BasicDate {
    private _day: number;
    private _year: number;
    private _month: number;


    public toString() {
        return "Year: " + this.year + ", Month: " + this.month + ", Day: " + this.day+ "<br/>";
    }

    constructor(day: number, year: number, month: number) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    get day(): number {
        return this._day;
    }

    set day(num: number) {
        this._day = (num >= 1 && num <= 31) ? num : 1;
    }

    get year(): number {
        return this._year;
    }

    set year(num: number) {
        this._year = (num >= 2020 && num <= 2050) ? num : 2020;
    }

    get month(): number {
        return this._month;
    }

    set month(num: number) {
        this._month = (num >= 1 && num <= 12) ? num : 1;
    }
}