import { Navbar } from "../components/NavigationBar/NavBar";
import { Header } from "../components/Header/Header"
import { Stat } from "../components/Stat/Stat";
import { PopularCourse } from "../components/PopularCourse/PopularCourse";
import { Testimonial } from "../components/Testimonial/Testimonial";
import { Footer } from "../components";


export default function Pages() {
    return (
        <>
            <Navbar />
            <Header />
            <Stat />
            <PopularCourse />
            <Testimonial/>
            <Footer/>
        </>
    );
}