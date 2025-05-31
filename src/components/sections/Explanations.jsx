import { CheckCircle } from "lucide-react"; // Make sure to install and import lucide-react
import Button from "../ui/Button";

export default function Explanations() {
    return (
        <section className="flex flex-col items-center justify-center py-16 md:py-24 bg-slate-50">
            <div className="w-full max-w-[80%] flex flex-col gap-32 h-auto">
                {/** FIRST ONE START */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content Column */}
                    <div className="flex flex-col gap-6 justify-center lg:pr-8">
                        <h2 className="text-3xl md:text-4xl text-purple-600 font-primary text-center lg:text-start">
                            Get More Sales
                        </h2>
                        <p className="font-text text-lg text-gray-700 text-center lg:text-start leading-relaxed">
                            A good website doesn&apos;t take a break. It answers
                            questions, filters out time-wasters, and helps
                            visitors understand what you do - without you
                            picking up the phone.
                        </p>
                        <ul className="text-lg font-text text-gray-700 space-y-3 text-center lg:text-start">
                            <li className="flex items-center justify-center lg:justify-start">
                                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                                Get more clients
                            </li>
                            <li className="flex items-center justify-center lg:justify-start">
                                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                                No extra work from you
                            </li>
                        </ul>

                        <div className="mt-6 text-center lg:text-start">
                            <Button
                                href="#contact-form"
                                variant="secondary"
                                fullWidth={false}
                                className="text-base px-6 py-3"
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                    {/* Image Content Column */}
                    <div className="relative w-full max-h-[500px] flex items-center justify-start">
                        <div className="relative w-full h-full">
                            <img
                                src="/homepage/explanations/salesman.svg"
                                alt="Lady building a website"
                                className="w-full max-h-[500px] h-full object-contain relative z-10"
                            />
                            {/* Decorative background element */}
                            <div className="absolute -inset-8 md:-inset-12 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 rounded-full blur-3xl opacity-40 lg:opacity-60 -z-0"></div>
                        </div>
                    </div>
                </div>
                {/** SECOND ONE START */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image Content Column */}
                    <div className="relative w-full max-h-[450px] flex items-center justify-center order-2 lg:order-1 lg:pr-8">
                        <div className="relative w-full h-full">
                            <img
                                src="/homepage/explanations/outsource.svg"
                                alt="Lady building a website"
                                className="w-full max-h-[450px] h-full object-contain relative z-10"
                            />

                            <div className="absolute -inset-8 md:-inset-12 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 rounded-full blur-3xl opacity-40 lg:opacity-60 -z-0"></div>
                        </div>
                    </div>
                    {/* Text Content Column */}
                    <div className="flex flex-col gap-6 justify-center lg:pr-8 order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl text-purple-600 font-primary text-center lg:text-start">
                            Do Less Admin Work
                        </h2>
                        <p className="font-text text-lg text-gray-700 text-center lg:text-start leading-relaxed">
                            A smart website answers your customers questions,
                            books appointments, and filters out the tire-kickers
                            so you only deal with real business. You get:
                        </p>
                        <ul className="text-lg font-text text-gray-700 space-y-3 text-center lg:text-start">
                            <li className="flex items-center justify-center lg:justify-start">
                                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                                Less administrative work
                            </li>
                            <li className="flex items-center justify-center lg:justify-start">
                                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                                Less headache and stress
                            </li>
                        </ul>

                        <div className="mt-6 text-center lg:text-start">
                            <Button
                                href="#contact-form"
                                variant="secondary"
                                fullWidth={false}
                                className="text-base px-6 py-3"
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>

                {/** THIRD ONE */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content Column */}
                    <div className="flex flex-col gap-6 justify-center lg:pr-8">
                        <h2 className="text-3xl md:text-4xl text-purple-600 font-primary text-center lg:text-start">
                            Build A Better Brand Image
                        </h2>
                        <p className="font-text text-lg text-gray-700 text-center lg:text-start leading-relaxed">
                            Your website uplifts your brand with a design that
                            makes people remember and want to do more business
                            with you.
                        </p>
                        <ul className="text-lg font-text text-gray-700 space-y-3 text-center lg:text-start">
                            <li className="flex items-center justify-center lg:justify-start">
                                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                                Build more trust with customers
                            </li>
                            <li className="flex items-center justify-center lg:justify-start">
                                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                                Uplift your brand image
                            </li>
                        </ul>

                        <div className="mt-6 text-center lg:text-start">
                            <Button
                                href="#contact-form"
                                variant="secondary"
                                fullWidth={false}
                                className="text-base px-6 py-3"
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>

                    {/* Image Content Column */}
                    <div className="relative w-full max-h-[450px] flex items-center justify-center">
                        <div className="relative w-full h-full">
                            <img
                                src="/homepage/explanations/brand_image.svg"
                                alt="Lady building a website"
                                className="w-full max-h-[450px] h-full object-contain relative z-10"
                            />

                            <div className="absolute -inset-8 md:-inset-12 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 rounded-full blur-3xl opacity-40 lg:opacity-60 -z-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
