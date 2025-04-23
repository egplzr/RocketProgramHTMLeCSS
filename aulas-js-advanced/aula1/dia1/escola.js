class User {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    login(email, password, platform) {
        return this.email === email && this.password === password;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    set name(name) {
        this._name = name;
    }

    set email(email) {
        this._email = email;
    }

    set password(password) {
        this._password = password;
    }
}

class Student extends User {
    constructor(name, email, password, RA) {
        super(name, email, password);

        this.RA = RA;
    }

    login(email, password, platform) {
        return platform === 'alunos' && this.email === email && this.password === password;
    }

    get RA() {
        return this._RA;
    }

    set RA(RA) {
        this._RA = RA;
    }

    get grade() {
        return this._grade;
    }

    set grade(grade) {
        this._grade = grade;
    }
}

class Teacher extends User{
    login(email, password, platform) {
        return platform === 'professores' && this.email === email && this.password === password;
    }

    gradeStudent(student, grade) {
        if(grade >= 0 && grade <= 10) student.grade = grade;
    }
}

const student = new Student('Joao', 'joao@email.com', 123, 1111);
student.grade = 8;

const teacher = new Teacher('Felipe', 'felipe@email.com', 123);

// console.log(student.login('joao@email.com', 1212, 'alunos'));
// console.log(student.login('joao@email.com', 123, 'alunos'));
// console.log(student.login('joao@email.com', 123, 'professores'));
// console.log(teacher.login('felipe@email.com', 123, 'professores'));
// console.log(teacher.login('felipe@email.com', 123, 'alunos'));

teacher.gradeStudent(student, 9.5);

console.log(student);
console.log(teacher);