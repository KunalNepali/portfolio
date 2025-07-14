export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
                       items-center bg-emerald-200 max-w-5xl mx-auto"
        >
            <div className="flex-1">
                <img
                    src="img/kunal"
                    alt="About"
                    className="w-full h-full bg-cover"
                />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-5 px-6">
                <h2 className="text-center text-emerald-500 text-5xl font-bold">
                    About Me
                </h2>
                <p>
                    Hi, my name is Kunal Nepali. I am a student at Vedas College, 6th semester, pursuing a degree in BSc.CSIT.
                </p>
                <p>
                    I am passionate about backend development and love working on real-life projects. I also enjoy content writing and frontend design.
                </p>
            </div>
        </section>
    );
}
