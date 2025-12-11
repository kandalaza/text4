
const concatenateStrings = (a, b) => (a + b).replace(/ /g, '');
console.log(concatenateStrings('aa', 'bb')); 
console.log(concatenateStrings('aa', ' '));
console.log(concatenateStrings('', 'bb'));


const getStringLength = str => str.length;
console.log(getStringLength('abc'));
console.log(getStringLength(''));


const getStringFromTemplate = (firstName, lastName) => `Hello, ${firstName} ${lastName}!`;
console.log(getStringFromTemplate('John', 'Doe'));
console.log(getStringFromTemplate('Chuck', 'Norris'));


const getChar = (str, index) => str[index - 1];
console.log(getChar('John Doe', 1));
console.log(getChar('cat', 3));


const removeFirstOccurrences = (str, substr) => str.replace(substr, '');
console.log(removeFirstOccurrences('To be or not to be' , 'not'));
console.log(removeFirstOccurrences('I like legends', 'end'));
console.log(removeFirstOccurrences('ABABAB' , 'BA'));              


