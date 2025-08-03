/*const myObject={
    "name":"alice",
"age":25,
"isstudent":true,
"hobbies":["reading","coding"] ,
    "address":{
        "city":"New York",
        "ZipCode":"10001"
    }
}
console.log(`Name:${myObject.name}`);
console.log(`age:${myObject.age}`);
console.log(`ZipCode:${myObject.address.ZipCode}`);
console.log(`hobbies:${myObject.hobbies[0]}`);*/

/*let arr=[];
for( let i=1;i<=100;i++){
    arr.push(i);
}
for(let i=0;i<arr.length;i++){
    arr[i]=arr[i]*3;
}
let narr=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]%5==0){
        narr.push(arr[i]);
    }
}
let sum=0;
for(let i=0;i<narr.length;i++){
    sum+=narr[i];
}
console.log(sum);*/

/*let arr=[3,4,-5,-6,7]
let b= arr.filter(x=>x>0).reduce((a,x)=>a+x);
console.log(b);*/


const users=[

    {name:'Alice',age:25},
    {name:'bob',age:30},
    {name:'Charlie', age:25}
];
let avg=0;
let sum=0
for(let i=0;i<users.length;i++){
    sum+=users[i].age;
}
    avg=sum/3;
console.log(avg);
