class Teacher extends Person {
    private _subj_teach: string;
    private _experience: number;


    constructor(fullname: string, age: number, id: string, isMale: boolean, teachsubj: string, exp: number) {
        super(fullname, age, id, isMale);
        this.teachsubj = teachsubj;
        this.exp = exp;
    }

    public print() {
        super.print();
        document.write(`${this._fullname} is teaching ${this.teachsubj} and have experience: ${this.exp} year(s)<br/>`)
    }

    get teachsubj(): string {
        return this._subj_teach;
    }

    set teachsubj(x: string) {
        this._subj_teach = x;
    }


    get exp(): number {
        return this._experience;
    }

    set exp(x: number) {
        this._experience = (x >=0) ? x : 0;
    }
}