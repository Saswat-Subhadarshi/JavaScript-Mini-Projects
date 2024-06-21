let randomnumber=parseInt(Math.random()*100+1)

const submit=document.querySelector('#subt')
const userinput=document.querySelector('#guessfield')
const guessslot=document.querySelector('.guesses')
const remianing=document.querySelector('.lastresult')
const loworhi=document.querySelector('.loworhi')
const startover=document.querySelector('.resultparam')

const p=document.createElement('p')

let prevguess=[]
let numofguess=1

let playgame=true

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userinput.value)
        validguess(guess)
    })
}

function validguess(guess){
   if(isNaN(guess)){
    alert("Please enter a valid number")
   }
   else if(guess<1){
    alert("Please enter the number greater than 1")
   }
   else if(guess>100){
    alert("Please enter the numebr less than 100")
   }
   else{
    prevguess.push(guess)
    if(numofguess===11){
        dispalyguess(guess)
        displaymsg(`Game Over. Random Number was ${randomnumber}`)
        endgame()
      }
      else{
        dispalyguess(guess)
        checkguess(guess)
      }
   }
}

function checkguess(guess){
    if(guess===randomnumber){
        displaymsg(`You guessed it right`)
        endgame()
    }
    else if(guess<randomnumber){
        displaymsg(`Number is low`)
    }
    else if(guess>randomnumber){
        displaymsg(`Number is high`)
    }
}
function displaymsg(message){
    loworhi.innerHTML=`<h3>${message}</h3>`
}
function dispalyguess(guess){
    userinput.value=''
    guessslot.innerHTML +=`${guess},  `
    numofguess++
    remianing.innerHTML=`${11-numofguess}`
}
function newgame(){
    const newgame=document.querySelector('#newgame')
    newgame.addEventListener('click',function(e){
        randomnumber=parseInt(Math.random()*100+1)
        prevguess=[]
        numofguess=1
        guessslot.innerHTML=''
        remianing.innerHTML=`${11-numofguess}`
        userinput.removeAttribute('disabled')
        startover.removeChild(p)
        playgame=true
    })
}
function endgame(){
    userinput.value=''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML= `<h3 id="newgame">Start New Game</h3>`
    startover.appendChild(p)
    playgame=false
    newgame()
}