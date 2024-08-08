const countLetters = word => {
//create the object which will store the occurrences
    const count = {};
}

//loop over the letters of the word
for (let i = 0; i < word.length; i++) {
    const letter = word[i]
}

		// if the property isn't in the object, it means that the letter is a new one and we'll create this property and assign it the value 1
        if (!count[letter]) {
			count[letter] = 1;

			// else, it means that the property is already there and we just increment it by 1
		} else {
			count[letter]++;
		}
	      {return count;
}
