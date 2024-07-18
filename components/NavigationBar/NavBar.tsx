import { useState, useEffect } from "react";
import Link from "next/link"

import { ProfileAvatar } from "../Profile/ProfileAvatar";

type NavItem = {
    href: string;
    label: string;
};

function Navbar() {
    const [activeSection, setActiveSection] = useState<string>("/");
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const navItems: NavItem[] = [
        { href: "/", label: "Learning Path" },
        { href: "/", label: "Subcribe" },
        { href: "https://www.instagram.com/heshitiara", label: "Contact" },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            if (scrollPosition < 100) {
                setActiveSection("/");
            }

            window.addEventListener("Scroll", handleScroll);
            handleScroll();

            return () => {
                window.removeEventListener("Scroll", handleScroll);
            };
        };
    },[]);


    const toggleBurger = () => {
        console.log('burger clicked');
        const burger = document.querySelector('#burger')!;
        const nav = document.querySelector('#nav')!;
        const navItems = document.querySelector('.nav-item')!;
        // burger.classList.toggle('active');
        nav.classList.toggle('flex');
        nav.classList.toggle('block');
        navItems.classList.toggle('hidden');
    }



    return (
        <nav  className="bg-green border-y-2 mx-auto">
            <div id="nav" className="flex justify-between items-center max-w-7xl mx-auto w-11/12">

                <div className="font-bold text-2xl border-x-2 py-4 px-4 bg-white max-w-max">
                    <Link href={"/index.tsx"}>CodeQuest</Link>
                </div>

                <div className="nav-item justify-between items-center gap-8 text-white hidden md:flex">
                {navItems.map((item) => (
                    <Link href={item.href} key={item.href}>
                        <h3 className={`text-nav ${activeSection === item.href ? 'active' : ''}`}>
                        {item.label}
                        </h3>
                    </Link>
                ))}
                </div>

                <div className="nav-item justify-between items-center gap-4 text-white hidden md:flex">
                    <Link href={"/"}>
                        <h3 className="text-nav">Dashboard</h3>
                    </Link>
                    <ProfileAvatar imageUrl="/images/user-avatar.jpg"></ProfileAvatar>
                </div>

                <p id="burger" className=" absolute top-6 right-5 burger md:hidden cursor-pointer" onClick={toggleBurger}>burger</p>


            </div>
        </nav>
    )
}

export { Navbar };