const list = document.querySelector('.book-list ul')

// delete books

list.addEventListener('click', (e) => {
  if(e.target.className == 'deleteButton') {
    const li = e.target.parentElement
    list.removeChild(li);
  }
})

// add books
const addForm = document.forms['add-book']
addForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const value = addForm.querySelector('input[type=text]').value
  console.log(value)


  // create elements
  const li = document.createElement('li')
  const bookName = document.createElement('span')
  const deleteButton = document.createElement('span')

  //add content
  deleteButton.textContent = 'Delete'
  bookName.textContent = value

  //add stlye
  deleteButton.className = 'deleteButton'
  bookName.className = 'name'

  // append to document
  li.appendChild(bookName)
  li.appendChild(deleteButton)
  list.appendChild(li)



})

const emptyInput = document.forms['add-book']
emptyInput.addEventListener('submit', (e) => {
  const emptyValue = addForm.querySelector('input[type=text]').value = '';
})
