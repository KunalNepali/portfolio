// Projects.js
export default function Projects() {
  const projects = [
    {
      title: "Java & SQL Mini Project",
      description: "A Student Information System developed using Java and SQL for academic records management.",
      link: "#",
      image: "https://via.placeholder.com/300x200?text=Java+SQL+Project"
    },
    {
      title: "E-commerce Website: Lalitpur Bags",
      description: "Developed a full-stack e-commerce platform for a family business using PHP and MySQL.",
      link: "#",
      image: "https://via.placeholder.com/300x200?text=Lalitpur+Bags"
    },
    {
      title: "Music Player Web App",
      description: "Developed a music-player web application using Tailwind CSS, JavaScript, and HTML.",
      link: "#",
      image: "https://via.placeholder.com/300x200?text=Music+Web+App"
    },
    {
      title: "Music App (Android)",
      description: "Developed a personalized mobile music app using Java and Kotlin.",
      link: "#",
      image: "https://via.placeholder.com/300x200?text=Android+Music+App"
    },
    {
      title: "DSA Progress Tracker",
      description: "A React project that tracks your DSA progress and stores it in local storage.",
      link: "https://www.geeksforgeeks.org/progress-tracker-using-react-and-local-storage/",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20230927120905/gfg.png"
    },
    {
      title: "15 Puzzle Game",
      description: "A tile-based game built using ReactJS where you solve a shuffled number puzzle.",
      link: "https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20230904150620/gfg.png"
    }
  ];

  return (
    <section id="projects" className="my-20 w-full max-w-5xl mx-auto px-4">
      <h2 className="text-5xl text-emerald-500 font-bold text-center mb-10">
        My Projects
      </h2>
      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-6 bg-emerald-200 flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } justify-center items-center gap-6 shadow transition hover:shadow-xl hover:scale-[102%]`}
          >
            <div className="w-80 rounded">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded"
                />
              </a>
            </div>
            <div className="flex flex-col items-center text-center lg:text-left gap-3 flex-1">
              <h3 className="font-bold text-3xl">
                <a href={project.link} className="hover:underline" target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
