// 1. DEFINE THE ELEMENTS
var resultEl = document.getElementById('result');
var lengthEl = document.getElementById('length');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateButton = document.getElementById('generate');
var Randomizer = {
	lower: RandomLower,
	upper: RandomUpper,
	number: RandomNumber,
	symbol: RandomSymbol
}
// 2. GENERATE PASSWORD BUTTON -> ON CLICK
generate.addEventListener('click', () => {
	var length = +lengthEl.value;
	var hasLower = lowercaseEl.checked;
	var hasUpper = uppercaseEl.checked;
	var hasNumber = numbersEl.checked;
	var hasSymbol = symbolsEl.checked;
  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
// 3. PASSWORD LENGTH ALERTS  
  if(length<8){
    alert("ERROR: You need more characters!")
  }
  else if(length > 128){
    alert("ERROR: You need less characters!")
  }
  alert('Password generated based on your selections.')
});
// 4. GENERATE PASSWORD FUNCTION
function generatePassword(lower, upper, number, symbol, length) {
	var generatedPassword = '';
	var typesCount = lower + upper + number + symbol;
	var typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	// 5. IF USER DOESN'T SELECT TYPE
	if(typesCount === 0) {
    alert('ERROR')
    return 'Please select a choice below';
	}
	// 6. FOR LOOP -> RUN RANDOMIZER
	for(var i=0; i<length; i++) {
		typesArr.forEach(type => {
			var random = Object.keys(type)[0];
			generatedPassword += Randomizer[random]();
		});
	}
	var finalPassword = generatedPassword.slice(0, length);
	return finalPassword;
}
// 7. RANDOM GENERATOR FUNCTIONS
function RandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function RandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function RandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function RandomSymbol() {
	var symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}