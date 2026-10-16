import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── "O que eu fiz" — bloco compartilhado pelos modais ─── */
export const WhatIDid = ({ text }: { text: string }) => (
  <div className="border-t border-white/10 px-6 py-5 flex-shrink-0">
    <p className="text-[0.6rem] tracking-[0.2em] uppercase text-white/40 mb-2">O que eu fiz</p>
    <p className="text-[0.85rem] leading-[1.75] text-white/70 max-w-[820px]">{text}</p>
  </div>
);

/* ─── Barra superior compartilhada ─── */
export const ModalTopBar = ({
  kind,
  title,
  onClose,
  downloadUrl,
  downloadLabel,
}: {
  kind: string;
  title: string;
  onClose: () => void;
  downloadUrl?: string;
  downloadLabel?: string;
}) => (
  <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 flex-shrink-0">
    <div>
      <p className="text-[0.6rem] tracking-[0.18em] uppercase text-white/40 mb-0.5">{kind}</p>
      <h3 className="font-display text-[1.1rem] tracking-[0.04em] text-white leading-tight">{title}</h3>
    </div>
    <div className="flex items-center gap-4">
      {downloadUrl && (
        <a
          href={downloadUrl}
          download
          className="text-[0.65rem] tracking-[0.14em] uppercase text-white/50 hover:text-white border border-white/20 hover:border-white/50 px-3 py-1.5 rounded-sm transition-colors duration-200"
        >
          {downloadLabel ?? "Baixar"}
        </a>
      )}
      <button
        onClick={onClose}
        className="text-white/40 hover:text-white transition-colors duration-200 p-1"
        aria-label="Fechar"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  </div>
);

/* ─── Modal de vídeo ─── */
export const VideoModal = ({
  piece,
  onClose,
}: {
  piece: { title: string; src: string; poster: string; what: string };
  onClose: () => void;
}) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[600] flex flex-col"
        style={{ background: "rgba(0,0,0,0.94)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <ModalTopBar kind="Vídeo" title={piece.title} onClose={onClose} />
        <div className="flex-1 flex items-center justify-center overflow-hidden px-4 py-6">
          <video
            src={piece.src}
            poster={piece.poster}
            controls
            autoPlay
            playsInline
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <WhatIDid text={piece.what} />
      </motion.div>
    </AnimatePresence>
  );
};
