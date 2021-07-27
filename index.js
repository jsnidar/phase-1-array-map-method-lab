
const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
function stringCapper (string) {
    //this function capitalizes all words in a string and returns the string
    let stringArr = string.split(' ')
    let capStr = stringArr.map(element => element[0].toUpperCase() + element.substring(1))
    
    return capStr.join(' ')
    }
  
    //return the new array

const titleCased = () => {
  const newTutorials = []  
  for (let string of tutorials) {
      console.log('string', stringCapper(string))
      newTutorials.push(stringCapper(string))
    }  
    return newTutorials;
}

titleCased(tutorials)
  //iterate through the array
  
      //separate each word in each string into a string array
        //iterate through the array of the string
        //replace the old value with the first letter of the word capitalized
        //join the string back together
  



