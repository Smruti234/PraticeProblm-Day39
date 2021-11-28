let check = true;
let myMap = new Map();
let one = 1, count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0, count6 = 0;
while(check != false){
    let value = 1 + Math.floor(Math.random() * 10);
    if(value == 1){
        count1++;
        myMap.set("1", count1);
    }
    if(value == 2){
        count2++;
        myMap.set("2", count2);
    }
    if(value == 3){
        count3++;
        myMap.set("3", count3);
    }
    if(value == 4){
        count4++;
        myMap.set("4", count4);
    }
    if(value == 5){
        count5++;
        myMap.set("5", count5);
    }
    if(value == 6){
        count6++;
        myMap.set("6", count6);
    }
    if(count1 == 10 || count2 == 10 || count3 == 10 || count4 == 10 || count5 == 10 || count6 == 10){
        check = false;
    }
}
console.log(myMap);
let minimum = Math.min(...myMap.values());
for(let [key, value] of myMap){
    if(value == 10){
        console.log(key + " reaches 10 times");
    }
    if(value == minimum){
        console.log(key + " comes " + minimum + " times");
    } 
}