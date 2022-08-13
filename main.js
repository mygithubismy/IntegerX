{
function checkPrime(number)
{
  if(number < 2){return `${number} is less then two.`}

  for(let i = 2; i < number; i++){if(number % i === 0){return `${number} is not a prime number.`}}

  return `${number} is a prime number.`
}

function getPrime(rank)
{
  var primeInitial = [];
  var primeFinal = [1, 2];
  var odd = 3;

  for(let r = 0; r < rank; r++)
  {
    if(odd % primeInitial[r] == 0)
    {
      odd = odd + 2;
      r = 0;
    }

    if(r == primeInitial.length)
    {
      primeInitial.push(odd);
      odd = odd + 2;
      r = 0;
    }
  }

  for(let r = 0; r < rank; r++){primeFinal.push(primeInitial[r])}
  return `${primeFinal[rank]}`
}

function listPrime(number)
{
  var primeInitial = [];
  var primeFinal = [2];
  var odd = 3;

  for(let i = 0; i < number; i++)
  {
    if(odd % primeInitial[i] == 0){
      odd = odd + 2;
      i = 0;
    }
    if(i == primeInitial.length){
      primeInitial.push(odd);
      odd = odd + 2;
      i = 0;
    }
  }

  for(let i = 0; i < number-1; i++){primeFinal.push(primeInitial[i])}
  console.table(primeFinal);
}

function F(n){x=1;for(i=n;i>0;i--){x*=i}return x}
function findFactorial(number)
{
  let f;
  let i;
  i = number;
  f = i;
  if(i === 0){return `0! = 1`}
  while(i > 1)
  {
    i--;
    f *= i;
  }
  if(number == undefined || NaN == number){console.log("!Invailed input!")}
  else if(number !== undefined || NaN !== number){return `${number}! = ${f}`}
}

function findPermutation(number, r)
{
  let p;
  p = F(number)/F(number-r);
  if(number == undefined || NaN == number){console.log("!Invailed input!")}
  else if(r == undefined || NaN == r){console.log("!Invailed input!")}
  else if(number < r){console.log("Error: First value is less then second")}
  else if(number < 0){console.log("First value is less then 0")}
  else if(r < 0){console.log("Second value is less then 0")}
  else{return p}
}

function findCombination(number, r)
{
  let c;
  c = findPermutation(number, r)/F(r);
  return c;
}

function setup(){console.log("main.js is running.")}
}