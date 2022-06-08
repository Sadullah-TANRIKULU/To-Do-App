// pseudocode:
// when click add new task with createElement(div)
// upperSection.appendChild(newDiv)
// removeChild()

const allTodosSection = document.querySelector('.all-todos');
const plus = document.querySelector('.plus');


plus.addEventListener('click', (e)=> {

    const newTaskForm = document.createElement(`form`);
    newTaskForm.setAttribute('class', 'current-todo');

    const h4MyTask = document.createElement('h4');
    h4MyTask.setAttribute('class', 'my-task');
    newTaskForm.appendChild(h4MyTask);

    const h4TextNode = document.createTextNode('My Task');
    h4MyTask.appendChild(h4TextNode);

    const textarea = document.createElement('textarea');
    textarea.setAttribute('placeholder', `✍️ write your quick note here... \n\nthen click check button to store it in LOCAL STORAGE 😎 \n\ndon't forget you have only ONE shot! \n\nAttention! You're using LOCAL STORAGE now 🥂 \n\nwhen you click "trash icon" it will be removed from LOCAL STORAGE. 🤬`);
    textarea.setAttribute('class', 'textarea');
    newTaskForm.appendChild(textarea);


    const icons = document.createElement('div');
    icons.setAttribute('class', 'icons');
    newTaskForm.appendChild(icons);

    const iconCheck = document.createElement('i');
    iconCheck.setAttribute('class', 'fa-solid fa-check');
    icons.appendChild(iconCheck);

    const iconTrash = document.createElement('i');
    iconTrash.setAttribute('class', 'fa-solid fa-trash');
    icons.appendChild(iconTrash);

    allTodosSection.appendChild(newTaskForm);
    console.log(allTodosSection);

    textarea.focus();

    iconCheck.addEventListener('click', () => {
        iconCheck.style.display = 'none';
        localStorage.setItem('textareaValue', textarea.value);
        iconCheck.setAttribute('disabled', 'true');
        console.log(iconCheck);        
    });
    
    iconTrash.addEventListener('click', () => {
        localStorage.removeItem('textareaValue', textarea.value);
        newTaskForm.remove();
        
    });
});

window.onload = () => {
    const x = localStorage.getItem('textareaValue');
    // document.querySelector('.textarea').value.innerHTML = x;
    console.log(x);

    const newTaskForm = document.createElement(`form`);
    newTaskForm.setAttribute('class', 'current-todo');

    const h4MyTask = document.createElement('h4');
    h4MyTask.setAttribute('class', 'my-task');
    newTaskForm.appendChild(h4MyTask);

    const h4TextNode = document.createTextNode('My Task');
    h4MyTask.appendChild(h4TextNode);

    const textarea = document.createElement('textarea');
    textarea.setAttribute('placeholder', `✍️ write your quick note here... \n\nthen click check button to store it in LOCAL STORAGE 😎 \n\ndon't forget you have only ONE shot! \n\nAttention! You're using LOCAL STORAGE now 🥂 \n\nwhen you click "trash icon" it will be removed from LOCAL STORAGE. 🤬`);
    textarea.setAttribute('class', 'textarea');
    newTaskForm.appendChild(textarea);
    textarea.value = x;


    const icons = document.createElement('div');
    icons.setAttribute('class', 'icons');
    newTaskForm.appendChild(icons);

    const iconCheck = document.createElement('i');
    iconCheck.setAttribute('class', 'fa-solid fa-check');
    icons.appendChild(iconCheck);

    const iconTrash = document.createElement('i');
    iconTrash.setAttribute('class', 'fa-solid fa-trash');
    icons.appendChild(iconTrash);

    allTodosSection.appendChild(newTaskForm);
    console.log(allTodosSection);

    textarea.focus();

    iconCheck.addEventListener('click', () => {
        iconCheck.style.display = 'none';
        localStorage.setItem('textareaValue', textarea.value);
        iconCheck.setAttribute('disabled', 'true');
        console.log(iconCheck);        
    });
    
    iconTrash.addEventListener('click', () => {
        localStorage.removeItem('textareaValue', textarea.value);
        newTaskForm.remove();
        
    });
}




























