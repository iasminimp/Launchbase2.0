//criar um programa que calcula a média
//das notas entre os alunos e envia
//mensagem do cálculo da média


const aluno1 = 'Iasmin'
const notaAluno01 = 9.8

const aluno2 = "Gilson"
const notaAluno02 = 10

const aluno3 = `Victor`
const notaAluno03 = 2


//media das notas
const media = (notaAluno01+notaAluno02+notaAluno03)/3

console.log(typeof notaAluno01)//imprime o tipo da variavel
console.log(aluno3) //exibe no terminal o que esta na variavel nome3
console.log(media)//exibe no terminal a media 

console.log(aluno2)


//Comando para rodar no terminal bash: node aluno.js

if(media>5){
    console.log(`A médoa foi de ${media}. Parabéns`)
}else{
    console.log('A média é menor que 5')
}
