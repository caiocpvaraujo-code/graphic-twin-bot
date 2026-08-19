import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import FadeIn from "@/components/FadeIn";

import padaria1 from "@/assets/padaria-p1.jpg";
import padaria2 from "@/assets/padaria-p2.jpg";
import padaria3 from "@/assets/padaria-p3.jpg";
import padaria4 from "@/assets/padaria-p4.jpg";
import padaria5 from "@/assets/padaria-p5.jpg";
import padaria6 from "@/assets/padaria-p6.jpg";
import padaria7 from "@/assets/padaria-p7.jpg";
import padaria8 from "@/assets/padaria-p8.jpg";
import padaria9 from "@/assets/padaria-p9.jpg";
import padaria10 from "@/assets/padaria-p10.jpg";
import padaria11 from "@/assets/padaria-p11.jpg";
import padaria12 from "@/assets/padaria-p12.jpg";

import saving1 from "@/assets/saving-p1.jpg";
import saving2 from "@/assets/saving-p2.jpg";
import saving3 from "@/assets/saving-p3.jpg";
import saving4 from "@/assets/saving-p4.jpg";
import saving5 from "@/assets/saving-p5.jpg";
import saving6 from "@/assets/saving-p6.jpg";
import saving7 from "@/assets/saving-p7.jpg";
import saving8 from "@/assets/saving-p8.jpg";
import saving9 from "@/assets/saving-p9.jpg";
import saving10 from "@/assets/saving-p10.jpg";
import saving11 from "@/assets/saving-p11.jpg";
import saving12 from "@/assets/saving-p12.jpg";
import saving13 from "@/assets/saving-p13.jpg";
import saving14 from "@/assets/saving-p14.jpg";

/* ─── PDF Modal ─── */
interface ModalDoc {
  title: string;
  pages: string[];
  totalPages: number;
  pdfUrl: string;
}

const PdfModal = ({
  doc,
  onClose,
}: {
  doc: ModalDoc;
  onClose: () => void;
}) => {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(
    () => setCurrent((c) => Math.min(doc.pages.length - 1, c + 1)),
    [doc.pages.length]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[600] flex flex-col"
        style={{ background: "rgba(0,0,0,0.92)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 flex-shrink-0">
          <div>
            <p className="text-[0.6rem] tracking-[0.18em] uppercase text-white/40 mb-0.5">
              Documento
            </p>
            <h3 className="font-display text-[1.1rem] tracking-[0.04em] text-white leading-tight">
              {doc.title}
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={doc.pdfUrl}
              download
              className="text-[0.65rem] tracking-[0.14em] uppercase text-white/50 hover:text-white border border-white/20 hover:border-white/50 px-3 py-1.5 rounded-sm transition-colors duration-200 flex items-center gap-2"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Baixar PDF
            </a>
            <button
              onClick={onClose}
              className="text-white/40 hover:text-white transition-colors duration-200 p-1"
              aria-label="Fechar"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Image area */}
        <div className="flex-1 flex items-center justify-center relative overflow-hidden px-4 py-4">
          {/* Prev */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute left-4 z-10 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white disabled:opacity-20 transition-colors duration-200"
            aria-label="Página anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={doc.pages[current]}
              alt={`${doc.title} — página ${current + 1}`}
              className="max-h-full max-w-full object-contain"
              style={{ maxHeight: "calc(100vh - 160px)" }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            />
          </AnimatePresence>

          {/* Next */}
          <button
            onClick={next}
            disabled={current === doc.pages.length - 1}
            className="absolute right-4 z-10 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white disabled:opacity-20 transition-colors duration-200"
            aria-label="Próxima página"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-center gap-6 px-6 py-3 border-t border-white/10 flex-shrink-0">
          {/* Dot indicators */}
          <div className="flex gap-1.5">
            {doc.pages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  i === current ? "bg-white scale-110" : "bg-white/25"
                }`}
              />
            ))}
          </div>
          <span className="text-[0.65rem] tracking-[0.12em] text-white/35">
            {current + 1} / {doc.pages.length}
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ─── Document Card ─── */
const DocCard = ({
  num,
  title,
  subtitle,
  tags,
  cover,
  onClick,
}: {
  num: string;
  title: string;
  subtitle: string;
  tags: string[];
  cover: string;
  onClick: () => void;
}) => (
  <motion.button
    onClick={onClick}
    className="group w-full text-left bg-bg3 border border-border hover:border-primary/40 transition-colors duration-300 overflow-hidden"
    whileHover={{ y: -3 }}
    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
  >
    {/* Cover preview */}
    <div className="relative overflow-hidden aspect-[4/3] border-b border-border">
      <img
        src={cover}
        alt={title}
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
      />
      {/* Overlay hint */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[0.65rem] tracking-[0.18em] uppercase text-white border border-white/50 px-3 py-1.5">
          Ver documento
        </span>
      </div>
    </div>

    {/* Info */}
    <div className="p-7">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-serif italic text-primary text-[0.85rem]">{num}</span>
        <h3 className="font-display text-[1.35rem] tracking-[0.03em] leading-tight">
          {title}
        </h3>
      </div>
      <p className="text-[0.82rem] text-muted-foreground leading-[1.7] mb-4">{subtitle}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-primary/10 border border-primary/20 text-amber text-[0.6rem] tracking-[0.1em] uppercase px-2 py-0.5 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.button>
);


/* ─── "O que eu fiz" — bloco compartilhado pelos modais ─── */
const WhatIDid = ({ text }: { text: string }) => (
  <div className="border-t border-white/10 px-6 py-5 flex-shrink-0">
    <p className="text-[0.6rem] tracking-[0.2em] uppercase text-white/40 mb-2">O que eu fiz</p>
    <p className="text-[0.85rem] leading-[1.75] text-white/70 max-w-[820px]">{text}</p>
  </div>
);

/* ─── Barra superior compartilhada ─── */
const ModalTopBar = ({
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
const VideoModal = ({
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

/* ─── Modal de roteiro ─── */
const ScriptModal = ({
  piece,
  onClose,
}: {
  piece: { title: string; lines: string[]; what: string };
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
        <ModalTopBar kind="Roteiro" title={piece.title} onClose={onClose} />
        <div className="flex-1 overflow-y-auto px-6 md:px-10 py-10">
          <div className="max-w-[720px] mx-auto space-y-4">
            {piece.lines.map((line, i) => (
              <p key={i} className="font-serif text-[1.15rem] md:text-[1.3rem] leading-[1.65] text-white/90">
                {line}
              </p>
            ))}
          </div>
        </div>
        <WhatIDid text={piece.what} />
      </motion.div>
    </AnimatePresence>
  );
};

/* ─── Card de peça (mesmo visual do DocCard) ─── */
const PieceCard = ({
  num,
  kind,
  title,
  subtitle,
  tags,
  cover,
  onClick,
}: {
  num: string;
  kind: string;
  title: string;
  subtitle: string;
  tags: string[];
  cover?: string;
  onClick: () => void;
}) => (
  <motion.button
    onClick={onClick}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    className="text-left bg-bg3 border border-transparent hover:border-border transition-colors duration-300 group overflow-hidden w-full"
  >
    <div className="aspect-video overflow-hidden bg-bg2 relative flex items-center justify-center">
      {cover ? (
        <img
          src={cover}
          alt={title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
        />
      ) : (
        <span className="font-serif italic text-[3rem] text-primary/25">{num}</span>
      )}
      <span className="absolute top-3 left-3 text-[0.58rem] tracking-[0.16em] uppercase bg-black/60 text-white/80 px-2 py-1 rounded-sm">
        {kind}
      </span>
    </div>
    <div className="p-8">
      <span className="font-serif italic text-[1.7rem] text-primary/25 group-hover:text-primary/50 leading-none block mb-3 transition-colors duration-500">
        {num}
      </span>
      <h3 className="font-display text-[1.4rem] tracking-[0.04em] mb-2">{title}</h3>
      <p className="text-[0.82rem] leading-[1.75] text-muted-foreground mb-5">{subtitle}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-primary/10 border border-primary/20 text-amber text-[0.6rem] tracking-[0.1em] uppercase px-2 py-0.5 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.button>
);

/* ─── Page ─── */
const DOCS = {
  padaria: {
    title: "O Cheiro das Boas Lembranças — Padaria das Famílias",
    pages: [padaria1, padaria2, padaria3, padaria4, padaria5, padaria6, padaria7, padaria8, padaria9, padaria10, padaria11, padaria12],
    totalPages: 12,
    pdfUrl: "/docs/padaria-familias.pdf",
  },
  mira: {
    title: "Mirá Pet & Co — Transformando vínculos em símbolos",
    pages: Array.from({ length: 19 }, (_, i) => `/docs/mira/${String(i + 1).padStart(2, "0")}.jpg`),
    totalPages: 19,
    pdfUrl: "/docs/mira-pet-co.pdf",
  },
  saving: {
    title: "Saving Our Planet",
    pages: [saving1, saving2, saving3, saving4, saving5, saving6, saving7, saving8, saving9, saving10, saving11, saving12, saving13, saving14],
    totalPages: 14,
    pdfUrl: "/docs/saving-our-planet.pdf",
  },
};


const VIDEOS = {
  caixa: {
    title: "A caixa",
    src: "/videos/incine-ad-caixa.mp4",
    poster: "/videos/poster-ad-caixa.jpg",
    what: "Escrevi o roteiro e dirigi a peça. O gancho abre em objeto puro — uma caixa velha embaixo da cama — sem apresentar o candidato, porque em tráfego pago quem abre se apresentando perde o polegar nos três primeiros segundos. As cenas que nenhum banco de imagem tinha foram geradas por IA e montadas junto ao acervo da agência. Edição e finalização minhas.",
  },
  concurso: {
    title: "O concurso",
    src: "/videos/incine-ad-concurso.mp4",
    poster: "/videos/poster-ad-concurso.jpg",
    what: "Roteiro, direção e edição. A peça persegue um único gesto: o dedo correndo a lista de aprovados. Construí o texto em frases curtas, com o anticlímax guardado para a última — a promessa cumprida e o resultado injusto na mesma respiração. Geração por IA combinada ao acervo da agência.",
  },
  viasacra: {
    title: "Via Sacra",
    src: "/videos/incine-via-sacra.mp4",
    poster: "/videos/poster-via-sacra.jpg",
    what: "Filme de apresentação construído em torno de uma imagem só: os onze anos em que o pré-candidato subiu o Morro da Capelinha carregando a cruz na Via Sacra de Planaltina. Roteiro, seleção de arquivo, tratamento de imagem e montagem.",
  },
};

const SCRIPTS = {
  cruz: {
    title: "A Cruz — filme de apresentação",
    what: "Roteiro integral do filme institucional. A estrutura parte da cruz de cenário que ele carregava como ator na Via Sacra e a coloca contra as cruzes reais de quem assistia — o peso que ele devolvia no fim do dia e o peso que os outros levavam para casa. A anáfora central organiza as três frentes de mandato sem transformar o texto em prestação de contas.",
    lines: [
      "Durante onze anos eu subi o Morro da Capelinha, carregando uma cruz nas costas, na frente de quase 100 mil pessoas.",
      "Eu era o Jesus da Via Sacra de Planaltina, a maior do Distrito Federal.",
      "Lá em cima, quando eu olhava pra baixo, eu não enxergava só a plateia. Eu imaginava as cruzes que eles carregavam também.",
      "A minha era leve, de cenário. As deles eram de verdade, do dia a dia.",
      "Meu nome é Cláudio Abrantes. Eu não nasci aqui. Vim lá do sertão do Nordeste, ainda criança, com a mesma história de milhares de famílias que construíram essa cidade.",
      "Fui criado e formado na periferia de Brasília. Foi lá que essa terra me adotou e eu adotei ela de volta.",
      "Como manda o padrão brasiliense, o meu sonho era um concurso público. Passei, virei policial civil, e aquilo transformou a condição da minha vida.",
      "Mas aquela visão do morro... me fazia sonhar em mudar, não só a minha, mas outras vidas também.",
      "Na Polícia Civil, eu briguei contra o crime.",
      "Fui eleito como deputado distrital, e por quatro mandatos, eu escolhi brigar contra o atraso na vida do meu povo...",
      "Briguei pra tirar a cruz de quem mora vinte anos numa terra sem escritura.",
      "Briguei pra tirar a cruz de quem virou noite estudando, passou no concurso e envelheceu dentro de uma fila.",
      "Briguei pra tirar a cruz de quem faz cultura na quadra e nunca viu a cor de um edital.",
      "Eu tenho orgulho do que a gente já mudou. Mas o meu sonho ainda não acabou.",
      "Porque aquela cruz cinematográfica, eu devolvia no final do dia.",
      "Mas a cruz da realidade, tem gente nessa cidade que carrega ela a vida inteira.",
      "É por isso que eu posso até ter descido daquele morro, mas meus olhos e meu coração nunca saíram de lá.",
      "Meu nome é Cláudio Abrantes. Faz bem a Brasília.",
    ],
  },
};

const Copywriting = () => {
  const [activeDoc, setActiveDoc] = useState<keyof typeof DOCS | null>(null);
  const [activeVideo, setActiveVideo] = useState<keyof typeof VIDEOS | null>(null);
  const [activeScript, setActiveScript] = useState<keyof typeof SCRIPTS | null>(null);

  return (
    <PageLayout
      eyebrow="04 — Copywriting"
      title="Redação"
    >
      {/* ── Skill grid ── */}
      <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 mb-16">
          {[
            {
              num: "01",
              title: "Copy para Social Media",
              desc: "Legendas, CTAs, roteiros de Reels e copies de campanhas para marcas como Vivo e Tarea. Tom adaptado ao posicionamento de cada cliente.",
              tags: ["Instagram", "LinkedIn", "Campanhas"],
            },
            {
              num: "02",
              title: "Redação Institucional",
              desc: "Textos para comunicação governamental na Vice-Governadoria do DF. Linguagem clara, inclusiva e alinhada à identidade do GDF.",
              tags: ["Comunicação Gov.", "Institucional"],
            },
            {
              num: "03",
              title: "Roteiros Audiovisuais",
              desc: "Roteiros para Reels, vídeos motivacionais e curtas-metragens. Do brief ao texto final, com atenção a ritmo, narrativa e impacto emocional.",
              tags: ["Roteiro", "Reels", "Curta"],
            },
            {
              num: "04",
              title: "Endomarketing & Comunicação Interna",
              desc: "Comunicados, campanhas internas e kit de mídia para colaboradores. Texto alinhado à cultura organizacional.",
              tags: ["Endomarketing", "Comunicação Interna"],
            },
          ].map((item) => (
            <div
              key={item.num}
              className="bg-bg3 p-10 border border-transparent hover:border-border transition-colors duration-300 group"
            >
              <span className="font-serif italic text-[2.8rem] text-primary/20 group-hover:text-primary/40 leading-none block mb-4 transition-colors duration-500">
                {item.num}
              </span>
              <h3 className="font-display text-[1.6rem] tracking-[0.04em] mb-3">{item.title}</h3>
              <p className="text-[0.84rem] leading-[1.78] text-muted-foreground group-hover:text-warm transition-colors mb-5">
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 border border-primary/20 text-amber text-[0.6rem] tracking-[0.1em] uppercase px-2 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* ── Section divider ── */}
      <FadeIn delay={0.05}>
        <div className="flex items-center gap-4 mb-12">
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-primary flex items-center gap-2.5">
            <span className="w-6 h-px bg-primary inline-block" />
            Cases & Documentos
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
      </FadeIn>

      {/* ── Document cards ── */}
      <FadeIn delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <DocCard
            num="05"
            title="O Cheiro das Boas Lembranças"
            subtitle="Apresentação completa de campanha publicitária para a Padaria das Famílias — conceito criativo, Big Idea, sinopse de filme e roteiro técnico."
            tags={["Campanha Publicitária", "Roteiro", "Big Idea"]}
            cover={padaria1}
            onClick={() => setActiveDoc("padaria")}
          />
          <DocCard
            num="06"
            title="Saving Our Planet"
            subtitle="Livro infantil ilustrado sobre sustentabilidade e meio ambiente — narrativa, copywriting e roteiro para publicação educacional."
            tags={["Copywriting", "Livro Infantil", "Sustentabilidade"]}
            cover={saving1}
            onClick={() => setActiveDoc("saving")}
          />
          <DocCard
            num="07"
            title="Mirá Pet & Co"
            subtitle="Apresentação completa de posicionamento e campanha para marca de coleiras personalizadas — plataforma, assinatura, revista proprietária e ação de adoção. Redação minha, em dupla."
            tags={["Posicionamento", "Assinatura", "Campanha"]}
            cover="/docs/mira/01.jpg"
            onClick={() => setActiveDoc("mira")}
          />
        </div>
      </FadeIn>


      {/* ── Incine ── */}
      <FadeIn>
        <div className="flex items-center gap-4 mb-4">
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-primary flex items-center gap-2.5">
            <span className="w-6 h-px bg-primary inline-block" />
            Incine Comunicação
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
        <p className="text-[0.85rem] leading-[1.8] text-muted-foreground max-w-[720px] mb-10">
          Redação, roteiro e edição para pré-candidatos do Distrito Federal. As peças abaixo
          rodaram em tráfego pago e combinam geração por IA com o acervo da própria agência.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <PieceCard
            num="08"
            kind="Vídeo"
            title="A caixa"
            subtitle="Peça de tráfego pago. Abre em objeto, não em candidato — a caixa velha embaixo da cama cria a pergunta antes de qualquer promessa."
            tags={["Roteiro", "Edição", "IA Generativa"]}
            cover="/videos/poster-ad-caixa.jpg"
            onClick={() => setActiveVideo("caixa")}
          />
          <PieceCard
            num="09"
            kind="Vídeo"
            title="O concurso"
            subtitle="A peça persegue um gesto só: o dedo correndo a lista de aprovados. Frases curtas, anticlímax na última."
            tags={["Roteiro", "Edição", "IA Generativa"]}
            cover="/videos/poster-ad-concurso.jpg"
            onClick={() => setActiveVideo("concurso")}
          />
          <PieceCard
            num="10"
            kind="Vídeo"
            title="Via Sacra"
            subtitle="Filme de apresentação construído sobre os onze anos em que o pré-candidato carregou a cruz na Via Sacra de Planaltina."
            tags={["Roteiro", "Montagem", "Institucional"]}
            cover="/videos/poster-via-sacra.jpg"
            onClick={() => setActiveVideo("viasacra")}
          />
          <PieceCard
            num="11"
            kind="Roteiro"
            title="A Cruz"
            subtitle="Roteiro integral do filme institucional. A cruz de cenário contra as cruzes reais de quem assistia."
            tags={["Roteiro", "Narrativa", "Institucional"]}
            onClick={() => setActiveScript("cruz")}
          />
        </div>
      </FadeIn>

      {/* PDF Modal */}
      {activeDoc && (
        <PdfModal
          doc={DOCS[activeDoc]}
          onClose={() => setActiveDoc(null)}
        />
      )}

      {activeVideo && (
        <VideoModal piece={VIDEOS[activeVideo]} onClose={() => setActiveVideo(null)} />
      )}

      {activeScript && (
        <ScriptModal piece={SCRIPTS[activeScript]} onClose={() => setActiveScript(null)} />
      )}
    </PageLayout>
  );
};

export default Copywriting;
