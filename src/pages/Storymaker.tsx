import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import FadeIn from "@/components/FadeIn";

import pizzamar1 from "@/assets/work-pizzamar-1.jpg";
import pizzamar2 from "@/assets/work-pizzamar-2.jpg";
import pizzamar3 from "@/assets/work-pizzamar-3.jpg";

import guardiao1 from "@/assets/work-guardiao-1.jpg";
import guardiao3 from "@/assets/work-guardiao-3.jpg";
import guardiao4 from "@/assets/work-guardiao-4.jpg";

import colabFrame1 from "@/assets/colab-frame-1.jpg";
import colabFrame2 from "@/assets/colab-frame-2.jpg";
import colabFrame3 from "@/assets/colab-frame-3.jpg";

const HoverImg = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <motion.div className="overflow-hidden w-full h-full" whileHover="hover">
    <motion.img
      src={src}
      alt={alt}
      className={className}
      variants={{
        hover: { scale: 1.07, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
      }}
    />
  </motion.div>
);

/* ─── Story Progress Bar ─── */
const StoryBar = ({ active }: { active?: boolean }) => (
  <div className="h-[2px] flex-1 rounded-full overflow-hidden bg-white/20">
    {active ? (
      <motion.div
        className="h-full bg-white rounded-full"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
      />
    ) : (
      <div className="h-full bg-white/50 rounded-full w-full" />
    )}
  </div>
);

/* ─── Instagram-style Stories avatar strip ─── */
const StoriesStrip = () => (
  <div className="flex items-center gap-4 mb-16">
    {[
      { label: "guardiões", active: true },
      { label: "collab", active: false },
      { label: "pizza mar", active: false },
      { label: "vgdf", active: false },
    ].map((s, i) => (
      <div key={i} className="flex flex-col items-center gap-1.5 flex-shrink-0">
        <div
          className="w-14 h-14 rounded-full flex-shrink-0"
          style={{
            padding: "2px",
            background: s.active
              ? "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)"
              : "hsl(var(--border))",
          }}
        >
          <div className="w-full h-full rounded-full bg-bg2 border-[2.5px] border-bg2 overflow-hidden flex items-center justify-center">
            <span className="text-[0.45rem] tracking-[0.06em] text-muted-foreground uppercase text-center leading-tight px-1">
              {s.label}
            </span>
          </div>
        </div>
        <span className="text-[0.55rem] tracking-[0.05em] text-muted-foreground">{s.label}</span>
      </div>
    ))}
    <div className="flex-1 h-px bg-border ml-2" />
  </div>
);

/* ─── Platform icon badges ─── */
const IgIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="11" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.94a8.28 8.28 0 004.84 1.55V7.04a4.85 4.85 0 01-1.07-.35z" />
  </svg>
);

const Storymaker = () => {
  return (
    <PageLayout
      eyebrow="03 — Storymaker / Mobile Creator"
      title="Storymaker"
      subtitle="Cobertura ao vivo, conteúdo mobile e narrativa visual em movimento."
    >
      {/* ─── Platform badges ─── */}
      <FadeIn>
        <div className="flex items-center gap-5 mb-10">
          <div className="flex items-center gap-2 text-[0.65rem] tracking-[0.1em] text-muted-foreground">
            <IgIcon />
            <span>Instagram</span>
          </div>
          <div className="w-px h-3 bg-border" />
          <div className="flex items-center gap-2 text-[0.65rem] tracking-[0.1em] text-muted-foreground">
            <TikTokIcon />
            <span>TikTok</span>
          </div>
          <div className="flex-1 h-px bg-border" />
          <span className="text-[0.55rem] tracking-[0.12em] uppercase text-muted-foreground/50">Mobile Creator</span>
        </div>
      </FadeIn>

      {/* ─── Stories strip ─── */}
      <FadeIn delay={0.05}>
        <StoriesStrip />
      </FadeIn>

      {/* Gear / Setup */}
      <FadeIn>
        <div className="bg-bg3 border border-border p-8 mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Câmera", value: "iPhone 16 Pro Max" },
            { label: "Edição", value: "CapCut Pro · Lightroom" },
            { label: "Formatos", value: "Reels · Stories · Cobertura ao vivo" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[0.62rem] tracking-[0.18em] uppercase text-muted-foreground mb-1">
                {item.label}
              </p>
              <p className="font-display text-[1.2rem] tracking-[0.04em]">{item.value}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Case 01 — Guardiões */}
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-border pb-7 mb-14">
          <div>
            <h2 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.88] text-foreground">
              Guardiões
            </h2>
            <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-1.5">
              Cobertura completa · Evento institucional · Conteúdo ao vivo
            </p>
          </div>
          <div className="text-left md:text-right mt-4 md:mt-0">
            <span className="text-[0.8rem] text-muted-foreground tracking-[0.06em]">Brasília, DF</span>
            <p className="font-serif italic text-[1.05rem] text-warm mt-1">2026</p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-10">
          Uma das maiores entregas de storymaking já feitas. Cobertura completa do evento Guardiões —
          captação ao vivo com iPhone 16 Pro Max, edição e publicação em tempo real para Stories
          e Reels. Planejamento de pauta, roteiro visual e coordenação de toda a comunicação
          audiovisual do evento do início ao fim.
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        {/* Story progress bars decorativos */}
        <div className="flex gap-1 mb-4 max-w-[280px]">
          <StoryBar active />
          <StoryBar />
          <StoryBar />
        </div>

        {/* 3 frames — todos clicáveis */}
        <div className="grid grid-cols-3 gap-1.5 mb-2">
          {[guardiao3, guardiao4, guardiao1].map((img, i) => (
            <a
              key={i}
              href="https://drive.google.com/drive/folders/1uStMQZyCvWgzIyEHVU7xNNylQVBT6lil?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="img-frame aspect-[9/16] overflow-hidden block"
            >
              <HoverImg
                src={img}
                alt={`Guardiões — Frame ${i + 1}`}
                className="art w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
        <p className="text-[0.65rem] tracking-[0.14em] uppercase text-muted-foreground mb-4">
          Frames extraídos dos Reels e Stories produzidos ao vivo · clique para ver no Drive
        </p>
        <div className="flex flex-wrap gap-2 mb-20">
          {["Storymaker", "Cobertura ao Vivo", "Reels", "iPhone 16 Pro Max", "CapCut Pro"].map((tag) => (
            <span
              key={tag}
              className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </FadeIn>

      <div className="border-t border-border mb-20" />

      {/* Case 02 — COLLAB UnB */}
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-border pb-7 mb-14">
          <div>
            <h2 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.88] text-foreground">
              COLLAB
            </h2>
            <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-1.5">
              Maior evento de publicidade da história da UnB
            </p>
          </div>
          <div className="text-left md:text-right mt-4 md:mt-0">
            <span className="text-[0.8rem] text-muted-foreground tracking-[0.06em]">
              Universidade de Brasília
            </span>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-10">
          Coordenei toda a cobertura audiovisual do COLLAB — o maior evento de publicidade da
          história da UnB. Planejamento de pauta, roteiros de cobertura, manual de estilo
          visual e templates. Captação com iPhone, edição e publicação em tempo real.
          Cada conteúdo pensado para Instagram Stories e Reels com narrativa e identidade.
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        {/* Story progress bars decorativos */}
        <div className="flex gap-1 mb-4 max-w-[280px]">
          <StoryBar active />
          <StoryBar />
          <StoryBar />
        </div>

        {/* 3 frames — todos clicáveis */}
        <div className="grid grid-cols-3 gap-1.5 mb-2">
          {[colabFrame1, colabFrame2, colabFrame3].map((img, i) => (
            <a
              key={i}
              href="https://drive.google.com/drive/folders/1bc-GEwHI9X4IqiUyUwm68H9GC94StQ6j?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="img-frame aspect-[9/16] overflow-hidden block"
            >
              <HoverImg
                src={img}
                alt={`COLLAB UnB — Frame ${i + 1}`}
                className="art w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
        <p className="text-[0.65rem] tracking-[0.14em] uppercase text-muted-foreground mb-4">
          Frames extraídos dos Stories e Reels do evento · clique para ver no Drive
        </p>
        <div className="flex flex-wrap gap-2 mb-20">
          {["Storymaker", "Mobile Creator", "Cobertura ao Vivo", "Reels", "Roteiro"].map((tag) => (
            <span
              key={tag}
              className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </FadeIn>

      <div className="border-t border-border mb-20" />

      {/* Case 03 — Pizza Mar */}
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-border pb-7 mb-14">
          <div>
            <h2 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.88] text-foreground">
              Pizza Mar
            </h2>
            <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-1.5">
              Restaurante premium · Conteúdo Mobile · Food Photography
            </p>
          </div>
          <div className="text-left md:text-right mt-4 md:mt-0">
            <span className="text-[0.8rem] text-muted-foreground tracking-[0.06em]">Brasília, DF</span>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-10">
          Produção de conteúdo mobile para restaurante premium em Brasília. Fotografia e vídeo
          no iPhone 16 Pro Max — explorando composição, luz ambiente e detalhes que fazem
          o prato ganhar apetite visual. Conteúdo pensado para feed e stories.
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        {/* 3 portrait photos — clicáveis */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5 mb-6">
          {[pizzamar1, pizzamar2, pizzamar3].map((img, i) => (
            <a
              key={i}
              href="https://drive.google.com/drive/folders/1yGXuVojwBo9W1gOx4tu9A_IzLLsR0YSc?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="img-frame aspect-[9/16] overflow-hidden block"
            >
              <HoverImg
                src={img}
                alt={`Pizza Mar — Mobile Content ${i + 1}`}
                className="art w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mb-16">
          {["Storymaker", "Food Photography", "Reels", "iPhone 16 Pro Max", "Lightroom"].map((tag) => (
            <span
              key={tag}
              className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </FadeIn>
    </PageLayout>
  );
};

export default Storymaker;
