// Stack (Primitive) , Heap (Non-Primitive)

let myFirstname = "Aishwarya"

let midname = myFirstname
midname = "Vijay";

console.log(myFirstname);
console.log(midname);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "aish@google.com"

console.log(userOne.email);
console.log(userTwo.email);