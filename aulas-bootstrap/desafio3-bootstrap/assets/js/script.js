const tbody = document.querySelector('tbody');
const modalEl = document.getElementById('funcionarioModal');
const modal = new bootstrap.Modal(modalEl);
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputCargo = document.querySelector('#cargo');
const btnAdicionar = document.querySelector('#btnAdicionar');

let items = [];
let id;

// funcoes para acesso e cadastro do armazenamento de dados
const getItemsLS = () => JSON.parse(localStorage.getItem('lsfunc')) ?? [];
const setItemsLS = () => localStorage.setItem('lsfunc', JSON.stringify(items));

// funcao que carregara os dados salvos na tabela assim que a página for aberta
function loadItems() {
    items = getItemsLS();

    if (items.length === 0) {
        items = [
            {
                nome: 'Exemplo Teste',
                email: 'teste@exemplo.com',
                cargo: 'Testador e Exemplificador Profissional'
            }
        ];
        setItemsLS();
    }

    tbody.innerHTML = '';
    items.forEach((item, index) => {
        insertItem(item, index)
    });
}

document.addEventListener('DOMContentLoaded', loadItems);

// funcao para inserir as linhas no corpo da tabela
function insertItem(item, index) {
    let tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${index}</td>
        <td>${item.nome}</td>
        <td>${item.email}</td>
        <td>${item.cargo}</td>
        <td class = "text-center">
            <button onclick = "editItem(${index})" class = "btn btn-warning btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM136,75.31,152.69,92,68,176.69,51.31,160ZM48,208V179.31L76.69,208Zm48-3.31L79.32,188,164,103.31,180.69,120Zm96-96L147.32,64l24-24L216,84.69Z"></path></svg></button>
        </td>
        <td class = "text-center">
            <button onclick = "deleteItem(${index})" class = "btn btn-danger btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg></button>
        </td>
    `;

    tbody.appendChild(tr);
}

//funcao de edicao
function editItem(index) {
    inputNome.value = items[index].nome;
    inputEmail.value = items[index].email;
    inputCargo.value = items[index].cargo;
    id = index;

    document.querySelector('#funcionarioModalLabel').textContent = 'Editar Funcionário';

    modal.show();
}

//funcao de delecao
function deleteItem(index) {
    if (confirm('Deseja realmente excluir este funcionário?')) {
        items.splice(index, 1)
        setItemsLS()
        loadItems()
    }
}

modalEl.addEventListener('show.bs.modal', function (event) {
    if(id === undefined) {
        inputNome.value = '';
        inputEmail.value = '';
        inputCargo.value = '';
        document.querySelector('#funcionarioModalLabel').textContent = 'Adicionar Funcionário';
    }
});

modalEl.addEventListener('hidden.bs.modal', function () {
    id = undefined;
});


btnAdicionar.onclick = () => {
    if (inputNome.value == '' || inputEmail.value == ''|| inputCargo.value == '') {
        alert('Preencha todos os campos');
        return;
    }

    if (id !== undefined) {
        items[id].nome = inputNome.value;
        items[id].email = inputEmail.value
        items[id].cargo = inputCargo.value
    } else {
        items.push({
            'nome' : inputNome.value, 
            'email' : inputEmail.value, 
            'cargo' : inputCargo.value
        })
    }

    setItemsLS();
    loadItems();

    modal.hide();
}