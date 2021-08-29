class Person {

    constructor(options) {
        this.name = options.name;
        this.secondName = options.secondName;
        this.dateOfBirth = options.dateOfBirth;
        this.passportId = options.passportId;
    }

    displaySummary () {
        console.log(this.name ,this.secondName, this.dateOfBirth, this.passportId);
    }
}

class Student extends Person {

    constructor(options) {
        super(options)
        this.faculty = options.faculty;
        this.groupNubmer = options.groupNubmer;
        this.typeOfTraining = options.typeOfTraining;

    }
    
    displaySummary () {
        super.displaySummary();
        console.log(this.faculty, this.groupNubmer, this.typeOfTraining);

    }
}

class Teacher extends Person {

    constructor(options) {
        super(options)
        this.nameOfSubject = options.nameOfSubject;
        this.nameOfCathedra = options.nameOfCathedra;
    }

    displaySummary () {
        super.displaySummary();
        console.log(this.nameOfCathedra, this.nameOfSubject);
    }
}

class Cathedra {

    constructor(options) {
        this.nameOfCathedra = options.nameOfCathedra;
        this.headOfCathedra = options.headOfCathedra;
    }

    displaySummary () {
        console.log(this.nameOfCathedra, this.headOfCathedra);
    }
}

class Subject {

    constructor(options) {
        this.nameOfSubject = options.nameOfSubject;
        this.listOfStudent = options.listOfStudent;
    }

    displaySummary () {
        console.log(this.listOfStudent);
    }
}

