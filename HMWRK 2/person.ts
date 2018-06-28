class Person {
    public _fullname: string;
    private _age: number;
    private _id: string;
    private _isMale: boolean;

    constructor(fullname: string, age: number, id: string, isMale: boolean) {
        this._fullname = fullname;
        this.age = age;
        this.id = id;
        this.isMale = isMale;
    }


    public print(): void {
        let male: string;
        if (this.isMale) {
            male = "Male";
        }
        else{
            male = "Female";
        }
        document.write(`${this._fullname} is ${male}, ${this.age} years old. ID number: ${this.id}<br/>`);
    }


    get age(): number {
        return this._age;
    }

    set age(num: number) {
        this._age = (num >= 0 && num <= 120) ? num : 0;
    }


    get isMale(): boolean {
        return this._isMale;
    }

    set isMale(p: boolean) {
        this._isMale = p;
    }

    get id(): string {
        return this._id;
    }

    set id(x: string) {
        if (x.length == 9) {
            this._id = x;
        }
        else {
            document.write("000000000");
        }
    }
}