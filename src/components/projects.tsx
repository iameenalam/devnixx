"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { SectionHeading, TextReveal } from "./ui/Typography";
import { Project } from "../utils/interface";
import ProjectDialog from "./ProjectDialog";
import { ArrowUpRight } from "./ui/Icons";
import { SlideIn, Transition } from "./ui/Transitions";

interface ProjectsProps {
  projects: Project[];
}

function Projects({ projects }: ProjectsProps) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filterValue, setFilterValue] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const numProjectToShow = 4;

  useEffect(() => {
    const filtered = applyFilters(projects, filterValue);
    setFilteredProjects(filtered);
  }, [filterValue, projects]);

  const applyFilters = (data: Project[], filterValues: string) => {
    if (!filterValue || filterValues === "all") {
      return data;
    }
    return data.filter((project) =>
      project.techStack?.some((tech) => filterValues === tech.trim())
    );
  };

  return (
    <section className="p-4 md:p-8 mt-10 relative" id="projects">
      <SectionHeading className="md:pl-12">
        <SlideIn className="text-white/40">Selected</SlideIn>
        <br />
        <SlideIn>works</SlideIn>
      </SectionHeading>

      {/* Responsive grid: 1 col on mobile, 2 cols on md+ */}
      <motion.div
        className="flex flex-col items-center gap-6 mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-8 md:items-stretch"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {filteredProjects
          .slice(0, showMore ? filteredProjects.length : numProjectToShow)
          .map((project) => (
            <Transition key={project._id}>
              <Card
                project={project}
                onOverviewClick={() => setSelectedProject(project)}
              />
            </Transition>
          ))}

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="rounded-lg cursor-pointer fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <ProjectDialog
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="grid place-items-center py-8">
        {filteredProjects.length > numProjectToShow && (
          <button
            className="flex items-center justify-center gap-4 py-3 px-6 rounded-full border border-blue-500/40 mt-6 group relative overflow-hidden bg-[#142047] text-blue-200 font-semibold hover:bg-blue-600/20 transition"
            onClick={() => setShowMore(!showMore)}
          >
            <TextReveal>{showMore ? "Show less" : "Show more"}</TextReveal>
          </button>
        )}
      </div>
    </section>
  );
}

export default Projects;

// CARD COMPONENT
interface CardProps {
  project: Project;
  onOverviewClick: () => void;
}

const Card = ({ project, onOverviewClick }: CardProps) => {
  return (
    <motion.div
      className="
        w-full max-w-md 
        bg-gradient-to-br from-[#111b22] to-[#232d3a] 
        rounded-2xl border border-blue-600/20 shadow-lg 
        flex flex-col h-full overflow-hidden 
        transition-shadow duration-200 hover:shadow-2xl
        md:max-w-full md:rounded-3xl md:p-0
      "
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {/* Image */}
      <div className="p-4 pb-0 md:p-6 md:pb-0">
        <div
          className="w-full bg-black/10 flex items-center justify-center rounded-xl md:rounded-2xl overflow-hidden"
          style={{ aspectRatio: "16/9", minHeight: 160 }}
        >
          <img
            src={project.image.url}
            alt={project.title}
            className="w-full h-full object-cover object-top rounded-xl md:rounded-2xl"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-start px-4 py-6 gap-2 md:px-8 md:py-8 md:flex-row md:items-end md:justify-between">
        <div>
          <h3
            className="text-2xl md:text-4xl font-extrabold text-white mb-1 leading-tight"
            style={{ fontFamily: "inherit" }}
          >
            {project.title}
          </h3>
          <p className="text-blue-200 text-base md:text-lg mb-4 md:mb-0">
            {project.metrics}
          </p>
        </div>
        <motion.button
          whileHover={{ boxShadow: "0 2px 16px #1e3a8a44" }}
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-white text-blue-900 font-semibold shadow hover:bg-blue-200 transition text-base md:text-lg cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onOverviewClick();
          }}
        >
          <TextReveal>Overview</TextReveal>
          <ArrowUpRight />
        </motion.button>
      </div>
    </motion.div>
  );
};
