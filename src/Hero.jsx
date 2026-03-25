// Import Logos
import { FaItchIo } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const scrollToSection = (id) => {
    const section = document.getElementById(id);
        if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};

export function HeroSection() {
    return (
        <div>
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <IntroSection />
                <NavSection />
            </div>
            <div className="flex justify-center mt-8 lg:mt-0">
                <div onClick={() => scrollToSection("about")}>
                    <DownArrow />
                </div>
            </div>
        </div>
    )
}

function IntroSection() {

    const logoStyle = "text-cream w-12 h-auto md:w-15 hover:text-accent-orange transition duration-200 ease-out"

    return (
        <div className="min-h-[40vh] lg:h-[60vh] py-8 lg:py-0">
            <div>

                <div className="px-6 md:px-10 lg:px-15">
                    <h1 className="font-unbounded text-4xl md:text-6xl lg:text-8xl font-[100] text-custom-gray">Hey! I'm</h1>
                    <h1 className="font-unbounded text-4xl md:text-6xl lg:text-8xl font-[400] text-cream">Hutch Turner</h1>
                </div>

                <div className="px-6 md:px-10 lg:px-15 pt-3 md:pt-4 lg:pt-5 pb-2">
                    <h1 className="font-mono-display text-lg md:text-xl lg:text-2xl text-custom-gray">student • developer</h1>
                </div>

                <div className="px-6 md:px-10 lg:px-15">
                    <div className="w-full max-w-[400px] lg:w-100 h-0.5 bg-accent-orange" />
                </div>

                {/* Logo Section */}
                <div className="flex flex-row h-auto px-6 md:px-10 lg:px-15 py-4 lg:py-5 space-x-4 md:space-x-5">
                    <a href="https://github.com/qutch" target="_blank">
                        <FaGithubSquare className={logoStyle} />
                    </a>
                    <a href="https://www.linkedin.com/in/hutch-turner/" target="_blank">
                        <FaLinkedin className={logoStyle} />
                    </a>
                    <a href="https://htquartz.itch.io/" target="_blank">
                        <FaItchIo className={logoStyle} />
                    </a>
                </div>

            </div>
        </div>
    )
}

function NavSection() {
    
    const navGroupStyle = "group flex flex-row justify-between py-3 px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 hover:bg-cream transition duration-200 ease-out"
    const navTitleStyle = "font-mono-display text-xl md:text-2xl lg:text-3xl text-custom-gray group-hover:text-obsidian group-hover:font-black transition duration-200 ease-out"
    const navNumStyle = "font-unbounded text-xl md:text-2xl lg:text-3xl font-[700] text-custom-gray px-3 md:px-4 lg:px-5 group-hover:text-accent-orange transition duration-200 ease-out"

    return (
        <div className="w-full lg:w-[20vw] lg:min-w-max hover:cursor-default px-4 lg:px-0">

            <div className={navGroupStyle} onClick={() => scrollToSection("about")}>
                    <h1 className={navTitleStyle}>about me</h1>
                    <h1 className={navNumStyle}> 01</h1>
            </div>

            <div className={navGroupStyle} onClick={() => scrollToSection("projects")}>
                <h1 className={navTitleStyle}>my work</h1>
                <h1 className={navNumStyle}> 02</h1>
            </div>

            <div className={navGroupStyle} onClick={() => scrollToSection("contact")}>
                <h1 className={navTitleStyle}>contact</h1>
                <h1 className={navNumStyle}> 03</h1>
            </div>

        </div>
    )
}

function DownArrow() {
    return (
        <div className="hover:opacity-70 transition duration-200 ease-out cursor-pointer">
            <svg className="w-20 h-24 md:w-24 md:h-28 lg:w-[116px] lg:h-[141px]" viewBox="0 0 116 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M67.6667 9.67647C67.6667 15.0206 63.3388 19.3529 58 19.3529C52.6612 19.3529 48.3333 15.0206 48.3333 9.67647C48.3333 4.3323 52.6612 0 58 0C63.3388 0 67.6667 4.3323 67.6667 9.67647Z" fill="#D9D9D9"/>
                <path d="M67.6667 40.0882C67.6667 45.4324 63.3388 49.7647 58 49.7647C52.6612 49.7647 48.3333 45.4324 48.3333 40.0882C48.3333 34.7441 52.6612 30.4118 58 30.4118C63.3388 30.4118 67.6667 34.7441 67.6667 40.0882Z" fill="#D9D9D9"/>
                <path d="M67.6667 70.5C67.6667 75.8442 63.3388 80.1765 58 80.1765C52.6612 80.1765 48.3333 75.8442 48.3333 70.5C48.3333 65.1558 52.6612 60.8235 58 60.8235C63.3388 60.8235 67.6667 65.1558 67.6667 70.5Z" fill="#D9D9D9"/>
                <path d="M67.6667 100.912C67.6667 106.256 63.3388 110.588 58 110.588C52.6612 110.588 48.3333 106.256 48.3333 100.912C48.3333 95.5676 52.6612 91.2353 58 91.2353C63.3388 91.2353 67.6667 95.5676 67.6667 100.912Z" fill="#D9D9D9"/>
                <path d="M67.6667 131.324C67.6667 136.668 63.3388 141 58 141C52.6612 141 48.3333 136.668 48.3333 131.324C48.3333 125.979 52.6612 121.647 58 121.647C63.3388 121.647 67.6667 125.979 67.6667 131.324Z" fill="#D9D9D9"/>
                <path d="M96.6667 106.441C96.6667 111.785 92.3388 116.118 87 116.118C81.6612 116.118 77.3333 111.785 77.3333 106.441C77.3333 101.097 81.6612 96.7647 87 96.7647C92.3388 96.7647 96.6667 101.097 96.6667 106.441Z" fill="#D9D9D9"/>
                <path d="M38.6667 106.441C38.6667 111.785 34.3388 116.118 29 116.118C23.6612 116.118 19.3333 111.785 19.3333 106.441C19.3333 101.097 23.6612 96.7647 29 96.7647C34.3388 96.7647 38.6667 101.097 38.6667 106.441Z" fill="#D9D9D9"/>
                <path d="M19.3333 81.5588C19.3333 86.903 15.0054 91.2353 9.66667 91.2353C4.32791 91.2353 0 86.903 0 81.5588C0 76.2147 4.32791 71.8824 9.66667 71.8824C15.0054 71.8824 19.3333 76.2147 19.3333 81.5588Z" fill="#D9D9D9"/>
                <path d="M116 81.5588C116 86.903 111.672 91.2353 106.333 91.2353C100.995 91.2353 96.6667 86.903 96.6667 81.5588C96.6667 76.2147 100.995 71.8824 106.333 71.8824C111.672 71.8824 116 76.2147 116 81.5588Z" fill="#D9D9D9"/>
            </svg>
        </div>
    )
}