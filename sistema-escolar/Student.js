class Student extends User {
    constructor(name, email, password, schoolClass) {
        super(name, email, password);
        this.schoolClass = schoolClass;
    }

    get schoolClass() {
        return this._schoolClass;
    }

    set schoolClass(schoolClass) {
        this._schoolClass = schoolClass;
    }

    showProfile() {
        return `${super.showProfile()}
                <p><strong>Turma:</strong> ${this._schoolClass}</p>
                <p><strong>Tipo:</strong> Aluno</p>`;
    }
}