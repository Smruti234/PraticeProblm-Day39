function maxSecond(array) {
    var max = Math.max.apply(null, array);
    array.splice(array.indexOf(max), 1);
    return Math.max.apply(null, array);
}

function minSecond(array) {
    var max = Math.min.apply(null, array);
    array.splice(array.indexOf(min), 1);
    return Math.min.apply(null, array);
}

let array = [];
for (i = 0 ; i<10 ; i++)
let val = Math.floor(Math.random() * 600) + 100;
array[i] = val;
 
console.log("array of 10 random value" + array)
console.log("second maximum value is:" + maxSecond(array));
console.log("second minimum value is:" + minSecond(array));
