import profileImage from "./assets/profile_image.png"

export function AboutMe() {

    const textStyle = "text-3xl font-urbanist font-[200] text-custom-gray"

    return (
        <div>
            <div className="px-20 py-10 bg-asphalt">
                <h1 className="text-6xl text-custom-gray font-unbounded">About Me</h1>
            </div>
            <div className="p-10 flex flex-row justify-around items-center">
                <div>
                    <img src={profileImage} className="h-200 w-auto rounded-[10px] overflow-hidden"/>
                </div>
                <div className="p-5 w-200 h-fit bg-card border-2 border-accent-orange rounded-[10px]">
                    <p className={textStyle}> I'm a student studying Computer Science at Northeastern University. I am expected to graduate in May 2029.</p>
                    <div className="h-10"/>
                    <p className={textStyle}> I enjoy developing games and mobile applications, or just generally bringing my ideas to life. I also have an interest in AI and Robotics, specifically how they can be combined to be integrated into society and become a part of our daily lives.</p>
                    <div className="h-10"/>
                    <p className={textStyle}>
                        Beyond tech, I love photography and music - especially artists like Daniel Ceasar and RADWIMPS.
                        I also need to be active, whether that is running, rock climbing, or hiking. So far my favorite hike so far has been the Hardergrat trail in Interlaken, Switzerland.
                    </p>
                </div>
            </div>
        </div>
    )
}