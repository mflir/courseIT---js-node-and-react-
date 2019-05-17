// const a = document.getElementById('test')
// const b = document.getElementsByClassName('test')
// const c = document.getElementsByTagName('p')

// console.log(b)
// console.log(c)

// console.log(a.innerHTML)
// a.innerHTML = 'Hola mundo'
// console.log(a)

// const nombre = document.getElementById("nombre");

// nombre.value = 'hola juani'


// console.log(123, nombre.value)// llamar a las funciones desde la variable 

function creasteListItem(value) {
  const list = document.getElementById('list')
  const listItem = document.createElement('li')
  const text = document.createTextNode(value)

  listItem.appendChild(text)
  list.appendChild(listItem)
}


creasteListItem('hola')
creasteListItem('courseIT')