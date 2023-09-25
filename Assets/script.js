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


//function to show the random dinners
showNewDinner = ()=>{
    const showDinner = document.querySelector('#dinnerTime')
    const randomItem = food[Math.floor(Math.random()*food.length)]
    showDinner.textContent = randomItem
}

//function that allows user to add a new dinner to the random dinners
newDinnerToEat = ()=>{
    const newDinnerInput = document.querySelector('#addToList')
    const newDinner = newDinnerInput.value.trim()
    if(newDinner === ''){
        showDinner.textContent = 'Please enter a valid input!';
    } else{
        food.push(newDinner);
        clearField();
    }
}

//function to clear the input field after a new dinner idea has been submitted
clearField=()=>{
    const newDinnerInput = document.querySelector('#addToList')
    newDinnerInput.value = ''
    
}