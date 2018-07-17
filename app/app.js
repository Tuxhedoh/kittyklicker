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
kats.push(kat1 = new Kat('Whiskers','ugly-kitten1.jpg'));
kats.push(kat2 = new Kat('Polly','hairless.jpg'));
kats.push(kat3 = new Kat('Franklin','hairless.jpg'));
kats.push(kat4 = new Kat('Hey-Zeus','hairless.jpg'));
kats.push(kat5 = new Kat('Twodulls','hairless.jpg'));

// loop through kats and build list of names?
kats.forEach(function(kat){
    katNameList(kat);
});

// Event Listener on Kat Lists
let listofKats = document.querySelectorAll('.katList div');

listofKats.forEach(function (element) {
    element.addEventListener('click', function (event) {
        clickedKat = kats.find( kat => kat.name === event.target.innerText);
        showKat(clickedKat);
    });
});


function katNameList(kat){
    let katName = document.createElement('div'),
        katNameHtml = `${kat.name}`;
    katName.innerHTML = katNameHtml;
    katList.appendChild(katName);
}


function showKat(kat){
    
    let katPage = document.createElement('div'),
        katPageHtml = 
       `<div class="katName">${kat.name}</div>
        <div id="${kat.name}score" class="katScore">${kat.score}</div>
        <div><img src="${kat.pic}" alt="a kat pic" class="katPic"></img></div>`;
    
    katPage.innerHTML = katPageHtml;
    // Clears Existing Display
    while(katShow.firstChild){
        katShow.removeChild(katShow.firstChild);
    }
    katShow.appendChild(katPage);
    katEvent();
}

function katEvent(){
    let currentKatPic = document.querySelector('img'),
        currentKatName = document.querySelector('.katName').innerText,
        currentKat = kats.find( kat => kat.name === currentKatName);
        currentKatScore = document.querySelector('.katScore');
    currentKatPic.addEventListener('click',function(e){
        currentKat.click();
        currentKatScore.innerText = currentKat.score
    });
}