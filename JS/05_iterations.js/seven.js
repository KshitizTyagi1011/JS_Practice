const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})   

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)     //chaining the map and filter methods

console.log(newNums);           //output will be [41, 51, 61, 71, 81, 91] because we are multiplying each element by 10, then adding 1 to each element and then filtering the elements greater than or equal to 40