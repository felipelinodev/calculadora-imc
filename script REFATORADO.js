

//VARIÁVEIS CAMPO (INPUT)
let idade = document.getElementById("idade")
let peso = document.getElementById("peso")
let altura = document.getElementById("altura")

//VARIÁVEIS CAMPO (SUBMIT)
let button_fem = document.getElementsByClassName("fem-btn")[0]
let button_masc = document.getElementsByClassName("masc-btn")[0]

//CORES:
let clr_green_normal = "#097324"
let clr_green_saturad = "#1ADC4B"
let clr_red = "D93D4A"
let clr_yelow = "EECB6D"

let option = ""

function clickMasc(){
    event.preventDefault();

    option = "Homem"
    button_masc.style.backgroundColor = clr_green_normal
    button_fem.style.backgroundColor = "transparent"

}

function clickFem(){
    //Essa função faz com que o Brower não recarregue a pagina ao clicar
    event.preventDefault();

    option = "Mulher"
    button_fem.style.backgroundColor = clr_green_normal
    button_masc.style.backgroundColor = "transparent"
    
}
function Calcular(){
    event.preventDefault();

    let altura_quadrado = altura.value*altura.value       
    let calculo = Number(peso.value) / altura_quadrado
    let meu_imc = calculo.toFixed(2)

    let imc_num_tela = document.getElementById("imc-output")

    let faixa_peso = document.getElementById("class-faixa-peso")
    let media_peso = document.getElementById("media-faixa-peso")
    let kg_peso = document.getElementById("kg-peso")
    let feedtop = document.getElementById("feeback-top")
    let feedtop2 = document.getElementById("feeback-top2")

    imc_num_tela.innerHTML = meu_imc
    kg_peso.innerHTML = peso.value+"kg"
    

    if(meu_imc < 18.5){
        media_peso.innerHTML = "Menor que 18.5"
        faixa_peso.innerHTML = "Baixo"
        imc_num_tela.style.color = clr_yelow
        
        feedtop.innerHTML = "Coma mais e melhor:)"
        feedtop2.innerHTML ="e logo tá no shape."

    }else if(meu_imc >= 18.5 && meu_imc <= 24.9){
        media_peso.innerHTML = "18.5 a 24.9"
        faixa_peso.innerHTML = "Normal"

        feedtop.innerHTML = "Tudo Certo :)"
        feedtop2.innerHTML ="Continue se cuidando!!"
        imc_num_tela.style.color = clr_green_saturad
        
    }else if(meu_imc >= 25 && meu_imc <= 29.9){
        media_peso.innerHTML = "25 a 29,9"
        faixa_peso.innerHTML = "Sobrepeso"
        imc_num_tela.style.color = clr_yelow

        feedtop.innerHTML = "Podia ser melhor :|"
        feedtop2.innerHTML ="Não tá ruim ruim, mas...né?"

    }else if(meu_imc >= 30 && meu_imc <= 34.9){
        media_peso.innerHTML = "30 a 34,9"
        faixa_peso.innerHTML = "Obeso I"
        imc_num_tela.style.color = clr_red

        feedtop.innerHTML = "Ainda dá tempo :("
        feedtop2.innerHTML ="Eu confio em você, já deu certo"

    }else if(meu_imc >= 35 && meu_imc <= 39.9){
        media_peso.innerHTML = "35 a 39,9"
        faixa_peso.innerHTML = "Obeso II"
        imc_num_tela.style.color = clr_red

        feedtop.innerHTML = "Situação difícil :("
        feedtop2.innerHTML ="Procure um médio, você está mal"
    }else{
        media_peso.innerHTML = "35 a 39,9"
        faixa_peso.innerHTML = "Obeso III"
        imc_num_tela.style.color = clr_red

        feedtop.innerHTML = "Situação muito crítica :("
        feedtop2.innerHTML ="Você precisa de ajuda"
    }

}