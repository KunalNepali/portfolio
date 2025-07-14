export default function Hero() {
    return (
        <section
            id="hero"
            className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                       justify-center items-center align-center mt-40 
                       mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
            <div className="flex-1 flex flex-col justify-center items-center gap-5">
                <div>
                    <h4 className="text-center text-xl font-bold">
                        Hello!
                    </h4>
                    <h2 className="text-center text-emerald-500 text-5xl font-bold">
                        I'm Kunal Nepali
                    </h2>
                </div>
                <p className="text-center">
                    I'm currently learning Java and have a strong interest in backend development. <br />
                    I enjoy building real-world projects, exploring modern technologies, <br />
                    and continuously improving my skills as a developer.
                </p>
            </div>
            <div className="flex-1">
                <img 
                    src="img/kunal" 
                    alt="Kunal Nepali"
                    className="w-full h-full object-contain" 
                />
            </div>
        </section>
    );
}
