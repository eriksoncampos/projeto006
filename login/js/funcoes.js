//Inicialização de variáveis.
const usuarios = [
    {id:1,usuario:"arildo",senha:"s123"},
    {id:2,usuario:"brildo",senha:"s456"},
];

function exibir(){
    let usuarioPermitido = false;
    const campoUsuario = document.getElementById("usuario");
    const campoSenha = document.getElementById("senha");
    const valor = campoUsuario.value;
    const senha = campoSenha.value;

    //Validar se os campos estão preenchidos.
    
    for(let usuario of usuarios){
            if(usuario.usuario === valor && usuario.senha === senha){
                usuarioPermitido = true;
            }
    };    

    document.getElementById("exibemensagem").innerHTML = usuarioPermitido ? "Acesso permitido." : "Acesso negado."

    if(usuarioPermitido == false){
        usuarios.push({id:3,usuario:valor,senha:senha});
    }
};