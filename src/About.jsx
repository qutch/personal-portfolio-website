import profileImage from "./assets/profile_image.png"

export function AboutMe() {

    const textStyle = "text-xl md:text-2xl lg:text-3xl font-urbanist font-[200] text-custom-gray"

    return (
        <div>
            {/* Header Section - Responsive padding */}
            <div className="px-6 py-8 md:px-12 md:py-10 lg:px-20 bg-asphalt">
                <h1 className="text-3xl md:text-5xl lg:text-6xl text-custom-gray font-unbounded">About Me</h1>
            </div>
            
            {/* Content Section - Switches from column to row layout */}
            <div className="p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row justify-around items-center gap-8 lg:gap-6">
                {/* Image Container */}
                <div className="w-full lg:w-auto flex justify-center">
                    <img 
                        src={profileImage} 
                        className="h-auto w-full max-w-md lg:w-150 rounded-[10px] overflow-hidden"
                        alt="Profile"
                    />
                </div>
                
                {/* Text Card - Responsive width and padding */}
                <div className="p-4 md:p-5 w-full lg:w-200 h-fit bg-card border-2 border-accent-orange rounded-[10px]">
                    <p className={textStyle}>
                        I'm a student studying Computer Science at Northeastern University. I am expected to graduate in May 2029.
                    </p>
                    <div className="h-6 md:h-8 lg:h-10"/>
                    <p className={textStyle}>
                        I enjoy developing games and mobile applications, or just generally bringing my ideas to life. I also have an interest in AI and Robotics, specifically how they can be combined to be integrated into society and become a part of our daily lives.
                    </p>
                    <div className="h-6 md:h-8 lg:h-10"/>
                    <p className={textStyle}>
                        Beyond tech, I love photography and music - especially artists like Daniel Ceasar and RADWIMPS.
                        I also need to be active, whether that is running, rock climbing, or hiking. So far my favorite hike so far has been the Hardergrat trail in Interlaken, Switzerland.
                    </p>
                </div>
            </div>
        </div>
    )
}