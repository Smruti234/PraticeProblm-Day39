let array = [];
for (i = 0 ; i<10 ; i++)
let val = Math.floor(Math.random() * 600) + 100;
array[i] = val;

console.log("array of 10 random value" + array);
console.log("array after sort" + array.sort());
console.log("second maximum value is:" + array[6]);
console.log("second minimum value is:" + array[4]);
