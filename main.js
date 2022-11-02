function setup(){console.log("main.js is running.")}

// Fullflesh functions
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

function plusDecimal(number,decimal,pointDepth){if(pointDepth>16){pointDepth=16;number=number+decimal*(1/10**pointDepth);return number}else{number=number+decimal*(1/10**pointDepth);return number}}
function minusDecimal(number,decimal,pointDepth){if(pointDepth>16){pointDepth=16;number=number-decimal*(1/10**pointDepth);return number}else{number=number-decimal*(1/10**pointDepth);return number}}

function root(number, rootBy){
  let n = number, r = rootBy
  let an = n**(1/r)

  if(
    n == undefined || r == undefined ||
    n == NaN || r == NaN ||
    n == null || r == null
  ){console.log("|Invailed|")}

  else if(r == 0){return `Answer is always 1`}

  else{
    if(r == 1){return `${n} = ${n}`}
    else if(r == 2){return `${an} is Squre root of ${n}`}
    else if(r == 3){return `${an} is Cube root of ${n}`}
    else{return `${n} = ${an} Powered By ${r}`}
  }
}

function avarage(array){
  let x = 0
  array.forEach(element => {x += element})
  return x/array.length
}

function randomNumber(array){
  let i = Math.round(Math.random()*array.length)
  if(i == array.length){i = array.length - 1}
  return array[i]
}

function randomPoint(number1, number2){return number1 + Math.random()*(number2 - number1)}
}

// New alpha functions
{}