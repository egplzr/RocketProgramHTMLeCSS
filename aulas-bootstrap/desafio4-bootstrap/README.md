Aprendizados de funções novas com esse código:

<script>
        document.addEventListener('DOMContentLoaded', function () {
            'use strict';

            const form = document.querySelector('.needs-validation');

            form.addEventListener('submit', function(event){
                event.preventDefault();
                event.stopPropagation();

                form.classList.add('was-validated');

                if(form.checkValidity()) {
                    showAlert();

                    setTimeout(() => {
                        form.reset();
                        form.classList.remove('was-validated');
                    }, 3000);
                }
            });

            function showAlert() {
                let div = document.createElement('div');

                div.innerHTML = `
                <div class="alert alert-success" role="alert">
                    Formulario enviado com sucesso!
                </div>
            `;

                document.querySelector('form').prepend(div);

                setTimeout(() => {
                    div.remove();
                }, 3000);
            }
        });
</script>

##Explicações:

- 'use strict'; => essa string no inicio do código é uma diretiva(instrução/norma/orientação) do JavaScript que coloca o código em modo estrito, o que faz com que certos erros que antes eram silenciosos agora lancem exceções, certas sintaxes e palavras-chaves são proíbidas, ajudando a escrever um código mais limpo e ajudando a evitar erros comuns.

- 'preventDefault()'; => essa função previne que um comportamento padrão de algum evento seja excecutado. No código, por exemplo, sua função é previnir que o botão submit ao ser clicado não recarregue a página(recarregar a página é um evento padrão de botão submit).

- 'event.stopPropagation()'; => essa função impede a propagação de um evento pelos elementos do DOM. Os evetos se propagam da origem pra cima, ou seja, com essa função o evento só acontece em sua origem. Essa função e usada no código para manter o evento de submit contido no botão.

- 'form.classList.add('was-validated')'; => essa função adiciona uma classe dentro do elemento através do acesso a lista de classes desse elemento. Ou seja, a função acessa a lista de classes do elemento form e adiciona dentro dela a classe.

- 'form.checkValidity()'; => essa função verifica se todos os campos do formulários estão válidos. Ela é uma função nativa do html e ela considera tanto atributos como 'required', 'min', 'max' e etc, quanto campos com type como o type='email'.