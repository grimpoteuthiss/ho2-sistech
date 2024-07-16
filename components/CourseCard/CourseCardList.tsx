import { CourseCard } from "./CourseCard";
import type { CourseCardProps } from "./CourseCard";

type CourseCardListProps = {
    cards: CourseCardProps[];
};

function CourseCardList({
    cards
}: CourseCardListProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {cards.map((card, index) => (
            <CourseCard key={index} {...card} />
            ))}
      </div>
    );
}

export { CourseCardList };
