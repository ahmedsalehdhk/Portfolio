import React from "react";
import { motion, easeInOut } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ ease: easeInOut, duration: 0.8 }} viewport={{ once: true }}>
      <div className="h-64 w-full lg:w-3/4 rounded-xl overflow-hidden mb-3 relative">
        <Link to={`/projects/${props.project.id}`} className="overlay h-full w-full absolute top-0 left-0 bg-transparent hover:bg-black/25 cursor-pointer"></Link>
        <div style={{'--image-url': `url(${props.project.featuredImage})`}}  className="display-image h-full w-full flex flex-col lg:flex-row justify-start items-end flex-wrap gap-3 p-5 bg-cover bg-center bg-[image:var(--image-url)]">
          {props.project.toolsUsed.map((tool) => {
            return <p className=" h-fit w-fit px-3 py-1 rounded-full bg-white text-black font-medium text-sm shadow-lg z-10">{tool}</p>;
          })}
        </div>
      </div>
      <h3>{props.project.name}</h3>
      <p className="text-neutral-400">{props.project.details}</p>
    </motion.div>
  );
}
