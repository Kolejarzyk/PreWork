const {performance} = require('perf_hooks');
 // Główna funkcja w której poprzez pętle for dodajemy do tablicy kolejne liczby ciągu poprzez wywołanie funkcji fib(i)
   function fibonacci(n)
    {      
       let array = [];
       for(let i = 0 ; i < n ; i++){
        array.push(fib(i));
      } 
     console.log(array);
    }
    
    // funkcja pomocnicza która zwraca kolejne liczby ciągu fibonacciego
   function fib(i)
    {
        if(i < 2) return i; 
        return fib(i - 1) + fib(i - 2);
    }

/*    
 fibonacci(4) - Wywołanie funkcji podając parametr długości ciągu 4
 Oczekiwany wynik zwrócony przez wywołanie funkcji
 [0, 1, 1, 2]
*/

module.exports.init = function ()
{
  let time0 = performance.now();
  fibonacci(4);
  let time1 = performance.now();
  console.log(time1-time0+" miliseconds");
  
};

require('make-runnable');
