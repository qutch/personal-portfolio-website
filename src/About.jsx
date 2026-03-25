import { motion } from "framer-motion"
import profileImage from "./assets/profile_image.png"

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

export function AboutMe() {
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
                <h1 className="text-3xl md:text-5xl lg:text-6xl text-custom-gray font-unbounded">About Me</h1>
            </motion.div>

            {/* Content */}
            <div className="px-6 py-10 md:px-12 md:py-14 lg:px-20 lg:py-16 flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

                {/* Profile Image */}
                <motion.div
                    className="w-full lg:w-auto flex justify-center lg:justify-start shrink-0"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <img
                        src={profileImage}
                        className="w-full max-w-sm lg:w-72 xl:w-80 rounded-xl object-cover"
                        alt="Profile"
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    className="flex flex-col gap-8 lg:gap-10 max-w-2xl"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
                >
                    <Section label="// education">
                        I'm a student studying Computer Science at Northeastern University, expected to graduate in May 2029.
                    </Section>

                    <Section label="// interests">
                        I enjoy developing games and mobile applications, or just generally bringing my ideas to life. I also have a strong interest in AI and Robotics, specifically how they can be integrated into society and become a part of our daily lives.
                    </Section>

                    <Section label="// beyond tech">
                        I love photography and music, especially artists like Daniel Caesar and RADWIMPS. I need to stay active, whether that's running, rock climbing, or hiking. My favorite hike so far has been the Hardergrat trail in Interlaken, Switzerland.
                    </Section>
                </motion.div>
            </div>
        </div>
    )
}

function Section({ label, children }) {
    return (
        <div className="flex flex-col gap-2">
            <span className="font-mono-display text-accent-orange text-sm md:text-base tracking-widest">{label}</span>
            <p className="font-urbanist font-[300] text-xl md:text-2xl lg:text-[1.65rem] text-custom-gray leading-relaxed pl-1">
                {children}
            </p>
        </div>
    )
}
