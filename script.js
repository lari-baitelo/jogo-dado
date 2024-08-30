let contador=0

function jogar(){
contador++

    let nr_sorteado = Math.floor( Math.random() * 6) + 1

    

    if (nr_sorteado == 1)
        {
        document.getElementById('images').src='images/dado1.png'
        }
    else if (nr_sorteado == 2)
        {
        document.getElementById('images').src='images/dado2.png'
        }
    else if (nr_sorteado == 3)
        {
        document.getElementById('images').src='images/dado3.png'
        }
    else if (nr_sorteado == 4)
        {
        document.getElementById('images').src='images/dado4.png'
        }
    else if (nr_sorteado == 5)
        {
        document.getElementById('images').src='images/dado5.png'
        }
    else if (nr_sorteado == 6)
        {
        document.getElementById('images').src='images/dado6.png'
        }

        if(contador<=10)
        setTimeout(jogar,100)
        else{
            clearTimeout(jogar)
            contador=0
        }


        gera_cor()
}


function gera_cor(){
    let r =  Math.floor( Math.random() * 255) + 1
    let g =  Math.floor( Math.random() * 255) + 1
    let b =  Math.floor( Math.random() * 255) + 1
    

    document.body.style.background = 'rgb('+r+','+g+','+b+')'
}