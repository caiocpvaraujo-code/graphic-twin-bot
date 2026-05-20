import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import FadeIn from "@/components/FadeIn";

import pizzamar1 from "@/assets/work-pizzamar-1.jpg";
import pizzamar2 from "@/assets/work-pizzamar-2.jpg";
import pizzamar3 from "@/assets/work-pizzamar-3.jpg";
import pizzamar4 from "@/assets/work-pizzamar-4.jpg";
import pizzamar5 from "@/assets/work-pizzamar-5.jpg";
import workFreela4 from "@/assets/work-freela-4.jpg";

import guardiao1 from "@/assets/work-guardiao-1.jpg";
import guardiao2 from "@/assets/work-guardiao-2.jpg";
import guardiao3 from "@/assets/work-guardiao-3.jpg";
import guardiao4 from "@/assets/work-guardiao-4.jpg";

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

const Storymaker = () => {
  return (
    <PageLayout
      eyebrow="03 — Storymaker / Mobile Creator"
      title="Storymaker"
      subtitle="Cobertura ao vivo, conteúdo mobile e narrativa visual em movimento."
    >
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
            <span className="text-[0.8rem] text-muted-foreground tracking-[0.06em]">
              Brasília, DF
            </span>
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
        {/* 4 frames reais dos vídeos do evento */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 mb-2">
          {[guardiao2, guardiao3, guardiao4, guardiao1].map((img, i) => (
            <div key={i} className="img-frame aspect-[9/16] overflow-hidden">
              <HoverImg
                src={img}
                alt={`Guardiões — Frame ${i + 1}`}
                className="art w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <p className="text-[0.65rem] tracking-[0.14em] uppercase text-muted-foreground mb-4">
          Frames extraídos dos Reels e Stories produzidos ao vivo
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
        <div className="img-frame mb-4 aspect-video overflow-hidden">
          <HoverImg
            src={workFreela4}
            alt="COLLAB UnB — Storymaker"
            className="art w-full h-full object-cover"
          />
        </div>
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
        {/* 5 photos: 3 portrait + 2 landscape */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5 mb-2">
          {[pizzamar1, pizzamar2, pizzamar3].map((img, i) => (
            <div key={i} className="img-frame aspect-[9/16] overflow-hidden">
              <HoverImg
                src={img}
                alt={`Pizza Mar — Mobile Content ${i + 1}`}
                className="art w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-1.5 mb-6">
          {[pizzamar4, pizzamar5].map((img, i) => (
            <div key={i} className="img-frame aspect-video overflow-hidden">
              <HoverImg
                src={img}
                alt={`Pizza Mar — Ambiente ${i + 4}`}
                className="art w-full h-full object-cover"
              />
            </div>
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
