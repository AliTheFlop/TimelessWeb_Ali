import HeroSection from "@/components/sections/Hero";
import OurWork from "@/components/sections/OurWork";
import Benefits from "@/components/sections/Benefits";
import Explanations from "@/components/sections/Explanations";
import Reviews from "@/components/sections/Reviews";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
    return (
        <>
            <HeroSection />
            <Benefits />
            <Explanations />
            <OurWork />
            <Reviews />
            <FinalCTA />
        </>
    );
}
