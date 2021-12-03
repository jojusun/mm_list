
function App() {
    
   const $ = (selector) => document.querySelector(selector);
   const addTodoList = $('.input-todo').value;
    //add html tag
   const todoItem = (addTodoList) => {
    return `<div class = 'todo-list'>
                <div class = 'add-todo-list'>
                   <div class = 'add-list'>${addTodoList}</div>
                   <button class = 'b1'>완료</button>
                   <button class = 'b2'>삭제</button>
                </div>
            </div>`
    };

    const ok = () => {
        return ` <div class = 'todo-list'>
        <div class = 'add-todo-list'>
           <div class = 'add-list'>완료되었습니다.</div>
           <button class = 'b2' padding-left :320px;>삭제</button>
        </div>
    </div>`
    }
   
    //enter눌렀을 때 목록 추가
   $('.input-todo').addEventListener('keypress',(e) =>{
 
     if(e.key ==='Enter'){
         const addTodoList = $('.input-todo').value;
         if(addTodoList!==''){
        todoItem(addTodoList);
        $('.real-last').insertAdjacentHTML('afterbegin',todoItem(addTodoList));
        $('.input-todo').value = '';
         } else if(addTodoList==='') {
             alert('할일을 입력하세요');
             return;
         }
       }
    })

    //버튼 눌렀을 때 목록 추가
    $('.add-button').addEventListener('click',(e) => {
        const addTodoList = $('.input-todo').value;
        if(addTodoList!==''){
        todoItem(addTodoList);
        $('.real-last').insertAdjacentHTML('afterbegin',todoItem(addTodoList));
        $('.input-todo').value = '';
        } else if(addTodoList===''){
            return alert('값을 입력하세요');
        }
    })

    //삭제 버튼 
    $('.real-last').addEventListener('click',(e) => {
        if(e.target.classList.contains('b2')){
            e.target.closest('.todo-list').remove();
        }
    })

    //완료 버튼
    $('.real-last').addEventListener('click',(e) => {
        const addTodoList = $('.input-todo').value;

        if(e.target.classList.contains('b1')){
            e.target.closest('.add-todo-list').outerHTML =
            ok(addTodoList);
        }
    })
}

App();