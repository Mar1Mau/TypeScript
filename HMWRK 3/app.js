var cinema = new Cinema("Yes Planet", 100);
var persons = new Array(15);
for (var i = 0; i < persons.length; i++) {
    var random = Math.round(Math.random() * 3);
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
function calc(cinema, persons) {
    var sum = 0;
    var countTotal = 0;
    var countTeacher = 0;
    var countWorker = 0;
    var countStudent = 0;
    for (var i = 0; i < persons.length; i++) {
        var basePrice = cinema.price;
        countTotal++;
        if (persons[i] instanceof Worker1) {
            countWorker++;
        }
        else if (persons[i] instanceof Teacher) {
            basePrice = basePrice - (basePrice * (cinema.lectureDiscount / 100));
            countTeacher++;
        }
        else if (persons[i] instanceof Student) {
            basePrice = basePrice - (basePrice * (cinema.studDiscount / 100));
            countStudent++;
        }
        sum += basePrice;
    }
    document.write("<br/>Total earns: " + Math.round(sum) + " <br/>" +
        ("Price: " + cinema.price + " <br/>") +
        ("Total people: " + countTotal + " <br/>") +
        ("Total teachers: " + countTeacher + " <br/>") +
        ("Discount for teacher: " + Math.round(cinema.lectureDiscount) + "%<br/>") +
        ("Total workes: " + countWorker + " <br/>") +
        ("Total students: " + countStudent + " <br/>") +
        ("Discount for student: " + Math.round(cinema.studDiscount) + "%<br/>"));
}
//# sourceMappingURL=app.js.map