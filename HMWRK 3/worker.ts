class Worker1 extends Person {

    private _salary: number;

    constructor(fullname: string, age: number, id: string, isMale: boolean, salary: number) {
        super(fullname, age, id, isMale);
        this.salary = salary;
    }

    public print(): void {
        super.print();
        document.write(`${this._fullname} is worker and have a salary: ${this.salary} NIS <br/>`)
    }

    get salary(): number {
        return this._salary;
    }

    set salary(x: number) {
        this._salary = (x > 0) ? x : 1;
    }

}