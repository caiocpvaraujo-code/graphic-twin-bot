import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import FadeIn from "@/components/FadeIn";

import gdfLogo from "@/assets/work-gdf-logo.jpg";
import gdfFeed1 from "@/assets/work-gdf-feed-1.jpg";
import gdfFeed2 from "@/assets/work-gdf-feed-2.jpg";
import gdfFeed3 from "@/assets/work-gdf-feed-3.jpg";
import gdfStory1 from "@/assets/work-gdf-story-1.jpg";
import gdfStory2 from "@/assets/work-gdf-story-2.jpg";
import gdfStory3 from "@/assets/work-gdf-story-3.jpg";
import gdfStory4 from "@/assets/work-gdf-story-4.jpg";
import gdfStory5 from "@/assets/work-gdf-story-5.jpg";
import apbc1 from "@/assets/work-apbc-1.png";

const HoverImg = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <motion.div
    className="overflow-hidden w-full h-full"
    whileHover="hover"
  >
    <motion.img
      src={src}
      alt={alt}
      className={className}
      variants={{
        hover: { scale: 1.06, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
      }}
    />
  </motion.div>
);

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
        <div className="mb-14">
          <p className="text-[0.65rem] tracking-[0.18em] uppercase text-muted-foreground mb-4">
            Logo VGDF
          </p>
          <div className="img-frame inline-block w-full max-w-[280px] overflow-hidden">
            <HoverImg
              src={gdfLogo}
              alt="Logo VGDF — Vice-Governadoria do DF"
              className="art w-full object-contain"
            />
          </div>
        </div>
      </FadeIn>

      {/* Feed Grid */}
      <FadeIn delay={0.2}>
        <p className="text-[0.65rem] tracking-[0.18em] uppercase text-muted-foreground mb-4">
          Feed — Posts institucionais
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-14">
          {[
            { img: gdfFeed1, label: "Proteção da Biodiversidade" },
            { img: gdfFeed2, label: "Fim do Dinheiro nos Ônibus" },
            { img: gdfFeed3, label: "Mais Segurança e Lazer" },
          ].map(({ img, label }, i) => (
            <div key={i} className="img-frame aspect-[4/5] overflow-hidden">
              <HoverImg
                src={img}
                alt={`Feed VGDF — ${label}`}
                className="art w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Story Grid */}
      <FadeIn delay={0.25}>
        <p className="text-[0.65rem] tracking-[0.18em] uppercase text-muted-foreground mb-4">
          Stories — 5 publicações
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3 mb-6">
          {[
            { img: gdfStory1, label: "EXPOMIX Planaltina" },
            { img: gdfStory2, label: "Autódromo é do Pedal" },
            { img: gdfStory3, label: "OPERADF — Hospital" },
            { img: gdfStory4, label: "Startup Mãe Borboleta" },
            { img: gdfStory5, label: "Circuito Candangão" },
          ].map(({ img, label }, i) => (
            <div key={i} className="img-frame aspect-[9/16] overflow-hidden">
              <HoverImg
                src={img}
                alt={`Story VGDF — ${label}`}
                className="art w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.28}>
        <div className="flex flex-wrap gap-2 mb-20">
          {["Direção de Arte", "Identidade Visual", "Social Media", "Comunicação Gov.", "Canva Pro"].map((tag) => (
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
        <div className="img-frame mb-6 max-w-[700px] overflow-hidden">
          <HoverImg src={apbc1} alt="APBC Evolução — Identidade Visual" className="art w-full" />
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
            Mais cases chegando — Identidade Verbo da Vida, Vivo Endomarketing e outros.
          </p>
        </div>
      </FadeIn>
    </PageLayout>
  );
};

export default Design;
