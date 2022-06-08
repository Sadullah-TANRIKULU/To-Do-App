// pseudocode:
// when click add new task with createElement(div)
// upperSection.appendChild(newDiv)
// removeChild()
// 
const allTodosSection = document.querySelector('.all-todos');
const plus = document.querySelector('.plus');

plus.addEventListener('click', (e)=> {

    // const newTaskForm = document.createElement('form');
    const newTaskForm = document.createElement(`form`);

    newTaskForm.setAttribute('class', 'w-50 h-50 bg-info m-3');

    const h4MyTask = document.createElement('h4');
    newTaskForm.appendChild(h4MyTask);

    const h4TextNode = document.createTextNode('My Task');
    h4MyTask.appendChild(h4TextNode);

    const iconElement = document.createElement('i');
    iconElement.setAttribute('class', 'text-success fa-solid fa-check');
    newTaskForm.appendChild(iconElement);



    
    allTodosSection.appendChild(newTaskForm);





})





























