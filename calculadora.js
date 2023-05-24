let display = document.getElementById('display');
let backgroundOriginal = document.body.style.backgroundColor;

function appendNumber(number) {
  display.value += number;
}

function appendSymbol(symbol) {
  display.value += symbol;
}

function clearDisplay() {
  display.value = '';
}
function toggleDarkMode() {
    var body = document.body;
    let calculator = document.querySelector('.calculator');
    calculator.classList.toggle('dark-mode');
    if (body.style.backgroundColor === backgroundOriginal) {
        body.style.backgroundColor = "black";
        body.style.backgroundImage = "url('informatorio2.png')";
      } else {
        body.style.backgroundColor = backgroundOriginal;
        body.style.backgroundImage = "url('informatorio.png')";
        console.log(backgroundImagen);
      }
    
}

function calculate() {
    let expression = display.value;
    let result = eval(expression);
    display.value = result;
}