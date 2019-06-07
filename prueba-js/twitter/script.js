const users = [
  {
    name: 'Juani Gallo',
    handler: '@_JuanGallo'
  },
  {
    name: 'Nati Guida',
    handler: '@NatiGuidaa'
  },
  {
    name: 'CourseIT',
    handler: '@courseit_'
  }
]

// function hola() {

//   const input = document.getElementById('aca')
//   const h1 = document.getElementById('acaTambien')
//   const valorInput = input.value

//   h1.innerHTML = valorInput

// }



function hola() {
  const input = document.getElementById('aca')
  const h1 = document.getElementById('acaTambien')
  let valorInput = input.value
  h1.innerHTML = valorInput

  users.map((person) => {
    console.log(person)
  })



}