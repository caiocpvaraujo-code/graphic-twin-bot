import { useState, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import FadeIn from "@/components/FadeIn";
import gdfLogo from "@/assets/work-gdf-logo.jpg";
import logoVivo from "@/assets/logo-vivo.jpeg";
import logoTarea from "@/assets/logo-tarea.png";
import logoUnb from "@/assets/logo-unb.jpeg";

const QuatroLogo = () => (
  <div className="w-[72px] h-[72px] flex-shrink-0 overflow-hidden">
    <img src="/img/logos/quatro.png" alt="Quatro Comunicação" className="w-full h-full object-cover" />
  </div>
);

const BELAVIA_PREVIEW = [
  "/img/belavia/belavia-1.jpg",
  "/img/belavia/belavia-4.jpg",
  "/img/belavia/belavia-7.jpg",
  "/img/belavia/belavia-9.jpg",
];

const IncineLogo = () => (
  <div className="w-[72px] h-[72px] flex-shrink-0 overflow-hidden">
    <img src="/img/logos/incine.png" alt="Incine Comunicação" className="w-full h-full object-cover" />
  </div>
);

const DayseLogo = () => (
  <div className="w-[72px] h-[72px] flex-shrink-0 overflow-hidden bg-white">
    <img src="/img/logos/dayse.png" alt="Dayse Amarilio 40222" className="w-full h-full object-contain" />
  </div>
);

const GdfLogo = () => (
  <div className="w-[72px] h-[72px] flex-shrink-0 overflow-hidden">
    <img src={gdfLogo} alt="VGDF Logo" className="w-full h-full object-contain" />
  </div>
);

const VivoLogo = () => (
  <div className="w-[72px] h-[72px] flex-shrink-0 overflow-hidden rounded-full">
    <img src={logoVivo} alt="Vivo Logo" className="w-full h-full object-cover" />
  </div>
);

const TareaLogo = () => (
  <div className="w-[72px] h-[72px] flex-shrink-0 overflow-hidden">
    <img src={logoTarea} alt="Tarea Logo" className="w-full h-full object-contain" />
  </div>
);

const UnbLogo = () => (
  <div className="w-[72px] h-[72px] flex-shrink-0 overflow-hidden">
    <img src={logoUnb} alt="UnB Logo" className="w-full h-full object-contain" />
  </div>
);


/* ─── Case board ─── */
const BoardCard = ({ src, alt, onOpen }: { src: string; alt: string; onOpen: () => void }) => (
  <button onClick={onOpen} className="group mt-10 block w-full text-left" aria-label={`Ampliar ${alt}`}>
    <p className="text-[0.65rem] tracking-[0.18em] uppercase text-muted-foreground mb-3">
      Case board · clique para ampliar
    </p>
    <div className="img-frame overflow-hidden border border-border">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.015]"
      />
    </div>
  </button>
);

const BoardModal = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => {
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
    <motion.div
      className="fixed inset-0 z-[600] flex items-center justify-center p-4 md:p-10"
      style={{ background: "rgba(0,0,0,0.94)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200"
        aria-label="Fechar"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
};

const BOARDS = {
  dayse: { src: "/img/boards/dayse.jpg", alt: "Case board da campanha Dayse Amarilio 40222" },
  incine: { src: "/img/boards/incine.jpg", alt: "Case board da Incine Comunicação" },
  vgdf: { src: "/img/boards/vgdf.jpg", alt: "Case board da Vice-Governadoria do DF" },
  vivo: { src: "/img/boards/vivo.jpg", alt: "Case board da Vivo" },
  tarea: { src: "/img/boards/tarea.jpg", alt: "Case board da Tarea" },
};
type BoardKey = keyof typeof BOARDS;

/* ─── Education ─── */
const education = [
  {
    org: "Universidade de Brasília",
    orgShort: "UnB",
    logo: <UnbLogo />,
    course: "Publicidade e Propaganda",
    period: "2022 a 2026",
    detail:
      "Centro de Excelência em Comunicação. Coordenação de cobertura audiovisual de eventos, produção de curta-metragem, pesquisa em comunicação estratégica.",
  },
  {
    org: "Colégio Militar de Brasília",
    orgShort: "CMB",
    logo: null,
    course: "Ensino Médio",
    period: "2017 a 2019",
    detail: "",
  },
];

/* ─── Paralelos ─── */
const sideWork = [
  {
    role: "Produtor de Audiovisual",
    org: "Autônomo",
    period: "2016 · atual",
    detail:
      "Captação, edição e finalização no celular e no desktop, cobertura em tempo real como storymaker, curtas e vídeos institucionais. Coloração, enquadramento e narrativa aprendidos na prática com a CRIA.MOV.",
  },
  {
    role: "Voluntário em Criação e Mídia",
    org: "Jovens Líderes pela Paz · vencedor do prêmio LED, da TV Globo",
    period: "2023 a 2025",
    detail:
      "Edição de vídeo, social media, planejamento de comunicação e palestra para alunos da rede pública do DF.",
  },
];

const certs = [
  { name: "Marketing Digital", by: "Universidade de Chicago" },
  { name: "Inteligência Artificial na Publicidade", by: "Ide.IA, com Rapha Borges (CCO da WMcCann)" },
  { name: "Redação Publicitária, curso livre", by: "Redhook School" },
  { name: "Publicidade nas Redes Sociais", by: "Digitallent Group" },
  { name: "Storymaker", by: "Laura Christine" },
  { name: "Yellow Belt", by: "Lean Six Sigma" },
  { name: "Carreira de Excelência", by: "Na Prática" },
];

const tools = [
  ["Design", "Adobe e Canva"],
  ["Vídeo", "Premiere e CapCut"],
  ["Transmissão", "OBS"],
  ["Tráfego pago", "Google Ads e Meta Ads"],
  ["Programação", "Python básico e Power Apps"],
  ["Inglês", "B2, intermediário-avançado"],
];

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-4 mb-10">
    <p className="text-[0.65rem] tracking-[0.22em] uppercase text-primary flex items-center gap-2.5">
      <span className="w-6 h-px bg-primary inline-block" />
      {children}
    </p>
    <div className="flex-1 h-px bg-border" />
  </div>
);

const Curriculo = () => {
  const [board, setBoard] = useState<BoardKey | null>(null);

  return (
    <PageLayout
      eyebrow="02 · Currículo"
      title="Experiência"
      subtitle="Seis equipes, de telecom a campanha eleitoral. Dez anos de câmera na mão."
    >

      {/* ── QU4TRO ── */}
      <FadeIn>
        <div className="py-14 border-b border-border">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div className="flex items-start gap-5">
              <div className="mt-1"><QuatroLogo /></div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="font-display text-[clamp(2rem,5vw,5rem)] leading-[0.88] tracking-[0.02em]">
                    Qu4tro Comunicação
                  </h2>
                  <span className="text-[0.6rem] tracking-[0.18em] uppercase bg-primary/20 text-primary border border-primary/30 px-2.5 py-1 rounded-sm self-center">
                    Atual
                  </span>
                </div>
                <p className="text-[0.85rem] text-muted-foreground tracking-[0.04em]">
                  Diretor de Arte · Cliente Belavia, construtora de infraestrutura
                </p>
              </div>
            </div>
            <div className="text-left md:text-right flex-shrink-0">
              <p className="font-serif italic text-[1.05rem] text-warm">ago 2026 · atual</p>
              <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-0.5">Brasília, DF</p>
            </div>
          </div>

          <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-6">
            Faço o feed e os stories da Belavia, construtora de pavimentação de Brasília, dentro
            do sistema visual que eu mesmo desenhei para a marca: foto em preto e branco, amarelo
            de sinalização em um único ponto por peça. A demanda chega card a card pelo Trello da
            agência. Só entre o fim de outubro e novembro de 2026 foram mais de 35 entregas, entre
            carrossel educativo, pílula técnica, enquete e story de domingo. O carrossel "O que
            existe debaixo do asfalto?" virou o modelo da série.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Direção de Arte", "Sistema Visual", "Carrossel", "Stories", "Construção Civil"].map((tag) => (
              <span key={tag} className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
            {BELAVIA_PREVIEW.map((src, i) => (
              <div key={src} className="img-frame overflow-hidden border border-border aspect-[4/5]">
                <img src={src} alt={`Belavia, peça ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <Link
            to="/design"
            className="inline-flex items-center gap-2 mt-6 text-[0.7rem] tracking-[0.18em] uppercase text-primary hover:text-amber transition-colors"
          >
            Ver o case completo em Design →
          </Link>
        </div>
      </FadeIn>

      {/* ── CAMPANHA DAYSE AMARILIO ── */}
      <FadeIn>
        <div className="py-14 border-b border-border">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div className="flex items-start gap-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="mt-1"
              >
                <DayseLogo />
              </motion.div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="font-display text-[clamp(2rem,5vw,5rem)] leading-[0.88] tracking-[0.02em]">
                    Campanha Dayse Amarilio
                  </h2>
                  <span className="text-[0.6rem] tracking-[0.18em] uppercase bg-primary/20 text-primary border border-primary/30 px-2.5 py-1 rounded-sm self-center">
                    Eleita
                  </span>
                </div>
                <p className="text-[0.85rem] text-muted-foreground tracking-[0.04em]">
                  Editor de Vídeo e Redator · Comunicação política
                </p>
              </div>
            </div>
            <div className="text-left md:text-right flex-shrink-0">
              <p className="font-serif italic text-[1.05rem] text-warm">ago a out 2026</p>
              <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-0.5">Brasília, DF</p>
            </div>
          </div>

          <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-6">
            Fui editor de vídeo e redator da campanha da Dayse Amarilio (PSB), eleita deputada
            distrital do DF. Em 53 dias, entreguei mais de 70 peças: cortes de discurso e
            entrevista, motion de mobilização, vídeo de humor, Status de WhatsApp, roteiro e
            legenda. Campanha não tem segunda chance de lançamento, então o ritmo era o de uma
            redação, com tudo dentro da lei eleitoral.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Edição de Vídeo", "Motion", "Roteiro", "Humor e Meme", "Comunicação Política"].map((tag) => (
              <span key={tag} className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
          <BoardCard {...BOARDS.dayse} onOpen={() => setBoard("dayse")} />
        </div>
      </FadeIn>

      {/* ── INCINE ── */}
      <FadeIn delay={0.1}>
        <div className="py-14 border-b border-border">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div className="flex items-start gap-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="mt-1"
              >
                <IncineLogo />
              </motion.div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="font-display text-[clamp(2rem,5vw,5rem)] leading-[0.88] tracking-[0.02em]">
                    Incine Comunicação
                  </h2>
                </div>
                <p className="text-[0.85rem] text-muted-foreground tracking-[0.04em]">
                  Redator de Conteúdo e Copywriter · Comunicação política
                </p>
              </div>
            </div>
            <div className="text-left md:text-right flex-shrink-0">
              <p className="font-serif italic text-[1.05rem] text-warm">jun a ago 2026</p>
              <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-0.5">Brasília, DF</p>
            </div>
          </div>

          <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-6">
            Trabalhei com três pré-candidatos do Distrito Federal, cuidando do conteúdo de
            redes: roteiro de vídeo e Reels, copy de carrossel, legenda de post. Também
            assinei o design das peças estáticas e editei os vídeos curtos, misturando
            geração por IA com o acervo da própria agência. Porque quando todo mundo usa
            o mesmo banco de imagem, todo mundo entrega a mesma peça.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Copywriting", "Roteiro", "Edição de Vídeo", "IA Generativa", "Comunicação Política"].map((tag) => (
              <span key={tag} className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
          <BoardCard {...BOARDS.incine} onOpen={() => setBoard("incine")} />
        </div>
      </FadeIn>

      {/* ── GDF ── */}
      <FadeIn delay={0.1}>
        <div className="py-14 border-b border-border">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div className="flex items-start gap-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="mt-1"
              >
                <GdfLogo />
              </motion.div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="font-display text-[clamp(2rem,5vw,5rem)] leading-[0.88] tracking-[0.02em]">
                    Vice-Governadoria do DF
                  </h2>
                </div>
                <p className="text-[0.85rem] text-muted-foreground tracking-[0.04em]">
                  Diretor de Arte / Designer · Assessoria de Comunicação · Palácio do Buriti
                </p>
              </div>
            </div>
            <div className="text-left md:text-right flex-shrink-0">
              <p className="font-serif italic text-[1.05rem] text-warm">abr a jun 2026</p>
              <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-0.5">Brasília, DF</p>
            </div>
          </div>

          <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-6">
            Trabalhei na Assessoria de Comunicação da Vice-Governadoria do DF, com a então
            Vice-Governadora Celina Leão, hoje Governadora. Fiz peça para redes (feed,
            story, material institucional) e desenvolvi a logo da VGDF a partir da nova
            identidade do GDF, adaptando paleta, elementos e aplicações para o contexto da
            assessoria.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Direção de Arte", "Identidade Visual", "Social Media", "Comunicação Gov."].map((tag) => (
              <span key={tag} className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
          <BoardCard {...BOARDS.vgdf} onOpen={() => setBoard("vgdf")} />
        </div>
      </FadeIn>

      {/* ── VIVO ── */}
      <FadeIn delay={0.1}>
        <div className="py-14 border-b border-border">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div className="flex items-start gap-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="mt-1"
              >
                <VivoLogo />
              </motion.div>
              <div>
                <h2 className="font-display text-[clamp(2rem,5vw,5rem)] leading-[0.88] tracking-[0.02em]">
                  VIVO
                </h2>
                <p className="text-[0.85rem] text-muted-foreground tracking-[0.04em]">
                  Estágio em Marketing & Comunicação · Telefónica Brasil
                </p>
              </div>
            </div>
            <div className="text-left md:text-right flex-shrink-0">
              <p className="font-serif italic text-[1.05rem] text-warm">2024 a 2026</p>
              <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-0.5">Brasília, DF</p>
            </div>
          </div>

          {/* Descrição */}
          <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-6">
            Duas frentes na regional Centro-Oeste. Na publicidade, peça para canal externo (post,
            story, banner) e ativação de marca offline, incluindo a campanha "Coração do Brasil" com
            a Ana Castela. No endomarketing, logos para times regionais, mascote, uniforme, campanha
            interna e infográfico. Fora da peça, criei em Power Apps um aplicativo de checklist
            para os gerentes de loja da regional. Trabalhar dentro da identidade da maior telecom do país ensina
            uma coisa rápido: a régua já existe e ela não se dobra ao seu gosto.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Publicidade", "Endomarketing", "Branding", "Social Media", "Power Apps"].map((tag) => (
              <span key={tag} className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
          <BoardCard {...BOARDS.vivo} onOpen={() => setBoard("vivo")} />
        </div>
      </FadeIn>

      {/* ── TAREA ── */}
      <FadeIn delay={0.2}>
        <div className="py-14 border-b border-border">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div className="flex items-start gap-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mt-1"
              >
                <TareaLogo />
              </motion.div>
              <div>
                <h2 className="font-display text-[clamp(2rem,5vw,5rem)] leading-[0.88] tracking-[0.02em]">
                  Tarea Management
                </h2>
                <p className="text-[0.85rem] text-muted-foreground tracking-[0.04em]">
                  Estágio em Marketing · Tarea Management
                </p>
              </div>
            </div>
            <div className="text-left md:text-right flex-shrink-0">
              <p className="font-serif italic text-[1.05rem] text-warm">2023 a 2024</p>
              <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-0.5">Brasília, DF</p>
            </div>
          </div>

          {/* Descrição */}
          <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-6">
            Construí o perfil institucional do zero: identidade visual, tom de voz, calendário
            editorial e todos os formatos de conteúdo para vagas, cultura e posicionamento da marca.
            Datas comemorativas, comunicados internos e kit completo de mídia para colaboradores:
            assinatura de e-mail personalizada, crachá, thumbnail LinkedIn e fundo de tela.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Social Media", "Endomarketing", "Employer Branding", "Kit de Mídia"].map((tag) => (
              <span key={tag} className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
          <BoardCard {...BOARDS.tarea} onOpen={() => setBoard("tarea")} />
        </div>
      </FadeIn>

      {/* ── Formação ── */}
      <FadeIn>
        <div className="mt-20 pt-16 border-t border-border">
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-primary flex items-center gap-2.5 mb-10">
            <span className="w-6 h-px bg-primary inline-block" />
            Formação
          </p>
          {education.map((edu) => (
            <div key={edu.org} className="flex flex-col md:flex-row md:justify-between gap-6 mb-12 last:mb-0">
              <div className="flex items-start gap-5">
                <div className="mt-1">
                  {edu.logo ?? (
                    <div className="w-[72px] h-[72px] flex items-center justify-center border border-border">
                      <span className="font-display text-[1.6rem] text-muted-foreground">{edu.orgShort}</span>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-display text-[2rem] tracking-[0.04em]">{edu.org}</h3>
                  <p className="text-[0.85rem] text-muted-foreground mt-1">{edu.course}</p>
                  <p className="text-[0.85rem] leading-[1.8] text-warm mt-3 max-w-[560px]">
                    {edu.detail}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 md:text-right">
                <p className="font-serif italic text-[1.05rem] text-warm">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* ── Em paralelo ── */}
      <FadeIn>
        <div className="mt-20">
          <SectionLabel>Em paralelo</SectionLabel>
          {sideWork.map((w) => (
            <div key={w.role} className="flex flex-col md:flex-row md:justify-between gap-3 md:gap-6 py-6 border-b border-border last:border-b-0">
              <div className="max-w-[620px]">
                <h3 className="font-display text-[1.8rem] tracking-[0.04em] leading-none">{w.role}</h3>
                <p className="text-[0.8rem] text-muted-foreground mt-1.5">{w.org}</p>
                <p className="text-[0.85rem] leading-[1.8] text-warm mt-3">{w.detail}</p>
              </div>
              <p className="font-serif italic text-[1.05rem] text-warm flex-shrink-0">{w.period}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* ── Publicação e prêmio de criação ── */}
      <FadeIn>
        <div className="mt-20 grid md:grid-cols-2 gap-10">
          <div>
            <SectionLabel>Publicação</SectionLabel>
            <p className="font-serif italic text-[1.35rem] leading-[1.4] text-cream">
              "O rap como fortalecimento da cultura e identidade negra: análise das canções
              autobiográficas do Djonga"
            </p>
            <p className="text-[0.8rem] text-muted-foreground mt-3">
              Artigo científico publicado no primeiro semestre da graduação.
            </p>
          </div>
          <div>
            <SectionLabel>Projeto de criação</SectionLabel>
            <p className="font-serif italic text-[1.35rem] leading-[1.4] text-cream">"Não basta amar, tem que Mirá."</p>
            <p className="text-[0.8rem] text-muted-foreground mt-3">
              Assinatura da Mirá Pet & Co, criada em dupla para o Bluehook #45.{" "}
              <Link to="/copywriting" className="text-primary hover:text-amber transition-colors">
                Ver o projeto
              </Link>
            </p>
          </div>
        </div>
      </FadeIn>

      {/* ── Certificações ── */}
      <FadeIn>
        <div className="mt-20">
          <SectionLabel>Certificações e cursos</SectionLabel>
          <div className="grid md:grid-cols-2 gap-x-10">
            {certs.map((c, i) => (
              <div key={c.name} className="group flex items-baseline gap-4 py-4 border-b border-border">
                <span className="font-serif italic text-[1.3rem] text-primary/25 group-hover:text-primary/50 transition-colors w-8 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-[0.9rem] text-foreground">{c.name}</p>
                  <p className="text-[0.75rem] text-muted-foreground mt-0.5">{c.by}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* ── Ferramentas ── */}
      <FadeIn>
        <div className="mt-20">
          <SectionLabel>Ferramentas e idioma</SectionLabel>
          <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10">
            {tools.map(([k, v]) => (
              <div key={k} className="py-4 border-b border-border">
                <dt className="text-[0.62rem] tracking-[0.18em] uppercase text-muted-foreground">{k}</dt>
                <dd className="text-[0.9rem] text-warm mt-1">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-14 font-display text-[clamp(1.6rem,3.5vw,2.6rem)] tracking-[0.03em] text-cream">
            Disponível para começar agora.
          </p>
        </div>
      </FadeIn>

      <AnimatePresence>
        {board && <BoardModal {...BOARDS[board]} onClose={() => setBoard(null)} />}
      </AnimatePresence>
    </PageLayout>
  );
};

export default Curriculo;
