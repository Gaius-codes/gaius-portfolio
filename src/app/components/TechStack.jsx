"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { coreLanguages, tools } from "../constants";

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1.0] },
    },
  };

  const renderTechCard = (tech) => {
    const isHovered = hoveredTech === tech.name;

    return (
      <motion.div
        key={tech.name}
        variants={itemVariants}
        onMouseEnter={() => setHoveredTech(tech.name)}
        onMouseLeave={() => setHoveredTech(null)}
        className="group relative p-4 rounded-md border border-stone-200 dark:border-stone-900 bg-stone-50/50 dark:bg-stone-950/20 hover:border-yellow-600/40 dark:hover:border-yellow-600/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(202,138,4,0.05)] cursor-pointer"
      >
        <p className="font-bold text-stone-950 dark:text-white transition-colors duration-200 group-hover:text-yellow-600 dark:group-hover:text-yellow-600">
          {tech.name}
        </p>
        <p className="text-xs text-stone-400 dark:text-stone-600 mt-0.5">
          {tech.type}
        </p>

        {/* Dynamic Hover Tooltip Card */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.96 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute z-50 left-0 right-0 top-[100%] mt-2 p-4 rounded-lg bg-amber-50/95 dark:bg-stone-900/95 border border-yellow-500/30 backdrop-blur-md shadow-xl pointer-events-none"
            >
              <div className="flex items-center justify-between mb-1.5 border-b border-yellow-500/20 pb-1.5">
                <span className="text-xs font-black uppercase tracking-wider text-yellow-700 dark:text-yellow-500">
                  {tech.name}
                </span>
                <span className="text-[10px] font-semibold text-amber-800 dark:text-yellow-600">
                  {tech.type}
                </span>
              </div>
              <p className="text-xs font-medium text-amber-950 dark:text-stone-300 leading-relaxed">
                {tech.description}
              </p>
              <div className="mt-2.5 pt-2 border-t border-yellow-500/10">
                <p className="text-[11px] font-semibold text-yellow-700 dark:text-yellow-500 tracking-wide uppercase">
                  Usage
                </p>
                <p className="text-xs text-amber-900 dark:text-stone-400 mt-0.5 leading-normal">
                  {tech.useCase}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section
      id="stack"
      className="py-24 px-6 bg-white text-stone-900 dark:bg-black dark:text-stone-200 border-t border-stone-100 dark:border-stone-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <p className="text-xs font-bold uppercase tracking-widest text-yellow-600">
            03 / Capabilities
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight mt-2 sm:text-4xl">
            Technical Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Core Technologies */}
          <div className="space-y-6">
            <div className="border-b border-stone-200 dark:border-stone-800 pb-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-400 dark:text-stone-600">
                Core Technologies
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {coreLanguages.map(renderTechCard)}
            </motion.div>
          </div>

          {/* Ecosystem & Tools */}
          <div className="space-y-6">
            <div className="border-b border-stone-200 dark:border-stone-800 pb-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-400 dark:text-stone-600">
                Ecosystem & Tools
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {tools.map(renderTechCard)}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
