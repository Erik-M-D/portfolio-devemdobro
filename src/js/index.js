const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
const botaoOcultarProjetos = document.querySelector('.btn-ocultar-projetos');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotaoMais();
    adicionarBotaoMenos();
});

botaoOcultarProjetos.addEventListener('click', () => {
    ocultarProjetos();
    esconderBotaoMenos();
    adicionarBotaoMais();
});    

function esconderBotaoMais() {
    botaoMostrarProjetos.classList.add('remover');
}

function adicionarBotaoMenos() {
    botaoOcultarProjetos.classList.remove('remover');
}

function esconderBotaoMenos() {
    botaoOcultarProjetos.classList.add('remover');
}

function adicionarBotaoMais() {
    botaoMostrarProjetos.classList.remove('remover');
}



function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

function ocultarProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo');
    });
}


