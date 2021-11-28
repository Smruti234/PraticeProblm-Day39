function getNumbers(){
    let array = [];
    let count = 0;
    for( let i = 0; i <= 100 ; i++){
        let remainder = i % 10;
        let quotient = parseInt(i / 10);
        if(quotient == remainder){
            array[count++] = i; 
        }
    }
    return array;
}
console.log("Repeated digit numbers are : " + getNumbers());