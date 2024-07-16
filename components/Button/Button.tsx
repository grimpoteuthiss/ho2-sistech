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
                text-white sm:text-xl font-bold py-2 px-4 sm:py-3 sm:px-5 bg-blue rounded-lg border-2 border-ink hover:-translate-x-px hover:-translate-y-px hover:shadow-hover transition-all duration-300
                ${variant === "primary"
                    ? "bg-blue hover:bg-green hover:shadow-blue"
                    : "bg-red hover:bg-blue hover:shadow-red"
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