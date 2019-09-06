// let niceThingsList = ["nice", "wow", "way to be!", ":)", "lookin good!", "wowie-no!", "bae-beano", "that's a rock fact!", "oh my!", "I will take an attention please!", "this is going to be an example of a longer string of text - this won't be in production but I wanna see if it works well here in dev!"];

let niceThingsList = ["one", "two"];

let lastIndex;
let randomIndex;

const clickMeHandler = document.getElementById("clickMeHandler");

let randomIndexGenerator = () => {
  let listLength = niceThingsList.length
  randomIndex = Math.floor(Math.random() * listLength)
  
  if(randomIndex == lastIndex) {
    
  }
  
}

let preventRandomDuplication = () => {
  if(randomIndex == lastIndex) {
    console.log('repeat!')
  } else if (randomIndex != lastIndex) {
    console.log('new index!')
  }
}

const randomizer = () => {
  randomIndex = randomIndexGenerator()
  
  console.log(randomIndex)
  
  let randomNiceThing = niceThingsList[randomIndex]  
  let niceThing = document.getElementById("niceThing")
  niceThing.innerHTML = randomNiceThing
}

clickMeHandler.addEventListener("click", randomizer);
