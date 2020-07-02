const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500
const bratheTime =  ((totalTime/5) * 2) 
const holdTime = totalTime/5


breathAnimation();

function breathAnimation (){
    text.innerHTML = 'Breath In'
    container.className = 'container grow'

    setTimeout(()=>{
        text.innerText = 'Hold'

        setTimeout(()=>{
            text.innerText = 'Release ...'
            container.className = 'container shrink'
        },holdTime)

    },bratheTime)
}


setInterval( breathAnimation, totalTime );