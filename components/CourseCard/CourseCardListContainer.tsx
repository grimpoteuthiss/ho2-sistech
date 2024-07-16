import { CourseCardList } from "./CourseCardList";

const data = [
  {
    imageUrl: "/images/back-end.jpg",
    title: "Back End",
    count: 6,
    href: "/",
    isBestSeller: true
  },
  {
    imageUrl: "/images/front-end.jpg",
    title: "Back End",
    count: 7,
    href: "/",
    isBestSeller: false
  },
  {
    imageUrl: "/images/react.jpg",
    title: "React",
    count: 6,
    href: "/",
    isBestSeller: true
  },
  {
    imageUrl: "/images/machine-learning.jpg",
    title: "Machine Learning",
    count: 7,
    href: "/",
    isBestSeller: true
  },
];

function CourseCardListContainer() {
  return <CourseCardList cards={data} />;
}

export { CourseCardListContainer };
