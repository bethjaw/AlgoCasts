// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// TWO WAYS TO DO IT --->

// ONE IS A DECREMENTING LOOP:
function reverse(str) {
  var newString = ''

  for(var i = str.length - 1; i >= 0; i--){
    newString += str[i]
  }
  return newString
}

// #1 also written like this:
function reverse(str) {
  let reversed = '';

  for (let character of str){
    reversed = character + reversed;
  }
  return reversed;
}

// TWO IS USING SPLIT, REVERSE, and JOIN
function reverse(str){
 return str.split("").reverse().join("");
}

// #2 also written...
function reverse(str){
  const arr = str.split('')
  arr.reverse()
  return arr.join('')
}

// third solution - more complicated, array helper - reduce
function reverse(str){
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '')
}

// could shorten to:
function reverse(str){
  return str.split('').reduce((rev, char) => char + rev , '')
}


module.exports = reverse;
