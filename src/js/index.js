const cartaoAvaliacao = document.getElementById("cartao-de-avaliacao");

const resultadoDaAvaliacao = document.querySelectorAll(".resultado-da-avaliacao");

const btnAvaliacao = document.querySelectorAll(".btn-avaliacao");

const btnSubmit = document.getElementById("btn-submit");

let notaSelecionada = null;

btnAvaliacao.forEach((botao, index) => {
    botao.addEventListener('click', () => {
   
        btnAvaliacao.forEach(btn => btn.classList.remove('ativo'));

        botao.classList.add('ativo');

        notaSelecionada = index + 1;
    });
});

btnSubmit.addEventListener('click', () => {
    if(notaSelecionada){
        cartaoAvaliacao.classList.add('esconder');

        resultadoDaAvaliacao.forEach((resultado, index) => {
            if(index + 1 === notaSelecionada){
                resultado.classList.remove('esconder');
            }

        });
    };

});
