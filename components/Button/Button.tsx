import { useRouter } from "next/router";

type ButtonProps = {
    variant: "primary" | "secondary";
    children: React.ReactNode;
    className?: string;
    href?: string;
};

function Button({
    variant,
    children,
    className,
    href,
}: ButtonProps) {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (href) {
            e.preventDefault();
            router.push(href);
        }
    };

    return (
        <button
            className={`
                text-white sm:text-xl font-bold py-2 px-4 sm:py-3 sm:px-5 bg-blue rounded-2xl border-2 border-ink hover:bg-green hover:shadow-[4px_4px_0px_0px] hover:shadow-blue transition-all duration-300
                ${variant === "primary"
                    ? "bg-blue"
                    : "bg-red"
                }
                ${className || ''}
            `}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export { Button };