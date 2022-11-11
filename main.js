//where const for event listeners will go, and all needed gloabl variables
const strGameBtn= document.querySelector('#start');
const feedPetBtn= document.querySelector('#feed');
const playfulPetBtn = document.querySelector('#play');
const petRestBtn = document.querySelector('#sleep');
const form = document.querySelector("#form");
// pet object 

const pet = {
    hunger: 0,
    play: 0,
    sleep: 0,
    age: 0
}

//Start Game Function  will set all of the stats for pet at start of game, initialize countdown function, and a function that displays the changing health markers

const startGame = () => {
    pet.age= 1
    pet.hunger= 1
    pet.play = 1
    pet.sleep = 1
    overallHealth = setInterval(wearAndTear, 1000);
    showHealth()
}
//function that deducts percentage from different health markers of pet
const wearAndTear = () => {
    pet.age += .5
    pet.hunger += .5
    pet.play += .5
    pet.sleep += .5

    if(pet.sleep >= 10 || pet.hunger >= 10 || pet.hunger >= 10){
        clearInterval(overallHealth)
        alert('You killed this one. Maybe try a house plant instead?')
    }
    showHealth();
}
//displays the increase and decrease of pet health markers
const showHealth = () => {
    document.querySelector('#hunger').textContent = pet.hunger;
    document.querySelector('#play').textContent = pet.play;
    document.querySelector('#sleep').textContent = pet.sleep;
    document.querySelector('#age').textContent = pet.age;
}


const feedPet = () => {
    pet.hunger -= 1
}
const playfulPet = () => {
    pet.play -= 1
}
const petRest = () => {
    pet.sleep -= 1
}

strGameBtn.addEventListener('click', startGame);
feedPetBtn.addEventListener('click', feedPet);
playfulPetBtn.addEventListener('click', playfulPet);
petRestBtn.addEventListener('click', petRest);
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const li = document.createElement('li');
    const input =document.querySelector('#text');
    li.textContent=input.value;
    document.querySelector('ul').appendChild(li);