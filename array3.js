function getPrimeFactors(number){
    let isPrime = 0;
    let i,j;
    let count = 0, array = [];
    for(i = 2; i <= number; i++)
    {
        if(number % i == 0)			
        {
            isPrime=1;
            for(j = 2; j <= (i / 2); j++)		
            {
                if((i % j) == 0)		
                    isPrime = 0;
            }
            if(isPrime == 1)
            {
                array[count++] = i;
            }
        }
    }
    return array;
}
const number = prompt('Enter number: ');
console.log("Prime factors of " + number + " are " + getPrimeFactors(number));
