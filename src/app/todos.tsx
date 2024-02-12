import { useState, useEffect } from 'react';
import TodoComponent from './todo';
import { Todo } from '@/model/todo';
import { todosState } from "@/store/todos";
import { findPropIndex } from "@/global/util";
import { useRecoilState } from 'recoil';

export default function TodosComponent() {
    // const [todos, setTodosState] = useState<Todo[]>([]);
    const [todos, setTodosState] = useRecoilState(todosState);


    useEffect(() => {

        console.log(todos);
    }, [todos]);


    function deleteTodo(id: string) {
        // 요소를 찾을 경우에만 삭제
        setTodosState(oldTodos => {
            const selectedIndex = findPropIndex(oldTodos, "id", id);
            if (selectedIndex < 0) return oldTodos;
            return [...oldTodos.slice(0, selectedIndex), ...oldTodos.slice(selectedIndex + 1)];
        })
    }

    function updateTodo(id: string, value: string) {
        setTodosState(oldTodos => {
            const selectedIndex = findPropIndex(oldTodos, "id", id);
            if (selectedIndex < 0) return oldTodos;

            const findTodo = oldTodos[selectedIndex];
            console.log(findTodo);
            return [...oldTodos.slice(0, selectedIndex), { ...findTodo, value: value }, ...oldTodos.slice(selectedIndex + 1)];
        })
    }

    function addTodo() {
        setTodosState((oldTodos) => {
            return [
                ...oldTodos,
                {
                    id: `${oldTodos.length + 1}-${Date.now()}`,
                    value: "",
                    onRemove: deleteTodo,
                    onUpdate: updateTodo
                }]
        });

    }


    return (
        <div className="todos">
            <div className='todos__header pb-3'>
                <div className='todos__header--title pb-1.5'>
                    <h1 className='text-[24px]'>Todo 목록</h1>
                </div>
                <div className='todos__header--btns'>
                    <div className='flex-row'>
                        <button onClick={addTodo} >목록 추가</button>
                    </div>
                </div>
            </div>

            <div className='todos_body'>
                <div className="flex flex-col gap-y-2">
                    {todos.map(function (todo, index) {
                        return <TodoComponent {...todo} key={`todo-${todo.id}`} />
                    })}
                </div>
            </div>
        </div>
    )

}