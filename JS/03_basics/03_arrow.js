const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {            
        console.log(`${this.username} , welcome to website`);
        console.log(this);  // this will refer to the user object
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
 
const chai =  () => {                // arrow function
    let username = "hitesh"
    console.log(this);             
}


// chai()

// const addTwo = (num1, num2) => {     
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2       // if there is only one line of code in the function then we can remove the curly braces and return keyword

// const addTwo = (num1, num2) => ( num1 + num2 )    // if we want to return something then we have to wrap it in parentheses

const addTwo = (num1, num2) => ({username: "hitesh"})  // if we want to return an object then we have to wrap the object in parentheses


console.log(addTwo(3, 4))