// Import logos
import { RiFirebaseFill } from "react-icons/ri";
import { GrSwift } from "react-icons/gr";
import { SiPython } from "react-icons/si";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

// Import images and videos
import image1 from "./assets/image1.jpg"
import image2 from "./assets/image2.jpg"
import image3 from "./assets/image3.jpg"

import verletDemo from "./assets/verlet_demo.mp4"

export function ProjectSection() {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const projects = {
        title: "melting pot",
        logos: [GrSwift, RiFirebaseFill],
        descriptions: [
            "Melting pot is a social food app. Meet a new person over food. Plan meals with your friends. Find new spots to eat.",
            "Build up your food profile with favorites. Save recipes, restaurants, dishes, and cuisines.",
        ]
    }
    const project2 = {
        title: "verlet integration",
        logos: [SiPython],
        descriptions: [
            "2D particle physics simulating using Verlet Integration",
            "Used PyGame for rendering.",
        ]
    }

    return (
        <div ref={ref} className="flex flex-row justify-around">
            <div className="flex flex-col space-y-10">
                <ProjectCard title={projects["title"]} logos={projects["logos"]} descriptions={projects["descriptions"]} />
                <ProjectCard title={project2["title"]} logos={project2["logos"]} descriptions={project2["descriptions"]} />
                <ProjectCard title={projects["title"]} logos={projects["logos"]} descriptions={projects["descriptions"]} />
            </div>
            <div>
                <ProjectImage scrollProgress={scrollYProgress}/>
            </div>
        </div>
    )
}


function ProjectCard({title, logos, descriptions}) {

    const logoClass = " w-auto h-12 text-custom-gray hover:scale-110 hover:text-accent-orange transition duration-200 ease-in-out"

    return (
        <div className="py-10 px-20">
            <div className="
            flex items-center flex-col p-5 min-w-auto max-w-[500px] h-[700px] 
            bg-card border-2 border-accent-orange rounded-[10px] hover:scale-101 
            transition duration-300 ease-in-out"
            >

                <h1 className="py-3 w-110 text-center rounded-[10px] 
                font-mono-display text-cream text-5xl bg-asphalt"
                >{title}
                </h1>

                <div className="flex flex-row space-x-5 pt-3">
                    {logos.map((Logo, index) => (
                        <Logo key={index} className={logoClass} />
                    ))}
                </div>

                <div className="py-10 px-3">
                    {descriptions.map((desc, index) => (
                        <p key={index} className="font-unbounded font-[100] text-xl text-custom-gray">
                            {desc}
                        </p>

                    ))}
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
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in" 
                    style={{ opacity: currentProgress < 0.4 ? 1 : 0}}
                />
                <video
                    src={verletDemo}
                    autoPlay loop muted playsInLine
                    className="absolute inset-0 max-w-full max-h-full object-cover transition-opacity duration-300 ease-in"
                    style={{ opacity: currentProgress >= 0.4 && currentProgress < 0.7 ? 1 : 0}}
                />
                <img
                    src={image3}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in"
                    style={{ opacity: currentProgress >= 0.7 ? 1 : 0 }}
                />
            </div>
        </div>
    )
}