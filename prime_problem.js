//check prime or not prime

function check_prime(num){
   let count=1;

   for(let i=1; i<=num; i++){

       if(num%i==1){
         count++;
       }
   }
   if(count==2){
   return true;
   }
   return false;

}
let ans= check_prime(11);

if(ans==false){
   console.log("num is","Prime Number");
}else{
   console.log("num is","Not Prime");
}
