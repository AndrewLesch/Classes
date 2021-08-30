/* Тут классы 
class Person {

    constructor(name, secondName, dateOfBirth, passportId) {
        this.name = name;
        this.secondName = secondName;
        this.dateOfBirth = dateOfBirth;
        this.passportId = passportId;
    }

    displaySummary () {
        console.log(this.name ,this.secondName, this.dateOfBirth, this.passportId);
    }
}

class Student extends Person {

    constructor(faculty, groupNubmer, typeOfTraining) {
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

    constructor(nameOfSubject, nameOfCathedra) {
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
*/
// Тут прототипы 
function Person (options) {
    this.name = options.name;
    this.secondName = options.secondName;
    this.dateOfBirth = options.dateOfBirth;
    this.passportId = options.passportId;
}

Person.prototype.displaySummary = function () {
     console.log(this.name ,this.secondName, this.dateOfBirth, this.passportId);
}


function Student (options) {
    Person.apply(this, arguments);
    this.faculty = options.faculty;
    this.groupNubmer = options.groupNubmer;
    this.typeOfTraining = options.typeOfTraining;
}

Student.prototype.displaySummary = function () {
    console.log(this.name ,this.secondName, this.dateOfBirth, this.passportId, this.faculty, this.groupNubmer, this.typeOfTraining);
}


function Teacher(options) {
    Person.apply(this, arguments);
    this.nameOfSubject = options.nameOfSubject;
    this.nameOfCathedra = options.nameOfCathedra;
}

Teacher.prototype.displaySummary = function () {
    console.log(this.name ,this.secondName, this.dateOfBirth, this.passportId, this.nameOfSubject, this.nameOfCathedra,);
}


function Cathedra (options) {
    this.nameOfCathedra = options.nameOfCathedra;
    this.headOfCathedra = options.headOfCathedra;
}

Cathedra.prototype.displaySummary = function () {
        console.log(this.nameOfCathedra, this.headOfCathedra);
}

function Subject(options) {
    this.nameOfSubject = nameOfSubject;
    this.listOfStudent = listOfStudent;
}

Subject.prototype.displaySummary = function () {
    console.log(this.listOfStudent);
}