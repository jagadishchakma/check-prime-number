// Check prime number
function isPrime(n){
    for(var i = 2; i < n; i++){
        var check = n % i;
        if(check === 0){
            return n + " is not a prime number";
        }
    }
    return n + " is a prime number";
}
var number = isPrime(13);

console.log(number);