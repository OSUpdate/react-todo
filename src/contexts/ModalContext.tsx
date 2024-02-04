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
}
const initialState: modal = { title: "", content: "", yes: "확인", no: "닫기", show: false, setModal: () => { }, showModal: () => { }, hideModal: () => { } }
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
    const setModal = ({ title, content, yes, no, show }: modal) => {
        setTitle(title);
        setContent(content);
        setYes(yes);
        setNo(no);
    }
    const showModal = () => {
        setShow(true);
    }
    const hideModal = () => {
        setShow(false);
    }
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
                hideModal
            }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext;