class Person {
    constructor(name, secondName, dateOfBirth, passportId) {
        this.name = name;
        this.secondName = secondName;
        this.dateOfBirth = dateOfBirth;
        this.passportId = passportId;
    }

    displaySummary () {
        console.log(this.name, this.secondName, this.dateOfBirth, this.passportId);
    }
}

class Student extends Person {
    constructor(name, secondName, dateOfBirth, passportId, faculty, groupNubmer, typeOfTraining) {
        super(name, secondName, dateOfBirth, passportId)
        this.faculty = faculty;
        this.groupNubmer = groupNubmer;
        this.typeOfTraining = typeOfTraining;

    }
    
    displaySummary () {
        super.displaySummary();
        console.log(this.faculty, this.groupNubmer, this.typeOfTraining);

    }
}

class Teacher extends Person {
    constructor(name, secondName, dateOfBirth, passportId, nameOfSubject, nameOfCathedra,) {
        super(name, secondName, dateOfBirth, passportId)
        this.nameOfSubject = nameOfSubject;
        this.nameOfCathedra = nameOfCathedra;
    }

    displaySummary () {
        super.displaySummary();
        console.log(this.nameOfCathedra, this.nameOfSubject);
    }
}

class Cathedra {
    constructor(nameOfCathedra, headOfCathedra) {
        this.nameOfCathedra = nameOfCathedra;
        this.headOfCathedra = headOfCathedra;
    }

    displaySummary () {
        console.log(this.nameOfCathedra, this.headOfCathedra);
    }
}

class Subject {
    constructor(nameOfSubject, listOfStudent) {
        this.nameOfSubject = nameOfSubject;
        this.listOfStudent = listOfStudent;
    }

    displaySummary () {
        console.log(this.listOfStudent);
    }
}
// функция для сводки у любого обьекста
function displaySummaryAnyObject(object) {
    object.displaySummary();
}