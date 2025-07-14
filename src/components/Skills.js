const skills = ["Java", "Python", "HTML", "CSS", "JavaScript", "Kotlin", "Cordova", "React"];

export default function Skills() {
    return (
        <section id="skills" className="...">
            <h2>My Skills</h2>
            <div>
                {skills.map((skill, index) => (
                    <div key={index}>{skill}</div>  // Make sure this is a string, not an object
                ))}
            </div>
        </section>
    );
}
