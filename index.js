const app = document.getElementById('app');
const backgroundOriginal = document.body.style.backgroundColor;
let display;

function createButton(text, onclickFunction, className) {
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-primary', className);
  button.textContent = text;
  button.onclick = onclickFunction;
  return button;
}

function appendNumber(event) {
  const number = event.target.textContent;
  display.value += number;
}

function appendSymbol(event) {
  const symbol = event.target.textContent;
  display.value += symbol;
}

function clearDisplay() {
  display.value = '';
}

function toggleDarkMode() {
  const body = document.body;
  const calculator = document.querySelector('.calculator');
  calculator.classList.toggle('dark-mode');
  if (body.style.backgroundColor === backgroundOriginal) {
    body.style.backgroundColor = 'black';
    body.style.backgroundImage = "url('informatorio2.png')";
  } else {
    body.style.backgroundColor = backgroundOriginal;
    body.style.backgroundImage = "url('informatorio.png')";
  }
}

function calculate() {
  const expression = display.value;
  const result = eval(expression);
  display.value = result;
}

const buttonsData = [
  ['7', appendNumber],
  ['8', appendNumber],
  ['9', appendNumber],
  ['+', appendSymbol],
  ['4', appendNumber],
  ['5', appendNumber],
  ['6', appendNumber],
  ['-', appendSymbol],
  ['1', appendNumber],
  ['2', appendNumber],
  ['3', appendNumber],
  ['*', appendSymbol],
  ['C', clearDisplay, 'clear'],
  ['0', appendNumber],
  ['/', appendSymbol],
  ['=', calculate, 'equal']
];

const calculatorDiv = document.createElement('div');
calculatorDiv.classList.add('calculator');
display = document.createElement('input');
display.type = 'text';
display.id = 'display';
display.readOnly = true;
calculatorDiv.appendChild(display);

const row = document.createElement('div');
row.classList.add('row');
buttonsData.forEach(buttonData => {
  const col = document.createElement('div');
  col.classList.add('col-3');
  const button = createButton(buttonData[0], buttonData[1], buttonData[2]);
  col.appendChild(button);
  row.appendChild(col);
});
calculatorDiv.appendChild(row);

const darkModeButton = document.createElement('button');
darkModeButton.classList.add('btn', 'btn-dark');
darkModeButton.textContent = 'Modo Nocturno';
darkModeButton.onclick = toggleDarkMode;
const darkModeRow = document.createElement('div');
darkModeRow.classList.add('row');
const darkModeCol = document.createElement('div');
darkModeCol.classList.add('col-12', 'text-right', 'mt-4');
darkModeCol.appendChild(darkModeButton);
darkModeRow.appendChild(darkModeCol);
calculatorDiv.appendChild(darkModeRow);

app.appendChild(calculatorDiv);