//where const for event listeners will go, and all needed gloabl variables
const strGameBtn= document.querySelector('#start');
const feedPetBtn= document.querySelector('#feed');
const playfulPetBtn = document.querySelector('#playful');
const petRestBtn = document.querySelector('#sleepy');
const form = document.querySelector('#pet-name');
const img = document.querySelector('#images');
const dailyNeeds = 3;

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
    pet.age += .1
    pet.hunger += .25
    pet.play += .2
    pet.sleep += .2

    if(pet.sleep >= 10 || pet.hunger >= 10 || pet.play >= 10){
        img.src= '/Users/timcarrington/sei/projects/Tomagotchi-Game/giphy::2.gif';
        alert('You killed this one. Maybe try a house plant instead?')
        clearInterval(overallHealth)
    }
    showHealth();
}
//displays the increase and decrease of pet health markers
const showHealth = () => {
    document.querySelector('#hunger').textContent = pet.hunger.toFixed(2);
    document.querySelector('#play').textContent = pet.play.toFixed(2);
    document.querySelector('#sleep').textContent = pet.sleep.toFixed(2);
    document.querySelector('#age').textContent = pet.age;
}


const feedPet = () => {
    pet.hunger -= 1;
    img.src= '/Users/timcarrington/sei/projects/Tomagotchi-Game/hungry pig.webp'
 };

 function playfulPet(){
    pet.play -=1
    img.src= '/Users/timcarrington/sei/projects/Tomagotchi-Game/playing pig.gif'
 }
    
const petRest = () => {
    pet.sleep -= 1;
    img.src= '/Users/timcarrington/sei/projects/Tomagotchi-Game/sleepy pig.gif'
};

strGameBtn.addEventListener('click', startGame)
feedPetBtn.addEventListener('click', feedPet)
playfulPetBtn.addEventListener('click', playfulPet)
petRestBtn.addEventListener('click', petRest)

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const petName = document.createElement('h2');
    const input = document.querySelector('#text');
    petName.textContent=input.value;
    document.querySelector('ul').appendChild(petName)});