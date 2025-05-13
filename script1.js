// containers
let flavorContainer = document.querySelector('.flavor-container');
let cherryContainer = document.querySelector('.cherry-container');
let toppingsContainer = document.querySelector('.toppings-container');

// flavor btns

let vanillaBtn = document.querySelector('.vanilla-btn');
let chocolateBtn = document.querySelector('.chocolate-btn');
let strawberryBtn = document.querySelector('.strawberry-btn');
let mintBtn = document.querySelector('.mint-btn');

// cherry btns

let cherryYes = document.querySelector('.yes-btn');
let cherryNo = document.querySelector('.no-btn');

// sprinkle btns

let sprinklesBtn = document.querySelector('.sprinkles-btn');
let chocolateDipBtn = document.querySelector('.chocolate-dip-btn');
let chocolateChunksBtn = document.querySelector('.chocolate-chunks-btn');

// cursor

let body = document.body;

// clear btn

let clearBtn = document.querySelector('.clear-btn');

clearBtn.addEventListener('click', () => {
    flavorContainer.innerHTML = '';
    toppingsContainer.innerHTML = '';
    cherryContainer.innerHTML = '';
    vanillaBtn.innerHTML = '<img src="assets/vanilla-btn.png">';
    chocolateBtn.innerHTML = '<img src="assets/chocolate-btn.png">';
    strawberryBtn.innerHTML = '<img src="assets/strawberry-btn.png">';
    mintBtn.innerHTML = '<img src="assets/mint-btn.png">';
});

// flavors

// flavor booleans

let vanilla = false;
let chocolate = false;
let strawberry = false;
let mint = false;

let flavorSelectedArray = [
    vanilla,
    chocolate,
    strawberry,
    mint
]

vanillaBtn.addEventListener('click', chooseVanilla);

function chooseVanilla() {
    flavorContainer.innerHTML = '<img src="assets/vanilla-scoop.png">';
    body.style.cursor = 'url(assets/cursor-vanilla.png), auto';
    vanillaBtn.innerHTML = '<img src="assets/vanilla-btn-active.png">';
    chocolateBtn.innerHTML = '<img src="assets/chocolate-btn.png">';
    strawberryBtn.innerHTML = '<img src="assets/strawberry-btn.png">';
    mintBtn.innerHTML = '<img src="assets/mint-btn.png">';
    vanilla = true;
    chocolate = false;
    strawberry = false;
    mint = false;
    console.log('vanilla has been chosen');
}

chocolateBtn.addEventListener('click', chooseChocolate);

function chooseChocolate() {
    flavorContainer.innerHTML = '<img src="assets/chocolate-scoop.png">';
    body.style.cursor = 'url(assets/cursor-choc.png), auto';
    chocolateBtn.innerHTML = '<img src="assets/chocolate-btn-active.png">';
    vanillaBtn.innerHTML = '<img src="assets/vanilla-btn.png">';
    strawberryBtn.innerHTML = '<img src="assets/strawberry-btn.png">';
    mintBtn.innerHTML = '<img src="assets/mint-btn.png">';
    chocolate = true;
    vanilla = false;
    strawberry = false;
    mint = false;
}

strawberryBtn.addEventListener('click', chooseStrawberry);

function chooseStrawberry() {
    flavorContainer.innerHTML = '<img src="assets/strawberry-scoop.png">';
    body.style.cursor = 'url(assets/cursor-strawberry.png), auto';
    strawberryBtn.innerHTML = '<img src="assets/strawberry-btn-active.png">';
    vanillaBtn.innerHTML = '<img src="assets/vanilla-btn.png">';
    chocolateBtn.innerHTML = '<img src="assets/chocolate-btn.png">';
    mintBtn.innerHTML = '<img src="assets/mint-btn.png">';
    strawberry = true;
    vanilla = false;
    chocolate = false;
    mint = false;
}

mintBtn.addEventListener('click', chooseMint)

function chooseMint() {
    flavorContainer.innerHTML = '<img src="assets/mint-scoop.png">';
    body.style.cursor = 'url(assets/cursor-mint.png), auto';
    mintBtn.innerHTML = '<img src="assets/mint-btn-active.png">';
    vanillaBtn.innerHTML = '<img src="assets/vanilla-btn.png">';
    chocolateBtn.innerHTML = '<img src="assets/chocolate-btn.png">';
    strawberryBtn.innerHTML = '<img src="assets/strawberry-btn.png">';
    mint = true;
    vanilla = false;
    chocolate = false;
    strawberry = false;
}

// toppings 

let sprinkles = false;
let chocoDip = false;
let chocoChunks = false;

sprinklesBtn.addEventListener('click', () => {
    toppingsContainer.innerHTML = '<img src="assets/sprinkles.png">';
    sprinklesBtn.innerHTML = '<img src="assets/sprinkles-btn-active.png">';
    chocolateDipBtn.innerHTML = '<img src="assets/chocolate-dip-btn.png">';
    chocolateChunksBtn.innerHTML = '<img src="assets/chocolate-chunks-btn.png">';
    sprinkles = true;
    chocoDip = false;
    chocoChunks = false;

});

chocolateDipBtn.addEventListener('click', () => {
    toppingsContainer.innerHTML = '<img src="assets/chocolate-dip.png">';
    chocolateDipBtn.innerHTML = '<img src="assets/chocolate-dip-btn-active.png">';
    sprinklesBtn.innerHTML = '<img src="assets/sprinkles-btn.png">';
    chocolateChunksBtn.innerHTML = '<img src="assets/chocolate-chunks-btn.png">';
    sprinkles = false;
    chocoDip = true;
    chocoChunks = false;
});

chocolateChunksBtn.addEventListener('click', () => {
    toppingsContainer.innerHTML = '<img src="assets/chocolate-chunks.png">';
    chocolateChunksBtn.innerHTML = '<img src="assets/chocolate-chunks-btn-active.png">';
    chocolateDipBtn.innerHTML = '<img src="assets/chocolate-dip-btn.png">';
    sprinklesBtn.innerHTML = '<img src="assets/sprinkles-btn.png">';
    sprinkles = false;
    chocoDip = false;
    chocoChunks = true;
});

// cherry
let cherry2 = false;

cherryYes.addEventListener('click', () => {
    cherryContainer.innerHTML = '<img src="assets/cherry.png">'
    cherryYes.innerHTML = '<img src ="assets/yes-btn-active.png">';
    cherryNo.innerHTML = '<img src ="assets/no-btn.png">';
    cherry2 = true;
});

cherryNo.addEventListener('click', () => {
    cherryContainer.innerHTML = '';
    cherryNo.innerHTML = '<img src ="assets/no-btn-active.png">';
    cherryYes.innerHTML = '<img src ="assets/yes-btn.png">';
    cherry2 = false;
});

// finish window

let finishBtn = document.querySelector('.finish-btn');
let finishWindow = document.querySelector('.finish-window');
let titleImg = document.querySelector('.title');
let homeBtn = document.querySelector('.home-btn');
let makeAgainBtn = document.querySelector('.make-another-btn');

finishBtn.addEventListener('click', finishBtnFunc);

function finishBtnFunc() {
    finishWindow.classList.add("appear");
    titleImg.style.display = 'none';
    // homeBtn.classList.add("appear");
    // makeAgainBtn.classList.add("appear");
    body.style.cursor = 'url(assets/cursor.png), auto';
    cover.style.display = "block";
    orderMenu.classList.remove('appear');
    timer = false;
    checkFlavor()
    toppingCheck()
    cherryCheck()
    accuracy()
}

// timer 1min

// const startingTime1 = 1;
// let time1 = startingTime1 * 60;

// const timerElm = document.querySelector('.timer');

// setInterval(updateTimer, 1000);

// function updateTimer() {
//     const minutes = Math.floor(time1/60);
//     let seconds = time1 % 60;
    
//     seconds = seconds < 10 ? '0' + seconds : seconds;

//     timerElm.innerHTML = `${minutes}:${seconds}`;
//     time1--;
//     time1 = time1 < 0 ? 0 : time1;
// }

// timer 15sec

const startingTime15 = 10;
let time15 = startingTime15;

const timerElm = document.querySelector('.timer');
timer = true
setInterval(updateTimer, 1000);

function updateTimer() {
    if (timer){
    let seconds = time15 % 60;
    
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerElm.innerHTML = `0:${seconds}`;

    time15--;
    time15 = time15 < 0 ? 0 : time15;
    }

    if(time15 == 1) {
        setTimeout(timerEnd, 2000)
    }
}

function timerEnd() {
    finishBtnFunc()
}

// tutorial popup

let beginBtn = document.querySelector('.beginBtn');
let tutorialPopup = document.querySelector('.tutorial');

window.addEventListener('load', tutorialAppear);
beginBtn.addEventListener('click', tutorialBye);

function tutorialAppear() {
    tutorialPopup.classList.add('appear');
    cover.style.display = "block";
    timer = false;
}
function tutorialBye() {
    tutorialPopup.classList.remove('appear');
    cover.style.display = "none";
    timer = true;
    spacePause()
    enterKey()
}

// space bar and esc keystrokes

function spacePause() {
document.addEventListener('keydown', (ev) => {
    if (ev.key == " " || ev.key == "Escape") {
        pauseMenuAppear();
    }
})
}

let enterKeystroke = false;

function enterKey() {
    document.addEventListener('keydown', (ev) => {
        if (ev.key == "Enter" && enterKeystroke==false) {
            orderAppear();
            enterKey2()
            enterKeystroke = true;
        }
    })
}

function enterKey2() {
    console.log(enterKeystroke);
    
    document.addEventListener('keydown', (ev) => {
        if (ev.key == "Enter" && enterKeystroke==true) {
            exitMenuBye();
            enterKey()
            enterKeystroke = false;
        }
    })
    
} 



// tutorial from pause menu
let tutorialBtn = document.querySelector('.tutorial-btn');
let menuTutorial = document.querySelector('#tutorialMenu');
let tutorialBackBtn = document.querySelector('.tutBack');

tutorialBtn.addEventListener('click', ()=>{
    menuTutorial.classList.add('appear');
})

tutorialBackBtn.addEventListener('click', ()=>{
    menuTutorial.classList.remove('appear');
})

// pause menu
let pauseMenu = document.querySelector('.pause-menu');
let cover = document.querySelector('.cover');
let unpauseBtn = document.querySelector('.unpause');
let pauseBtn = document.querySelector('.pause');
// pause timer

pauseBtn.addEventListener("click", pauseMenuAppear);

function pauseMenuAppear() {
    timer = false;
    pauseMenu.classList.add('appear');
    cover.style.display = "block";
    unpauseBtn.style.display = "block";
}


unpauseBtn.addEventListener("click", () => {
    console.log("unpause");
    timer = true;
    pauseMenu.classList.remove('appear');
    cover.style.display = "none";
    unpauseBtn.style.display = "none";
})

// order popup
let orderMenu = document.querySelector('.order');
let seeOrder = document.querySelector('.seeOrderBtn');
let yesExit = false;

seeOrder.addEventListener('click', orderAppear);

function orderAppear() {
    orderMenu.classList.add('appear');
    cover.style.display = "block";
    exitMenu()
}

function exitMenu() {
    let yesExit = true;
    if(yesExit) {
        cover.addEventListener("click", exitMenuBye)
    };
}

function exitMenuBye() {
    orderMenu.classList.remove('appear');
    cover.style.display = "none";
    cover.removeEventListener("click", exitMenuBye);
}


// order arrays

// flavors

let flavorOutput = document.querySelector('#flavorOutput');
let flavor = 0;

let flavorArray = [
    "Vanilla",
    "Chocolate",
    "Strawberry",
    "Mint"
]

function randomFlavor() {
    flavor = flavorArray[Math.floor(Math.random()*flavorArray.length)];

    flavorOutput.innerHTML = `<em>Flavor:</em> <br> ${flavor}`
    console.log(flavor);
}


// toppings

let toppingOutput = document.querySelector('#toppingOutput');
let topping = 0;

let toppingArray = [
    "Sprinkles",
    "Chocolate dip",
    "Chocolate chunks"
]

function randomTopping() {
    topping = toppingArray[Math.floor(Math.random()*toppingArray.length)];

    toppingOutput.innerHTML = `<em>Topping:</em> <br> ${topping}`
    console.log(topping);
}

// cherry

let cherryOutput = document.querySelector('#cherryOutput');
let cherry = 0;

let cherryArray = [
    "Yes",
    "No"
]

function randomCherry() {
    cherry = cherryArray[Math.floor(Math.random()*cherryArray.length)];

    cherryOutput.innerHTML = `<em>Cherry:</em> <br> ${cherry}`
    console.log(cherry);
}

// flavor accuracy

let flavorVanilla = flavorArray[0];
let flavorChocolate = flavorArray[1];
let flavorStrawberry = flavorArray[2];
let flavorMint = flavorArray[3];

let flavorAccuracy = false;

function checkFlavor() {
    if(vanilla && flavor == flavorVanilla) {
        flavorAccuracy = true;
    } 
    if(chocolate && flavor == flavorChocolate) {
        flavorAccuracy = true;
    }
    if(strawberry && flavor == flavorStrawberry) {
        flavorAccuracy = true;
    }
    if(mint && flavor == flavorMint) {
        flavorAccuracy = true;
    }


    if(flavorAccuracy) {
        console.log('flavors accurate');
    }

}

// topping accuracy 
let toppingSprinkles = toppingArray[0];
let toppingChocoDip = toppingArray[1];
let toppingChocoChunks = toppingArray[2];

let toppingAccuracy = false;

function toppingCheck() {
    if (sprinkles && topping == toppingSprinkles) {
        toppingAccuracy = true
    }
    if (chocoDip && topping == toppingChocoDip) {
        toppingAccuracy = true
    }
    if (chocoChunks && topping == toppingChocoChunks) {
        toppingAccuracy = true
    }

    if(toppingAccuracy) {
        console.log('toppings accurate')
    }
}

// cherry accuracy
let yesCherry = cherryArray[0];
let noCherry = cherryArray[1];

let cherryAccuracy = false;

function cherryCheck() {
    if(cherry2 && cherry == yesCherry) {
        cherryAccuracy = true
    }

    if(cherry2 == false && cherry == noCherry) {
        cherryAccuracy = true;
    }

    if(cherryAccuracy) {
        console.log('cherry accurate')
    }
}

let correctFinish = document.querySelector('#correctFinish');
let nextLevelBtn = document.querySelector('.nextLevel');
function accuracy() {
    if(flavorAccuracy && toppingAccuracy && cherryAccuracy) {
        correctFinish.style.display="block";
        nextLevelBtn.style.display='block';
    }
}

// debug
function debug() {
    console.log("debug");
    randomFlavor();
    randomTopping();
    randomCherry();
}

window.onload = debug();