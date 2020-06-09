
SimonSays(document.getElementById("buttonsContainer"));

function SimonSays(container) {
    let selected = [2, 3, 0]
    for (let i = 0; i < selected.length; i++) {
        setTimeout(() => makeBtnGlow(selected[i], container), 800);
    }
}
function makeBtnGlow(number, container) {
    let btn = container.children.item(number);
    btn.classList.add('glow');
    setTimeout(() => btn.classList.remove('glow'), 500)
    console.log(number);
}

function rdmButton() {
    return (Math.floor(Math.random() * 4));
}

function randomColors(){
    let randomHue = Math.floor(Math.random() * 360);
    document.documentElement.style.setProperty('--hueNumber', randomHue);
    
}