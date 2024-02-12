import { createContext, useState, ReactNode } from "react";
type modal = {
    title: string,
    content: string,
    yes: string,
    no: string,
    show: boolean,
    setModal: Function,
    showModal: Function,
    hideModal: Function,
    callback: Function
}
const initialState: modal = { title: "", content: "", yes: "확인", no: "닫기", show: false, setModal: () => { }, showModal: () => { }, hideModal: () => { }, callback: () => { } }
const ModalContext = createContext<modal>({ ...initialState });
type ModalProviderProps = {
    children: ReactNode
}
export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [yes, setYes] = useState("");
    const [no, setNo] = useState("");
    const [show, setShow] = useState(false);
    const [action, setAction] = useState(() => () => { });
    const setModal = ({ title, content, yes, no, show, callback }: modal) => {
        setTitle(title);
        setContent(content);
        setYes(yes);
        setNo(no);
        setAction(() => () => {
            hideModal();
            callback();
        });
    }
    const showModal = () => {
        setShow(true);
    }
    const hideModal = () => {
        setShow(false);
    }
    const callback = () => {
        action();
    };
    return (
        <ModalContext.Provider
            value={{
                content,
                title,
                yes,
                no,
                show,
                setModal,
                showModal,
                hideModal,
                callback
            }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext;