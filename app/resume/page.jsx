"use client";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import {ScrollArea} from "@/components/ui/scroll-area";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaJava,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiNextdotjs,
    SiCplusplus,
    SiUnrealengine,
    SiExpress,
    SiShadcnui, SiCsharp, SiSpringboot, SiAndroidstudio, SiDart, SiDotnet, SiFlutter, SiKubernetes,
} from "react-icons/si";
import {IoSchoolSharp} from "react-icons/io5";
import {DiDocker, DiMongodb, DiMysql, DiPostgresql} from "react-icons/di";
import {motion} from "framer-motion";


const about = {
    title: "About me",
    description:
        "I aspire to become a skilled Full Stack Developer, coding back-end in Java and C#, front-end in React.js\
         and Next.js and Android Development using Flutter, Dart. I have knowledge of various new technologies \
         and frameworks and understand the Software Development Life Cycle. I am a responsible, and team orientated\
         person, who is keen to learn, listen and apply my skills to meet the challenges presented to me.\
         I have good communication and leadership skills. I strive to do my best to reach my goals and\
         those of the organization for whom I am working for.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Tshepang Morake",
        },
        {
            fieldName: "Phone",
            fieldValue: "+27 81 368 5252",
        },
        {
            fieldName: "Email",
            fieldValue: "tshepangmorake07@gmail.com",
        },
    ],
};

const education = {
    icon: <IoSchoolSharp/>,
    title: "My education",
    description:
        "I have a Diploma in Information Technology in Software Development from The IIE Rosebank College, \
        and have complete short Java Skills Program at Necer Inter-ed",
    items: [
        {
            institution: "Mecer Inter-Ed",
            qualification: "Java Skills Program",
            duration: "2023-2023",
        },
        {
            institution: "IIE Rosebank College",
            qualification: "Diploma in Information Technology in Software Development",
            duration: "2020-2022",
        },
        {
            institution: "Krugersdorp High School",
            qualification: "National Senior Certificate",
            duration: "2013-2017",
        },
    ],
};

const skills = {
    title: "My skills",
    description:
        "I have a diverse set of skills in full-stack development, specializing in back-end programming and mobile applications. \
         My expertise spans HTML, CSS, JavaScript, TypeScript, and frameworks like React.js, Next.js, and Tailwind CSS. On the back-end,\
         I’m experienced in building Java-based APIs using Spring Boot, conducting JUnit tests with Mockito, and managing databases \
         such as PostgreSQL and MySQL. I also bring strong mobile development skills with Flutter and Dart, including state management with Bloc. \
         Additionally, I have experience in deploying applications with Docker and Kubernetes, and I am familiar with C#, ASP.NET",
    skillList: [
        {
            icon: <FaJava/>,
            name: "Java",
        },
        {
            icon: <SiSpringboot/>,
            name: "Spring Boot",
        },
        {
            icon: <FaHtml5/>,
            name: "html 5",
        },
        {
            icon: <FaCss3/>,
            name: "css",
        },
        {
            icon: <FaJs/>,
            name: "Javascript",
        },
        {
            icon: <FaNodeJs/>,
            name: "NodeJs",
        },
        {
            icon: <SiNextdotjs/>,
            name: "Next.Js",
        },
        {
            icon: <FaReact/>,
            name: "ReactJs",
        },
        {
            icon: <SiTailwindcss/>,
            name: "Tailwind css",
        },
        {
            icon: <SiFlutter/>,
            name: "Flutter",
        },
        {
            icon: <SiAndroidstudio/>,
            name: "Android Development",
        },
        {
            icon: <SiDart/>,
            name: "Dart",
        },
        {
            icon: <DiPostgresql/>,
            name: "PostgreSQL",
        },
        {
            icon: <DiMysql/>,
            name: "MySQL",
        },
        {
            icon: <DiDocker/>,
            name: "Docker",
        },
        {
            icon: <SiKubernetes/>,
            name: "Kubernetes",
        },
        {
            icon: <SiCsharp/>,
            name: "C#",
        },
        {
            icon: <SiDotnet/>,
            name: "ASP .NET",
        }
    ],
};

export default function Resume() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="education"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ScrollArea className="h-[500px]">
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                        {skills.skillList.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger
                                                                className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                <div
                                                                    className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                    {skill.icon}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>

                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <div
                                                        className="flex sm:flex-row justify-between items-center flex-col
                          "
                                                    >
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                            {item.qualification}
                                                        </h3>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent
                            value="about"
                            className="w-full text-center xl:text-left"
                        >
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}
