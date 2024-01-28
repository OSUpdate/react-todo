import { NextPage } from "next"
import Link from "next/link"
import TodosComponent from "@/app/todos"

const Home: NextPage = () => {
    return (
        <TodosComponent />
    )
}
export default Home