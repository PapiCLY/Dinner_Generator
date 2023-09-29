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
let about = document.getElementById('aboutModal')
let aboutBtn = document.getElementById('abtBtn')
let aboutSpan = document.querySelector('.abtClose');
let why = document.getElementById('whyModal')
let whyBtn = document.getElementById('whyBtn')
let whySpan = document.querySelector('.whyClose')
let contact = document.getElementById('contactModal')
let contactBtn = document.getElementById('contactBtn')
let contactSpan = document.querySelector('.contactClose')

//opens modal
aboutBtn.onclick = function(){
    about.style.display = 'block';
}

whyBtn.onclick = function(){
    why.style.display = 'block';
}

contactBtn.onclick = function(){
    contact.style.display = 'block'
}
//close modal
aboutSpan.onclick = function(){
    about.style.display = 'none';
}

whySpan.onclick = function(){
    why.style.display = 'none';
}

contactSpan.onclick = function(){
    contact.style.display = 'none';
}

//click anywhere to close modal
window.onclick = function(event){
    if(event.target === about || event.target === why || event.target === contact){
        about.style.display = 'none'
        why.style.display = 'none'
        contact.style.display = 'none'
    }
}



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
