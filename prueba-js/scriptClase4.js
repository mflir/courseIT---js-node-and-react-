// const haceFrio = true; //boolean

// if (haceFrio == true) {
//   console.log('Hace frio');
// } else {
//   console.log('No hace frio');
// }

// CODIGO MAL
// function displayName (name) {
//   const saludo = `Mi name es ${name}`;
// }

// const saludo = displayName('juani');

// console.log(saludo);


// function displayName(name) {
//   return `Mi name es ${name}`;
// }

// const saludo = displayName('juani');

// console.log(saludo);



// function displayNameAge(name, age) {
//   return `Mi nombre es ${name} y tengo ${age} años`
// }

// const saludo = displayNameAge('juani', 25);

// console.log(saludo);


// funtion display(name , age) {

//   function displayAge() {
//     return age;
//   }

//   function displayName() {
//     return name;
//   } 

//   const age 
// }


//ejercicio 4 (correcto) !!!!


// function maxNum(arr) {
//   //console.log(arr)
//   let biggestNumber = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > biggestNumber) {
//       biggestNumber = arr[i];
//     }
//   }

//   return biggestNumber; // lo pongo cuando salgo de for 
// }

// const arr = [1, 2, 36, 23];

// console.log(maxNum(arr));




function maxNum(arr) {
  //console.log(arr)
  let biggestNumber = 0;
  let secondBiggestNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggestNumber) {
      biggestNumber = arr[i]
    }
    if (arr[i] > secondBiggestNumber && arr[i] != biggestNumber) {
      secondBiggestNumber = arr[i]
    }
  }

  return [secondBiggestNumber, biggestNumber];
}

const arr = [1, 2, 36, 23];

console.log(maxNum(arr));







// function maxNum(arr) {
//   //console.log(arr)
//   let biggestNumber = 0;
//   let secondBiggestNumber = 0;
//   let number = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > number) {
//       biggestNumber = arr[i]
//       secondBiggestNumber = number;
//     }
//   }

//   return [secondBiggestNumber, biggestNumber];
// }

// const arr = [1, 2, 36, 23];

// console.log(maxNum(arr));

