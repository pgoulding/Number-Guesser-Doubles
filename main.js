/*---------- Query Selectors -----------*/
/*---------- Input Var.      -----------*/
var inputRangeMin = document.querySelector('#input-minrange');
var inputRangeMax = document.querySelector('#input-maxrange');
var inputNameCh1 = document.querySelector('#input-name-challenger1');
var inputNameCh2 = document.querySelector('#input-name-challenger2');
var inputGuessCh1 = document.querySelector('#input-guess-challenger1');
var inputGuessCh2 = document.querySelector('#input-guess-challenger2');
var asideColumn =document.querySelector('aside');
/*--------- Output Var -----------------*/
var outputRangeMin= document.querySelector('#range-min');
var outputRangeMax= document.querySelector('#range-max');
var outputNameCh1 = document.querySelector('#name-output-challenger1');
var outputNameCh2 = document.querySelector('#name-output-challenger2');
var outputGuessCh1 = document.querySelector('#guess-output-challenger1');
var outputGuessCh2 = document.querySelector('#guess-output-challenger2');
var outputHighLow1 = document.querySelector('#guess-output-high-low1');
var outputHighLow2 = document.querySelector('#guess-output-high-low2');
/*--------- Buttons --------------------*/
var btnUpdateRange = document.querySelector('#btn-update');
var btnSubmit = document.querySelector('#btn-submit');
var btnReset = document.querySelector('#btn-reset');
var btnClear = document.querySelector('#btn-clear');

/*---------- Global Variables ----------*/
var min = inputRangeMin.value || 1;
var max = inputRangeMax.value || 100;
var outputWinner;
var randomNum = Math.floor(Math.random()*(+max - +min)) + +min;
console.log(randomNum);


/*---------- Event Listeners -----------*/
btnUpdateRange.addEventListener('click', updateRange);
btnSubmit.addEventListener('click', playGame);
//btnReset.addEventListener('click', resetGame);
//btnClear.addEventListener('click', clearGame); 


/*---------- Functions -----------------*/

function checkForCh1() {
  if(inputGuessCh1.value == randomNum) { 
     outputWinner = inputNameCh1.value;
     outputHighLow1.innerText = 'BOOM';
     appendCard();
  } else if (inputGuessCh1.value < randomNum) {
    outputHighLow1.innerText = 'TO LOW';
  } else { 
    outputHighLow1.innerText = 'TO HIGH';
    }
}
 
 function checkForCh2() {
  if(inputGuessCh2.value == randomNum) { 
     outputWinner = inputNameCh2.value;
     outputHighLow2.innerText = 'BOOM';
     appendCard();
  } else if (inputGuessCh2.value < randomNum) {
    outputHighLow2.innerText = 'TO LOW';
  } else { 
    outputHighLow2.innerText = 'TO HIGH';
    }
}

  function checkWinner() {
    checkForCh1();
    checkForCh2();
  }

// function getRandom(min, max){
//   max = inputRangeMin.value;
//   min = inputRangeMax.value;
//   return Math.floor(Math.random() * (max-min+1) ) + min;
// }

function updateRange(e) {
  e.preventDefault();
  outputRangeMin.innerText = inputRangeMin.value;
  outputRangeMax.innerText = inputRangeMax.value;
};

function playGame(e) {
  e.preventDefault();
  checkAllInputs();
  displayNames();
  checkWinner();
  randomNum;
}; 

function displayNames(){
  outputNameCh1.innerText = inputNameCh1.value;
  outputGuessCh1.innerText = inputGuessCh1.value;
  outputNameCh2.innerText = inputNameCh2.value;
  outputGuessCh2.innerText = inputGuessCh2.value;
}

function checkAllInputs(){
  checkValidInputCh1();
  checkValidInputCh2();
  checkValidInputGuess1();
  checkValidInputGuess2();
}

function appendCard(){
  asideColumn.innerHTML += `<section class="card-winner">
      <div class="versus-challenger">
        <p class="card-output-ch1">${inputNameCh1.value}</p>
        <p class="vs-style">VS</p>
        <p class="card-output-ch2">${inputNameCh2.value}</p>
      </div>
      <hr>
      <div class="card-output-results">
        <h2 class="winner">${outputWinner}</h2>
        <p class="card-style-winner">Winner</p>
      </div>
      <hr>
      <div class="card-bottom-wrapper">
        <p><span class="card-num-guess"> -- </span>Guesses</p>
        <p><span class="card-min">- -- </span>Minutes</p>
        <p>X</p>
      </div>
    </section>`
}
//function resetGame(e) {
//   e.preventDefault();
//   resetInputCh1();
//   resetInputCh2();
//   resetCurrentGuess1();
//   resetCurrentGuess2();
// }


// if name or guess is empty string apply error classfrom css and end function 
function checkValidInputCh1() {
  if (inputNameCh1.value === '') {
    inputNameCh1.classList.add('error');
  } else {
    inputNameCh1.classList.remove('error');
  }  
};

function checkValidInputCh2() {
  if (inputNameCh2.value === '') {
    inputNameCh2.classList.add('error');
  } else {
    inputNameCh2.classList.remove('error');
  }
};

function checkValidInputGuess1() {
  if (inputGuessCh1.value === '') {
    inputGuessCh1.classList.add('error');
  } else {
    inputGuessCh1.classList.remove('error');
  }  
};

function checkValidInputGuess2() {
  if (inputGuessCh2.value === '') {
    inputGuessCh2.classList.add('error');
  } else {
    inputGuessCh2.classList.remove('error');
  }  
};



// window.load(getRandom())