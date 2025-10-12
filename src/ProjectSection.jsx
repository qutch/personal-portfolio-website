// Import logos
import { RiFirebaseFill } from "react-icons/ri";
import { GrSwift } from "react-icons/gr";
import { SiPython } from "react-icons/si";
import { SiGodotengine } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

// Import images and videos
import image1 from "./assets/image1.jpg"
import image2 from "./assets/image2.jpg"
import image3 from "./assets/image3.jpg"

import astroRaider from "./assets/astro_raider.jpg"
import verletDemo from "./assets/verlet_demo.mp4"

export function ProjectSection() {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const projects = {
        project1: {
            title: "astro raiders",
            logos: [SiGodotengine],
            descriptions: [
                "2D top-down space shooter. Play as a raider, blasting alien saucers.",
                "Has a full game loop with 2D physics-based player movement, enemy AI, and real time event handling.",
                "I designed all the art and wrote all the music from scratch",
            ],
            link: "https://htquartz.itch.io/astro-raider"
        },
        project2: {
            title: "verlet integration",
            logos: [SiPython],
            descriptions: [
                "2D particle physics simulating using Verlet Integration",
                "Used PyGame for rendering.",
            ]
        }
    }

    return (
        <div ref={ref} className="flex flex-row justify-around">
            <div className="flex flex-col space-y-10">
                {Object.entries(projects).map(([key, project]) => (
                    <ProjectCard key={key} title={project["title"]} logos={project["logos"]} descriptions={project["descriptions"]} link={project["link"]} />
                ))}
            </div>
            <div>
                <ProjectImage scrollProgress={scrollYProgress}/>
            </div>
        </div>
    )
}


function ProjectCard({title, logos, descriptions, link}) {

    const logoClass = "w-auto h-12 text-custom-gray hover:scale-110 hover:text-accent-orange transition duration-200 ease-in-out"

    return (
        <div className="py-10 px-20">
            <div className="
            relative flex items-center flex-col p-5 min-w-auto max-w-[500px] h-[700px] 
            bg-card border-2 border-accent-orange rounded-[10px] hover:scale-101 
            transition duration-300 ease-in-out"
            >

                {/* Project Title */}
                <h1 className="py-3 w-110 text-center rounded-[10px] 
                font-mono-display text-cream text-5xl bg-asphalt"
                >{title}
                </h1>

                {/* Project Logos */}
                <div className="flex flex-row space-x-5 pt-3">
                    {logos.map((Logo, index) => (
                        <Logo key={index} className={logoClass} />
                    ))}
                </div>

                {/* Project Description */}
                <div className="py-10 px-3">
                    {descriptions.map((desc, index) => (
                        <p key={index} className="font-unbounded font-[100] text-xl text-custom-gray">
                            {desc}
                        </p>
                    ))}
                </div>

                {/* Project Link */}
                <a href={link} target="_blank" className="absolute bottom-5 right-5">
                    <FaExternalLinkAlt className="w-10 h-auto text-cream hover:scale-120 hover:text-accent-orange transition duration-200 ease-in-out" />
                </a>

            </div>   
        </div>
    )
}

function ProjectImage({scrollProgress}) {

    const [currentProgress, setCurrentProgress] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollProgress.on("change", (latest) => {
            setCurrentProgress(latest);
        });
        
        return () => unsubscribe();
    }, [scrollProgress]); s

    return (
        <div className="py-10 px-20 top-25 sticky">
            <div className="relative w-[800px] h-[600px] rounded-xl overflow-hidden">
                <img
                    src={astroRaider}
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