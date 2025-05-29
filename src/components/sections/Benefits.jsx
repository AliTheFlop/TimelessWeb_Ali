import { AppWindowMac, Cog, GlobeLock } from "lucide-react";

export default function Benefits() {
    return (
        <section className="flex flex-col items-center justify-center">
            <div className="w-full max-w-[80%] flex flex-col items-center h-auto mb-32">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2 mb-10">
                        <h2 className="font-primary text-4xl font-medium">
                            We Save You Time & Effort
                        </h2>
                        <p className="font-text text-lg">
                            There&apos;s no need to learn technical mumbo jumbo.
                            We&apos;re here to do it for you.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-y-12 grid-rows-1 gap-x-4 lg:gap-x-12 xl:grid-cols-3 lg:grid-cols-2">
                        <div className="border-purple-600 border flex flex-col items-center justify-center px-8 py-12">
                            <AppWindowMac className="w-12 h-12 text-purple-600" />
                            <h3 className="font-medium font-headings text-2xl text-center mt-2">
                                Hosting
                            </h3>
                            <p className="font-text text-center mt-auto pt-4">
                                No recycled templates or lazy shortcuts, every
                                design is crafted specifically for your audience
                                and brand.
                            </p>
                        </div>
                        <div className="border-purple-600 border flex flex-col items-center justify-center px-8 py-12">
                            <Cog className="w-12 h-12 text-purple-600" />
                            <h3 className="font-medium font-headings text-2xl text-center mt-2">
                                Maintenance
                            </h3>
                            <p className="font-text text-center mt-auto">
                                You run your business, we handle the website.
                                Includes content & security updates.
                            </p>
                        </div>
                        <div className="border-purple-600 border flex flex-col items-center justify-center px-8 py-12">
                            <GlobeLock className="w-12 h-12 text-purple-600" />
                            <h3 className="font-medium font-headings text-2xl text-center mt-2">
                                Security
                            </h3>
                            <p className="font-text text-center mt-auto pt-4">
                                Includes fast hosting options, additional
                                content updates, and backups - ready whenever
                                you are.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
