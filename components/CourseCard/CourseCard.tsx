import Image from "next/image";
import { useRouter } from "next/router";

type CourseCardProps = {
    imageUrl: string;
    title: string;
    count: number;
    href: string;
    isBestSeller: boolean;
}

function CourseCard({
    imageUrl,
    title,
    count,
    href,
    isBestSeller,
}: CourseCardProps) {

    const router = useRouter();

    const handleClick = () => {
        if (href) {
            console.log("clicked");
            router.push(href);
        }
    };

    return (
        <div onClick={handleClick} className="overflow-hidden hover:shadow-hover hover:shadow-blue overflow-hidden w-[280px] relative p-3 border-2 border-black rounded-lg flex flex-col gap-2.5 hover:-translate-x-px hover:-translate-y-px transition-all duration-200 ease-in-out hover:cursor-pointer">
        <Image 
            src={imageUrl}
            alt="popular-course"
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-[180px]"
        />
        { isBestSeller && <span className="absolute top-5 left-5 bg-yellow py-1 px-2.5 rounded border-2">
            <p>BEST SELLER</p>
        </span>}

        <h3>{title}</h3>
        <div className="flex items-center gap-1">
            <p>📚</p>
            <p>{count} Class</p>
        </div>
        </div>
    );
}

export type { CourseCardProps };
export { CourseCard };
