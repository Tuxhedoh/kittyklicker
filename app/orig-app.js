// Version 2 requires 2 cats, each having a name and a score.
// I think I'm going to objectify my cats!

function Kat(name,picture){
    this.name= name,
    this.score= 0;
    this.pic='app/images/'+picture;
    this.click = function(){
        return ++this.score;
    }


};

const body = document.querySelector('.main'),
      katList = document.querySelector('.katList'),
      katShow = document.querySelector('.katShow');

let kats = [];
kats.push(kat1 = new Kat('whiskers','ugly-kitten1.jpg'));
kats.push(kat2 = new Kat('polly','hairless.jpg'));
kats.push(kat3 = new Kat('Franklin','hairless.jpg'));
kats.push(kat4 = new Kat('Hey-Zeus','hairless.jpg'));
kats.push(kat5 = new Kat('Twodules','hairless.jpg'));




var thisKat;
// loop through kats. 
kats.forEach(function(kat){
    thisKat = kat;
    // create individual Kat Div
    var thisKatDiv = document.createElement('div');
    
    // create HTML using String Template
    var katHTML = 
   `<div class="katName">${kat.name}</div>
    <div id="${kat.name}score" class="katScore">${kat.score}</div>
    <div><img src="${kat.pic}" alt="a kat pic" class="katPic"></img></div>`;
    
    thisKatDiv.innerHTML= katHTML;
    // var katScore = document.querySelector('')
    katShow.appendChild(thisKatDiv);

    thisKatDiv.addEventListener('click', function(){
        let katScoreString = "#"+kat.name+"score";
        let katScore = document.querySelector(katScoreString);
        kat.click();
        katScore.innerText = kat.score;
        console.log(katScore.innerText);
    });
    
    });


// var thisKat;
// // Event Listener on Kat images
// katPics = document.querySelectorAll('.katPic');
// katPics.forEach(function(kat){
//     kat.addEventListener('click',function(e){
        
//         var katName = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
//         thisKat = kats.filter(function(kat){
//             return kat.name === katName;
//         });
//         clickedKat(thisKat[0]);
        
//     })
// })

function clickedKat(kat){
    katScoreString = "#"+kat.name+"score";
    katScore = document.querySelector(katScoreString);
    kat.click();
    katScore.innerText = kat.score;
    console.log(katScore.innerText);
}