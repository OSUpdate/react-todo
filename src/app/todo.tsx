
import { useState } from "react";
import { Todo } from "@/model/todo";
import { useModal } from "@/hooks";
import { todosState } from "@/store/todos";
import { useRecoilState } from 'recoil';
import { findPropIndex } from "@/global/util";

export default function TodoComponent({ id, value, onUpdate, onRemove }: Todo) {
    const [isUpdate, setisUpdateState] = useState<boolean>(false);
    const [todos, setTodosState] = useRecoilState(todosState);
    const { setModal, showModal } = useModal()
    function changeIsUpdate() {
        setisUpdateState(!isUpdate);
    }
    function onChange(e: { target: { value: string } }) {
        console.log(onUpdate);
        onUpdate(id, e.target.value);
    }

    function deleteTodo(id: string) {
        // 요소를 찾을 경우에만 삭제
        setTodosState(oldTodos => {
            const selectedIndex = findPropIndex(oldTodos, "id", id);
            if (selectedIndex < 0) return oldTodos;
            return [...oldTodos.slice(0, selectedIndex), ...oldTodos.slice(selectedIndex + 1)];
        })
    }

    function clickModalBtn() {
        setModal({ title: "삭제", content: "삭제하시겠습니까?", yes: "확인", no: "닫기", callback: () => { deleteTodo(id) } });
        showModal();
    }

    function deleteItem() {
        if (!value) {
            deleteTodo(id);
            return;
        }
        clickModalBtn();
    }
    return (
        <div className="flex gap-x-2">
            <input type="text" onChange={onChange} value={value}></input>

            {/* <button onClick={changeIsUpdate}>수정</button> */}
            <button onClick={deleteItem}>삭제</button>
        </div>
    );
}