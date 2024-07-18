import { CourseCard } from "./CourseCard";
import type { CourseCardProps } from "./CourseCard";

type CourseCardListProps = {
    cards: CourseCardProps[];
};

function CourseCardList({
    cards
}: CourseCardListProps) {
    
    return (
        <div className="gap-8 flex-wrap overflow-hidden sm:max-h-[310px] max-h-[280px] px-10 pb-10 overflow-y-hidden justify-center flex gap-2">
            {cards.map((card, index) => (
            <CourseCard key={index} {...card} />
            ))}
      </div>
    );
}

export { CourseCardList };
