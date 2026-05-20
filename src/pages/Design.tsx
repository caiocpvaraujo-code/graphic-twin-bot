import PageLayout from "@/components/PageLayout";
import FadeIn from "@/components/FadeIn";

import gdfLogo from "@/assets/work-gdf-logo.jpg";
import gdfFeed1 from "@/assets/work-gdf-feed-1.jpg";
import gdfFeed2 from "@/assets/work-gdf-feed-2.jpg";
import gdfFeed3 from "@/assets/work-gdf-feed-3.jpg";
import gdfFeed4 from "@/assets/work-gdf-feed-4.jpg";
import gdfStory1 from "@/assets/work-gdf-story-1.jpg";
import gdfStory2 from "@/assets/work-gdf-story-2.jpg";
import apbc1 from "@/assets/work-apbc-1.png";

const Design = () => {
  return (
    <PageLayout
      eyebrow="05 — Direção de Arte"
      title="Design"
      subtitle="Identidade visual, comunicação institucional e direção de arte."
    >
      {/* Case 01 — GDF */}
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-border pb-7 mb-14">
          <div>
            <h2 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.88] text-foreground">
              VGDF
            </h2>
            <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-1.5">
              Vice-Governadoria do Distrito Federal · Diretor de Arte / Designer
            </p>
          </div>
          <div className="text-left md:text-right mt-4 md:mt-0">
            <span className="text-[0.8rem] text-muted-foreground tracking-[0.06em]">Brasília, DF</span>
            <p className="font-serif italic text-[1.05rem] text-warm mt-1">2026 — atual</p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-10">
          Criação de peças institucionais para as redes sociais da Vice-Governadoria do DF.
          Feeds informativos, stories e materiais de comunicação pública cobrindo pautas
          de mobilidade, meio ambiente, inclusão social e ações do governo.
          Identidade visual adaptada da nova marca GDF, com paleta azul + roxo (VGDF).
        </p>
      </FadeIn>

      {/* Logo */}
      <FadeIn delay={0.15}>
        <div className="mb-12">
          <p className="text-[0.65rem] tracking-[0.18em] uppercase text-muted-foreground mb-4">
            Logo VGDF
          </p>
          <div className="img-frame inline-block w-full max-w-[300px]">
            <img
              src={gdfLogo}
              alt="Logo VGDF — Vice-Governadoria do DF"
              className="art w-full object-contain"
            />
          </div>
        </div>
      </FadeIn>

      {/* Feed Grid */}
      <FadeIn delay={0.2}>
        <div className="mb-4">
          <p className="text-[0.65rem] tracking-[0.18em] uppercase text-muted-foreground mb-4">
            Feed — Posts institucionais
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5 mb-14">
          {[gdfFeed1, gdfFeed2, gdfFeed3, gdfFeed4].map((img, i) => (
            <div key={i} className="img-frame aspect-[4/5]">
              <img
                src={img}
                alt={`Feed VGDF ${i + 1}`}
                className="art w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Story Grid */}
      <FadeIn delay={0.25}>
        <div className="mb-4">
          <p className="text-[0.65rem] tracking-[0.18em] uppercase text-muted-foreground mb-4">
            Stories
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5 mb-6">
          {[gdfStory1, gdfStory2].map((img, i) => (
            <div key={i} className="img-frame aspect-[9/16]">
              <img
                src={img}
                alt={`Story VGDF ${i + 1}`}
                className="art w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.28}>
        <div className="flex flex-wrap gap-2 mb-20">
          {["Direção de Arte", "Identidade Visual", "Social Media", "Comunicação Gov.", "Figma", "Canva Pro"].map((tag) => (
            <span
              key={tag}
              className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </FadeIn>

      {/* Divider */}
      <div className="border-t border-border mb-20" />

      {/* Case 02 — APBC */}
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-border pb-7 mb-14">
          <div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.88] text-foreground">
              APBC Evolução
            </h2>
            <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-1.5">
              Associação de Pesquisa Brasil Central · Evento · 1ª Edição
            </p>
          </div>
          <div className="text-left md:text-right mt-4 md:mt-0">
            <p className="font-serif italic text-[1.05rem] text-warm mt-1">2026</p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-10">
          Identidade visual e materiais gráficos para a 1ª edição do evento APBC Evolução —
          "Pesquisa que Conecta. Evolução que Transforma o Agro." Criação de logo, paleta
          (verde/dourado) e aplicações para evento com patrocinadores como Bayer, Nutrimax e Agripon.
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="img-frame mb-6 max-w-[700px]">
          <img src={apbc1} alt="APBC Evolução — Identidade Visual" className="art w-full" />
        </div>
        <div className="flex flex-wrap gap-2 mb-16">
          {["Identidade Visual", "Logo", "Evento", "Agronegócio"].map((tag) => (
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
            Mais cases de design chegando em breve — Identidade Verbo da Vida, Vivo Endomarketing e outros.
          </p>
        </div>
      </FadeIn>
    </PageLayout>
  );
};

export default Design;
