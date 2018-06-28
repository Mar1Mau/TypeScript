let cinema: Cinema = new Cinema("Yes Planet", 100);

let persons: Array<Person> = new Array<Person>(15);

for (let i: number = 0; i < persons.length; i++) {
    let random: number = Math.round(Math.random() * 3);
  

    if (random == 0) {
        persons[i] = new Student("Dorit", 25, "345678230", false, "University", "Doctor");
        persons[i].print();
    }

    else if (random == 1) {
        persons[i] = new Teacher("Jhon", 46, "129878909", true, "Programming", 5);
        persons[i].print();
    }

    else {
        persons[i] = new Worker1("Reut", 33, "431256390", true, 19000);
        persons[i].print();
    }
}

calc(cinema, persons);
function calc(cinema: Cinema, persons: Person[]): void {

    let sum: number = 0;
    let countTotal: number = 0;
    let countTeacher: number = 0;
    let countWorker: number = 0;
    let countStudent: number = 0;

    for (let i: number = 0; i < persons.length; i++) {

        let basePrice: number = cinema.price;

        countTotal++;


        if (persons[i] instanceof Worker1) {
            countWorker++;
        }
        else if (persons[i] instanceof Teacher) {
            basePrice = basePrice - (basePrice * (cinema.lectureDiscount/100));
            countTeacher++;

        }
        else if (persons[i] instanceof Student) {
            basePrice = basePrice - (basePrice * (cinema.studDiscount/100));
            countStudent++;

        }

        sum += basePrice;

        
    }

    document.write(`<br/>Total earns: ${Math.round(sum)} <br/>` +
        `Price: ${cinema.price} <br/>` +
        `Total people: ${countTotal} <br/>` +
        `Total teachers: ${countTeacher} <br/>` +
        `Discount for teacher: ${Math.round(cinema.lectureDiscount)}%<br/>` +
        `Total workes: ${countWorker} <br/>` +
        `Total students: ${countStudent} <br/>` +
        `Discount for student: ${Math.round(cinema.studDiscount)}%<br/>`);
}
