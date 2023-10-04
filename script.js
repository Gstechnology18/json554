const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("novoLogin");
const campoNovaSenha = document.getElementById("novaSenha");
const campoRepSenha = document.getElementById("repSenha");

function login() {
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuário ou senha incorreta!";
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));

    if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        let usuarioEncontrado = false; // Adicione uma variável para rastrear se um usuário foi encontrado

        for (let usuario of bancoDeDados) {
            if (usuario.login == login && usuario.senha == senha) {
                mensagem = "Parabéns, você logou!";
                localStorage.setItem("logado", JSON.stringify(usuario));
                window.location.href = "./logado/index5.html";
                usuarioEncontrado = true; // Defina a variável para true quando um usuário for encontrado
                break;
            }
        }

        if (!usuarioEncontrado) {
            mensagem = "Usuário não encontrado. Faça o cadastro primeiro.";
        }
    }
    alert(mensagem);
}

function cadastro() {
    if (campoNovaSenha.value == campoRepSenha.value) {
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {
            bancoDeDados = [];
        }
        if(verificaSeExiste(campoNovoLogin.value, bancoDeDados)){
            alert("Esse login já está cadastrado.")
        }
        else{
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuário cadastrado com sucesso!")
        }
    } else {
        alert("As senhas são diferentes!");
    }
    window.location.href="index4.html"
    
}

function verificaSeExiste(login, banco){
    for(usuario of banco){
        if(login == usuario.login){
            return true;
        }
    }
    return false;
}


function volta(){
    window.location.href="index.html"
}
function volta2(){
    window.location.href="index.html"
}
