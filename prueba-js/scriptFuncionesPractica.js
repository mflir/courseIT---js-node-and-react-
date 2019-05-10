// EJERCICIO 1 



for (let i = 0; i <= valor; i++) {
  return arr;
}  

const newArr = arr.map(function(valor) {
  
    let resto3 = valor % 3;
    let resto5 = valor % 5;

    if (resto3 == 0) {
      i = 'Fizz';
    } if (resto5 == 0) {
      i = 'Buzz';
    }
    if (resto3 == 0 && resto5 == 0) {
      i = 'BuzzFizz'
    }
    else { (i) };

  }
  return respuesta;
})






const respuesta = arr.map(function (valor) {

  for (let i = 0; i <= valor; i++) {
    let resto3 = valor % 3;
    let resto5 = valor % 5;

    if (resto3 == 0) {
      i = 'Fizz';
    } if (resto5 == 0) {
      i = 'Buzz';
    }
    if (resto3 == 0 && resto5 == 0) {
      i = 'BuzzFizz'
    }
    else { (i) };

  }
  return respuesta;
});


console.log(multiple([5]));


//----------------------------------------------

// function maxNum(arr) {
//   //console.log(arr)
//   let biggestNumber = 0;
//   let secondBiggestNumber = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > biggestNumber) {
//       biggestNumber = arr[i]
//     }
//     if (arr[i] > secondBiggestNumber && arr[i] != biggestNumber) {
//       secondBiggestNumber = arr[i]
//     }
//   }

//   return [secondBiggestNumber, biggestNumber];
// }

// const arr = [1, 2, 36, 23];

// console.log(maxNum(arr));


//----------------------------------------------



// EJERCICIO 2

// function numeroRepetido(arr) {
//   let seRepite;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === (arr.length - 1)) {
//       seRepite = arr[i];
//     }
//   }

//   return seRepite;
// }


// const arr = [1, 2, 3, 2, 3, 4, 1];

// console.log(numeroRepetido(arr));




