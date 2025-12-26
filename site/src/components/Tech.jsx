import React, { Suspense, lazy, useEffect, useState } from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const BallCanvas = lazy(() => import("./canvas/Ball"));

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const onChange = (event) => setIsMobile(event.matches);
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {isMobile ? (
            <div className="w-full h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-12 h-12 object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          ) : (
            <Suspense
              fallback={
                <div className="w-full h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md" />
              }
            >
              <BallCanvas icon={technology.icon} />
            </Suspense>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
