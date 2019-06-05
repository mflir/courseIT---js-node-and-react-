// function createListItem(arr) {
//   const list = document.getElementById('list');

//   for (let i = 0; i < arr.length; i++) {
//     const listItem = document.createElement('li');
//     //const text = document.createTextNode(i); 
//     const text = document.createTextNode(arr[i]);
//     listItem.appendChild(text);
//     list.appendChild(listItem);
//   }
// }

// createListItem(['juani', 'nati', 'courseIt']);



// function clickMe() {
//   alert('hola mundo');
// }

// function deleteList() {
//   const list = document.getElementById('list');
//   list.parentNode.removeChild(list);
// }


// const greeting = document.getElementById('geeting');

// greeting.classList.add('hola')
// greeting.classList.add('chau')
// greeting.classList.remove('chau')
// console.log(greeting.classList)


// function clean() {
//   const inputText = document.getElementsByClassName('inputText')

//   for (let i = 0; i < inputText.length; i++)
//     inputText[i].value = ' ';
// }

function addItem() {
  const item = document.getElementById('item');
  const itemValue = item.value;
  const list = document.getElementById('list');
  const listItem = document.createElement('li')
  const text = document.createTextNode(itemValue)
  listItem.appendChild(text)
  list.appendChild(listItem)
  item.value = "";
  listItem.classList.add('aca')
}

function removeItem() {
  const list = document.getElementsByClassName('aca');
  console.log(list)
  list[0].parentNode.removeChild(list[0])
}

function removeList() {
  console.log('click')
  const list = document.getElementById("list")

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

