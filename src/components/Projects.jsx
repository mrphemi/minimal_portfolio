import Link from "next/link";

import Arrow from "./icons/arrow-up-right";
import Project from "./icons/project";

const projectsData = [
  {
    title: "Hold Storage",
    description: "Secure, 24/7 storage units in London",
    technologies: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    link: "https://www.holdstorage.co.uk/",
  },
  {
    title: "Verifyd",
    description: "Verifyd Exclusive Prize Draws.",
    technologies: ["Next.js", "Tailwind CSS"],
    link: "https://www.joinverifyd.com/",
  },
  {
    title: "Atomos",
    description: "Finance Advisers and Wealth Management Services.",
    technologies: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    link: "https://www.atomos.co.uk/",
  },
  {
    title: "Clays",
    description: "Hospitality and entertainment company based in UK.",
    technologies: ["Next.js", "Tailwind CSS", "Hygraph CMS"],
    link: "https://clays.bar/",
  },
];

const Projects = () => {
  return (
    <section>
      <div className="group flex gap-3 items-center">
        <div className="p-1.5 bg-transparent rounded-xl group-hover:text-white bg-linear-to-b from-green via-green-900 to-green-800">
          <Project />
        </div>

        <h2 className="font-bold text-lg group-hover:text-white">Projects</h2>
      </div>

      <p className="mt-2.5 md:text-lg md:w-4/5">
        Explore some of my projects both personal and professionally that I've
        dedicated my time to.
      </p>

      <ul className="mt-5 space-y-8">
        {projectsData.map((project, index) => (
          <li key={index} className="group w-fit">
            <Link href={project.link} target="_blank" rel="noopener">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 border-b border-transparent border-dashed group-hover:border-white text-white group-hover:text-inherit">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <Arrow className="invisible group-hover:visible" />
                </div>
                <div className="group-hover:text-white space-y-1">
                  <p className="font-medium">{project.description}</p>
                  <ul className="flex gap-2 items-center">
                    {project.technologies.map((tech, idx) => (
                      <li
                        key={idx}
                        className="text-xs font-medium after:ml-2 after:content-['𝄪'] last-of-type:after:content-['']"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
