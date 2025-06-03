import ProjectImage from "../ui/ProjectImage";

const projectsComplete = [
    {
        name: "HJ Accounting",
        description: " A High-End Accounting Firm",
        imgSrc: "/homepage/projects/hjaccounting.webp",
        link: "https://hjaccounting.timelessweb.com.au",
        colour: "#A90B81",
        key: 1,
        id: "hjaccounting",
    },
    {
        name: "Paramount Energy",
        description: " A Local Electrician in Sydney, Australia",
        imgSrc: "/homepage/projects/paramountenergy.webp",
        link: "https://paramountenergy.timelessweb.com.au",
        colour: "#0B3DA9",
        key: 2,
        id: "paramountenergy",
    },
    {
        name: "Altus Plumbing",
        description: " A Local Plumber Based in Sydney, Australia",
        imgSrc: "/homepage/projects/altusplumbing.webp",
        link: "https://altusplumbing.com.au",
        colour: "#0BA96C",
        key: 3,
        id: "altusplumbing",
    },
];

export default function OurWork() {
    return (
        <section className="flex flex-col items-center justify-center bg-slate-50">
            <div className="w-full max-w-[80%] flex flex-col items-center h-auto my-32">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2 mb-10">
                        <h2 className="font-primary text-3xl lg:text-4xl text-center lg:text-left text-purple-600">
                            We&apos;ve Done This Before
                        </h2>
                        <p className="font-text text-lg text-center lg:text-left">
                            Here&apos;s some work we&apos;ve done before to show
                            you we mean business:
                        </p>
                    </div>
                    <div className="grid pb-10 grid-cols-1 gap-y-12 grid-rows-1 gap-x-4 lg:gap-x-12 xl:grid-cols-3 lg:grid-cols-2">
                        {projectsComplete.map((project) => (
                            <div
                                key={project.key}
                                className={`flex flex-col w-full h-full max-h-[400px] p-8 shadow-xl rounded-2xl`}
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
