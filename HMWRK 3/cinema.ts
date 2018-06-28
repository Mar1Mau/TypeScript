class Cinema {
    public CinemaName: string;
    private _price: number;
    public readonly studDiscount: number;
    public readonly lectureDiscount: number;


    constructor(cinemaname: string, price: number,
        studDiscount: number = ((Math.random() * 10) + 10),
        lectureDiscount: number = ((Math.random() * 5) + 5)) {
        this.CinemaName = cinemaname;
        this.price = price;
        this.studDiscount = studDiscount;
        this.lectureDiscount = lectureDiscount;
    }

    get price(): number {
        return this._price;
    }

    set price(x: number) {
        this._price = (x >= 30 && x <= 200) ? x : 30;
    }

    private _persons: Person[];

    get persons(): Person[] {
        return this._persons;
    }

    set persons(p: Person[]) {
        this._persons = p;
    }
}