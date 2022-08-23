//a
function numero (n1,n2){
console.log(`soma ${n1} + ${n2} = ${n1+n2}`)

}
numero(2,4)

//b
function numeroMaior(num1,num2){
const maior = num1>=num2
console.log(`O primeiro número é maior ou igual ao segundo? ${maior}`)

}
numeroMaior(15,66)

//c
function numeroPar(par1){
    const par = par1%2
    if (par===0){
        console.log(`O  número ${par1} é par`)
    }
    console.log(`O  número ${par1} é ímpar`)
    
    }
    
    //d
    function mensagem (string){
    console.log(`O número de caracteres dessa mensagem é: ${string.length}`)
    console.log(`Mensagem em letras maiúsculas: ${string.toUpperCase()}`)
}
mensagem("O rato roeu a roupa do rei de Roma")