

/*const a=5;
console.log('the value of a is '+a);
console.log(`the value of a is also ${a}`);*/

/*function greet(name,age){
    let message=`hello,${name}. Your are ${age} years old`;
    return message;
}
const greeting=greet("Alice","18");
console.log(greeting);*/

/*let counter=0;
while(counter<3){
    console.log(`Loop itreation: ${ counter}`);
    counter=counter+1;
}
console.log("while loop finished");*/

/*const fruits=["Apple","mango","Orange"];
for(let i=0;i<fruits.length;i++){
    console.log(`Fruits at index ${i} is ${fruits[i]}`);
}*/


/*let temprature=25;
if(temprature>30){
    console.log("It's Hot today");
}else if(temprature>20)
{
    console.log("It is  a pleasant day")
}*/


/*function calculateArea(length,width=1){
    return length* width;
}


const rectangleArea = calculateArea(10,5);
console.log(`area of 10x5 rectangle is:${rectangleArea}`);

const squareArea=calculateArea(8,8);
console.log(`Area of a square with side 8 is : ${squareArea}`);*/



/*const getsum=function(a,b) { return a+b;};
const sum = getsum(15,20);
console.log(`The sum of 15 and 20 is:${sum}`);

const multiply = (x,y)=> x*y;
console.log(`The product of 5 and 6 is:${multiply(5,6)}`); 
function mult(x,y){
    const c=x*y;
    return c;
}*/


/*let sum=0;

for( let i=0;i<1000;i++){
    if(i%3===0|| i%5===0){
        sum+=i;
    }
    
}
console.log(`The sum of numbers below 1000 and that are divisible by 3 or 5 is:${sum}`);*/


//practical 2


/*let sum=0; 
let a=1;
let b=1;
while(b<4000000){
    if(b%2==0){
        sum+=b;
    }
    let next=a+b;
    a=b;
    b=next;
}
console.log(`The sum of all even fibbo numbers under 4000000 is: ${sum}`);*/

/*let number = 600851475143;
let i = 2;

while (i <= number) {
  if (number % i === 0) {
    number = number / i;
  } else {
    i++;
  }
}

console.log("Largest prime factor:", i);*/

/*let num=100n;
let fact=1n;
let sum=0n;
for(let i=2n;i<=num;i++){
fact*=i;
}
while(fact>0n){
    let digit=fact%10n;
    sum+=digit;
    fact/=10n;
}
console.log(Number(sum));*/


   /* const stringarray=["1","2","3"];
    const number=parseInt(stringarray.join(''),10);
    console.log(number);*/


    