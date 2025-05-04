//primitive =>
    //pimitive are classified in 7 type--(1) string, (2) Number, (3) boolean, (4) null, (5)undefined,(6) symbol,(7) BigInt
const score=100
const scorevalue=100.3
const isloggedin=false
const outsidetemp=null
let userEmail;

const id = Symbol('1234')
const anotherid = Symbol('123')
console.log(id === anotherid);

const bignumber=8879999686868369n
console.log(typeof bignumber); //bigint

//*****************************ReferenceError(nonprimitive)**************
//(1)array, (2) object,(3) function

const heros=["shaktiman","gangadhar","nagraj"]; //array
let myobjects={
    name: "gangadgar",
    age: 19,
    work: "shaktiman"
}

const myfunction=function(){
    console.log("hello world!");
    
}
console.log(typeof anotherid);


//*********************************************
//*********************************************
//stack(primitive),heap(nonprimitive)
//********************stack*************************
//in stack give the copy of the value,if we  change the value in copy's value ,no have any change in original value

let myname="harshitpal"
let anothername=myname
anothername="chaiaurcode"
console.log(myname);
console.log(anothername);
//**********************************heap**************************** 
//it gives the refrence og the originl value . if we change the value in reference ,original value change also
let userone={
    email: "userone@gmail.com",
    upi: "user@ybl"
    
}
let usertwo=userone
usertwo.email="harshit.gmail.com"
console.log(userone.email);
console.log(usertwo.email);


