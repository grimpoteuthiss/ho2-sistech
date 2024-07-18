import { TestimonialCardList } from "./TestimonialCardList";

const data = [
    {
        imageUrl: "/images/alice.jpg",
        name: "alice",
        job: "tringgiling",
        description: "Lorem nhyguiuhgyf tvhbuigyftyvhbiugyftvhbuigyftgvhyu",
    },
    {
        imageUrl: "/images/alice.jpg",
        name: "alice",
        job: "tringgiling",
        description: "Lorem nhyguiuhgy ftvhbuigyftyvhbiugyftvhbuigyftgvhyu",
    },
    {
        imageUrl: "/images/lelouch.jpg",
        name: "alicee",
        job: "tringgilingg",
        description: "Lorem nhyguiguhgy ftvhbuigyftyvhbiugyftvhbuigyftgvhyu",
    },
    {
        imageUrl: "/images/alice.jpg",
        name: "alice",
        job: "tringgiling",
        description: "Lorem nhyguiuhgyftv hbuigyftyvhbiugyftvhbuigyftgvhyu",
    },
    {
        imageUrl: "/images/alice.jpg",
        name: "alice",
        job: "tringgiling",
        description: "Lorem nhyguiuhg yftvhbuigyftyvhbi ugyftvhbuigyftgvhyu",
    },
    {
        imageUrl: "/images/alice.jpg",
        name: "alice",
        job: "tringgiling",
        description: "Lorem nhyguiuh gyftvhbuigyftyvhbi ugyftvhbuigyftgvhyu",
    },
    {
        imageUrl: "/images/alice.jpg",
        name: "alice",
        job: "tringgiling",
        description: "Lorem nhyguiuhgy ftvhbuigyftyvh biugyftvhbuigyftgvhyu",
    },
    {
        imageUrl: "/images/alice.jpg",
        name: "alice",
        job: "tringgiling",
        description: "Lorem nhyguiuhg yftvhbuigy ftyvhbiugyftvhbuigyftgvhyu",
    },
    
]

function TestimonialCardListContainer() {
    return <TestimonialCardList cards={data} />;
}
  
export { TestimonialCardListContainer };
  