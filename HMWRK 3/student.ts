class Student extends Person {
    private _institution: string;
    private _profession: string;

    constructor(fullname: string, age: number, id: string, isMale: boolean, institution: string, profession: string) {
        super(fullname, age, id, isMale);
        this.institution = institution;
        this.profession = profession;

    }


    public print(): void {
        super.print();
        document.write(`${this._fullname} is studying ${this.profession} in ${this.institution}<br/>`)
    }

    get institution(): string {
        return this._institution;
    }

    set institution(x: string) {
        this._institution = x;
    }

    get profession(): string {
        return this._profession;
    }

    set profession(x: string) {
        this._profession = x;
    }

}