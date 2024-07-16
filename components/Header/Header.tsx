import { Button } from "../Button";
import HeaderLogo  from "./HeaderLogo"



type HeaderProps = {
  buttonLabel?: string;
}

function Header() {
    return (
        <header className="gap-8 sm:gap-10 sm:gap-12 max-w-6xl mx-auto w-11/12 flex flex-col justify-center h-[484px] sm:h-[584px] md:h-[684px]">
            <p className="gap-4 sm:gap-10 md:gap-8 flex flex-col text-black text-4xl sm:text-5xl md:text-7xl font-bold">
                    <span>Embark on Your</span>
                {/* <br /> */}
                    <span>Coding Adventure</span>
                {/* <br /> */}
                <span >with <HeaderLogo/></span>
            </p>

            <div>
                <Button
                    variant="primary"
                    href="bisa"
                >
                    Join Now
                </Button>
            </div>
        </header>
    )

    
}

export { Header };