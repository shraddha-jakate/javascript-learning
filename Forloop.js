// for 

for (let index = 0; index < 10; index++) {
const element = index;
//console.log(element);

}

//console.log()


for(let i=0; i<=10; i++) {
    const element = i;
   // console.log(element)
    if (element ==5){
       console.log("5 is the best number")

    }
}

for (let i=0; i<=10; i++){
    console.log('outer loop value: ${i}');
    for (let j=0; j<3;j++){
        //console.log('inner loop value ${j} and inner loop ${i}');
//console.log(i + '*' + j + '+' + i*J);

  }

}
let myArray = ["flash","batman","superman"]
console.log(myArray.length)
for (let index = 0; index <= myArray.length; index++) {
    const element = myarray[index];
    //console.log(element);
}



//break and continue

for (let index = 1; index <=2; index++){
if (index ==5){
    console.log(('Detected 5'));
    continue
}
 console.log('value of i is ${index}');

}

