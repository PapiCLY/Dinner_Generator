//globals
let food = ['Lasagna', 'Curry Chicken & Rice', 'Baked Ziti', 'Speghetti and ground Turkey']
const showDinner = document.querySelector('#dinnerTime')
let newDinner = document.querySelector('#addToList').value
const dinnerBtn = document.querySelector('#dinnerBtn').addEventListener('click', ()=>{
    showNewDinner();
})
const newDinnerBtn = document.querySelector('#newDinnerBtn').addEventListener('click', ()=>{
    newDinnerToEat()
})

showNewDinner = ()=>{
    const showDinner = document.querySelector('#dinnerTime')
    const randomItem = food[Math.floor(Math.random()*food.length)]
    showDinner.textContent = randomItem
}

newDinnerToEat = ()=>{
    let newDinnerInput = document.querySelector('#addToList')
    const newDinner = newDinnerInput.value
    food.push(newDinner)
    clearField()
    
    // if(){

    // }
}

clearField=()=>{
    const newDinnerInput = document.querySelector('#addToList')
    newDinnerInput.value = ''
    
}