import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const destinations = [
  {
    num: "01",
    title: "Sobre mim",
    sub: "Trajetória, visão e o que me move",
    path: "/sobre",
  },
  {
    num: "02",
    title: "Currículo",
    sub: "GDF · Vivo · Tarea · UnB",
    path: "/curriculo",
  },
  {
    num: "03",
    title: "Storymaker",
    sub: "Mobile Creator · iPhone 16 Pro Max · Cobertura ao vivo",
    path: "/storymaker",
  },
  {
    num: "04",
    title: "Copywriting",
    sub: "Redação publicitária · Copy estratégico · Roteiro",
    path: "/copywriting",
  },
  {
    num: "05",
    title: "Direção de Arte",
    sub: "Design · Identidade Visual · Comunicação Gov.",
    path: "/design",
  },
  {
    num: "06",
    title: "Edição de Vídeo",
    sub: "Reels · Motion · Storytelling audiovisual",
    path: "/video",
  },
];

const rowVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.07,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const WhatAreYouLookingFor = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 md:py-28 border-b border-border">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="px-7 md:px-[60px] mb-12 md:mb-16 flex items-end justify-between"
        >
          <div>
            <p className="text-[0.65rem] tracking-[0.22em] uppercase text-primary flex items-center gap-2.5 mb-5">
              <span className="w-6 h-px bg-primary inline-block" />
              O que você procura?
            </p>
            <h2 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.88]">
              Escolha seu<br />
              <span className="text-outline">caminho</span>
            </h2>
          </div>
          <p className="hidden md:block font-serif italic text-[0.9rem] text-muted-foreground text-right max-w-[200px] leading-relaxed">
            Cada link leva direto ao que você precisa
          </p>
        </motion.div>

        {/* Editorial List */}
        <div className="border-t border-border">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.num}
              custom={i}
              variants={rowVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Link
                to={dest.path}
                className="
                  group relative flex items-center justify-between
                  px-7 md:px-[60px]
                  py-7 md:py-9
                  border-b border-border
                  overflow-hidden
                  transition-colors duration-400
                "
              >
                {/* Hover fill from left */}
                <div
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ background: "linear-gradient(90deg, hsl(var(--bg2)) 0%, transparent 100%)" }}
                />

                {/* Left: number + title */}
                <div className="relative flex items-baseline gap-6 md:gap-10">
                  <span className="font-serif italic text-[1.1rem] md:text-[1.4rem] text-primary/25 group-hover:text-primary/60 transition-colors duration-400 flex-shrink-0 w-8 text-right">
                    {dest.num}
                  </span>
                  <div>
                    <h3 className="font-display text-[clamp(1.8rem,4.5vw,4rem)] leading-none tracking-[0.02em] group-hover:text-primary transition-colors duration-300">
                      {dest.title}
                    </h3>
                    <p className="text-[0.7rem] tracking-[0.1em] uppercase text-muted-foreground group-hover:text-warm transition-colors duration-300 mt-2 md:mt-2.5">
                      {dest.sub}
                    </p>
                  </div>
                </div>

                {/* Right: animated arrow */}
                <span className="relative text-primary text-[1.4rem] md:text-[1.8rem] translate-x-0 group-hover:translate-x-3 transition-transform duration-400 flex-shrink-0 ml-4">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatAreYouLookingFor;
