for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", playClick);

  function playClick() {
    // var audio = new Audio("sounds/crash.mp3");
    // audio.play();
    var butInnerHTML = this.innerHTML;
    //console.log(butInnerHTML);
    playSound(butInnerHTML);
    buttonAnimation(butInnerHTML);

  }

}
document.addEventListener("keydown", playKey);

function playKey(e) {
  var key = e.key;
  playSound(key);
  buttonAnimation(e.key);
}

function playSound(letter) {
  switch (letter) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      //buttonAnimation(letter);
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      //buttonAnimation(letter);
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      //  buttonAnimation(letter);
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      //  buttonAnimation(letter);
      break;
    case "j":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      //buttonAnimation(letter);
      break;
    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      //buttonAnimation(letter);
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      //buttonAnimation(letter);
      break;

    default:
      console.log(letter);
  }
}

  function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
