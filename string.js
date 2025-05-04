//sring write in the ""or'' like -> "harshit"or 'pal'
const name ="harshit"
const course=" B.tech"
const collage=" vision group of institution kanpur nagar."
//console.log(name+course+" in cs");
console.log(`Hello my name is ${name} and i am doing ${course} in computer science from ${collage}`);
const newName=new String('harshit pal') //string provide featurse like array but its not a array
console.log(newName[1]);
console.log(newName.__proto__);
console.log(newName.length);
console.log(newName.toUpperCase()); ///no change  the original value becouse its a copy of original value

console.log(newName.charAt(3));
console.log(newName.indexOf('r'));
const newstring=newName.substring(0,8)
console.log(newstring);

const anotherstring=newName.slice(0,5)
console.log(anotherstring);

const stringeone="    harshit pal"
console.log(stringeone);
console.log(stringeone.trim());  //Removes the leading and trailing white space and line terminator characters from a string.

const url="https:/harshit.com/harshit%20pal"
console.log(url.replace('%20','-'));
console.log(url.includes('kake'));


const str1="harsh-harshit-pal"
console.log(str1.split('h'));





