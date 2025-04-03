function editText() {
    var span = document.getElementById('music-span');
    var input = document.getElementById('music-input');
    
    span.style.display = 'none';
    input.style.display = 'block';
    input.focus();
}

function saveText() {
    var span = document.getElementById('music-span');
    var input = document.getElementById('music-input');
    
    span.textContent = input.value;
    input.style.display = 'none';
    span.style.display = 'block';
}

function editQuote() {
    var h4 = document.getElementById('quote-text');
    var input = document.getElementById('quote-input');
    
    h4.style.display = 'none';
    input.style.display = 'block';
    input.focus();
}

function saveQuote() {
    var h4 = document.getElementById('quote-text');
    var input = document.getElementById('quote-input');
    
    h4.textContent = '"' + input.value + '"';
    input.style.display = 'none';
    h4.style.display = 'block';
}

//
function editOpniao() {
    var p = document.getElementById('opniao-text');
    var input = document.getElementById('opniao-input');
    
    p.style.display = 'none';
    input.style.display = 'block';
    input.value = p.textContent.trim();
    input.focus();
}

function saveOpniao() {
    var p = document.getElementById('opniao-text');
    var input = document.getElementById('opniao-input');
    var text = input.value.trim();
    
    // Se o texto não for vazio, divide em parágrafos
    if (text !== "") {
        let words = text.split(' ');
        let line = '';
        let lines = [];
        
        // Cria uma linha e adiciona palavras até atingir a largura do contêiner
        words.forEach(function(word) {
            let testLine = line + (line ? ' ' : '') + word;
            let containerWidth = document.getElementById("opniao-container").offsetWidth;
            let testWidth = getTextWidth(testLine, "18px Arial");

            // Se a linha exceder a largura do contêiner, crie uma nova linha
            if (testWidth > containerWidth) {
                lines.push(line);
                line = word;
            } else {
                line = testLine;
            }
        });

        // Adiciona a última linha, se houver
        if (line) {
            lines.push(line);
        }

        // Converte as linhas em parágrafos
        p.innerHTML = lines.map(function(line) {
            return "<p>" + line + "</p>";
        }).join('');
    }

    input.style.display = 'none'; 
    p.style.display = 'block';
}

// Função que calcula a largura de um texto
function getTextWidth(text, font) {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    context.font = font;
    return context.measureText(text).width;
}


function showMessage() {
    var message = document.getElementById("message");
    message.style.display = "block";
    setTimeout(function() {
        message.style.display = "none";
    }, 3000);
}

function changeColor() {
    var button = document.querySelector('.btn-lido');
    button.classList.toggle('clicked');
}

function salvarInformacoes() {
    alert("As informações foram salvas com sucesso!");
}