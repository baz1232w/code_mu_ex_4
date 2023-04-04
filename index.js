const input = document.querySelector('.input'),
      btn = document.querySelector('.btn'),
      result = document.querySelector('.result');

const number = Math.floor(Math.random() * 100) + 1

btn.addEventListener('click',checkChoise)

function checkChoise() {
    if(parseInt(input.value) > 1 && parseInt(input.value) < 100){
        if(number === +input.value){
            result.textContent = 'Congratulations ! Your are winner !'
            return true
        }
    
        if(+input.value > number){
            result.textContent = 'Try less'
        }else{
            result.textContent = 'Try more'
        }
    }
}