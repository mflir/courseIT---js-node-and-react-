

// function hola() {
//   $.ajax({
//     method: "GET",
//     url: "https://api.github.com/users/mflir"
//   }).done(data => {
//     console.log(data);

//     $('#hola').html(`<p>${data.name}</p>`)
//     $('#chau').html(`<p>${data.bio}</p>`)
//     $('#hola2').html(`<img src="${data.avatar_url}"/>`)

//   });
// }




// function valor() {

//   const user = $("#input-value").val()
//   $.ajax({
//     method: "GET",
//     url: `https://api.github.com/users/${user}`
//   }).done(data => {
//     console.log(data);
//     $('#hola').html(`<p>${data.name}</p>`)
//     $('#chau').html(`<p>${data.bio}</p>`)
//     $('#hola2').html(`<img src="${data.avatar_url}"/>`)
//   }).fail(err => {
//     console.log('fallo')
//   })
// }

function valorAgregar() {

  const name = $("#input-value-name").val()
  const lastname = $("#input-value-lastname").val()
  const age = $("#input-value-age").val()

  $.ajax({
    method: 'POST',
    data: {
      name: `${name}`,
      lastname: `${lastname}`,
      age: `${age}`
    },
    url: `http://courseit.com.ar:3005/user`
  });


  $.ajax({
    method: "GET",
    url: `http://courseit.com.ar:3005/user`
  }).done(data => {
    console.log(data);
  })
}

function valorModificar() {

  const name = $("#input-value-name").val()
  const lastname = $("#input-value-lastname").val()
  const age = $("#input-value-age").val()
  console.log(123)

  $.ajax({
    method: "PUT",
    data: {
      name: `${name}`,
      lastname: `${lastname}`,
      age: `${age}`
    },
    url: `http://courseit.com.ar:3005/user/5cf9b2271fb457001004201b`
  });

}


