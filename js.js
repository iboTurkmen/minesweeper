var grid = [];

for (i = 0; i < 49; i++)
{
grid[i]="clear";
}
var number_of_mines = 10;
var r = 0;
while (r < number_of_mines)
{
var mine = Math.floor(Math.random() * 49);
if (grid[mine] === "clear")
{
grid[mine]="mine";
r++;
}
}
var number_of_guesses = 0;
var maximum_guesses = 45;
var number_of_hits = 0;
var number_of_misses = 0;
var sound = 1;
var element = opener.document.getElementById("easy");
if (element.checked === true)
{
maximum_guesses = 45;
}
var element = opener.document.getElementById("intermediate");
if (element.checked === true)
{
maximum_guesses = 40;
}
var element = opener.document.getElementById("advanced");
if (element.checked === true)
{
maximum_guesses = 35;
}
var element = opener.document.getElementById("sound_on");
if (element.checked === true)
{
sound=1;
}
var element = document.getElementById("sound_off");
if(element.checked ===true)
{
sound=0;
}
function checkGrid()
{
var input = document.getElementById("guessInput");
var guess = input.value;
var firstChar = guess.charAt(0);
var secondChar = guess.charAt(1);
if (isNaN(firstChar) || isNaN(secondChar) ||  guess > 48)
{
window.alert("You must enter a number between 0 and 48.");
input.value = "";
input.focus();
return;
}
number_of_guesses++;
if(number_of_guesses >maximum_guesses)
{
window.alert("Sorry,you have run out of guesses!");
return;
}
var element = document.getElementById("numberGuesses");
element.value = number_of_guesses;
var cell = document.getElementById("guess");
if(grid[guess] == "mine")
{
cell.setAttribute("class", "hit");
number_of_hits++;
var element = document.getElementById("numberHits");
element.value = number_of_hits;
var input = document.getElementById("guessInput");
input.value = "";
input.focus();
if(number_of_hits == number_of_mines)
{
window.alert("Congratulations, you have cleared the minefield!");
return;
}
}
}
