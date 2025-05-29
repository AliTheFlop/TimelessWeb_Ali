import ProjectImage from "../ui/ProjectImage";

const projectsComplete = [
    {
        name: "Altus Plumbing",
        description: " A Local Plumber Based in Sydney, Australia",
        imgSrc: "/homepage/projects/altusplumbing.webp",
        link: "https://altusplumbing.com.au",
        colour: "#A90B81",
        key: 1,
    },
    {
        name: "Altus Plumbing",
        description: " A Local Plumber Based in Sydney, Australia",
        imgSrc: "/homepage/projects/altusplumbing.webp",

        link: "https://altusplumbing.com.au",
        colour: "#0B3DA9",
        key: 2,
    },
    {
        name: "Altus Plumbing",
        description: " A Local Plumber Based in Sydney, Australia",
        imgSrc: "/homepage/projects/altusplumbing.webp",

        link: "https://altusplumbing.com.au",
        colour: "#0BA96C",
        key: 3,
    },
];

export default function OurWork() {
    return (
        <section className="flex min-h-screen flex-col items-center justify-center">
            <div className="w-full max-w-[80%] flex flex-col items-center h-auto md:h-screen">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2 mb-10">
                        <h2 className="font-primary text-3xl font-medium">
                            We Create Websites That Look Good
                        </h2>
                        <p className="font-text text-lg">
                            Here's just a few examples of the work we've done
                            for our clients.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 grid-rows-1 gap-x-12">
                        {projectsComplete.map((project) => (
                            <div
                                key={project.key}
                                className={`flex flex-col w-full h-full max-h-[400px] p-8 shadow-md rounded-2xl`}
                                style={{ backgroundColor: project.colour }}
                            >
                                <ProjectImage project={project} />

                                <div className="text-white flex flex-col gap mt-4 items-center">
                                    <h4 className="font-bold text-base">
                                        {project.name}
                                    </h4>
                                    <p className="text-sm">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
