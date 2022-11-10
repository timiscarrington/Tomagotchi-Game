//where const for event listeners will go, and all needed gloabl variables
const strGameBtn= document.querySelector('#start')


// pet object 
const pet = {
    hunger: 0,
    play: 0,
    sleep: 0
}

//Start Game Function  will set all of the stats for pet at start of game, initialize countdown function, and a function that displays the changing health markers

const startGame = () => {
    pet.hunger=10,
    pet.play = 10,
    pet.sleep = 10,
    overallHealth = setInterval(wearAndTear, 1000);
    showHealth()
}
//function that deducts percentage from different health markers of pet
const wearAndTear = () => {
    pet.hunger -= 1
    pet.play -= 1
    pet.sleep -= 1
    showHealth();
    // if(pet.hunger <= 0 || pet.play <= 0 || pet.sleep <= 0){
        
    // }
}
//displays the increase and decrease of pet health markers
const showHealth = () => {
    document.querySelector('#hunger').innerHTML = pet.hunger;
    document.querySelector('#play').innerHTML = pet.play;
    document.querySelector('#sleep').innerHTML = pet.sleep;
}


strGameBtn.addEventListener('click', startGame)