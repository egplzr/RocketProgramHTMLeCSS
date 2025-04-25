class Pessoa {
    _name;
    _birthday;
    _age;
    _email;
    _password;

    constructor (name, birthday, email, password) {
        this.name = name;
        this.birthday = birthday;
        this.email = email;
        this.password = password;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        if(!name.includes(" ")){
            throw new Error('Digite um nome e sobrenome');
        }
        this._name = name;
    }

    get birhday() {
        return this._birthday;
    }
    set birthday(birthday) {
        this._birthday = birthday;
        this._age = Math.floor((new Date().getTime() - new Date(birthday).getTime())/1000 /60 /60 /24 /365);

        if(this._age < 18){
            throw new Error('Usuário menor de idade.');
        }
    }

    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }

    get password() {
        return this._password;
    }
    set password(password) {
        this._password = password;
    }

    get age() {
        return this._age;
    }
}

const pessoa = new Pessoa(
    'Enzo Guedes',
    '2005-01-09',
    'enzo@email.com',
    'xpo7980'
);

console.log(pessoa);



