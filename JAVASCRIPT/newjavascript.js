//Populate 'SIZE' tag when windows is loading
var masterHolder = document.querySelector('.holder');
var buttonHolder = document.querySelector('.button-holder');
var row = document.querySelector('.row');
var selectOneEl = document.querySelector('.selectOne');
var size;

window.onload = function () {

    for (var i = 1; i <= 16; i++) {

        if (i % 4 === 0) {
            var optionTag = document.createElement('option');
            optionTag.innerHTML = i * 10;
            selectOneEl.appendChild(optionTag);
        }
    }
    
};


//Get random number between max and 1
function getRandomNumber(max) {
    return Math.floor((Math.random() * max) + 1);
}

//Set the 'Start' button changing name when is clicked.
var clickCount = 0;
var startBtn = document.querySelector('.start-btn');
if (startBtn) {
    startBtn.addEventListener('click', function () {
        
        if(clickCount === 0) {
            startBtn.innerHTML = 'Stop';
            startTheClock();
            clickCount++;
        } else {
            startBtn.innerHTML = 'Restart';
            clearInterval(intervalCounter);
            clickCount = 0;
        }
        size = selectOneEl.value;
        initializeButtons();
    });
}


function initializeButtons() {

    //Clean the holder from buttons 
    while (buttonHolder.firstChild) {
        buttonHolder.removeChild(buttonHolder.firstChild);
    }

    for (var i = 1; i <= size; i++) {
        var button = document.createElement('button');
        button.setAttribute('class', 'singleBtn');
        buttonHolder.appendChild(button);
    }

    //collect all mine buttons add event listener
    var minesKeys = document.querySelectorAll(".button-holder button");
    if(minesKeys) {
        for (var i = 0; i < minesKeys.length; i++) {
            minesKeys[i].onclick = run;
            minesKeys[i].setAttribute('isBomb', 'false');

        }
    }

    //Plant bomb
    var minesCount = size / 4;
    for(var x=0; x < minesCount; x++) {
        minesKeys[getRandomNumber(size)].setAttribute('isBomb', 'true');
    }

}

/*Clock*/    
var intervalCounter;
var startTheClock = function() {    
    //define a variable to get the div object that used for clock
    var clockElem = document.querySelector(".screen");
    clockElem.innerHTML = '';
    
    var  timer = [], milisec=0, sec = 0, ssec =0, minute = 0, mminute = 0, hour = 0;
    function duration(){
        
            milisec++;
            if(milisec > 99)
                {
                    milisec = 0;
                    sec++;
                }
            if(sec > 59)
                {
                    sec = 0;
                    minute++;
                }
            if(sec < 10)
                {
                   ssec = '0'+sec;
                }
            else
                {
                   ssec = sec;
                }
            if(minute > 59)
                {
                    minute = 0;
                    hour++;
                }
            if(minute < 10)
                {
                   mminute = '0'+minute;
                }
            else
            {
                mminute = minute;
            }
               timer = [hour, mminute, ssec].join(":");
               clockElem.innerHTML = timer;

        }
 intervalCounter = setInterval(duration,10);
};

//This is a main method that searching on bomb or flag
function run(event) {
    //when user click on any button first make it disable
    event.target.disabled = 'true';

    //We already added custom attribute to buttons with name 'isBomb'
    //So here we gonna checking is mined button or not
    if(event.target.getAttribute('isBomb') === 'true') {

        var minesBtns = document.querySelectorAll(".button-holder button");
        for(var i=0; i < minesBtns.length; i++) {
            if(minesBtns[i].getAttribute('isBomb') === 'true') {
                minesBtns[i].setAttribute('id', 'isBomb');
                clearInterval(intervalCounter);

            }
        }
        alert('Game over!');
    }
    else {
        event.target.setAttribute('id', 'disabled');
    }
}
