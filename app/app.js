// Version 2 requires 2 cats, each having a name and a score.
// I think I'm going to objectify my cats!

function Kat(name){
    this.name= name,
    this.score= 0;
    this.pic='/app/images/hairless.jpg'
    this.click = function(){
        return ++this.score;
    }

};

const body = document.querySelector('.main');

let kats = [];
kats.push(kat1 = new Kat('whiskers'));
kats.push(kat2 = new Kat('polly'));

// loop through kats. 
kats.forEach(function(kat){

    // create individual Kat Div
    var thisKatDiv = document.createElement('div');
    
    // create HTML using String Template
    var katHTML = 
   `<div class="katName">${kat.name}</div>
    <div class="katScore">${kat.score}</div>
    <div class="katPic"><img src="${kat.pic}" alt="a kat pic"></img></div>`;

    
    thisKatDiv.innerHTML= katHTML;

    body.appendChild(thisKatDiv);
});

