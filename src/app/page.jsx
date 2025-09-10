import HeroSection from "@/components/sections/Hero";
import OurWork from "@/components/sections/OurWork";
import Benefits from "@/components/sections/Benefits";
import Explanations from "@/components/sections/Explanations";
import Reviews from "@/components/sections/Reviews";
import FinalCTA from "@/components/sections/FinalCTA";
import AnimateOnScroll from "@/components/utils/AnimateOnScroll";

export default function Home() {
    return (
        <>
            <HeroSection />
            <AnimateOnScroll>
                <Benefits />
            </AnimateOnScroll>
            <AnimateOnScroll>
                <Explanations />
            </AnimateOnScroll>
            <AnimateOnScroll>
                <OurWork />
            </AnimateOnScroll>
            <Reviews />
            <FinalCTA />
        </>
    );
}
