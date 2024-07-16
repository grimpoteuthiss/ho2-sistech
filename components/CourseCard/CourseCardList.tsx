import { CourseCard } from "./CourseCard";
import type { CourseCardProps } from "./CourseCard";

type CourseCardListProps = {
    cards: CourseCardProps[];
};

function CourseCardList({
    cards
}: CourseCardListProps) {
    return (
        <div className="flex gap-12 flex-col lg:flex-row">
            {cards.map((card, index) => (
            <CourseCard key={index} {...card} />
            ))}
      </div>
    );
}

export { CourseCardList };