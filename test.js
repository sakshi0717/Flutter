console.log("Hello world");
let a=8, b=4
console.log(a/b)

// function add(){

// }

// Arrow fuction
const add = ()=>{

}

//spread operator
const obj1= {
    name:"Sakshi"
}


const obj2= {
    lastName:"Ingale"
}

const obj3 = {...obj1, ...obj2}
 
console.log("Spread operator",obj3);


//for of loop 

const arr = [1,2,3,4,5,6];

for (const iterator of arr) {
    console.log("iterator+++++++++++++++++++++++++",iterator);
}


// String includes

let str = "Sakshi Ingale vaishanvi";
console.log("Includes example", str.includes("shi"));

// String Startswith

console.log("Includes Startswith", str.startsWith("Sakshi"));

// String includes
console.log("Includes endsWith", str.endsWith("Sakshi"));

// Array.from

console.log("Array from example", Array.from(str));


// Array keys

let arr2 = [{...obj1, ...obj2}]
const keys = arr.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}
console.log("Array keys example", text);