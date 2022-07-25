let nome = window.document.getElementById('nome')
let email = document.querySelector('input#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido!"
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = "Nome válido!"
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail inválido!"
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = "E-mail válido!"
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Limite de 100 caracteres ultrapassado!"
        txtAssunto.style.color = 'red'
    } else {
        txtAssunto.innerHTML = ""
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk && emailOk && assuntoOk) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente antes de enviar!')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '500px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}