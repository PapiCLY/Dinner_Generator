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
let url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=${newDinner}` 

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
// function menuButton(event){
//     let x = document.getElementByid('myLinks');
//     if(x.className === 'topNav'){
//         x.className += 'responsive';
//     } else{
//         x.className = 'topNav';
//     }
//     event.preventDefault()
// }

//function to show the random dinners
showNewDinner = ()=>{
    const showDinner = document.querySelector('#dinnerTime')
    const randomItem = food[Math.floor(Math.random()*food.length)]
    showDinner.textContent = randomItem
    showDinner.style.color='black'
    showDinner.style.fontFamily = 'Lobster, cursive;' 
}

// Load the dinner history from local storage when the page loads
window.addEventListener('load', () => {
    const history = JSON.parse(localStorage.getItem('dinnerHistory')) || [];
    const historyContainer = document.querySelector('#historyContainer');
    for (const dinner of history) {
      const newButton = document.createElement('button');
      newButton.textContent = dinner;
      newButton.addEventListener('click', () => {
        showDinner.textContent = dinner;
        showDinner.style.color = 'black';
        showDinner.style.fontFamily = 'Lobster, cursive;';
      });
      historyContainer.appendChild(newButton);
    }
  });
  
//function that allows user to add a new dinner to the random dinners
newDinnerToEat = () => {
    const newDinnerInput = document.querySelector('#addToList');
    const newDinner = newDinnerInput.value.trim();
    if (newDinner === '' || numsAndChars.test(newDinner)) {
      showDinner.textContent = 'Whoops! looks like you forgot to add a menu item or entered an invalid input.';
      showDinner.style.color = 'red';
    } else {
      food.push(newDinner);
      clearField();
      showDinner.innerHTML = `<span style="font-weight: bold;">${newDinner}</span> has been added to the menu!`;
      showDinner.style.color = 'green';
  
      // Store the new dinner item in local storage
      let history = JSON.parse(localStorage.getItem('dinnerHistory')) || [];
      history.push(newDinner);
      if (history.length > 7) {
        history.shift(); // Remove the oldest item from the history array
      }
      localStorage.setItem('dinnerHistory', JSON.stringify(history));

      // Append the new dinner item as a button to the DOM
      const historyContainer = document.querySelector('#historyContainer');
      historyContainer.innerHTML = ''; // Clear the history container
      for (const dinner of history) {
        const newButton = document.createElement('button');
        newButton.textContent = dinner;
        newButton.addEventListener('click', () => {
          showDinner.textContent = dinner;
          showDinner.style.color = 'black';
          showDinner.style.fontFamily = 'Lobster, cursive;';
        });
        historyContainer.appendChild(newButton);
      }
    }
    getRecipe()
  };
//     if(history.length <=7){
//         const newButton = document.createElement('button');
//         newButton.textContent = newDinner;
//         newButton.addEventListener('click', () => {
//           showDinner.textContent = newDinner;
//           showDinner.style.color = 'black';
//           showDinner.style.fontFamily = 'Lobster, cursive;';
//         });
//         historyContainer.appendChild(newButton);
//         }
//     }
   
// }

//function to clear the input field after a new dinner idea has been submitted
clearField=()=>{
    const newDinnerInput = document.querySelector('#addToList')
    newDinnerInput.value = ''
    
}

//API Call
getRecipe = ()=>{
    fetch(url, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8959ff9965msh4479dc11ddcddc4p1bcd30jsndfe8e2947c47',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    })
    .then(res => res.json()) //parse response as JSON
    
    .then(data =>{
    
    console.log(data)
    
    })
    
    .catch(err => {
    
    console.log(`error ${err}`)
    
    })
}
