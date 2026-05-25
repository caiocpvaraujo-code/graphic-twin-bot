import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import FadeIn from "@/components/FadeIn";
import gdfLogo from "@/assets/work-gdf-logo.jpg";
import workVivo from "@/assets/work-vivo-1.jpg";
import workVivo2 from "@/assets/work-vivo-2.jpg";
import workTarea from "@/assets/work-tarea-1.jpg";
import logoVivo from "@/assets/logo-vivo.jpeg";
import logoTarea from "@/assets/logo-tarea.png";
import logoUnb from "@/assets/logo-unb.jpeg";

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

/* ─── Education ─── */
const education = [
  {
    org: "Universidade de Brasília",
    orgShort: "UnB",
    logo: <UnbLogo />,
    course: "Publicidade e Propaganda",
    period: "2021 — 2025",
    detail:
      "Centro de Excelência em Comunicação. Coordenação de cobertura audiovisual de eventos, produção de curta-metragem, pesquisa em comunicação estratégica.",
  },
];

const Curriculo = () => {
  return (
    <PageLayout
      eyebrow="02 — Currículo"
      title="Experiência"
      subtitle="Do briefing à entrega — estratégia e execução em comunicação."
    >

      {/* ── GDF ── */}
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
                <GdfLogo />
              </motion.div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="font-display text-[clamp(2rem,5vw,5rem)] leading-[0.88] tracking-[0.02em]">
                    Vice-Governadoria do DF
                  </h2>
                  <span className="text-[0.6rem] tracking-[0.18em] uppercase bg-primary/20 text-primary border border-primary/30 px-2.5 py-1 rounded-sm self-center">
                    Atual
                  </span>
                </div>
                <p className="text-[0.85rem] text-muted-foreground tracking-[0.04em]">
                  Diretor de Arte / Designer · Assessoria de Comunicação — Palácio do Buriti
                </p>
              </div>
            </div>
            <div className="text-left md:text-right flex-shrink-0">
              <p className="font-serif italic text-[1.05rem] text-warm">2026 — atual</p>
              <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-0.5">Brasília, DF</p>
            </div>
          </div>

          <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-6">
            Atuação na Assessoria de Comunicação da Vice-Governadoria do Distrito Federal junto à então
            Vice-Governadora Celina Leão, hoje Governadora do DF. Criação de peças para redes sociais —
            feed, story e materiais institucionais. Desenvolveu a logo da Vice-Governadoria (VGDF) a
            partir da nova identidade visual do GDF, adaptando paleta, elementos e aplicações para o
            contexto da assessoria.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Direção de Arte", "Identidade Visual", "Social Media", "Comunicação Gov."].map((tag) => (
              <span key={tag} className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
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
              <p className="font-serif italic text-[1.05rem] text-warm">2024 — 2026</p>
              <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-0.5">Brasília, DF</p>
            </div>
          </div>

          {/* Sub-case 01 */}
          <div className="mb-14">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-serif italic text-primary text-[0.85rem]">01</span>
              <h4 className="font-display text-[1.6rem] tracking-[0.04em]">Publicidade Externa offline e online</h4>
            </div>
            <p className="text-[0.86rem] leading-[1.8] text-muted-foreground max-w-[680px] mb-5">
              Criação de peças para canais externos — posts, stories, banners — e ativação de marca
              offline. Do briefing à entrega, identidade visual da maior telecom do Brasil.
            </p>
            <a
              href="https://caio-portifolio.my.canva.site/vivo"
              target="_blank"
              rel="noopener noreferrer"
              className="img-frame block"
            >
              <img src={workVivo} alt="Trabalho VIVO - Social Media" className="art aspect-video" />
            </a>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Social Media", "Copywriting", "Design", "Instagram"].map((tag) => (
                <span key={tag} className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sub-case 02 */}
          <div className="mb-6">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-serif italic text-primary text-[0.85rem]">02</span>
              <h4 className="font-display text-[1.6rem] tracking-[0.04em]">Endomarketing & Identidade Interna</h4>
            </div>
            <p className="text-[0.86rem] leading-[1.8] text-muted-foreground max-w-[680px] mb-5">
              Logos para times regionais, peças de endomarketing, design de uniformes e infográficos
              institucionais para engajamento de colaboradores.
            </p>
            <a
              href="https://caio-portifolio.my.canva.site/vivo"
              target="_blank"
              rel="noopener noreferrer"
              className="img-frame block"
            >
              <img src={workVivo2} alt="VIVO - Endomarketing" className="art aspect-video" />
            </a>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Endomarketing", "Branding", "Identidade Visual", "Infográficos"].map((tag) => (
                <span key={tag} className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
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
              <p className="font-serif italic text-[1.05rem] text-warm">2023 — 2024</p>
              <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-0.5">Brasília, DF</p>
            </div>
          </div>

          {/* Sub-case 01 */}
          <div className="mb-6">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-serif italic text-primary text-[0.85rem]">01</span>
              <h4 className="font-display text-[1.6rem] tracking-[0.04em]">Social media e endomarketing</h4>
            </div>
            <p className="text-[0.86rem] leading-[1.8] text-muted-foreground max-w-[680px] mb-5">
              Construí o perfil institucional do zero — identidade visual, tom de voz, calendário
              editorial e todos os formatos de conteúdo para vagas, cultura e posicionamento da marca.
              Datas comemorativas, comunicados internos e kit completo de mídia para colaboradores:
              assinatura de e-mail personalizada, crachá, thumbnail LinkedIn e fundo de tela.
            </p>
            <a
              href="https://caio-portifolio.my.canva.site/tarea"
              target="_blank"
              rel="noopener noreferrer"
              className="img-frame block"
            >
              <img src={workTarea} alt="Trabalho TAREA" className="art aspect-video" />
            </a>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Endomarketing", "Branding", "Kit de Mídia"].map((tag) => (
                <span key={tag} className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
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
            <div key={edu.org} className="flex flex-col md:flex-row md:justify-between gap-6">
              <div className="flex items-start gap-5">
                <div className="mt-1">{edu.logo}</div>
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
    </PageLayout>
  );
};

export default Curriculo;
