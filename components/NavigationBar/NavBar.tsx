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

    return (
        <nav className="bg-green border-y-2 mx-auto">
            <div className="flex justify-between items-center max-w-7xl mx-auto w-11/12">

                <div className="font-bold text-2xl border-x-2 py-4 px-4 bg-white">
                    <Link href={"/index.tsx"}>CodeQuest</Link>
                </div>

                <div className="flex justify-between items-center gap-8 text-white">
                {navItems.map((item) => (
                    <Link href={item.href} key={item.href}>
                        <p className={`${activeSection === item.href ? 'active' : ''}`}>
                        {item.label}
                        </p>
                    </Link>
                ))}
                </div>

                <div className="flex justify-between items-center gap-4 text-white">
                    <Link href={"/"}>
                        <p >Dashboard</p>
                    </Link>
                    <ProfileAvatar imageUrl="/images/user-avatar.jpg"></ProfileAvatar>
                </div>

            </div>
        </nav>
    )
}

export { Navbar };