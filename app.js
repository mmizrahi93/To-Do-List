// Declare Variables
const submitButton = document.querySelector('#submit');
const toDo = document.querySelector('.todo')
const itemsCompleted = document.querySelector('.completed')

const toDoArray = [];

// Displays todo items
const showList = () => {
    const itemList = document.createElement('div')
    // created 'completed' button
    const completebtn = document.createElement('button')
    completebtn.className = 'complete-button'
    completebtn.innerText = 'Completed'
    completebtn.setAttribute('id', 'lists')

    // assigns the value and class name for each item in the todo array
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
        removeBtn.className = 'remove-button'
        removeBtn.innerText = 'Remove'
        itemList.className = 'done-item'
        itemList.append(removeBtn)
        removeBtn.onclick = () => {
            itemList.remove()
        }
    })

    
}
// puts the input value into an array and runs the showlist function
submitButton.onclick = () => {
    const inputValue = document.querySelector('#input-box').value
    toDoArray.push(inputValue)
    document.querySelector('#input-box').value = ''
    showList()
}