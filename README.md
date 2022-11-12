# Tomagotchi-Game

## Overview

## Creating a Tomagotchi Game with:
-Html, 
-CSS

-JavaScript
```
let variable = 'test'



Wireframe: The game is fairly simply laid out. at the Center of the heading in the first row, I placed a header. underneath that header are the game instructions.

Then a row beneath that I have one column that includes a text input for the player to name their pet.

In the column to the right of the name input, there is a box that displays the pets needs, and the numbers corrosponding with those needs/attributes. (hunger, sleep, play, and age)

in the column to the right to that is a gif, with a picture of the pet.

In the third row, i placed two columns, one is empty, and the second holds all of the buttons for the user to start game, feed, play, lights out(to rest their pet)

App Functionality:

The functionality is fairly simple. 

-There are many constants set at the top that directly tie to DOM elements. To change both the stats of the pet, and to provide functionality for the buttons

-Beneath that will be the pet which is an object, and the key values inside the pet are the timer based components of the game that the player must watch out for and react to. (hunger, sleep, play, and age)

-I created a function called "start game" which is called when the player clicks the 'start game' button. In that function the actual value of the keys in the pet object are set. then it calls the function that changes the values with each section, as well as the function that displays the Pet's values to the player.
 
 - the wearAndTear function increments, the age, hunger, play, and sleep, of the pet and has the end game conditional set in it. stating that if the player allows any of the pet's needs to get to 10 then the pet is dead. this function also toggles the image of the pet, to a skull indicating to the player the pet is dead. If that condition is met, clearInterval function will be called and it will stop this function. This function is called with the start game function.

 -I created a function to displace the values to the user. Withing the showHealth function, there are dom elements set to the object values they correspond to. This function is called with the start game fuction

 - Below those, i wrote three functions to correspond with the other three buttons for the user. feedPet, playPet, petRest. These all decrease the raising levels of the pets, needs when the player clicks the corresponding buttons these funcitons are associated with. 

 -Bottom of the file contains all of the event listeners. There are four buttons, and one input field.


 Triumphs: The main triumph was when i figured out the logic i would use to implement the game. At first I had considered creating one large pet object, and within it storing different functions and conditionals. When i initially wrote that out, i had trouble with the clearInterval() function. I decided to step back and just break it down piece by piece and I feel like the code is much cleaner and more readable looking than with the first draft. 

 The logic came fairly easy on this one for me due to its simplicity, though i had yet to use toFixed, or toggled images in js before. So i had to look those things up and felt very satisfied when i sucessfully implemented those. 

 I had a lot of fun with the functional side of the project! I spent a while with pen and paper, and then trying to test different ways to approach this, and was very happy when I found the way that worked best for me

 The HTML and CSS are very simple but took me the longest, because i am least familiar with implementing these. I eventually figured out how to simply use the grid feature in css, and used that as a wireframing and layout for the page. 


