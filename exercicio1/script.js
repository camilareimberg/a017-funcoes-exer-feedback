// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
function ola(){
    console.log("Olá")
}

ola()

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.
function tabuada(valor){
    for(i=1;i<=10;i++){
  const numero= valor*i    
    console.log(`${valor} * ${i}= ${numero} `)
    
}
}
tabuada(6)

// // c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
// const ola=() =>{}
//     console.log("Olá")
// }

// ola()

// const tabuada=(valor)=>{
//     for(i=1;i<=10;i++){
//   const numero= valor*i    
//     console.log(`${valor} * ${i}= ${numero} `)
    
// }
// }
// tabuada(6)