import { Star } from "lucide-react";

// Yes this was 100% gpt generated

export default function Reviews() {
    return (
        <section className="flex flex-col items-center justify-center py-16 bg-slate-50">
            <div className="w-full max-w-[80%] flex flex-col items-center h-auto ">
                <div className="flex flex-col gap-8 w-full items-center">
                    <div className="flex flex-col gap-3 mb-10 text-center">
                        {" "}
                        {/* Slightly increased gap */}
                        <h2 className="font-primary text-3xl lg:text-4xl text-purple-600 ">
                            Why Trust Us With Your Website?
                        </h2>
                        <p className="font-text text-lg text-gray-700 max-w-3xl mx-auto">
                            {" "}
                            {/* Constrained width for better readability */}
                            Here&apos;s what one of our valued clients has to
                            say about their experience:
                        </p>
                    </div>

                    {/* Single Review Card */}
                    <div className="bg-white border-purple-600 border shadow-2xl shadow-purple-600/15 rounded-lg p-8 md:p-10 max-w-2xl w-full">
                        <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-6 h-6 text-yellow-400 fill-yellow-400"
                                />
                            ))}
                        </div>
                        <p className="font-text text-gray-700 italic text-lg mb-6 leading-relaxed">
                            &quot;Working with Timeless Web was a game-changer
                            for our business. They didn&apos;t just build a
                            website; they created a powerful tool that has
                            significantly boosted our client inquiries. The team
                            was professional, responsive, and truly understood
                            our vision. Highly recommended!&quot;
                        </p>
                        <div className="text-right">
                            <p className="font-headings font-semibold text-purple-600 text-lg">
                                Harry S.
                            </p>
                            <p className="font-text text-sm text-gray-500">
                                Founder, Paramount Energy Group
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
