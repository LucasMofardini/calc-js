const input = document.querySelector('#input-form');
const btnsNumericos = document.querySelectorAll('.clicavel');
const btnResult = document.querySelector('#result-form');

export const setaNoInput = (item) =>{
    let ultimoCaractere = input.value.substr(-1);

    if(ultimoCaractere == '+' || ultimoCaractere == '-' || ultimoCaractere == '*' || ultimoCaractere == '/'){
        if(item.name == '+' || item.name == '-' || item.name == '*' || item.name == '/'){
            return
        }
        return input.value = input.value + item.name.toString();
    }
    input.value = input.value + item.name.toString();
}

const mostraResultado = () => {
    const resultado = eval(input.value);
    input.value = resultado;
}

btnsNumericos.forEach((item)=>{
    item.addEventListener('click', () => { 
     setaNoInput(item);
})
});
 
btnResult.addEventListener('click',()=>{
     mostraResultado();
})