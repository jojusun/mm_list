
function App() {
    
   const $ = (selector) => document.querySelector(selector);
   
   $('.input-todo').addEventListener('keypress',(e) =>{
       if(e.key==='Enter'){
        const addTodoList = $('.input-todo').value;
        const todoitem = (addTodoList) => {
            return `<div class = 'todo-list'>
            <div class = 'add-todo-list'>
                <div class = 'add-list'>${addTodoList}</div>
                <button class = 'b1'>완료</button>
                <button class = 'b2'>삭제</button>
            </div>
        </div>`
        };
        $('.real-last').insertAdjacentHTML('afterbegin',todoitem(addTodoList));
   }
})

    $('.add-button').addEventListener('click',(e) => {
        const addTodoList = $('.input-todo').value;
        const todoitem = (addTodoList) => {
            return `<div class = 'todo-list'>
            <div class = 'add-todo-list'>
                <div class = 'add-list'>${addTodoList}</div>
                <button class = 'b1'>완료</button>
                <button class = 'b2'>삭제</button>
            </div>
        </div>`
        };
        $('.real-last').insertAdjacentHTML('afterbegin',todoitem(addTodoList));
    })
}

App();