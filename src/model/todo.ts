export interface Todo {
    id: string,
    value: string,
    onUpdate: (id: string, text: string) => void,
    onRemove: (id: string) => void
}