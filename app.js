// Declare Variables
const submitButton = document.querySelector('#submit');
const toDo = document.querySelector('.todo')
const itemsCompleted = document.querySelector('.completed')

const toDoArray = [];

// Displays todo items
const showList = () => {
    let itemList = document.createElement('div')

    let completebtn = document.createElement('button')
    completebtn.innerText = 'Completed'
    completebtn.setAttribute('id', 'lists')

    toDoArray.forEach((item) => {
        itemList.innerText = item
        itemList.className = 'todo-item'
        toDo.append(itemList)
        itemList.append(completebtn)
    })
    // moves todo items on to completed and added a remove button
    completebtn.addEventListener('click', () =>{
        itemList.remove();
        completebtn.remove();
        itemsCompleted.append(itemList)

        const removeBtn = document.createElement('button')
        removeBtn.innerText = 'Remove'
        itemList.append(removeBtn)
        removeBtn.onclick = () => {
            itemList.remove()
        }
    })

    
}

submitButton.onclick = () => {
    const inputValue = document.querySelector('#input-box').value
    toDoArray.push(inputValue)
    showList()
}