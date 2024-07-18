import { CourseCardListContainer } from "../CourseCard";
import { Button } from "../Button";

function PopularCourse() {
    return (
        <section className="gap-8 w-11/12 mx-auto flex flex-col items-center justify-center h-[500px] sm:h-[700px]">
            <h2 className="text-black font-bold">Popular Courses</h2>
            <CourseCardListContainer/>
            <Button
                    variant="secondary"
                    href="bisa"
                >
                    View more
            </Button>

        </section>
    )
}

export { PopularCourse };