import { RiFirebaseFill } from "react-icons/ri";
import { GrSwift } from "react-icons/gr";
import { SiPython, SiGodotengine, SiFastapi, SiSwift, SiApple } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import astroRaider from "./assets/astro_raider.jpg"
import verletDemo from "./assets/verlet_demo.mp4"
import repImprov from "./assets/rep_improv.jpg"
import findlyDemo from "./assets/findly_demo.mp4"
import claudePeek from "./assets/claudepeek.png"

const MEDIA_HEIGHT = 420;

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

export function ProjectSection() {
    const columnRef = useRef(null);
    const cardRefs = useRef([]);

    const projects = {
        project0: {
            title: "claudepeek",
            logos: [SiSwift, SiApple],
            descriptions: [
                "Native macOS menu-bar and notch app giving real-time visibility into multiple concurrent Claude Code sessions.",
                "Interactive permission handling lets you Allow/Always/Deny tool calls right from the notch UI, backed by a persisted usage heatmap.",
            ],
            link: "https://github.com/qutch",
            media: { type: 'image', src: claudePeek }
        },
        project1: {
            title: "rep improv",
            logos: [SiPython],
            descriptions: [
                "AI workout form coach built for the TwelveLabs x Voxel51 hackathon. Honorable mention.",
                "Pegasus video-language model turns raw workout footage into structured coaching feedback.",
            ],
            link: "https://github.com/Hiro11411/RepImprov",
            media: { type: 'image', src: repImprov }
        },
        project2: {
            title: "findly",
            logos: [SiSwift, SiPython, SiFastapi],
            descriptions: [
                "Native macOS app for searching your files in plain language. Fully local, no API calls, no cloud.",
                "On-device vector search with LanceDB and Ollama embeddings, SwiftUI frontend over a local FastAPI service.",
                "Background indexing pipeline with SQLite metadata, plus a global shortcut for Spotlight-style quick search.",
            ],
            link: "https://github.com/qutch/findly",
            media: { type: 'video', src: findlyDemo }
        },
        project3: {
            title: "astro raiders",
            logos: [SiGodotengine],
            descriptions: [
                "2D top-down space shooter. Play as a raider, blasting alien saucers.",
                "Full game loop with physics-based player movement, enemy AI, and real-time event handling.",
                "All art designed and music composed from scratch.",
            ],
            link: "https://htquartz.itch.io/astro-raider",
            media: { type: 'image', src: astroRaider }
        },
        project4: {
            title: "verlet integration",
            logos: [SiPython],
            descriptions: [
                "2D particle physics simulation using the Verlet Integration method.",
                "Built with PyGame for rendering.",
            ],
            link: "https://github.com/qutch/Verlet",
            media: { type: 'video', src: verletDemo }
        },
    }

    const [activeIndex, setActiveIndex] = useState(0);
    const [mediaOffset, setMediaOffset] = useState(0);

    // Active project = card whose center is closest to the middle of the viewport.
    // At the bottom of the page the last card always wins, since it may never reach the middle.
    useEffect(() => {
        const update = () => {
            const cards = cardRefs.current.filter(Boolean);
            if (!cards.length) return;

            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
            let index = cards.length - 1;
            if (!atBottom) {
                const viewportCenter = window.innerHeight / 2;
                let bestDistance = Infinity;
                cards.forEach((card, i) => {
                    const rect = card.getBoundingClientRect();
                    const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
                    if (distance < bestDistance) {
                        bestDistance = distance;
                        index = i;
                    }
                });
            }
            setActiveIndex(index);

            // Line the media's center up with the active card's center, kept within the column
            const column = columnRef.current;
            if (column) {
                const card = cards[index];
                const cardCenter = card.offsetTop + card.offsetHeight / 2;
                const maxOffset = Math.max(column.offsetHeight - MEDIA_HEIGHT, 0);
                setMediaOffset(Math.min(Math.max(cardCenter - MEDIA_HEIGHT / 2, 0), maxOffset));
            }
        };

        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    return (
        <div>
            {/* Header */}
            <motion.div
                className="px-6 py-8 md:px-12 md:py-10 lg:px-20 bg-asphalt"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                <h1 className="text-3xl md:text-5xl lg:text-6xl text-custom-gray font-unbounded">My Work</h1>
            </motion.div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex flex-row justify-around py-10 gap-6">
                <div ref={columnRef} className="relative flex flex-col gap-8 py-4">
                    {Object.entries(projects).map(([key, project], i) => (
                        <motion.div
                            key={key}
                            ref={(el) => (cardRefs.current[i] = el)}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.1 }}
                        >
                            <ProjectCard
                                title={project.title}
                                logos={project.logos}
                                descriptions={project.descriptions}
                                link={project.link}
                                isActive={activeIndex === i}
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="relative w-[560px]">
                    <ProjectImage activeIndex={activeIndex} offset={mediaOffset} projects={projects} />
                </div>
            </div>

            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden py-6 md:py-8 px-4 md:px-8 flex flex-col gap-10 md:gap-14">
                {Object.entries(projects).map(([key, project], i) => (
                    <motion.div
                        key={key}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.1 }}
                    >
                        <ProjectCardWithMedia
                            title={project.title}
                            logos={project.logos}
                            descriptions={project.descriptions}
                            link={project.link}
                            media={project.media}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}


function ProjectCard({ title, logos, descriptions, link, isActive = false }) {
    const logoClass = "w-auto h-9 text-custom-gray hover:text-accent-orange transition duration-200 ease-out"

    return (
        <div className={`
            relative flex flex-col px-8 py-6 lg:px-10 lg:py-8
            w-[460px] bg-card rounded-xl
            border transition duration-300 ease-out
            ${isActive ? "border-accent-orange" : "border-asphalt hover:border-accent-orange/60"}
        `}>
            {/* Title */}
            <h2 className="font-mono-display text-accent-orange text-3xl lg:text-4xl mb-3">{title}</h2>

            {/* Logos */}
            <div className="flex flex-row gap-4 mb-6">
                {logos.map((Logo, index) => (
                    <Logo key={index} className={logoClass} />
                ))}
            </div>

            {/* Descriptions */}
            <ul className="flex flex-col gap-3 flex-grow">
                {descriptions.map((desc, index) => (
                    <li key={index} className="flex gap-3 items-start">
                        <span className="text-accent-orange mt-1 leading-none select-none">›</span>
                        <p className="font-urbanist font-[200] text-lg lg:text-xl text-custom-gray leading-relaxed">
                            {desc}
                        </p>
                    </li>
                ))}
            </ul>

            {/* Link */}
            <a href={link} target="_blank" className="mt-6 self-end">
                <FaExternalLinkAlt className="w-6 h-auto text-cream hover:text-accent-orange transition duration-200 ease-out" />
            </a>
        </div>
    )
}


function ProjectCardWithMedia({ title, logos, descriptions, link, media }) {
    const logoClass = "w-auto h-9 text-custom-gray hover:text-accent-orange transition duration-200 ease-out"

    return (
        <div className="flex flex-col max-w-2xl mx-auto">
            {/* Media */}
            <div className="w-full rounded-xl overflow-hidden mb-5">
                {media.type === 'video' ? (
                    <video src={media.src} autoPlay loop muted playsInline className="w-full h-auto object-cover" />
                ) : (
                    <img src={media.src} className="w-full h-auto object-cover" alt={title} />
                )}
            </div>

            {/* Card */}
            <div className="
                relative flex flex-col px-5 py-5 md:px-7 md:py-6
                bg-card rounded-xl
                border border-asphalt hover:border-accent-orange/60
                transition duration-200 ease-out
            ">
                <h2 className="font-mono-display text-accent-orange text-2xl md:text-3xl mb-3">{title}</h2>

                <div className="flex flex-row gap-4 mb-5">
                    {logos.map((Logo, index) => (
                        <Logo key={index} className={logoClass} />
                    ))}
                </div>

                <ul className="flex flex-col gap-3">
                    {descriptions.map((desc, index) => (
                        <li key={index} className="flex gap-3 items-start">
                            <span className="text-accent-orange mt-1 leading-none select-none">›</span>
                            <p className="font-urbanist font-[200] text-base md:text-lg text-custom-gray leading-relaxed">
                                {desc}
                            </p>
                        </li>
                    ))}
                </ul>

                <a href={link} target="_blank" className="mt-5 self-end">
                    <FaExternalLinkAlt className="w-5 h-auto text-cream hover:text-accent-orange transition duration-200 ease-out" />
                </a>
            </div>
        </div>
    )
}


function ProjectImage({ activeIndex, offset, projects }) {
    const media = Object.values(projects).map(p => p.media);

    return (
        <motion.div
            className="absolute top-0 left-0"
            initial={false}
            animate={{ y: offset }}
            transition={{ type: "spring", stiffness: 120, damping: 22 }}
        >
            <div className="relative w-[560px] rounded-xl overflow-hidden bg-asphalt" style={{ height: MEDIA_HEIGHT }}>
                {media.map((item, index) => (
                    item.type === 'video' ? (
                        <video
                            key={index}
                            src={item.src}
                            autoPlay loop muted playsInline
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ease-out"
                            style={{ opacity: index === activeIndex ? 1 : 0 }}
                        />
                    ) : (
                        <img
                            key={index}
                            src={item.src}
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ease-out"
                            style={{ opacity: index === activeIndex ? 1 : 0 }}
                            alt={`Project ${index + 1}`}
                        />
                    )
                ))}
            </div>
        </motion.div>
    )
}
