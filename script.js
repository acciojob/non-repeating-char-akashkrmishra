function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i=0; i<str.length;i++){
		let char=str.charAt(i);
		if(str.match(i)){
			i++;
		}else{
			return char;
		}
	}
	return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
