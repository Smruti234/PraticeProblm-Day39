let myMap = new Map();
let counter = 1;
let count = [];
for(let i = 1; i <= 12; i++){
    count[i] = 0;
}
while(counter != 51){
    counter++;
    let value = 1 + Math.floor(Math.random() * 12);
    for(let i = 1; i <= 12; i++){
        if(value == i){
            (count[i])++;
            myMap.set(i, count[i]);
        }
    }
}
console.log("1.January 2.February 3.March 4.April 5.May 6.June \n7.July 8.August 9.September 10.October 11.November 12.December");
console.log("Number of Persons born in months according to numbers assumed above");
console.log(myMap);
