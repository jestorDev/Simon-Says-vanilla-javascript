class SimonSays {
    constructor() {
        this.hits = 0;
        this.rdmSelected = [];
        this.buttons = document.getElementById("buttonsContainer").children;
        this.addBtnEvents();
        this.game();
    }
    game() {
        this.showrdmSelectedSequence();
    }
    showrdmSelectedSequence() {
        this.rdmSelected.push(this.rdmButton());
        for (let i = 0; i < this.rdmSelected.length; i++)
            setTimeout(() => this.makeBtnGlow(this.rdmSelected[i]), 800 * i);
    }
    makeBtnGlow(number) {
        let btn = this.buttons.item(number);
        btn.classList.add('glow');
        setTimeout(() => btn.classList.remove('glow'), 500)
        console.log(number);
    }
    rdmButton() {
        return (Math.floor(Math.random() * 4));
    }
    addBtnEvents() {
        for (let i = 0; i < 4; i++)
            this.buttons.item(i).addEventListener('click', (event) => {
                if (i == this.rdmSelected[this.hits])this.hits++;
                else {
                    console.log("u lose")
                    this.userLose();
                }

                if (this.hits == this.rdmSelected.length){
                    this.hits = 0;
                    this.game();
                }
            });
    }
    isHit(number) {
        return number == this.rdmSelected[this.rdmSelected.length - this.hits - 1]
    }
    userLose(){
        for (let i = 0; i < 4; i++) {
            this.buttons.item(i).classList.add('dark');            
        }
    }
}
function randomColors() {
    let randomHue = Math.floor(Math.random() * 360);
    document.documentElement.style.setProperty('--hueNumber', randomHue);

}
randomColors();
let a = new SimonSays();
