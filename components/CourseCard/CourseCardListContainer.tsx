import { CourseCardList } from "./CourseCardList";


const data = [
  {
    imageUrl: "/images/back-end.jpg",
    title: "Back End",
    count: 6,
    href: "/backend",
    isBestSeller: true
  },
  {
    imageUrl: "/images/front-end.jpg",
    title: "Front End",
    count: 7,
    href: "/frontend",
    isBestSeller: false
  },
  {
    imageUrl: "/images/react.jpg",
    title: "React",
    count: 6,
    href: "/react",
    isBestSeller: true
  },
  {
    imageUrl: "/images/machine-learning.jpg",
    title: "Machine Learning",
    count: 7,
    href: "/machinelearning",
    isBestSeller: true
  },
];


type Course = {
  id: string;
  course: string;
  description: string;
  imgUrl: string;
  totalTopics: number;
  topics: object[];
  lecturers: string[];
}

function CourseCardListContainer({rawData}: any) {
  // console.log(rawData);
  const data = rawData.data.slice(0,4).map((course: Course) => ({
    imageUrl: course.imgUrl,
    title: course.course,
    count: course.totalTopics,
    href:'/course',
    isBestSeller: true
  }));
  return <CourseCardList cards={data} />;
}

export { CourseCardListContainer };
