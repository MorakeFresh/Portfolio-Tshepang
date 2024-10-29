import Link from "next/link";
import { FaJava, FaJsSquare, FaReact, FaAndroid, FaDatabase } from "react-icons/fa";
import { SiCsharp, SiFirebase, SiDotnet } from "react-icons/si";

const projects = [
  {
    title: "Bakery Project",
    description: "Java Backend, JavaScript Frontend",
    url: "https://github.com/MorakeFresh/BakeryProject",
    duration: "2023",
    icons: [<FaJava key="java" />, <FaJsSquare key="js" />],
  },
  {
    title: "Player Management",
    description: "Java Backend, Next.js Frontend",
    url: "https://github.com/MorakeFresh/player_management_app",
    duration: "2024",
    icons: [<FaJava key="java" />, <FaReact key="nextjs" />],
  },
  {
    title: "Collection App",
    description: "Android, Firebase",
    url: "https://github.com/MorakeFresh/CollectionApp",
    duration: "2022",
    icons: [<FaAndroid key="android" />, <SiFirebase key="firebase" />],
  },
  {
    title: "Personal Budget Planning App",
    description: "C#",
    url: "https://github.com/MorakeFresh/PersonalBudgetPlanningApp",
    duration: "2021",
    icons: [<SiCsharp key="csharp" />],
  },
  {
    title: "School Management App",
    description: "C#, ASP.NET",
    url: "https://github.com/MorakeFresh/SchoolManagementApp",
    duration: "2020",
    icons: [<SiCsharp key="csharp" />, <SiDotnet key="aspnet" />],
  },
  {
    title: "Survey App",
    description: "Java",
    url: "https://github.com/MorakeFresh/SurveyAppJava",
    duration: "2023",
    icons: [<FaJava key="java" />],
  },
];

export default function Work() {
  return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center p-6">
        <div className="flex flex-col gap-[30px] text-center xl:text-left max-w-[800px]">
          <h3 className="text-4xl font-bold">My Projects</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
            Here are some of my completed projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="bg-[#232329] py-6 px-8 rounded-lg flex flex-col justify-center items-center lg:items-start gap-3 w-full max-w-[500px] mx-auto"
                >
                  <span className="text-accent text-sm">{project.duration}</span>
                  <h3 className="text-xl font-semibold text-center lg:text-left">{project.title}</h3>
                  <p className="text-white/60 text-center lg:text-left">{project.description}</p>
                  <div className="flex items-center gap-3 mt-2">
                    {project.icons.map((icon, i) => (
                        <span key={i} className="text-xl text-accent">{icon}</span>
                    ))}
                    <Link href={project.url} target="_blank" className="text-blue-500 hover:underline">
                      GitHub
                    </Link>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}
