import { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";

const skills = [
  { icon: "✍️", name: "Copywriting", sub: "Redação publicitária & conteúdo", level: 88 },
  { icon: "🎨", name: "Design Visual", sub: "Canva Pro · Adobe Illustrator", level: 85 },
  { icon: "📱", name: "Social Media", sub: "Estratégia & criação", level: 90 },
  { icon: "🎬", name: "Edição de Vídeo", sub: "CapCut Pro · Premiere", level: 80 },
  { icon: "📣", name: "Endomarketing", sub: "Comunicação interna", level: 85 },
  { icon: "📸", name: "Mobile Creator e storymaker", sub: "iPhone 16 Pro Max · Lightroom · CapCut Pro", level: 82 },
  { icon: "🎙️", name: "Live Streaming", sub: "OBS · StreamYard", level: 75 },
  { icon: "🧠", name: "Inteligência Artificial", sub: "Claude · ChatGPT · Gemini · Runway · Veo 3", level: 87 },
];

const tools = [
  "Canva Pro", "Adobe Lightroom", "Adobe Photoshop", "CapCut Pro", "OBS Studio",
  "Adobe Illustrator", "Adobe Premiere", "Google e Meta ADS",
  "Claude · ChatGPT · Gemini · Perplexity", "ElevenLabs", "Runway · Veo 3",
  "Pacote Office", "iPhone 16 Pro Max", "Google e Microsoft Workspace",
];

const SkillBar = ({ level }: { level: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="h-0.5 bg-foreground/5">
      <div
        className="h-0.5 sk-bar-animate relative"
        style={{
          width: animated ? `${level}%` : "0%",
          background: "linear-gradient(90deg, hsl(var(--terra)), hsl(var(--amber)))",
        }}
      >
        <span
          className="absolute -right-1 -top-1 w-2.5 h-2.5 bg-amber rounded-full transition-opacity duration-300"
          style={{
            opacity: animated ? 1 : 0,
            transitionDelay: "0.8s",
          }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="habilidades" className="bg-bg2 py-20 md:py-[120px]">
      <div className="px-7 md:px-[60px] max-w-[1300px] mx-auto">
        <div className="pb-16 flex items-baseline gap-6">
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-primary flex items-center gap-2.5 whitespace-nowrap">
            <span className="w-6 h-px bg-primary inline-block" />
            04 — Skills
          </p>
          <FadeIn>
            <h2 className="font-display text-[clamp(3rem,6vw,6rem)] leading-[0.9]">Habilidades</h2>
          </FadeIn>
          <div className="flex-1 h-px bg-border mb-1.5 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 mb-[72px]">
          {skills.map((skill, i) => (
            <FadeIn key={skill.name} delay={i % 4 * 0.1}>
              <div className="sk bg-bg3 p-8 border border-transparent hover:border-border transition-colors duration-300 relative overflow-hidden group">
                <div className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500"
                  style={{ background: "linear-gradient(90deg, hsl(var(--terra)), hsl(var(--amber)))" }}
                />
                <span className="text-[1.4rem] block mb-3.5">{skill.icon}</span>
                <div className="font-display text-[1.05rem] tracking-[0.04em] mb-1.5">{skill.name}</div>
                <div className="text-[0.7rem] text-muted-foreground mb-3.5">{skill.sub}</div>
                <SkillBar level={skill.level} />
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="border-t border-border pt-[52px]">
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground mb-6">Ferramentas</p>
            <div className="flex flex-wrap gap-2.5">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="tool border border-border px-[18px] py-[9px] text-[0.76rem] tracking-[0.07em] text-warm hover:bg-primary/[0.08] hover:border-primary hover:text-foreground transition-all duration-300 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default SkillsSection;
