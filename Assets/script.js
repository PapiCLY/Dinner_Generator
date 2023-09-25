//globals
let food = ['Lasagna', 'Curry Chicken & Rice', 'Baked Ziti', 'Speghetti and ground Turkey']
const showDinner = document.querySelector('#dinnerTime')
const newDinner = document.querySelector('#addToList').value
const dinnerBtn = document.querySelector('#dinnerBtn').addEventListener('click', ()=>{
    showNewDinner();
})

showNewDinner = ()=>{
    const showDinner = document.querySelector('#dinnerTime')
    const randomItem = food[Math.floor(Math.random()*food.length)]
    console.log(randomItem)
}