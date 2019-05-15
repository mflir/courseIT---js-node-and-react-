// const users = [{ name: "Juani", age: 25 }, { name: "Dami", age: 24 }, { name: "Marcelo", age: 52 }]

// const newArrAge = users.map().sort().reverse()
// console.log('the oldest is: ' + newArrAge[0].name)




// const palindromo = (txt) => {
//   const newArr = txt.split('').reverse('').join('');

//   if (txt === newArr) {
//     console.log('true')
//   } else {
//     console.log('false')
//   }

// }

// palindromo('sugus')





// let peliculasArr = ['una', 'dos', 'tres']

// const agregarPeliculas = (pelicula) => {
//   if (peliculasArr.indexOf(pelicula < -1)) {
//     peliculasArr.push(pelicula)
//   }
// }

// const borrarPeliculas = (pelicula) => {
//   if (peliculasArr.indexOf(pelicula > -1)) {
//     peliculasArr.splice(index, 1)
//   }
// }



const getFizzBuzzArr = function (valor) {
  let arr = []
  for (var i = 1; i <= valor; i++) {
    if (i % 15 === 0) {
      arr.push('fizzbuzz')
    } else if (i % 5 === 0) {
      arr.push('buzz')
    } else if (i % 3 === 0) {
      arr.push('fizz')
    } else {
      arr.push(i)
    }
  }

  return arr;
}


console.log(getFizzBuzzArr(15));

