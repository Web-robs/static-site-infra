import { motion } from "framer-motion";
import React, { Suspense, useEffect, useState, lazy } from "react";

const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [enable3dOnMobile, setEnable3dOnMobile] = useState(false);
  const [enable3d, setEnable3d] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set initial value
    setIsMobile(mediaQuery.matches);
    setEnable3dOnMobile(false);

    const handleChange = (event) => {
      setIsMobile(event.matches);
      setEnable3dOnMobile(false);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => setEnable3d(true), 900);
    return () => window.clearTimeout(timeout);
  }, []);

  const show3d = enable3d && (!isMobile || enable3dOnMobile);

  return (
    <section className='relative w-full min-h-screen overflow-hidden text-white'>
      <div className='relative max-w-7xl mx-auto px-6 sm:px-16 pt-28 pb-10 min-h-screen flex flex-col'>
        <div className='grid grid-cols-12 gap-6 items-center flex-1'>
          <div className='col-span-12 md:col-span-3 flex flex-col gap-6'>
            <div className='uppercase tracking-[0.32em] text-[11px] text-white/70'>
              ART. 03
            </div>

            <div className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5'>
              <p className='text-[12px] uppercase tracking-[0.28em] text-white/60'>
                DevOps Engineer
              </p>
              <h2 className='mt-3 text-[22px] font-semibold leading-tight'>
                Robin <span className='text-[#915EFF]'>Yaghi</span>
              </h2>
              <p className='mt-3 text-[13px] leading-relaxed text-white/70'>
                From code to cloud, I make everything deploy smoothly.
              </p>
            </div>

            <div className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5'>
              <p className='text-[12px] uppercase tracking-[0.28em] text-white/60'>
                Focus
              </p>
              <p className='mt-2 text-[13px] leading-relaxed text-white/70'>
                AWS · Terraform · CI/CD · Docker · Kubernetes
              </p>
            </div>
          </div>

          <div className='col-span-12 md:col-span-6'>
            <div className='relative h-[380px] sm:h-[480px] md:h-[580px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden'>
              {show3d ? (
                <Suspense
                  fallback={
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-white/70 text-sm">Loading 3D…</div>
                    </div>
                  }
                >
                  <ComputersCanvas quality={isMobile ? "low" : "high"} />
                </Suspense>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-6 text-center">
                  <div className="text-white/70 text-sm">
                    {isMobile
                      ? "Tap to load the 3D preview (may be slow on mobile)."
                      : "3D preview will load shortly…"}
                  </div>
                  {isMobile && (
                    <button
                      type="button"
                      onClick={() => {
                        setEnable3d(true);
                        setEnable3dOnMobile(true);
                      }}
                      className="inline-flex items-center justify-center rounded-full bg-[#915EFF] px-5 py-2 text-[13px] font-semibold text-white shadow-lg shadow-[#915EFF]/20 hover:bg-[#7d4df0] transition-colors"
                    >
                      Load 3D
                    </button>
                  )}
                </div>
              )}
              <div className='pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1a2a31] to-transparent' />
            </div>
          </div>

          <div className='col-span-12 md:col-span-3 flex flex-col gap-6'>
            <div className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5'>
              <p className='text-[12px] uppercase tracking-[0.28em] text-white/60'>
                Quote
              </p>
              <p className='mt-3 text-[22px] leading-snug font-semibold'>
                Space to have
                <br />
                your quote.
              </p>
              <div className='mt-5 flex flex-wrap items-center gap-3'>
                <a
                  href='#contact'
                  className='inline-flex items-center justify-center rounded-full bg-[#915EFF] px-5 py-2 text-[13px] font-semibold text-white shadow-lg shadow-[#915EFF]/20 hover:bg-[#7d4df0] transition-colors'
                >
                  Contact
                </a>
                <a
                  href='#work'
                  className='inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[13px] font-semibold text-white/90 hover:bg-white/10 transition-colors'
                >
                  View work
                </a>
              </div>
            </div>

            <div className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5'>
              <p className='text-[12px] uppercase tracking-[0.28em] text-white/60'>
                Latest
              </p>
              <p className='mt-2 text-[16px] font-semibold'>Static Site Infra</p>
              <p className='mt-2 text-[13px] leading-relaxed text-white/70'>
                Automated deployments with GitHub Actions + NGINX.
              </p>
            </div>
          </div>
        </div>

        <div className='mt-8 flex justify-center'>
          <a href='#about' className='group'>
            <div className='w-[40px] h-[68px] rounded-3xl border border-white/25 bg-white/5 backdrop-blur flex justify-center items-start p-2'>
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className='w-3 h-3 rounded-full bg-white/90 mb-1 group-hover:bg-[#915EFF] transition-colors'
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
