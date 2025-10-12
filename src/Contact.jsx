import { MdOutlineAttachEmail } from "react-icons/md";

export function Contact() {
    return (
        <div>
            <div className="flex justify-center w-screen h-fit px-20 py-10">
                <h1 className="flex flex-row space-x-3 w-fit items-center group p-5 font-unbounded text-3xl text-cream bg-card border-2 border-accent-orange rounded-[10px] hover:text-obsidian hover:bg-cream transition duration-300 ease-in-out rounded-[10px]">
                    <a href="mailto:hutchinson.turner@gmail.com">Send me an email </a>
                    <MdOutlineAttachEmail className="size-10"/>
                </h1>
            </div>
        </div>
    )
}