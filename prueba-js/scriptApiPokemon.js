function agregar() {

  $.ajax({
    method: "GET",
    url: "https://pokeapi.co/api/v2/evolution-chain/?limit=20&offset=20h"
  }).done(data => {
    console.log(data)
  });

}



// function sombrero() {

//   $.ajax({
//     method: "GET",
//     url: "https://api.thecatapi.com/v1/images/search?category_ids=1"
//   }).done(data => {
//     console.log(data[0].url);

//     $('#img').html(`<img src="${data[0].url}"/>`)
//   });

// }

// function anteojos() {

//   $.ajax({
//     method: "GET",
//     url: "https://api.thecatapi.com/v1/images/search?category_ids=4"
//   }).done(data => {
//     console.log(data[0].url);

//     $('#img').html(`<img src="${data[0].url}"/>`)
//   });

// }

// function espacio() {

//   $.ajax({
//     method: "GET",
//     url: "https://api.thecatapi.com/v1/images/search?category_ids=2"
//   }).done(data => {
//     console.log(data[0].url);

//     $('#img').html(`<img src="${data[0].url}"/>`)
//   });

// }



// function agregar(id) {
//   let url;

//   if (!id) {
//     url = "https://api.thecatapi.com/v1/images/search"
//   } else {
//     url = `https://api.thecatapi.com/v1/images/search?category_ids=${id}`
//   }

//   $.ajax({
//     method: "GET",
//     url: url
//   }).done(data => {
//     //console.log(data[0].url);

//     $('#img').html(`<img src="${data[0].url}"/>`)
//   });

// }


