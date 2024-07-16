import { Navbar } from "../components/NavigationBar/NavBar";
import { Header } from "../components/Header/Header"
import { Stat } from "../components/Stat/Stat";
import { PopularCourse } from "../components/PopularCourse/PopularCourse";


export default function Pages() {
    return (
        <><Navbar />
        <Header />
        <Stat />
        <PopularCourse />
        </>

        
        // <p>kaisan wlee</p>
    );
}