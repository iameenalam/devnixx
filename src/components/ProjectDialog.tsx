"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../utils/interface";
import { ExternalLink, Github, XMark } from "./ui/Icons";

interface DialogProps {
  selectedProject: Project;
  setSelectedProject: Dispatch<SetStateAction<Project | null>>;
}

const ProjectDialog = ({
  selectedProject,
  setSelectedProject,
}: DialogProps) => {
  // Prevent background scroll when dialog is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="dialog-backdrop"
        className="fixed inset-0 z-[120] grid place-items-center bg-black/60 backdrop-blur-sm p-4 cursor-pointer"
        onClick={(e) =>
          e.target === e.currentTarget && setSelectedProject(null)
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.18 } }}
        exit={{ opacity: 0, transition: { duration: 0.13 } }}
      >
        <motion.div
          layoutId={selectedProject._id}
          className="bg-gradient-to-br from-[#19213c] via-[#141927] to-[#0a0d15] shadow-2xl border border-blue-800/30 w-full max-w-2xl h-[90vh] rounded-2xl flex flex-col relative overflow-hidden cursor-default"
          initial={{ opacity: 0, scale: 0.98, y: 40 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 30 },
          }}
          exit={{
            opacity: 0,
            scale: 0.98,
            y: 40,
            transition: { duration: 0.13 },
          }}
          // Prevent click bubbling to the backdrop
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 bg-blue-900/90 hover:bg-blue-800 transition-colors size-9 rounded-full border border-blue-400/30 grid place-items-center text-white z-10"
            onClick={() => setSelectedProject(null)}
            aria-label="Close project dialog"
          >
            <XMark />
          </button>
          {/* Scrollable Content Including Image */}
          <div
            className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-800 scrollbar-track-transparent"
            style={{
              minHeight: 0,
              maxHeight: "90vh",
              scrollBehavior: "smooth",
            }}
          >
            {/* Project Image */}
            <div className="w-full relative aspect-video bg-black/40 border-b border-blue-900 shrink-0">
              <img
                src={selectedProject.image.url}
                width={700}
                height={350}
                alt={selectedProject.title}
                className="w-full h-full object-cover object-center rounded-t-2xl"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d15ee] via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Project Content */}
            <div className="p-6">
              {/* Title and Links */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center justify-between">
                <h5 className="text-2xl md:text-3xl font-extrabold text-blue-100 tracking-tight mb-2 md:mb-0">
                  {selectedProject.title}
                </h5>
                <div className="flex items-center gap-4">
                  {selectedProject.liveurl && (
                    <Link
                      href={selectedProject.liveurl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                      aria-label="Live site"
                    >
                      <ExternalLink />
                    </Link>
                  )}
                </div>
              </div>
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 py-4">
                {selectedProject.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-900/40 border border-blue-500/30 text-blue-200 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Description */}
              <p className="text-blue-100/80 text-base leading-relaxed">
                {selectedProject.description
                  ? selectedProject.description
                  : "No description provided for this project."}
              </p>
              {/* Additional Content Below Description */}
              <div className="mt-8 space-y-6">
                {/* Features List */}
                <div>
                  <h6 className="text-lg font-semibold text-blue-200 mb-2">
                    Key Features
                  </h6>
                  <ul className="list-disc pl-6 text-blue-100/80 text-base space-y-1">
                    {(selectedProject.features &&
                    selectedProject.features.length > 0
                      ? selectedProject.features
                      : ["No features provided for this project."]
                    ).map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDialog;
