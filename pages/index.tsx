import { Navbar } from "../components/NavigationBar/NavBar";
import { Header } from "../components/Header/Header"
import { Stat } from "../components/Stat/Stat";
import { PopularCourse } from "../components/PopularCourse/PopularCourse";
import { Testimonial } from "../components/Testimonial/Testimonial";
import { Footer } from "../components";


export async function getStaticProps() {
    const res = await fetch("https://sistech-server.vercel.app/api/data");
    const data = await res.json();
    return {
        props: {
            data
        },
    };
}

export default function Pages({data}:any) {
    return (
        <>
            <Navbar />
            <Header />
            <Stat />
            <PopularCourse data={data} />
            <Testimonial/>
            <Footer/>
        </>
    );
}