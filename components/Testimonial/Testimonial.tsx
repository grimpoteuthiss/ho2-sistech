import { TestimonialCardListContainer } from "./TestimonialCardListContainer";


function Testimonial() {
    return (
        <section className="w-11/12 max-w-7xl mx-auto flex flex-col items-center justify-center h-[500px] sm:h-[420px]">
            <h2>Testimonials</h2>
            <TestimonialCardListContainer/>
        </section>
    )
}

export { Testimonial };