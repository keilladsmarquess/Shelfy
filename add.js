function editAutor() {
    var p = document.getElementById('autor-text');
    var input = document.getElementById('autor-input');
   
    p.style.display = 'none';
    input.style.display = 'block';
    input.focus();
}

function saveAutor() {
    var p = document.getElementById('autor-text');
    var input = document.getElementById('autor-input');
   
    p.textContent = input.value;
    input.style.display = 'none';
    p.style.display = 'block';
}

function editGenero() {
    var p = document.getElementById('genero-text');
    var input = document.getElementById('genero-input');
   
    p.style.display = 'none';
    input.style.display = 'block';
    input.focus();
}

function saveGenero() {
    var p = document.getElementById('genero-text');
    var input = document.getElementById('genero-input');
   
    p.textContent = input.value;
    input.style.display = 'none';
    p.style.display = 'block';
}

function editPag() {
    var p = document.getElementById('pag-text');
    var input = document.getElementById('pag-input');
   
    p.style.display = 'none';
    input.style.display = 'block';
    input.focus();
}

function savePag() {
    var p = document.getElementById('pag-text');
    var input = document.getElementById('pag-input');
   
    p.textContent = input.value;
    input.style.display = 'none';
    p.style.display = 'block';
}

function changeColor(button) {
    var buttonFisico = document.querySelector('.btn-fisico');
    var buttonEbook = document.querySelector('.btn-ebook');

    buttonFisico.classList.remove('clicked');
    buttonEbook.classList.remove('clicked');

    button.classList.add('clicked');
}

function salvarInformacoes() {
    alert("As informações foram salvas com sucesso!");
}


