//globals
let food = ['Lasagna', 'Curry Chicken w/Rice', 'Baked Ziti', 'Speghetti and ground Turkey', 'Jerk Chicken w/ rice/peas']
const showDinner = document.querySelector('#dinnerTime')
let newDinner = document.querySelector('#addToList').value
const dinnerBtn = document.querySelector('#dinnerBtn').addEventListener('click', ()=>{
    showNewDinner();
})
const newDinnerBtn = document.querySelector('#newDinnerBtn').addEventListener('click', ()=>{
    newDinnerToEat()
})
const numsAndChars = /[^a-zA-Z0-9\s]/;


//Hamburger Menu
function menuButton(event){
    let x = document.getElementByid('myLinks');
    if(x.className === 'topNav'){
        x.className += 'responsive';
    } else{
        x.className = 'topNav';
    }
    event.preventDefault()
}

//function to show the random dinners
showNewDinner = ()=>{
    const showDinner = document.querySelector('#dinnerTime')
    const randomItem = food[Math.floor(Math.random()*food.length)]
    showDinner.textContent = randomItem
    showDinner.style.color='black'
    showDinner.style.fontFamily = 'Lobster, cursive;' 
}

//function that allows user to add a new dinner to the random dinners
newDinnerToEat = ()=>{
    const newDinnerInput = document.querySelector('#addToList')
    const newDinner = newDinnerInput.value.trim()
    if(newDinner === '' || numsAndChars.test(newDinner)){
        showDinner.textContent = 'Whoops! looks like you forgot to add a menu item or entered an invalid input.';
        showDinner.style.color = 'red'
        
    } else{
        food.push(newDinner);
        clearField();
        showDinner.innerHTML = `<span style="font-weight: bold;">${newDinner}</span> has been added to the menu!`;
        showDinner.style.color = 'green'
    }
}

//function to clear the input field after a new dinner idea has been submitted
clearField=()=>{
    const newDinnerInput = document.querySelector('#addToList')
    newDinnerInput.value = ''
    
}
