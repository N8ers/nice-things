let niceThingsList = [
    "nice", "wow", "way to be!", ":)", "lookin good!", "wowie-no!", "bae-beano", "that's a rock fact!", "oh my!", "I will take an attention please!", "you are cute!", "I'll continue to add to this list, so don't worry if you see the same nice thing :)", "i hope you're day is extra cool beans", "baby-beano she is a baby beano!", "let's move to Seattle and start a salsa company!", "did you know that you are cute?"];

// let niceThingsList = ["one", "two"];

let lastIndex;
let randomIndex;

const clickMeHandler = document.getElementById("clickMeHandler");

let randomIndexGenerator = () => {
  randomIndex = Math.floor(Math.random() * niceThingsList.length)
  
  if(randomIndex !== lastIndex) {
    lastIndex = randomIndex
  } else {
    randomIndexGenerator()
  }
}

const randomizer = () => {
  randomIndexGenerator()
  let randomNiceThing = niceThingsList[randomIndex]  
  let niceThing = document.getElementById("niceThing")
  niceThing.innerHTML = randomNiceThing
}

clickMeHandler.addEventListener("click", randomizer);
