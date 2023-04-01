//your code here
let input = document.querySelector("#evaluatedText");

input.addEventListener('input',countWord);


function countWord(){
	var words = document.querySelector("#evaluatedText").value;

	var splitted = words.split(' ');
	
	var count = 0;

	for(var word in splitted){
		if(word != ""){
			count++;
		}
	}

	document.querySelector("#wordCount").innerHTML = count;
	
}