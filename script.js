let input = document.querySelector("#evaluatedText");

// input.addEventListener('input',countWord);
input.addEventListener("keyup", countWord);

function countWord() {
var words = document.querySelector("#evaluatedText").value.trim();
console.log(words);
var splitted = words.split(" ");
var count = 0;

for (var word of splitted) {
if (word.trim() !== "") {
count++;
}
}

document.querySelector("#wordCount").innerHTML = count;
}