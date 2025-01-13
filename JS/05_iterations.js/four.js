//for in 

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {      //for in loop is used to iterate over the object keys 
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]  //array of strings

for (const key in programming) {        //for in loop is used to iterate over the array indexes 
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {         //this will not print the map object because map object is not iterable using for in loop 
//     console.log(key);     
// }