function Person (name, secondName, dateOfBirth, passportId) {
    this.name = name;
    this.secondName = secondName;
    this.dateOfBirth = dateOfBirth;
    this.passportId = passportId;
}

Person.prototype.displaySummary = function () {
     console.log(this.name, this.secondName, this.dateOfBirth, this.passportId);
}


function Student (name, secondName, dateOfBirth, passportId, faculty, groupNubmer, typeOfTraining) {
    Person.call(this, name, secondName, dateOfBirth, passportId);
    this.faculty = faculty;
    this.groupNubmer = groupNubmer;
    this.typeOfTraining = typeOfTraining;
}

Student.prototype.displaySummary = function () {
    console.log(this.name, this.secondName, this.dateOfBirth, this.passportId, this.faculty, this.groupNubmer, this.typeOfTraining);
}


function Teacher(name, secondName, dateOfBirth, passportId, nameOfSubject, nameOfCathedra) {
    Person.call(this, name, secondName, dateOfBirth, passportId);
    this.nameOfSubject = nameOfSubject;
    this.nameOfCathedra = nameOfCathedra;
}

Teacher.prototype.displaySummary = function () {
    console.log(this.name, this.secondName, this.dateOfBirth, this.passportId, this.nameOfSubject, this.nameOfCathedra,);
}


function Cathedra (nameOfCathedra, headOfCathedra) {
    this.nameOfCathedra = nameOfCathedra;
    this.headOfCathedra = headOfCathedra;
}

Cathedra.prototype.displaySummary = function () {
        console.log(this.nameOfCathedra, this.headOfCathedra);
}


function Subject(nameOfSubject, listOfStudent) {
    this.nameOfSubject = nameOfSubject;
    this.listOfStudent = listOfStudent;
}

Subject.prototype.displaySummary = function () {
    console.log(this.listOfStudent);
}