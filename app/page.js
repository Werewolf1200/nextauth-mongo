
import {connectDB} from "@/utils/database"

export default function Home() {
    const db= connectDB()

    return (
        <section>
            <h1>Home Page</h1>
        </section>
    )
}