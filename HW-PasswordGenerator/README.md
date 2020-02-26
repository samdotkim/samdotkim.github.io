# sam.kim Password Generator Form


# Overview
This Javascript password generator has input fields on an HTML page to generate a random password based on the user's selections. I used input fields instead of a series of input prompts for increased user friendliness.

# Javascript Logic
In order to make this work, I did the following:

1. Defined the elements: Used a series of document.getElementById tags to retrieve the user's inputted data and define key elements that would be used to make this work.
2. Generate Password Button: With that inputted data, I created a "generate" button that would be activated by addEventListener('click'). This generate button would store variables such as "length, hasLower, hasUpper, hasNumber, and hasSymbol" which would be defined based on the user's input by seeing whether or not those forms were "checked" or not.  Based on the user's input, it would create a variable "result" stored within "innerText" which is also a function called "generatePassword" that is a combination of the variables defined earlier by the user's input.
3. Password Length Alerts: Just in case the user input a length outside the range of 8-128, I created some simple alert prompts to let the user know they need more or less characters.  These prompts are followed by another master prompt that states that a password was generated based on the user's selections.
4. Generate Password Function: This is the function defined earlier "generatePassword" which is based on the user-inputted variables: lower, upper, number, symbol and length. Within here, I created an additional variable "generatedPassword" that is a blank string acting as a placeholder for the final password that will be created.  Another variable, typesCount is defined here that just checks how many user-submitted options are selected.  The variable typesArr is then defined which turns variables lower, upper, number, and symbol into objects which can be filtered based on of the items values (which are user submitted in this case)
5. If User doesn't Select a type: This is just a simple function in case the user decides to select none of the options lower, upper, number or symbol to give an error because we have no characters to generate a password with.
6. For Loop -> Run Randomizer: This is the for loop function that generates the random password by creating a variable called "random" based on the Object.keys (aka user submitted data) and runs the Randomizer function accordingly.  Outside the For Loop, we create a variable "finalPassword" that is the result of the generated password function that is sliced so that each character is created thru the randomizer, starting at index 0 until whatever length the user defined.  We return the value finalPassword afterwards.
7. Random Generator Functions: this is a series of randomizer functions that would be run based on whether or not the user selected to use lower, upper, numbers or special characters (aka symbols).  These functions use Math.floor, Math.random and CharCode numbers from the Browser Character Set to randomize strings based on where they are located on the Browser Character Set chart.
