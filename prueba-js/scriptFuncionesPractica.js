// // EJERCICIO 1 



// function(arrFizz (valor)) {
// for (let i = 0; i <= valor; i++) {

//   let resto3 = valor % 3;
//   let resto5 = valor % 5;

//   if (resto3 == 0) {
//     i = 'Fizz';
//   } if (resto5 == 0) {
//     i = 'Buzz';
//   }
//   if (resto3 == 0 && resto5 == 0) {
//     i = 'BuzzFizz'
//   }
//   else { (i) };

// }


// }
// console.log (arrFizz(5));







// for (let i = 0; i <= valor; i++) {
//   arr = arr[i]
// }




// const multiple = function (valor) {

//   for (let i = 0; i > valor; i++) {
//     console.log(i)
//     let resto3 = (valor % 3) == 0;
//     let resto5 = (valor % 5) == 0;

//     if (resto3) {
//       i = 'Fizz';
//     } if (resto5) {
//       i = 'Buzz';
//     }
//     if (resto3 && resto5) {
//       i = 'BuzzFizz'
//     }
//     else { (i) };

//   }


// }

// console.log(multiple([5]));



// const getFizzBuzz = function (valor) {

//   const dup = [];

//   for (let i = 1; i <= valor; i++) {
//     console.log(i)
//     let resto3 = (i % 3 == 0);
//     let resto5 = (i % 5 == 0);
//     if (resto3) {
//       dup.push('Fizz');


//     }
//     // if (resto5) {
//     //   dup.push('Buzz');


//     // }
//     // if (resto3 && resto5) {
//     //   dup.push('BuzzFizz');
//     // }
//     else {
//       dup.push(i)

//     };
//   }

//   return dup;
// }

// console.log(getFizzBuzz(15))



// const getFizzBuzz = function (valor) {
//   for (var i = 1; i <= valor; i++) {
//     if (i % 15 === 0) {
//       console.log('fizzbuzz')
//     } else if (i % 5 === 0) {
//       console.log('buzz')
//     } else if (i % 3 === 0) {
//       console.log('fizz')
//     } else {
//       console.log(i)
//     }
//   }
// }


// getFizzBuzz(15);


// const getFizzBuzzArr = function (valor) {
//   let arr = []
//   for (var i = 1; i <= valor; i++) {
//     if (i % 15 === 0) {
//       arr.push('fizzbuzz')
//     } else if (i % 5 === 0) {
//       arr.push('buzz')
//     } else if (i % 3 === 0) {
//       arr.push('fizz')
//     } else {
//       arr.push(i)
//     }
//   }

//   return arr;
// }


// console.log(getFizzBuzzArr(15));



// const getPares = function (arr) {
//   par = []
//   arr.map((num) => {
//     if (num % 2 === 0) {
//       par.push(num)
//     }
//   });

//   console.log(par)
// }
// getPares([1, 2, 3, 4, 6, 8, 7])

// const txt = 'juani';
// const newArr = txt.split('').reverse('').join('');
// console.log(newArr)



class Counter {
  constructor(startValue) {
    this.value = startValue;
  }

  getValue() {
    return `El value es ${this.value}`;
  }

  incrementValue() {
    this.value++;
  }

  decrementValue() {
    this.value--;
  }

  resetValue() {
    this.value = 0;
  }
}

const newCounter = new Counter(0);
console.log(newCounter.getValue());

newCounter.incrementValue();
console.log(newCounter.getValue());

newCounter.decrementValue();
console.log(newCounter.getValue());

newCounter.resetValue();
console.log(newCounter.getValue());

console.log(newCounter.value);






//   arr.map((num) => {
//     if (num > biggest) {
//       biggest = num;
//       counter = 1;
//     } else if (num == biggest) {
//       counter = counter + 1;
//     }
//   });

//   console.log(counter);
// }

// biggest([3, 10, 23, 2, 3, 23, 9, 1, 23, 4, 49, 49]);



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



