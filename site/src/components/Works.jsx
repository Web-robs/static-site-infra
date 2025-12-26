import React, { useCallback, useEffect, useState } from "react";
import Tilt from "react-tilt";
import { AnimatePresence, motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCarouselCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="w-full">
      <Tilt
        options={{
          max: 10,
          scale: 1,
          speed: 400,
        }}
        className='bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-3xl w-full'
      >
        <div className="grid grid-cols-12 gap-6 items-stretch">
          <div className="col-span-12 lg:col-span-7">
            <div className='relative w-full h-[220px] sm:h-[320px] lg:h-full min-h-[220px] overflow-hidden rounded-2xl border border-white/10'>
              <img
                src={image}
                alt={name}
                className='w-full h-full object-cover'
                loading="lazy"
                decoding="async"
                onLoad={() => setImageLoaded(true)}
              />

              {!imageLoaded && (
                <div className="absolute inset-0 bg-white/5 animate-pulse" />
              )}

              <button
                type="button"
                onClick={() => window.open(source_code_link, "_blank")}
                className='absolute top-4 right-4 bg-[#915EFF] hover:bg-[#7d4df0] w-11 h-11 rounded-full flex justify-center items-center cursor-pointer shadow-md'
                aria-label={`Open ${name} source code`}
              >
                <img
                  src={github}
                  alt=''
                  className='w-1/2 h-1/2 object-contain'
                />
              </button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 flex flex-col">
            <div className="flex-1">
              <h3 className='text-white font-bold text-[28px] leading-tight'>
                {name}
              </h3>
              <p className='mt-3 text-white/70 text-[15px] leading-relaxed'>
                {description}
              </p>

              <div className='mt-5 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                  <p
                    key={`${name}-${tag.name}`}
                    className={`text-[14px] ${tag.color}`}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={source_code_link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/10 px-5 py-2 text-[13px] font-semibold text-white hover:bg-white/15 transition-colors"
              >
                View repository
              </a>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  const items = projects ?? [];
  const [activeIndex, setActiveIndex] = useState(0);

  const total = items.length;
  const activeProject = total > 0 ? items[activeIndex] : null;

  useEffect(() => {
    if (total === 0) return;
    if (activeIndex >= total) setActiveIndex(0);
  }, [activeIndex, total]);

  const prefetchImages = useCallback(
    (index) => {
      if (total <= 1) return;
      const toPrefetch = [
        items[(index + 1) % total],
        items[(index - 1 + total) % total],
      ].filter(Boolean);
      for (const project of toPrefetch) {
        if (!project?.image) continue;
        const img = new Image();
        img.decoding = "async";
        img.loading = "eager";
        img.src = project.image;
      }
    },
    [items, total]
  );

  useEffect(() => {
    prefetchImages(activeIndex);
  }, [activeIndex, prefetchImages]);

  const goPrev = useCallback(() => {
    if (total <= 1) return;
    setActiveIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    if (total <= 1) return;
    setActiveIndex((i) => (i + 1) % total);
  }, [total]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-white/70 text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects highlight my practical experience in DevOps, cloud, and software engineering. Each one includes a short description, along with links to the repository and live deployment. They demonstrate my ability to design scalable systems, automate workflows, work across different technologies, and deliver real, production-ready solutions.
        </motion.p>
      </div>

      <div className="mt-10 flex items-center justify-between gap-4">
        <div className="text-white/70 text-sm">
          {total > 0 ? (
            <span>
              <span className="text-white font-semibold">{activeIndex + 1}</span>{" "}
              / {total}
            </span>
          ) : (
            <span>No projects yet.</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            disabled={total <= 1}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous project"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={total <= 1}
            className="rounded-full bg-[#915EFF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#7d4df0] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Next project"
          >
            Next
          </button>
        </div>
      </div>

      <div className="mt-6 w-full">
        <AnimatePresence mode="wait" initial={false}>
          {activeProject && (
            <motion.div
              key={`${activeIndex}-${activeProject.name}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.22 }}
            >
              <ProjectCarouselCard {...activeProject} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
