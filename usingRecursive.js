//check whether a number is prime or not using recursive function

function isPrime(inc, num){
    var inc = inc;
    var num = num;
    var check =  num%inc;
   if(check == 0 && inc < num){
       return "This  number is not prime";
   }else if(check != 0 && inc == num-1){
       return "This is prime number";
   }

   return isPrime(inc+1,num);
}

console.log(isPrime(2,18));