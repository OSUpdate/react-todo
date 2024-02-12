import { NextPage } from "next"
import Link from "next/link"
import TodosComponent from "@/app/todos"
import { ModalProvider } from "@/contexts/ModalContext";
import { RecoilRoot } from "recoil";
import ModalComponent from "@/app/modal"
import '@/app/globals.css';
const Home: NextPage = () => {
    return (
        <RecoilRoot>
            <ModalProvider>
                <TodosComponent />
                <ModalComponent></ModalComponent>
            </ModalProvider>
        </RecoilRoot>
    )
}
export default Home