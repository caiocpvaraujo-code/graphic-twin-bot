import PageLayout from "@/components/PageLayout";
import FadeIn from "@/components/FadeIn";

import pizzamar1 from "@/assets/work-pizzamar-1.jpg";
import pizzamar2 from "@/assets/work-pizzamar-2.jpg";
import pizzamar3 from "@/assets/work-pizzamar-3.jpg";
import workFreela4 from "@/assets/work-freela-4.jpg";

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
            { label: "Formatos", value: "Reels · Stories · BTS · Cobertura ao vivo" },
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

      {/* Case 01 — COLLAB UnB */}
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
        <div className="img-frame mb-4 aspect-video">
          <img
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

      {/* Case 02 — Pizza Mar */}
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-border pb-7 mb-14">
          <div>
            <h2 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.88] text-foreground">
              Pizza Mar
            </h2>
            <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-1.5">
              Restaurante premium · Conteúdo Mobile
            </p>
          </div>
          <div className="text-left md:text-right mt-4 md:mt-0">
            <span className="text-[0.8rem] text-muted-foreground tracking-[0.06em]">
              Brasília, DF
            </span>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-10">
          Produção de conteúdo mobile para restaurante premium em Brasília. Fotografia e vídeo
          no iPhone 16 Pro Max — explorando composição, luz ambiente e detalhes que fazem
          o prato ter apetite visual. Conteúdo pensado para feed e stories.
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0.5 mb-6">
          {[pizzamar1, pizzamar2, pizzamar3].map((img, i) => (
            <div key={i} className="img-frame aspect-[9/16]">
              <img
                src={img}
                alt={`Pizza Mar — Mobile Content ${i + 1}`}
                className="art w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mb-16">
          {["Storymaker", "Food Photography", "Reels", "iPhone 16 Pro Max"].map((tag) => (
            <span
              key={tag}
              className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </FadeIn>

      {/* Coming Soon */}
      <FadeIn>
        <div className="border border-border p-10 text-center">
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-muted-foreground mb-3">
            Em construção
          </p>
          <p className="font-serif italic text-[1.1rem] text-warm">
            Cases de Storymaker para Vivo e outros eventos chegando em breve.
          </p>
        </div>
      </FadeIn>
    </PageLayout>
  );
};

export default Storymaker;
