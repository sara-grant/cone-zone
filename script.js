// containers
var flavorContainer = document.querySelector('.flavor-container');
var cherryContainer = document.querySelector('.cherry-container');
var toppingsContainer = document.querySelector('.toppings-container');

// flavor btns

var vanillaBtn = document.querySelector('.vanilla-btn');
var chocolateBtn = document.querySelector('.chocolate-btn');
var strawberryBtn = document.querySelector('.strawberry-btn');
var mintBtn = document.querySelector('.mint-btn');

// cherry btns

var cherryYes = document.querySelector('.yes-btn');
var cherryNo = document.querySelector('.no-btn');

// sprinkle btns

var sprinklesBtn = document.querySelector('.sprinkles-btn');
var chocolateDipBtn = document.querySelector('.chocolate-dip-btn');
var chocolateChunksBtn = document.querySelector('.chocolate-chunks-btn');

// cursor

var body = document.body;

// flavor event listeners 

vanillaBtn.addEventListener('click', () => {
    flavorContainer.innerHTML = '<img src="assets/vanilla-scoop.png">';
    body.style.cursor = 'url(assets/cursor-vanilla.png), auto';
});

chocolateBtn.addEventListener('click', () => {
    flavorContainer.innerHTML = '<img src="assets/chocolate-scoop.png">';
    body.style.cursor = 'url(assets/cursor-choc.png), auto';
});

strawberryBtn.addEventListener('click', () => {
    flavorContainer.innerHTML = '<img src="assets/strawberry-scoop.png">';
    body.style.cursor = 'url(assets/cursor-strawberry.png), auto';
});

mintBtn.addEventListener('click', () => {
    flavorContainer.innerHTML = '<img src="assets/mint-scoop.png">';
    body.style.cursor = 'url(assets/cursor-mint.png), auto';
});

// cherry event listeners

cherryYes.addEventListener('click', () => {
    cherryContainer.innerHTML = '<img src="assets/cherry.png">';

    console.log("yes this is working");
});

cherryNo.addEventListener('click', () => {
    cherryContainer.innerHTML = '';
});

// topping event listeners

sprinklesBtn.addEventListener('click', () => {
    toppingsContainer.innerHTML = '<img src="assets/sprinkles.png">';
});

chocolateDipBtn.addEventListener('click', () => {
    toppingsContainer.innerHTML = '<img src="assets/chocolate-dip.png">';
});

chocolateChunksBtn.addEventListener('click', () => {
    toppingsContainer.innerHTML = '<img src="assets/chocolate-chunks.png">';
});

// clear btn

var clearBtn = document.querySelector('.clear-btn');

clearBtn.addEventListener('click', () => {
    flavorContainer.innerHTML = '';
    toppingsContainer.innerHTML = '';
    cherryContainer.innerHTML = '';
    vanillaBtn.innerHTML = '<img src="assets/vanilla-btn.png">';
    chocolateBtn.innerHTML = '<img src="assets/chocolate-btn.png">';
    strawberryBtn.innerHTML = '<img src="assets/strawberry-btn.png">';
    mintBtn.innerHTML = '<img src="assets/mint-btn.png">';
});

// flavor btns active states

vanillaBtn.addEventListener('click', () => {
    vanillaBtn.innerHTML = '<img src="assets/vanilla-btn-active.png">';
    chocolateBtn.innerHTML = '<img src="assets/chocolate-btn.png">';
    strawberryBtn.innerHTML = '<img src="assets/strawberry-btn.png">';
    mintBtn.innerHTML = '<img src="assets/mint-btn.png">';
});

chocolateBtn.addEventListener('click', () => {
    chocolateBtn.innerHTML = '<img src="assets/chocolate-btn-active.png">';
    vanillaBtn.innerHTML = '<img src="assets/vanilla-btn.png">';
    strawberryBtn.innerHTML = '<img src="assets/strawberry-btn.png">';
    mintBtn.innerHTML = '<img src="assets/mint-btn.png">';
});

strawberryBtn.addEventListener('click', () => {
    strawberryBtn.innerHTML = '<img src="assets/strawberry-btn-active.png">';
    vanillaBtn.innerHTML = '<img src="assets/vanilla-btn.png">';
    chocolateBtn.innerHTML = '<img src="assets/chocolate-btn.png">';
    mintBtn.innerHTML = '<img src="assets/mint-btn.png">';
});

mintBtn.addEventListener('click', () => {
    mintBtn.innerHTML = '<img src="assets/mint-btn-active.png">';
    vanillaBtn.innerHTML = '<img src="assets/vanilla-btn.png">';
    chocolateBtn.innerHTML = '<img src="assets/chocolate-btn.png">';
    strawberryBtn.innerHTML = '<img src="assets/strawberry-btn.png">';
});

// topping btn active states 

sprinklesBtn.addEventListener('click', () => {
    sprinklesBtn.innerHTML = '<img src="assets/sprinkles-btn-active.png">';
    chocolateDipBtn.innerHTML = '<img src="assets/chocolate-dip-btn.png">';
    chocolateChunksBtn.innerHTML = '<img src="assets/chocolate-chunks-btn.png">';

});

chocolateDipBtn.addEventListener('click', () => {
    chocolateDipBtn.innerHTML = '<img src="assets/chocolate-dip-btn-active.png">';
    sprinklesBtn.innerHTML = '<img src="assets/sprinkles-btn.png">';
    chocolateChunksBtn.innerHTML = '<img src="assets/chocolate-chunks-btn.png">';
});

chocolateChunksBtn.addEventListener('click', () => {
    chocolateChunksBtn.innerHTML = '<img src="assets/chocolate-chunks-btn-active.png">';
    chocolateDipBtn.innerHTML = '<img src="assets/chocolate-dip-btn.png">';
    sprinklesBtn.innerHTML = '<img src="assets/sprinkles-btn.png">';
});

// cherry btn active states

cherryYes.addEventListener('click', () => {
    cherryYes.innerHTML = '<img src ="assets/yes-btn-active.png">';
    cherryNo.innerHTML = '<img src ="assets/no-btn.png">';
});

cherryNo.addEventListener('click', () => {
    cherryNo.innerHTML = '<img src ="assets/no-btn-active.png">';
    cherryYes.innerHTML = '<img src ="assets/yes-btn.png">';
});

// finish window

var finishBtn = document.querySelector('.finish-btn');
var finishWindow = document.querySelector('.finish-window');
var titleImg = document.querySelector('.title');
var homeBtn = document.querySelector('.home-btn');
var makeAgainBtn = document.querySelector('.make-another-btn');

finishBtn.addEventListener('click', () => {
    finishWindow.classList.add("appear");
    titleImg.style.display = 'none';
    homeBtn.classList.add("appear");
    makeAgainBtn.classList.add("appear");
    body.style.cursor = 'url(assets/cursor.png), auto';

});