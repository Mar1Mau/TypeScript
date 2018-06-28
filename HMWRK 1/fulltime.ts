class FullTime extends BasicDate {
    private _hour: number;
    private _minutes: number;
    private _seconds: number;

    public toString() {
        return super.toString() +
            " Hour: " + this.hour + ", Minutes: " + this.minutes + ", Seconds: " + this.seconds + "<br/>";
    }


    constructor(day: number, year: number, month: number, hour: number, minutes: number, seconds: number) {
        super(day, year, month);
        this.hour = hour;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    get hour(): number {
        return this._hour;
    }

    set hour(x: number) {
        this._hour = (x >= 0 && x <= 24) ? x : 0;
    }

    get minutes(): number {
        return this._minutes;
    }

    set minutes(x: number) {
        this._minutes = (x >= 0 && x <= 60) ? x : 0;
    }

    get seconds(): number {
        return this._seconds;
    }

    set seconds(x: number) {
        this._seconds = (x >= 0 && x <= 60) ? x : 0;
    }


}