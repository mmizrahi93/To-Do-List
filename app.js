// Declare Variables
const submitButton = document.querySelector('#submit');
const toDo = document.querySelector('.todo')
const itemsCompleted = document.querySelector('.completed')

const toDoArray = [];

// Displays todo items
const showList = () => {
    let itemList = document.createElement('div')

    let createBtn = document.createElement('button')
    createBtn.innerText = 'Completed'
    createBtn.setAttribute('id', 'lists')

    toDoArray.forEach((item) => {
        itemList.innerText = item
        itemList.className = 'todo-item'
        toDo.append(itemList)
        itemList.append(createBtn)
    })
}

submitButton.onclick = () => {
    const inputValue = document.querySelector('#input-box').value
    toDoArray.push(inputValue)
    showList()
}