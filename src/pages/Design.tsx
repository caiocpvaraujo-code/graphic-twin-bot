import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import FadeIn from "@/components/FadeIn";

import gdfLogo from "@/assets/work-gdf-logo.jpg";

// GDF Feed
import feed1  from "@/assets/gdf-feed/feed-1.png";
import feed2  from "@/assets/gdf-feed/feed-2.png";
import feed3  from "@/assets/gdf-feed/feed-3.png";
import feed4  from "@/assets/gdf-feed/feed-4.png";
import feed5  from "@/assets/gdf-feed/feed-5.png";
import feed6  from "@/assets/gdf-feed/feed-6.png";
import feed7  from "@/assets/gdf-feed/feed-7.png";
import feed8  from "@/assets/gdf-feed/feed-8.jpg";
import feed9  from "@/assets/gdf-feed/feed-9.jpg";
import feed10 from "@/assets/gdf-feed/feed-10.jpg";
import feed11 from "@/assets/gdf-feed/feed-11.jpg";
import feed12 from "@/assets/gdf-feed/feed-12.png";
import feed13 from "@/assets/gdf-feed/feed-13.png";
import feed14 from "@/assets/gdf-feed/feed-14.jpg";
import feed15 from "@/assets/gdf-feed/feed-15.png";

// GDF Stories
import story1  from "@/assets/gdf-story/story-1.jpg";
import story2  from "@/assets/gdf-story/story-2.jpg";
import story3  from "@/assets/gdf-story/story-3.jpg";
import story4  from "@/assets/gdf-story/story-4.jpg";
import story5  from "@/assets/gdf-story/story-5.png";
import story6  from "@/assets/gdf-story/story-6.jpg";
import story7  from "@/assets/gdf-story/story-7.jpg";
import story8  from "@/assets/gdf-story/story-8.jpg";
import story9  from "@/assets/gdf-story/story-9.jpg";
import story10 from "@/assets/gdf-story/story-10.jpg";
import story11 from "@/assets/gdf-story/story-11.png";
import story12 from "@/assets/gdf-story/story-12.jpg";
import story13 from "@/assets/gdf-story/story-13.jpg";
import story14 from "@/assets/gdf-story/story-14.png";
import story15 from "@/assets/gdf-story/story-15.jpg";

// ABPC
import abpc1 from "@/assets/abpc/abpc-1.jpg";
import abpc2 from "@/assets/abpc/abpc-2.png";
import abpc3 from "@/assets/abpc/abpc-3.png";
import abpc4 from "@/assets/abpc/abpc-4.png";
import abpc5 from "@/assets/abpc/abpc-5.jpeg";

const GDF_FEED   = [feed1,feed2,feed3,feed4,feed5,feed6,feed7,feed8,feed9,feed10,feed11,feed12,feed13,feed14,feed15];
const GDF_STORY  = [story1,story2,story3,story4,story5,story6,story7,story8,story9,story10,story11,story12,story13,story14,story15];
const ABPC_IMGS  = [abpc1,abpc2,abpc5];

/* ─── Lightbox ─── */
interface LightboxProps {
  images: string[];
  startIndex: number;
  onClose: () => void;
}

const Lightbox = ({ images, startIndex, onClose }: LightboxProps) => {
  const [idx, setIdx] = useState(startIndex);

  const prev = useCallback(() => setIdx((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIdx((i) => Math.min(images.length - 1, i + 1)), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape")      onClose();
      if (e.key === "ArrowLeft")   prev();
      if (e.key === "ArrowRight")  next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[600] flex flex-col items-center justify-center"
      style={{ background: "rgba(0,0,0,0.94)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-6 text-white/40 hover:text-white transition-colors z-10"
        onClick={onClose}
        aria-label="Fechar"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        disabled={idx === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center text-white/40 hover:text-white disabled:opacity-15 transition-colors"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>

      {/* Image */}
      <div className="flex items-center justify-center w-full h-full px-16 py-12" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            src={images[idx]}
            alt={`Imagem ${idx + 1}`}
            className="max-w-full max-h-full object-contain"
            style={{ maxHeight: "calc(100vh - 100px)" }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        disabled={idx === images.length - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center text-white/40 hover:text-white disabled:opacity-15 transition-colors"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute bottom-5 text-[0.65rem] tracking-[0.14em] text-white/30">
        {idx + 1} / {images.length}
      </div>
    </motion.div>
  );
};

/* ─── Clickable thumbnail ─── */
const Thumb = ({
  src, alt, className, onClick,
}: {
  src: string; alt: string; className?: string; onClick: () => void;
}) => (
  <motion.button
    onClick={onClick}
    className={`img-frame overflow-hidden block w-full ${className ?? ""}`}
    whileHover="hover"
  >
    <motion.img
      src={src}
      alt={alt}
      className="art w-full h-full object-cover"
      variants={{ hover: { scale: 1.06, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
    />
  </motion.button>
);

/* ─── Page ─── */
const Design = () => {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const openLightbox = (images: string[], index: number) =>
    setLightbox({ images, index });

  return (
    <PageLayout
      eyebrow="05 — Direção de Arte"
      title="Design"
      subtitle="Identidade visual, comunicação institucional e direção de arte."
    >
      {/* ══ Case 01 — VGDF ══ */}
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
            <motion.img
              src={gdfLogo}
              alt="Logo VGDF — Vice-Governadoria do DF"
              className="art w-full object-contain"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
      </FadeIn>

      {/* ── Feed ── */}
      <FadeIn delay={0.2}>
        <p className="text-[0.65rem] tracking-[0.18em] uppercase text-muted-foreground mb-4">
          Feed — {GDF_FEED.length} posts institucionais · clique para ampliar
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-1.5 mb-14">
          {GDF_FEED.map((img, i) => (
            <Thumb
              key={i}
              src={img}
              alt={`Feed VGDF — ${i + 1}`}
              className="aspect-square"
              onClick={() => openLightbox(GDF_FEED, i)}
            />
          ))}
        </div>
      </FadeIn>

      {/* ── Stories ── */}
      <FadeIn delay={0.25}>
        <p className="text-[0.65rem] tracking-[0.18em] uppercase text-muted-foreground mb-4">
          Stories — {GDF_STORY.length} publicações · clique para ampliar
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-1.5 mb-6">
          {GDF_STORY.map((img, i) => (
            <Thumb
              key={i}
              src={img}
              alt={`Story VGDF — ${i + 1}`}
              className="aspect-[9/16]"
              onClick={() => openLightbox(GDF_STORY, i)}
            />
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.28}>
        <div className="flex flex-wrap gap-2 mb-20">
          {["Direção de Arte", "Identidade Visual", "Social Media", "Comunicação Gov.", "Canva Pro"].map((tag) => (
            <span key={tag} className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
              {tag}
            </span>
          ))}
        </div>
      </FadeIn>

      <div className="border-t border-border mb-20" />

      {/* ══ Case 02 — APBC ══ */}
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
        <p className="text-[0.65rem] tracking-[0.18em] uppercase text-muted-foreground mb-4">
          Identidade Visual & Materiais · clique para ampliar
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          {ABPC_IMGS.map((img, i) => (
            <Thumb
              key={i}
              src={img}
              alt={`APBC Evolução — ${i + 1}`}
              className="aspect-video"
              onClick={() => openLightbox(ABPC_IMGS, i)}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mb-16">
          {["Identidade Visual", "Logo", "Evento", "Agronegócio", "Illustrator"].map((tag) => (
            <span key={tag} className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
              {tag}
            </span>
          ))}
        </div>
      </FadeIn>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={lightbox.images}
            startIndex={lightbox.index}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default Design;
