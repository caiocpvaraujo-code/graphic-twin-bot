import PageLayout from "@/components/PageLayout";
import FadeIn from "@/components/FadeIn";
import workVivo1 from "@/assets/work-vivo-1.jpg";
import workTarea1 from "@/assets/work-tarea-1.jpg";
import gdfFeed1 from "@/assets/work-gdf-feed-1.jpg";
import gdfFeed2 from "@/assets/work-gdf-feed-2.jpg";

const SocialMedia = () => {
  return (
    <PageLayout
      eyebrow="07 — Social Media"
      title="Social Media"
      subtitle="Estratégia, calendário editorial e conteúdo que engaja."
    >
      <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mb-16">
          {[
            { label: "Plataformas", value: "Instagram · LinkedIn · Facebook" },
            { label: "Ferramentas", value: "Meta Ads · Google Ads · Canva Pro" },
            { label: "Especialidade", value: "Estratégia de conteúdo · Calendário editorial" },
          ].map((item) => (
            <div key={item.label} className="bg-bg3 border border-transparent p-7">
              <p className="text-[0.62rem] tracking-[0.18em] uppercase text-muted-foreground mb-1">{item.label}</p>
              <p className="text-[0.9rem] text-warm leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Brands */}
      <FadeIn delay={0.1}>
        <p className="text-[0.65rem] tracking-[0.22em] uppercase text-primary flex items-center gap-2.5 mb-8">
          <span className="w-6 h-px bg-primary inline-block" />
          Marcas que gerenciei
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 mb-16">
          {[
            {
              brand: "Vice-Governadoria do DF",
              img: gdfFeed1,
              desc: "Comunicação institucional do governo do DF. Feed informativo, stories e campanhas de pauta pública.",
            },
            {
              brand: "VIVO",
              img: workVivo1,
              desc: "Social media para a maior telecom do Brasil. Posts, stories, banners e ativações digitais.",
            },
            {
              brand: "Tarea Management",
              img: workTarea1,
              desc: "Construção do perfil do zero. Identidade visual, tom de voz e calendário editorial.",
            },
            {
              brand: "VGDF — Stories",
              img: gdfFeed2,
              desc: "Conteúdo de stories para a Vice-Governadoria — atualidades, pautas sociais e institucionais.",
            },
          ].map((item) => (
            <div key={item.brand} className="group">
              <div className="img-frame aspect-video mb-4">
                <img src={item.img} alt={item.brand} className="art w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-[1.4rem] tracking-[0.04em] mb-1">{item.brand}</h3>
              <p className="text-[0.82rem] text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn>
        <div className="border border-border p-10 text-center">
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-muted-foreground mb-3">Em construção</p>
          <p className="font-serif italic text-[1.1rem] text-warm">
            Cases completos com métricas e resultados chegando em breve.
          </p>
        </div>
      </FadeIn>
    </PageLayout>
  );
};

export default SocialMedia;
