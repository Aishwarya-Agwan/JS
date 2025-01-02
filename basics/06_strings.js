 const name = "Aish"
 const repoCount = 50

 //console.log(name + repoCount + " Value");

 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 const gameName = new String('Aish-cch')

//  console.log(gameName[0]);
//  console.log(gameName.__proto__);

//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
//  console.log(gameName.toLowerCase());
//  console.log(gameName.charAt(3));
//  console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 3)
console.log(anotherString);

const newStringOne = "   aish   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aish.com/aish%20agwan"

console.log(url.replace('%20','-'));
console.log(url.includes('aish'));

console.log(gameName.split('-'));