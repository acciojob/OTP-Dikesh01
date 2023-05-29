//your JS code here. If required.

let element = document.getElementsByClassName("code");

for(let i=0; i<element.length; i++){
	element[i].addEventListener("keyup", (event) =>{
		let currentElement = event.target
			let code = event.key.charCodeAt(0);
		if(code>= 48 && code <=57){
			let nextElemet = currentElement.nextElementSibling;
			if(nextElemet){
				nextElemet.focus();
			}
			
		}
	})
}