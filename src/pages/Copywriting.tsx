import PageLayout from "@/components/PageLayout";
import FadeIn from "@/components/FadeIn";

const Copywriting = () => {
  return (
    <PageLayout
      eyebrow="04 — Copywriting"
      title="Redação"
      subtitle="Texto que convence, engaja e constrói marca."
    >
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

      <FadeIn delay={0.1}>
        <div className="border border-border p-10 text-center">
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-muted-foreground mb-3">
            Em construção
          </p>
          <p className="font-serif italic text-[1.1rem] text-warm">
            Cases de copywriting com exemplos reais chegando em breve.
          </p>
        </div>
      </FadeIn>
    </PageLayout>
  );
};

export default Copywriting;
