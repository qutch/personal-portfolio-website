// Import logos
import { RiFirebaseFill } from "react-icons/ri";
import { GrSwift } from "react-icons/gr";
import { SiPython } from "react-icons/si";
import { SiGodotengine } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

import { useRef, useState, useEffect } from "react";
import { useScroll } from "framer-motion";

import astroRaider from "./assets/astro_raider.jpg"
import verletDemo from "./assets/verlet_demo.mp4"



export function ProjectSection() {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.6", "end start"],
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
            ],
            link: "https://github.com/qutch/Verlet",
        },
    }

    const projectCount = Object.keys(projects).length;

    return (
        <div>
            <div className="px-20 py-10 bg-asphalt">
                <h1 className="text-6xl text-custom-gray font-unbounded">My Work</h1>
            </div>
            <div ref={ref} className="flex flex-row justify-around py-10">
                <div className="flex flex-col space-y-10">
                    {Object.entries(projects).map(([key, project]) => (
                        <ProjectCard key={key} title={project["title"]} logos={project["logos"]} descriptions={project["descriptions"]} link={project["link"]} />
                    ))}
                </div>
                <div>
                    <ProjectImage scrollProgress={scrollYProgress} projectCount={projectCount}/>
                </div>
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
                        <>
                            <p key={index} className="font-urbanist font-[200] text-2xl text-custom-gray py-5">
                                {desc}
                            </p>
                            <div className="h-0.5 w-[70%] bg-cream"/>
                        </>
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

function ProjectImage({scrollProgress, projectCount}) {

    const [currentProgress, setCurrentProgress] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollProgress.on("change", (latest) => {
            setCurrentProgress(latest);
        });
        
        return () => unsubscribe();
    }, [scrollProgress]);

    const media = [
        { type: 'image', src: astroRaider },
        { type: 'video', src: verletDemo },
    ]

    const getOpacity = (index) => {
        const segmentSize = 1 / projectCount;
        const start = index * segmentSize;
        const end = (index + 1) * segmentSize;
        
        // Fade in when entering the segment, fade out when leaving
        if (currentProgress >= start && currentProgress < end) {
            return 1;
        }
        return 0;
    };

    return (
        <div className="py-10 px-20 top-0 sticky">
            <div className="relative w-[800px] h-[600px] rounded-xl overflow-hidden">
                {media.map((item,index) => (
                    item.type === 'video' ? (
                        <video
                            key={index}
                            src={item.src}
                            autoPlay loop muted playsInline
                            className="absolute max-w-full max-h-full object-cover transition-opacity duration-300 ease-in"
                            style={{ opacity: getOpacity(index) }}
                        />
                    ) : (
                        <img
                            key={index}
                            src={item.src}
                            className="absolute w-full h-full object-cover transition-opacity duration-300 ease-in"
                            style={{ opacity: getOpacity(index) }}
                        />
                    )
                ))}
            </div>
        </div>
    )
}
