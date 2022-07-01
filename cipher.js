const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

function encryptingText(char) {
	let shift=2;
	let include =        
	 alphabet.includes(
		char.toUpperCase()); 
	   
	if (include){      
	 let position =         
	  alphabet.indexOf(
	   char.toUpperCase());
		
	 let newPosition = 
	  (position + shift) %  
		alphabet.length;
	 return alphabet[newPosition];
   } else  return char;
  }

  function decryptingText(val) {
	return  [...val].map(char => 
		encryptingText(char)).join('');
	}

	let encryptedText=encryptingText('Hello there crypto');
	console.log(encryptedText);

	let decryptedText=decryptingText(encryptedText);
	console.log(decryptedText);