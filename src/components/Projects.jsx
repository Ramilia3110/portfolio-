import React from "react";
import { projects } from "../data/projects";

import p3 from "./../assets/p3.png";
import p2 from "./../assets/p2.png";
import d1 from "./../assets/d1.png";
import p4 from "./../assets/p4.png";
const images = [d1, p2, p3, p4];
const Projects = () => {
  return (
    <div
      id="projects"
      className="h-auto bg-[rgba(99,184,154,0.1)] w-[90%]  mx-auto px-12 my-5"
    >
      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                className="object-cover object-top h-48 w-full lg:h-64 xl:h-80 hover:scale-110 transition duration-300"
                src={images[index]} // Use the corresponding image based on the index
                width={200}
                height={300}
                alt="Project"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 md:h-[23vh]">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:underline mt-2 block"
                >
                  View Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
