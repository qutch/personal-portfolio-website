import Logo from "./assets/personal_logo.svg?react";

export function HeroSection() {
    return (
        <div className="flex flex-row justify-between">
            <IntroSection />
            <NavSection />
        </div>
    )
}

function IntroSection() {
    return (
        <div className="h-screen border-2 border-green-500">
            <div>

                <div className="p-5 w-20">
                    <Logo className="w-10 h-10 hover:text-blue-400 transition-colors duration-300" />
                </div>

                <div className="px-15 py-5">
                    <h1 className="font-unbounded text-8xl font-[100] text-custom-gray">hey! i'm</h1>
                    <h1 className="font-unbounded text-8xl font-[400] text-cream">hutch turner</h1>
                </div>

            </div>
        </div>
    )
}

function NavSection() {
    return (
        <div className="w-[20vw] min-w-max border-2 border-blue-500">

            <div className="group flex flex-row justify-between py-5 px-10 hover:bg-cream hover:scale-110 transition duration-100 ease-in-out">
                <h1 className="font-mono-display text-3xl text-custom-gray group-hover:text-obsidian group-hover:font-black transition duration-100 ease-in-out">about me</h1>
                <h1 className="font-unbounded text-3xl font-[700] text-custom-gray px-5 group-hover:text-obsidian transition duration-100 ease-in-out"> 01</h1>
            </div>

            <div className="group flex flex-row justify-between py-5 px-10 hover:bg-cream hover:scale-110 transition duration-100 ease-in-out">
                <h1 className="font-mono-display text-3xl text-custom-gray group-hover:text-obsidian group-hover:font-black transition duration-100 ease-in-out">my work</h1>
                <h1 className="font-unbounded text-3xl font-[700] text-custom-gray px-5 group-hover:text-obsidian transition duration-100 ease-in-out"> 02</h1>
            </div>

            <div className="group flex flex-row justify-between py-5 px-10 hover:bg-cream hover:scale-110 transition duration-100 ease-in-out">
                <h1 className="font-mono-display text-3xl text-custom-gray group-hover:text-obsidian group-hover:font-black transition duration-100 ease-in-out">contact</h1>
                <h1 className="font-unbounded text-3xl font-[700] text-custom-gray px-5 group-hover:text-obsidian transition duration-100 ease-in-out"> 03</h1>
            </div>

        </div>
    )
}