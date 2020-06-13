class SimonSays {
  constructor() {
    this.selectedNumbers = [];
    this.buttons = document.getElementById("buttonsContainer").children;
    this.addButtonEvents();
    this.game();
  }
  game() {
    this.hits = 0;
    //new random value to queue
    this.selectedNumbers.push(this.randomButtonNumber());
    //show actual sequence
    this.showSelectedNumbers();
  }
  randomButtonNumber() {
    return Math.floor(Math.random() * this.buttons.length);
  }
  showSelectedNumbers() {
    this.selectedNumbers.forEach((number, index) => {
      setTimeout(() => this.makeBtnGlow(number), 900 * index);
    });
  }
  makeBtnGlow(number) {
    this.buttons[number].classList.add("glow"); //turn on
    setTimeout(() => this.buttons[number].classList.remove("glow"), 700); //turn off after 700
  }
  addButtonEvents() {
    for (let i = 0; i < this.buttons.length; i++)
      this.buttons[i].addEventListener("click", (event) => {
        // clicked == hit(th) element ?
        if (i == this.selectedNumbers[this.hits]) this.hits++;
        else this.userLose();
        // player arrive to last element
        // -> new game (same sequence + one)
        if (this.hits == this.selectedNumbers.length) this.game();
      });
  }
  userLose() {
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].classList.add("dark");
    }
  }
}

function randomColors() {
  //Random hue 
  let randomHue = Math.floor(Math.random() * 360);
  document.documentElement.style.setProperty("--hueNumber", randomHue);
}
randomColors();
let a = new SimonSays();
