const acID = 243434
// console.log(acID);

let acEmail = "ram@gmail.com"
let acCode = "HDFC34340IT"
let acName = "Raja"

const allData = [acEmail,acCode,acName]  //add array

//  console.log(allData);

let nameData = ["ram","mohan","raja",...allData]  //new arrat

// const abData = allData.concat(nameData)
//  const abData = [ ...nameData]

// console.log( nameData);
// console.log( abData);


let newObj ={
    name: "Raja",
    age: 21
}

// console.log(newObj);

let newObj1 ={
    fullName: "Raja Ram ",
    id: 1221
}

const allObjData = {...newObj, ...newObj1}
// console.log(allObjData)

let laptopName = "Dell"
let laptopID = 1443
let laptopnumber = 23456754


// console.table([laptopName,laptopID,laptopnumber])

const number = Number(1212)
// console.log(typeof number);

let Mohit = 234
 const valuesrting = String(Mohit)
//  console.log(typeof valuesrting);

 const chan = new Number(300)
//  console.log(chan);
//  console.log(chan.toString().length);
//   console.log(chan.toFixed(4));

 
 let str1 = "Hello"
 let str2 = " Ram"

 const str3 = str1 + str2
//  console.log(str3);


//  console.log(2>4);
//  console.log(3 >=4);
//  console.log(3 >=3);


 let name = "Rakesh"
 let renumber = 34345454
//  console.log(`what is your name i'm  ${name} and your numper ${renumber}`);



let strName = new String('Raja Ram')
// console.log(strName [1]);
// console.log(typeof strName);
// console.log(strName.toUpperCase());
// console.log(strName.indexOf('R'));


let trm = "   Ram "
// console.log(trm);
// console.log(trm.trim());

// console.log(Math.round(4.3));

const newDate = new Date()
// console.log(newDate);
// console.log(newDate.toString());
// console.log(newDate.toDateString());
// console.log(newDate.toLocaleString());
// console.log(newDate.getDay());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getTime());


const myArr = [0, 1, 2, 9,3, 4, 5]
//  console.log("A ", myArr);

 const oneArr = ["Raja", "Ram", "Sunil", "Sanjay"]
 const twoArr = ["Manoj", "Rk", "Mukesh", "Mohit"]

 oneArr.push(twoArr)
//  console.log(oneArr[1][2]);

 let sr1 = 121
 let sr2 = 122
 let sr3 = 1232
 let sr4 = 12139

//  console.log(Array.of(sr1,sr2,sr3,sr4));


 //obj

 const newUser = {
    name: "Ram",
    location: "Jaipur",
    email: "hitesh@google.com",
    lastLoginDays: ["Monday", "Saturday"]

 }
//  console.log(newUser.lastLoginDays);
//  console.log(newUser["name"]);

 newUser.name = "mohit"
//  console.log(newUser["name"]);

 Object.freeze(newUser);
 newUser.name = "mohitnew"
//  console.log(newUser);


 const obj1 = {
    name: "Ramnand",
    id: 324,
    fullName:  {
        first: "Samrat",
        last: "Choudhary"
    }
 }
//  console.log(obj1);
//  console.log(obj1.name);
//  console.log(obj1.fullName);
//  console.log(obj1.fullName.first);


 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course     //destraker karna

// console.log(courseInstructor);
// console.log(instructor);

///functions


function sayName(){
    console.log("R");
    console.log("a");
    console.log("k");
    console.log("e");
    console.log("s");
    console.log("h");

}
// sayName()

function twoNumber(num1,num2){
    // return num1 + num2
    // return num1 * num2
    // return num1 % num2
    return num1 - num2

}
// console.log(twoNumber(9,6));

function loginMessage(usearname ="Ram") {
    if (!usearname) {
        console.log("Please Enter Your Name");
         return
        
    }
    return ` ${usearname} just login `  
}
// console.log(loginMessage("Ramesh"));
// console.log(loginMessage());

function calculateCartPrice(value1, value2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,300,500,700));

const oneObj = {
    name: "oil",
    price: 500,
    wight: "1L"
}

function objData (otherObj){
    console.log(`Product Name: ${otherObj.name}  price is ${otherObj.price} and wight ${otherObj.wight}`);
}

// objData(oneObj)

objData({
    name:"New Oil",
    price: 3000,
    wight: "30L"
})

const objArry =[300,500,600,200,100]

function changeArry(upDateArryInFun) {
    return upDateArryInFun[0]
    
}
// console.log(changeArry(objArry));
console.log(changeArry([2300,600,900]));

if (true) {
 let a = 10
 const b = 20
var c = 30
}

console.log(c);

function one (){
    const usName = "Mohit"

    function two(){
       const fullName = "Ram Singh" 
       console.log(usName);
       console.log(fullName);


    }
    two()
    console.log(usName);

}
one()


// console.log(addone(5))

// function addone(num){
//     return num + 1
// }



// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }   



const onet = {
    name: "Raj",
    age: 21,
  messagetwot:  function () {
        console.log(`thish ${this.name}`);
        console.log(this);
    }
    
}

// onet.messagetwot()
// onet.name = "Ram"
// onet.messagetwot()

// function newfun (){
//    let name ="rk"
//    console.log(this.name);
// }
// newfun()  //=>undefined


// const newfun = function  (){
//     let name ="rk"
//     console.log(this.name);
//  }
// // newfun()  //=>undefined

const newfun = () =>{
    let name ="rk"
    // console.log(this.name);    //=>undefined
    // console.log(this);      //=> {}

 }
// newfun()


////////////////////////////////////arrow function use //////////////////////////

// const arofun =(a, b) =>{
//     return a +b
// }

// const arofun =(a, b) => a + b
const arofun =(a, b) => (a + b)

console.log(arofun(4,5));

const funarro = (a, b) => ({userName:"Ram"})
console.log(funarro(4,5));


//iife use

(function iife() {
console.log("Data Connet");
})();

(() => {
console.log("Data Connet to");
})();


((name) => {
    console.log(`Data Connet to ${name}`);
    })("Ramesh");


    const rajaraj = "vkhdfvd"
    console.log(rajaraj);