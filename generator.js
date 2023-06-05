document.querySelector('#simple').onclick = function(){
	var variable = Math.floor(Math.random()*10000000000);
	alert(variable);
	document.querySelector('.output').innerHTML = `<div class='output-div'>
		<h1 class='output-text'>Output: ${variable}</h1>
	</div>`
}

document.querySelector('#complex').onclick = function(){
	var password = Math.random().toString(36).slice(-9);
	alert(password);
	document.querySelector('.output').innerHTML = `<div class='output-div'>
		<h1 class='output-text'>Output: ${password}</h1>
	</div>`
}
