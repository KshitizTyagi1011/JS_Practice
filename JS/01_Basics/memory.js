//stack (primitive) and heap (non-primitive) memory allocation

let number = 1234
let anothernumber = number
anothernumber = 54;
console.log(number);
console.log(anothernumber);

//heap memory allocation

let userone = {name: "Kshitiz", age: 22}
let usertwo = userone

usertwo.name = "Hitesh"
console.log(usertwo.name);
console.log(userone.name);