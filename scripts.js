// Verificação se o checkbox de nenhuma vacina tomada está checado. Se estiver, a div das doses desaparece

let vacinas_tomadas = document.getElementById('vacinas_tomadas')

function check_nenhuma(elemento){
    if(elemento.checked){
        vacinas_tomadas.style.display = 'none';
    }else{
        vacinas_tomadas.style.display = 'block';
    }
}