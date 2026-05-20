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
  {
    num: "07",
    title: "Social Media",
    sub: "Gestão · Estratégia · Calendário editorial",
    path: "/social",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const WhatAreYouLookingFor = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-28 px-7 md:px-[60px] border-b border-border">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 md:mb-16"
        >
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-primary flex items-center gap-2.5 mb-5">
            <span className="w-6 h-px bg-primary inline-block" />
            O que você procura?
          </p>
          <h2 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.88]">
            Escolha seu<br />
            <span className="text-outline">caminho</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.num}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Link
                to={dest.path}
                className="
                  group block bg-bg3 p-8 md:p-10
                  border border-transparent
                  hover:border-primary/40
                  hover:bg-bg2
                  transition-all duration-500
                  relative overflow-hidden
                "
              >
                {/* Animated bottom border */}
                <div
                  className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{
                    background: "linear-gradient(90deg, hsl(var(--terra)), hsl(var(--amber)))",
                  }}
                />

                {/* Number */}
                <span className="font-serif italic text-[3.5rem] text-primary/15 group-hover:text-primary/30 leading-none block mb-4 transition-colors duration-500">
                  {dest.num}
                </span>

                {/* Title + Arrow */}
                <div className="flex items-end justify-between gap-4 mb-2">
                  <h3 className="font-display text-[1.6rem] md:text-[1.8rem] tracking-[0.04em] leading-none">
                    {dest.title}
                  </h3>
                  <span className="text-primary text-[1.2rem] translate-x-0 group-hover:translate-x-1.5 transition-transform duration-400 flex-shrink-0 mb-0.5">
                    →
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-[0.72rem] tracking-[0.06em] text-muted-foreground group-hover:text-warm transition-colors duration-300 leading-relaxed">
                  {dest.sub}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatAreYouLookingFor;
