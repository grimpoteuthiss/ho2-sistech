import { CourseCardListContainer } from "../CourseCard";
import { Button } from "../Button";

function PopularCourse() {
    return (
        <section className="w-11/12 mx-auto flex flex-col items-center lg:justify-center lg:h-[700px] space-y-8">
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