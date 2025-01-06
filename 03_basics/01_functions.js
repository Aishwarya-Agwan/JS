function sayMyName(){
    console.log("A");
    console.log("I");
    console.log("S");
    console.log("H");
}

// sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
 }

 //addTwoNumbers(number1, number2)
 //addTwoNumbers(4,4)
 //addTwoNumbers(3,"a")

 function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);


function loginUserMessage(username = "aish"){
    //if(username === undefined){
    if(!username){
      console.log("Please enter a username");
      return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Aish"))
// console.log(loginUserMessage("Aishwarya"))

function calculateCartPrice(...num1){
    return num1
}   

//console.log(calculateCartPrice(200, 400, 600, 2000));


const user = {
    username: "aish",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);   
}

// handleObject(user)
handleObject({
    username : "Aish",
    price: 200
})

const MyNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(MyNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

