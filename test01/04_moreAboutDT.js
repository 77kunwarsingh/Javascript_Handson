// Primitive
// 7 types: string , number, boolean, null , undefined , symbol , bigInt 

//Non-Primitive

// Arrays , Objects , Functions



const score = 100   // number
const myScore = "232"  // string
let isLoggedIn = true   //boolean
let tempOut = null    //null
let name   //undefined
let value = Symbol("123")    // symbol datatype is used to make value unique
let AnotherValue = Symbol("123")
console.log(value === AnotherValue)  //It should return false as symbol is used to make values unique

let bigNumber = 13514233213n    //bigInt


let heros = ["shaktiman" , "Dynamo" , "Doraemon"] // Array

let myObj = {         //object
    name: "Kunwar",
    age : 23,
    isWorking: true
}

const myFunc = function(){       //Function
    console.log("Hello world")
}