

type StatItem = {
    value: string;
    label: string;
};

function Stat() {
    const statItem: StatItem[] = [
        { value:"49k+", label: "Students" },
        { value:"85%", label: "Employed Graduates" },
        { value:"5", label: "Courses" },
        { value:"18", label: "Industry Partners" }
    ];

    return (
        <section className="flex items-center justify-between max-w-3xl w-11/12 mx-auto h-[80px]">
            {statItem.map((item) => (
                <div className="text-center" key={item.value}>
                    <h2> {item.value}</h2>
                    <p> {item.label}</p>
                </div>
            ))}
        </section>
    );
}

export { Stat };