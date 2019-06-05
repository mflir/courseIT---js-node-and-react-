// console.log($('ul'))
// console.log($('#list').html())
// console.log($('li').html())

// $('#list').html('hola mundo')
// $('#list').html('<li>hola mundo<li>')
// $('li').html('hola mundo')
// function find() {
// console.log($('#inputValue').val())
// }


// function agregar() {
//   const greetings = 'hola courseIT';
//   $('#list').append(`<li>${greetings}</li>`)

//   console.log($('li').length)
// }

function agregar() {
  const val = $('#inputValue').val();

  $('#list').append(`<li>${val}</li>`)
  $('#inputValue').val('')
}



// function agregar() {
//   const greetings = "hola courseIT"
//   // const qty = $('li').length
//   $('#list').append(`<li>${greetings}</li>`)

//   const qty = $('li').length
//   console.log(qty)
// }

// function clean() {
//   $('li').remove()
// }