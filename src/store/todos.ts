import { Todo } from '@/model/todo';
import { atom } from 'recoil';

const initialState: Todo[] = [];

export const todosState = atom<Array<Todo>>({
    key: "todosState",
    default: initialState
})