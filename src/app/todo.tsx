
import { useState } from "react";
import { Todo } from "@/model/todo";

export default function TodoComponent({ id, value, onUpdate, onRemove }: Todo) {
    const [isUpdate, setisUpdateState] = useState<boolean>(false);
    const [text, setText] = useState<string>("");

    function changeIsUpdate() {
        setisUpdateState(!isUpdate);
    }
    function onChange(e: { target: { value: string } }) {
        // setText(e.target.value);
        console.log(onUpdate);
        onUpdate(id, e.target.value);
    }
    return (
        <div className="flex">
            <input onChange={onChange} value={value}></input>

            {/* <button onClick={changeIsUpdate}>수정</button> */}
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}