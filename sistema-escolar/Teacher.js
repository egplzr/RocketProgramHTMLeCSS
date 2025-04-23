class Teacher extends User {
    constructor(name, email, password, subject) {
        super(name, email, password);
        this.subject = subject;
    }

    get subject() {
        return this._subject;
    }

    set subject(subject) {
        this._subject = subject;
    }

    showProfile() {
        return `${super.showProfile()}
                <p><strong>Matérias:</strong> ${this._subject}</p>
                <p><strong>Tipo:</strong> Professor</p>`;
    }
}