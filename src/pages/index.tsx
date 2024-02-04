import { NextPage } from "next"
import Link from "next/link"
import TodosComponent from "@/app/todos"
import { ModalProvider } from "@/contexts/ModalContext";
import ModalComponent from "@/app/modal"
import '@/app/globals.css';
const Home: NextPage = () => {
    return (
        <ModalProvider>
            <TodosComponent />
            <ModalComponent></ModalComponent>
        </ModalProvider>
    )
}
export default Home