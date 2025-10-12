import { RiFirebaseFill } from "react-icons/ri";
import { GrSwift } from "react-icons/gr";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import image1 from "./assets/image1.jpg"
import image2 from "./assets/image2.jpg"
import image3 from "./assets/image3.jpg"

export function ProjectSection() {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    return (
        <div ref={ref} className="flex flex-row justify-around">
            <div className="flex flex-col space-y-10">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <div>
                <ProjectImage scrollProgress={scrollYProgress}/>
            </div>
        </div>
    )
}


function ProjectCard() {

    return (
        <div className="py-10 px-20">
            <div className="
            flex items-center flex-col p-5 min-w-auto max-w-[500px] h-[700px] 
            bg-card border-2 border-accent-orange rounded-[10px] hover:scale-101 
            transition duration-300 ease-in-out"
            >

                <h1 className="py-3 w-110 text-center rounded-[10px] 
                font-mono-display text-cream text-5xl bg-asphalt"
                >melting pot
                </h1>

                <div className="flex flex-row space-x-5 pt-3">
                    <GrSwift className="
                    w-auto h-12 text-custom-gray hover:scale-110 hover:text-accent-orange 
                    transition duration-200 ease-in-out"/>
                    <RiFirebaseFill className="w-auto h-12 text-custom-gray hover:scale-110 
                    hover:text-accent-orange transition duration-200 ease-in-out"/>
                </div>

                <div className="py-10 px-3">
                    <p className="font-unbounded font-[100] text-xl text-custom-gray">
                        Melting pot is a food first social media app.
                        It connects you with new people or friends to spend time and bond over food
                        </p>
                    <p className="font-unbounded font-[100] text-xl text-custom-gray">This is some other text</p>
                    <p className="font-unbounded font-[100] text-xl text-custom-gray">This is some other text</p>
                </div>

            </div>   
        </div>
    )
}

function ProjectImage({scrollProgress}) {

    // 1. Create state to hold the numeric progress value
    const [currentProgress, setCurrentProgress] = useState(0);

    // 2. Use useEffect to listen for changes on the MotionValue
    useEffect(() => {
        // The .on("change", ...) method returns an unsubscribe function
        const unsubscribe = scrollProgress.on("change", (latest) => {
            setCurrentProgress(latest);
        });
        
        // Cleanup the subscription when the component unmounts
        return () => unsubscribe();
    }, [scrollProgress]); // Re-run effect if the scrollProgress object changes

    return (
        <div className="py-10 px-20 top-25 sticky">
            <div className="relative w-[800px] h-[600px] rounded-xl overflow-hidden">
                <img
                    src={image1}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-100 ease-in-out" 
                    style={{ opacity: currentProgress < 0.33 ? 1 : 0}}
                />
                <img
                    src={image2}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-100 ease-in-out"
                    style={{ opacity: currentProgress >= 0.33 && currentProgress < 0.66 ? 1 : 0}}
                />
                <img
                    src={image3}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-100 ease-in-out"
                    style={{ opacity: currentProgress >= 0.66 ? 1 : 0 }}
                />
            </div>
        </div>
    )
}