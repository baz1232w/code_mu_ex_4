// Number game 

const input = document.querySelector('.input'),
      btnNumber = document.querySelector('.btn_number'),
      result = document.querySelector('.result');

const number = Math.floor(Math.random() * 100) + 1

btnNumber.addEventListener('click',checkChoise)

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

// ------------------------------------------------------------------------------------------------------


// Cell game


const table = document.querySelector('.table'),
      btnCell = document.querySelector('.btn_cell');

let arrCell = []

btnCell.addEventListener('click',startCellGame)

function startCellGame() {
    btnCell.setAttribute('disabled','true')

    let number = 0;
    let arr = []

    for(let i = 1; i <= 10; i++){
        const tr = document.createElement('tr');
        arr.push(Math.floor(Math.random() * 100) + 1)

        for(let j = 1; j <= 10; j++){
            const td = document.createElement('td')
            td.textContent = ++number
            td.classList.add('cellStyle')
            
            td.addEventListener('click',()=>{
               
                arr.forEach((el,index) =>{
                    if(el === +td.textContent){
                        td.style.backgroundColor = 'green'
                        arr[index] = 0
                        arr.splice(index,1)
                        console.log(arr)
                        if(arr.length === 0){
                            alert('you are winner in cell, lets go one more time *)')
                            startCellGame()
                        }
                    }                

                })
            })

            tr.appendChild(td)
        }
        table.appendChild(tr)
    }


}