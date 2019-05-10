//EJERCICIO 1 (BIEN CON DOS SOLUCIONES)

// function duplicados(arr) {
//   // creo un lugar donde guardar todos los duplicados y agrego elementos con push
//   const dup = [];
//   const seen = []; // lo que ya vimos 

//   for (let i = 0; i < arr.length; i++) {

//     if (seen.indexOf(arr[i]) > -1 && dup.indexOf(arr[i]) == -1) {
//       dup.push(arr[i]);
//     } else if (seen.indexOf(arr[i]) == -1) {
//       seen.push(arr[i]);
//     }
//   }
//   console.log(seen)
//   return seen;
// }

// duplicados([1, 2, 3, 2, 3, 4, 1]);


// PRIMER SOLUCION :


// console.log(arr[i]); 

// if (seen.indexOf(arr[i]) > -1) {
//   dup.push(arr[i]);
// } else {
//   seen.push(arr[i]);
// }

//----------------------------------------------


//EJERCICIO 2 



// function duplicados(arr) {
//   const seen = [];
//   for (let i = 0; i < arr.length; i++) {
//     const iof = seen.indexOf(arr[i]);
//     if (iof > -1) {
//       seen.splice(iof, 1);
//     } else {
//       seen.push(arr[i]);
//     }
//   }
//   console.log(dup)
//   return dup;
// }

// duplicados([1, 2, 3, 2, 3, 4, 1, 2]);






// //EJERCICIO CON MAYOR PERFORMANCE

// function duplicados(arr) {
//   const seen = [];
//   const blacklist = [];
//   for (let i = 0; i < arr.length; i++) {
//     const iof = seen.indexOf(arr[i]);
//     if (iof > -1) {
//       seen.splice(iof, 1);
//     } else if (blacklist.indexOf(arr[i]) == -1) {
//       seen.push(arr[i]);
//       blacklist.push(arr[i]);
//     }
//   }
//   console.log(seen)
//   return seen;
// }

// duplicados([1, 2, 3, 2, 3, 4, 1, 2]);






//COMPARAR DUP Y SEEN:


// function duplicados(arr) {
//   const dup = [];
//   const seen = [];

//   const result = [];

//   for (let i = 0; i < arr.length; i++) {

//     if (seen.indexOf(arr[i]) > -1 && dup.indexOf(arr[i]) == -1) {
//       dup.push(arr[i]);
//     } else if (seen.indexOf(arr[i]) == -1) {
//       seen.push(arr[i]);
//     }
//   }

//   for (let z = 0; z < seen.length; z++) {
//     if (dup.indexOf(seen[z]) == -1) {
//       result.push(seen[z]);
//     }

//   }

//   console.log(result)
// }

// duplicados([1, 2, 3, 2, 3, 4, 1]);


//EJERCICIO 3 

// function biggestDup(arr) {

//   let biggest = 0;
//   let contador = 1; //porque minimo una vez hay un numero mas grande aunqe sea el 0

//   for (let i = 0; i < arr.length; i++) {
//     if (biggest < arr[i]) {
//       biggest = arr[i]
//       contador = 1;
//     } else if (biggest == arr[i]) {
//       contador = contador + 1;
//     }

//   }
//   return contador;
// }
// const arr = [3, 10, 23, 2, 3, 23, 9, 1, 23, 4, 49, 49]
// console.log(biggestDup(arr))






//VERSION CON MAP :

function biggest(arr) {

  let biggest = 0;
  let counter = 1;

  arr.map((num) => {
    if (num > biggest) {
      biggest = num;
      counter = 1;
    } else if (num == biggest) {
      counter = counter + 1;
    }
  });

  console.log(counter);
}

biggest([3, 10, 23, 2, 3, 23, 9, 1, 23, 4, 49, 49]);