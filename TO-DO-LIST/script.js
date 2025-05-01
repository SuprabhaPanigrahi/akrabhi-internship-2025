document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    function renderTodos() {
        todoList.innerHTML = '';
        
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.className = 'todo-item';
            
            if (todo.isEditing) {
                li.innerHTML = `
                    <input type="text" class="edit-input" value="${todo.text}">
                    <div class="todo-actions">
                        <button class="save-btn" data-index="${index}">Save</button>
                    </div>
                `;
            } else {
                li.innerHTML = `
                    <span class="todo-text ${todo.completed ? 'completed' : ''}">${todo.text}</span>
                    <div class="todo-actions">
                        <button class="edit-btn" data-index="${index}">Edit</button>
                        <button class="delete-btn" data-index="${index}">Delete</button>
                    </div>
                `;
            }
            
            const todoText = li.querySelector('.todo-text');
            if (todoText) {
                todoText.addEventListener('click', () => {
                    toggleComplete(index);
                });
            }
            
            todoList.appendChild(li);
        });
        
        addEventListeners();
    }
    
    function addTodo() {
        const text = todoInput.value.trim();
        if (text) {
            todos.push({ text, completed: false, isEditing: false });
            saveTodos();
            todoInput.value = '';
            renderTodos();
        }
    }
    
    function toggleComplete(index) {
        todos[index].completed = !todos[index].completed;
        saveTodos();
        renderTodos();
    }
    
    function editTodo(index) {
        todos.forEach((todo, i) => {
            todo.isEditing = i === index;
        });
        saveTodos();
        renderTodos();
    }
    
    function saveEdit(index) {
        const editInput = document.querySelector(`.edit-input`);
        const newText = editInput.value.trim();
        
        if (newText) {
            todos[index].text = newText;
            todos[index].isEditing = false;
            saveTodos();
            renderTodos();
        }
    }
    
    function deleteTodo(index) {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
    }
    
    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    
    function addEventListeners() {
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                editTodo(parseInt(e.target.getAttribute('data-index')));
            });
        });
        
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                deleteTodo(parseInt(e.target.getAttribute('data-index')));
            });
        });
        
        document.querySelectorAll('.save-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                saveEdit(parseInt(e.target.getAttribute('data-index')));
            });
        });
    }
    
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    
    renderTodos();
});