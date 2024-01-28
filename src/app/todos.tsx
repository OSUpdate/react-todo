import { useState, useEffect } from 'react';
import TodoComponent from './todo';
import { Todo } from '@/model/todo';

export default function TodosComponent() {
    const [todos, setTodosState] = useState<Todo[]>([]);
    useEffect(() => {

        console.log(todos);
    }, [todos]);

    function findTodoIndex(todos: Todo[], id: string): number {
        console.log("find item ***** ", id, todos, todos.findIndex(v => v.id === id));
        return todos.findIndex(v => v.id === id);
    }

    function deleteTodo(id: string) {
        // 요소를 찾을 경우에만 삭제
        setTodosState(oldTodos => {
            const selectedIndex = findTodoIndex(oldTodos, id);
            if (selectedIndex < 0) return oldTodos;
            return [...oldTodos.slice(0, selectedIndex), ...oldTodos.slice(selectedIndex + 1)];
        })
    }

    function updateTodo(id: string, value: string) {
        setTodosState(oldTodos => {
            const selectedIndex = findTodoIndex(oldTodos, id);
            if (selectedIndex < 0) return oldTodos;

            const findTodo = oldTodos[selectedIndex];
            return [...oldTodos.slice(0, selectedIndex), { ...findTodo, value: value }, ...oldTodos.slice(selectedIndex + 2)];
        })
    }

    function addTodo() {
        setTodosState((oldTodos) => {

            return [
                ...oldTodos,
                {
                    id: `${oldTodos.length + 1}`,
                    value: "",
                    onRemove: deleteTodo,
                    onUpdate: updateTodo
                }]
        });

    }


    return (
        <>
            <div className='flex row'>
                <button onClick={addTodo} >추가</button>
            </div>
            <div className="flex column">
                {todos.map(function (todo, index) {
                    return <TodoComponent {...todo} key={`todo-${todo.id}`} />
                })}
            </div>
        </>
    )

}