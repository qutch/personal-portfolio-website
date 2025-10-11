import { RiFirebaseFill } from "react-icons/ri";
import { GrSwift } from "react-icons/gr";

export function ProjectSection() {
    return (
        <div className="flex flex-row justify-between">
            <div className="h-auto border-2 border-blue-500">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <div className="border-2 border-green-500">
                <ProjectImage />
            </div>
        </div>
    )
}


function ProjectCard() {
    return (
        <div className="py-10 px-20">
            <div className="flex items-center flex-col p-5 min-w-auto max-w-[500px] h-[700px] bg-card border-2 border-accent-orange rounded-[10px] hover:scale-101 transition duration-300 ease-in-out">

                <h1 className="py-3 w-110 text-center rounded-[10px] font-mono-display text-cream text-5xl bg-asphalt">melting pot</h1>

                <div className="flex flex-row space-x-5 pt-3">
                    <GrSwift className="w-auto h-12 text-custom-gray hover:scale-110 hover:text-accent-orange transition duration-200 ease-in-out"/>
                    <RiFirebaseFill className="w-auto h-12 text-custom-gray hover:scale-110 hover:text-accent-orange transition duration-200 ease-in-out"/>
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

function ProjectImage() {
    return (
        <div className="py-10 px-20 top-0 sticky">
            <div className="w-200 h-150 bg-cream"/>
        </div>
    )
}