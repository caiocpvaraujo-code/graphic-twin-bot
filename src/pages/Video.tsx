import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import FadeIn from "@/components/FadeIn";
import { VideoModal } from "@/components/PieceModals";
import workFreela1 from "@/assets/work-freela-1.jpg";
import workFreela3 from "@/assets/work-freela-3.jpg";
import videoRedesSociais from "@/assets/video-redes-sociais.jpeg";

/* ─── Campanha Dayse Amarilio 40222 ─── */
const DAYSE_VIDEOS = [
  {
    key: "carreata",
    kind: "Motion",
    title: "Vem pra carreata",
    subtitle: "Texto que acompanha o movimento da câmera e a candidata passando na frente dos grafismos.",
    tags: ["Motion", "Rastreamento", "Recorte"],
    src: "/videos/dayse-carreata.mp4",
    poster: "/videos/poster-dayse-carreata.jpg",
    what: "Recriei a linguagem de um reel de referência sem After Effects. Converti o vídeo do iPhone de HDR para SDR, recortei a Dayse quadro a quadro com IA para ela passar na frente do texto e rastreei o movimento da câmera para os grafismos ficarem presos à cena. Tudo na paleta oficial da campanha.",
  },
  {
    key: "urna",
    kind: "Motion",
    title: "Urna 40222",
    subtitle: "A urna digitando o número, com o bipe real. Peça curta para a reta final.",
    tags: ["Motion Design", "Som", "Mobilização"],
    src: "/videos/dayse-urna.mp4",
    poster: "/videos/poster-dayse-urna.jpg",
    what: "Animei a urna eletrônica digitando 40222, quadro a quadro, e exportei também com fundo transparente para a equipe aplicar por cima de qualquer vídeo. O som é o bipe real da urna, sincronizado com cada tecla e com o CONFIRMA.",
  },
  {
    key: "outofcontext",
    kind: "Humor",
    title: "Out of Context 40222",
    subtitle: "Bastidor fora de contexto, no formato que a internet já sabe ler.",
    tags: ["Humor", "Decupagem", "Ritmo"],
    src: "/videos/dayse-out-of-context.mp4",
    poster: "/videos/poster-dayse-out-of-context.jpg",
    what: "Decupei o bastidor da campanha atrás dos momentos que funcionam sem explicação e montei no ritmo do formato, com abertura e cartela 40222 próprias. Troquei a música de terceiros dos clipes por um trecho do jingle da campanha.",
  },
  {
    key: "lapadas",
    kind: "Humor",
    title: "Top 8 lapadas da Dayse",
    subtitle: "As falas mais afiadas dela na Câmara Legislativa, em formato de ranking.",
    tags: ["Meme", "Roteiro", "Edição"],
    src: "/videos/dayse-8-lapadas.mp4",
    poster: "/videos/poster-dayse-8-lapadas.jpg",
    what: "Selecionei e ordenei as falas da Dayse no plenário da CLDF do menor para o maior impacto, intercaladas com reações no formato de meme. Capa, legenda dinâmica e tarja legal exigida pela lei eleitoral.",
  },
  {
    key: "minhaluta",
    kind: "Reel editorial",
    title: "Essa é a minha luta",
    subtitle: "Entrevista em duas câmeras, arquivo de TV e uma homenagem no fim.",
    tags: ["Narrativa", "Montagem", "Legenda"],
    src: "/videos/dayse-minha-luta.mp4",
    poster: "/videos/poster-dayse-minha-luta.jpg",
    what: "Montei a entrevista alternando as duas câmeras, entrei com arquivo de telejornal no ponto em que a fala pede prova e fechei com a homenagem aos mais de 4.500 profissionais de saúde mortos na pandemia. A legenda segura quase dois minutos de feed.",
  },
  {
    key: "concursos",
    kind: "Corte",
    title: "Concursos no DF",
    subtitle: "Um dos dez cortes temáticos tirados de uma live longa sobre concursos.",
    tags: ["Corte", "Entrevista", "Transcrição"],
    src: "/videos/dayse-concursos.mp4",
    poster: "/videos/poster-dayse-concursos.jpg",
    what: "Transcrevi a live inteira e marquei os trechos que se sustentam sozinhos. Saíram dez cortes temáticos. Neste, a Dayse conta que veio de escola pública para defender prova perto de casa.",
  },
];

/* ─── Card de vídeo vertical ─── */
const VideoCard = ({
  num,
  kind,
  title,
  subtitle,
  tags,
  poster,
  onClick,
}: {
  num: string;
  kind: string;
  title: string;
  subtitle: string;
  tags: string[];
  poster: string;
  onClick: () => void;
}) => (
  <motion.button
    onClick={onClick}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    className="text-left bg-bg3 border border-transparent hover:border-border transition-colors duration-300 group overflow-hidden w-full"
  >
    <div className="aspect-[4/5] overflow-hidden bg-bg2 relative">
      <img
        src={poster}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
      />
      <span className="absolute top-3 left-3 text-[0.58rem] tracking-[0.16em] uppercase bg-black/60 text-white/80 px-2 py-1 rounded-sm">
        {kind}
      </span>
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-14 h-14 rounded-full border border-white/50 bg-black/40 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </div>
    <div className="p-6">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-serif italic text-primary text-[0.85rem]">{num}</span>
        <h3 className="font-display text-[1.35rem] tracking-[0.03em] leading-tight">{title}</h3>
      </div>
      <p className="text-[0.8rem] leading-[1.7] text-muted-foreground mb-4">{subtitle}</p>
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

const Video = () => {
  const [active, setActive] = useState<string | null>(null);
  const activeVideo = DAYSE_VIDEOS.find((v) => v.key === active);

  return (
    <PageLayout
      eyebrow="06 · Edição de Vídeo"
      title="Vídeo"
      subtitle="Escrevo o que vou filmar. Depois corto o que filmei."
    >
      <div className="space-y-20">

        {/* Case 00 — Campanha Dayse Amarilio 40222 */}
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-border pb-7 mb-10">
            <div>
              <h2 className="font-display text-[clamp(2.5rem,6vw,7rem)] leading-[0.88]">
                Campanha 40222
              </h2>
              <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-1.5">
                Dayse Amarilio, eleita deputada distrital · Editor de vídeo e redator
              </p>
            </div>
            <div className="text-left md:text-right mt-4 md:mt-0">
              <span className="text-[0.8rem] text-muted-foreground tracking-[0.06em]">Brasília, DF</span>
              <p className="font-serif italic text-[1.05rem] text-warm mt-1">ago a out 2026</p>
            </div>
          </div>
          <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-10">
            Foram 53 dias e mais de 70 peças, de corte de discurso a meme, para uma campanha que
            terminou eleita. Abaixo, seis delas escolhidas para mostrar o alcance: motion,
            humor, reel editorial e corte de entrevista. Clique para assistir e ler o que eu
            fiz em cada uma.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {DAYSE_VIDEOS.map((v, i) => (
              <VideoCard
                key={v.key}
                num={String(i + 1).padStart(2, "0")}
                kind={v.kind}
                title={v.title}
                subtitle={v.subtitle}
                tags={v.tags}
                poster={v.poster}
                onClick={() => setActive(v.key)}
              />
            ))}
          </div>
        </FadeIn>

        {/* Case 01 — Vídeos Cinematográficos */}
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-border pb-7 mb-10">
            <div>
              <h2 className="font-display text-[clamp(2.5rem,6vw,7rem)] leading-[0.88]">
                Vídeos Cinematográficos
              </h2>
              <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-1.5">
                Curta-metragem · Narrativa visual · Direção de cena
              </p>
            </div>
          </div>
          <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-8">
            Luz da Meia Noite tem 12 minutos e foi rodado na UnB. Foi ali que eu aprendi
            que a decisão mais cara de uma cena costuma ser o que fica de fora dela: o
            silêncio que você não corta, a luz que você recusa. Do curta ao vídeo do
            KickOff 2024, eu pego o projeto no roteiro e só largo no color grading.
          </p>
          <a
            href="https://caio-portifolio.my.canva.site/freela-1"
            target="_blank"
            rel="noopener noreferrer"
            className="img-frame block aspect-video mb-4"
          >
            <img src={workFreela1} alt="Vídeos Cinematográficos" className="art w-full h-full object-cover" />
          </a>
          <div className="flex flex-wrap gap-2">
            {["Edição", "Color Grading", "Premiere Pro", "Curta-metragem", "Storytelling"].map((tag) => (
              <span key={tag} className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Case 02 — Live Stream */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-border pb-7 mb-10">
            <div>
              <h2 className="font-display text-[clamp(2.5rem,6vw,7rem)] leading-[0.88]">
                Live Streaming
              </h2>
              <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-1.5">
                Transmissão ao vivo · OBS · StreamYard
              </p>
            </div>
          </div>
          <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-8">
            Estruturei transmissões do zero: câmera, switcher, OBS/StreamYard, mesa de som e
            iluminação. Do talk show "Culto On Us" a eventos completos ao vivo, com direção técnica
            e criativa de ponta a ponta.
          </p>
          <a
            href="https://caio-portifolio.my.canva.site/freela-2"
            target="_blank"
            rel="noopener noreferrer"
            className="img-frame block aspect-video mb-4"
          >
            <img src={workFreela3} alt="Transmissão ao Vivo" className="art w-full h-full object-cover" />
          </a>
          <div className="flex flex-wrap gap-2">
            {["Live Streaming", "OBS Studio", "StreamYard", "Direção Técnica", "Som e Luz"].map((tag) => (
              <span key={tag} className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Case 03 — Redes Sociais */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-border pb-7 mb-10">
            <div>
              <h2 className="font-display text-[clamp(2.5rem,6vw,7rem)] leading-[0.88]">
                Redes Sociais
              </h2>
              <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-1.5">
                CapCut Pro · Reels · Conteúdo dinâmico
              </p>
            </div>
          </div>
          <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-8">
            Vídeo nas redes não tem pausa. Os três primeiros segundos decidem tudo: o
            corte, a trilha entrando junto com a virada, o texto aparecendo no frame
            exato. Edito no CapCut Pro para Reels, TikTok e Stories. Se uma transição não
            tiver motivo pra existir, ela sai.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1rfZfoMhUr2QhpgjHAUXOGXVlk7IfSaDT?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="img-frame block aspect-video mb-4 overflow-hidden"
          >
            <img
              src={videoRedesSociais}
              alt="Edição de vídeo para Redes Sociais no CapCut"
              className="art w-full h-full object-cover"
            />
          </a>
          <div className="flex flex-wrap gap-2">
            {["CapCut Pro", "Reels", "TikTok", "Edição Mobile", "Conteúdo Digital"].map((tag) => (
              <span key={tag} className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

      </div>

      {activeVideo && <VideoModal piece={activeVideo} onClose={() => setActive(null)} />}
    </PageLayout>
  );
};

export default Video;
