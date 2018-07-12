const myScore = document.querySelector('#theScore'),
    myImage = document.querySelector('#kitty1');
let currentScore = 0;

myImage.addEventListener('click', katKlicked);

function katKlicked(){
    currentScore++;
    myScore.innerText = currentScore;    
}

