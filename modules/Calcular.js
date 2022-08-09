const input = document.querySelector('#input-form');
const btnsNumericos = document.querySelectorAll('.clicavel');
const btnResult = document.querySelector('#result-form');
const btnClear = document.querySelector('#btn-clear');
const btnC = document.querySelector('#btn-c');

export const setaNoInput = (item) =>{
    let ultimoCaractere = input.value.substr(-1);
    if(ultimoCaractere == '+' || ultimoCaractere == '-' || ultimoCaractere == '*' || ultimoCaractere == '/' ){
        if(item.name == '+' || item.name == '-' || item.name == '*' || item.name == '/' ){
            return
        }
        return input.value = input.value + item.name.toString();
    }
    input.value = input.value + item.name.toString();
}

const mostraResultado = () => {
    const resultado = eval(input.value);
    if(resultado) input.value = eval(input.value); 
}

btnsNumericos.forEach((item)=>{
    item.addEventListener('click', () => { 
     setaNoInput(item);
})
});
 
btnResult.addEventListener('click',() => {
     mostraResultado();
})

btnClear.addEventListener('click', () =>{
    input.value = '';
})
btnC.addEventListener('click', () => {
    input.value = input.value.slice(0,-1);
})