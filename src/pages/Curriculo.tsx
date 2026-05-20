import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import FadeIn from "@/components/FadeIn";

const experiences = [
  {
    org: "Vice-Governadoria do DF",
    role: "Diretor de Arte / Designer",
    context: "Assessoria de Comunicação — Palácio do Buriti",
    period: "2026 — atual",
    location: "Brasília, DF",
    badge: "Atual",
    description:
      "Atuação na Assessoria de Comunicação da Vice-Governadoria do Distrito Federal junto à então Vice-Governadora Celina Leão, hoje Governadora do DF. Criação de peças para redes sociais — feed, story e materiais institucionais. Desenvolveu a logo da Vice-Governadoria (VGDF) a partir da nova identidade visual do GDF, adaptando paleta, elementos e aplicações para o contexto da assessoria.",
    tags: ["Direção de Arte", "Identidade Visual", "Social Media", "Comunicação Gov."],
  },
  {
    org: "VIVO",
    role: "Estágio em Marketing & Comunicação",
    context: "Telefónica Brasil",
    period: "2024 — 2026",
    location: "Brasília, DF",
    badge: null,
    description:
      "Criação de peças para canais externos — posts, stories, banners — e ativação de marca offline. Do briefing à entrega, trabalhando com a identidade visual da maior telecom do Brasil. Também responsável por logos para times regionais, peças de endomarketing, design de uniformes e infográficos institucionais.",
    tags: ["Social Media", "Copywriting", "Design", "Endomarketing"],
  },
  {
    org: "Tarea Management",
    role: "Estágio em Marketing",
    context: "Tarea Management",
    period: "2023 — 2024",
    location: "Brasília, DF",
    badge: null,
    description:
      "Construí o perfil institucional do zero — identidade visual, tom de voz, calendário editorial e todos os formatos de conteúdo para vagas, cultura e posicionamento da marca. Kit completo de mídia para colaboradores: assinatura de e-mail, crachá, thumbnail LinkedIn e fundo de tela.",
    tags: ["Branding", "Social Media", "Endomarketing", "Kit de Mídia"],
  },
];

const education = [
  {
    org: "Universidade de Brasília — UnB",
    course: "Publicidade e Propaganda",
    period: "2021 — 2025",
    detail: "Centro de Excelência em Comunicação. Coordenação de cobertura audiovisual de eventos, produção de curta-metragem, pesquisa em comunicação estratégica.",
  },
];

const Curriculo = () => {
  return (
    <PageLayout
      eyebrow="02 — Currículo"
      title="Experiência"
      subtitle="Do briefing à entrega — estratégia e execução em comunicação."
    >
      {/* Experiences */}
      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <FadeIn key={exp.org} delay={i * 0.1}>
            <div className="py-14 border-b border-border last:border-b-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.88] tracking-[0.02em]">
                      {exp.org}
                    </h2>
                    {exp.badge && (
                      <span className="text-[0.6rem] tracking-[0.18em] uppercase bg-primary/20 text-primary border border-primary/30 px-2.5 py-1 rounded-sm self-center">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[0.85rem] text-muted-foreground tracking-[0.04em]">
                    {exp.role} · {exp.context}
                  </p>
                </div>
                <div className="text-left md:text-right flex-shrink-0">
                  <p className="font-serif italic text-[1.05rem] text-warm">{exp.period}</p>
                  <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-0.5">
                    {exp.location}
                  </p>
                </div>
              </div>

              <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Education */}
      <FadeIn>
        <div className="mt-20 pt-16 border-t border-border">
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-primary flex items-center gap-2.5 mb-10">
            <span className="w-6 h-px bg-primary inline-block" />
            Formação
          </p>
          {education.map((edu) => (
            <div key={edu.org} className="flex flex-col md:flex-row md:justify-between gap-4">
              <div>
                <h3 className="font-display text-[2rem] tracking-[0.04em]">{edu.org}</h3>
                <p className="text-[0.85rem] text-muted-foreground mt-1">{edu.course}</p>
                <p className="text-[0.85rem] leading-[1.8] text-warm mt-3 max-w-[560px]">{edu.detail}</p>
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
