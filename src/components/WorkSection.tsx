import FadeIn from "./FadeIn";
import workVivo from "@/assets/work-vivo-1.jpg";
import workVivo2 from "@/assets/work-vivo-2.jpg";
import workTarea from "@/assets/work-tarea-1.jpg";
import workFreela1 from "@/assets/work-freela-1.jpg";
import workFreela2 from "@/assets/work-freela-2.jpg";
import workFreela3 from "@/assets/work-freela-3.jpg";
import workFreela4 from "@/assets/work-freela-4.jpg";

const WorkSection = () => {
  return (
    <section id="trabalhos" className="pt-20 md:pt-[120px]">
      {/* Section title */}
      <div className="px-7 md:px-[60px] pb-16 flex items-baseline gap-6 max-w-[1300px] mx-auto">
        <p className="text-[0.65rem] tracking-[0.22em] uppercase text-primary flex items-center gap-2.5 whitespace-nowrap">
          <span className="w-6 h-px bg-primary inline-block" />
          02 · Trabalhos
        </p>
        <FadeIn>
          <h2 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.9]">Portifólio</h2>
        </FadeIn>
        <div className="flex-1 h-px bg-border mb-1.5 hidden md:block" />
      </div>

      {/* VIVO */}
      <div className="px-7 md:px-[60px] pb-20 md:pb-[120px] max-w-[1300px] mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-border pb-7 mb-16">
            <div>
              <h3 className="font-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.88] text-foreground">VIVO</h3>
              <div className="mt-1.5">
                <span className="text-[0.8rem] text-muted-foreground tracking-[0.06em]">Telefónica Brasil · Estágio em Marketing & Comunicação

                </span>
              </div>
            </div>
            <div className="text-left md:text-right mt-4 md:mt-0">
              <span className="text-[0.8rem] text-muted-foreground tracking-[0.06em]">Brasília, DF

              </span>
              <p className="font-serif italic text-[1.05rem] text-warm mt-1">2024 - 2026</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-20">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-serif italic text-primary text-[0.85rem]">01</span>
              <h4 className="font-display text-[1.6rem] tracking-[0.04em]">Publicidade Externa offline e online</h4>
            </div>
            <p className="text-[0.86rem] leading-[1.8] text-muted-foreground max-w-[680px] mb-5">Criação de peças para canais externos (posts, stories, banners) e ativação de marca offline. Do briefing à entrega, identidade visual da maior telecom do Brasil.

            </p>
            <a href="https://caio-portifolio.my.canva.site/vivo" target="_blank" rel="noopener noreferrer" className="img-frame block">
              {/* TODO: substituir href="#" pelo link real do projeto */}
              <img src={workVivo} alt="Trabalho VIVO - Social Media" className="art aspect-video" />
            </a>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Social Media", "Copywriting", "Design", "Instagram"].map((tag) => <span key={tag}
              className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                  
                  {tag}
                </span>
              )}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mb-20">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-serif italic text-primary text-[0.85rem]">02</span>
              <h4 className="font-display text-[1.6rem] tracking-[0.04em]">Endomarketing & Identidade Interna</h4>
            </div>
            <p className="text-[0.86rem] leading-[1.8] text-muted-foreground max-w-[680px] mb-5">
              Logos para times regionais, peças de endomarketing, design de uniformes e infográficos institucionais para engajamento de colaboradores.
            </p>
            <a href="https://caio-portifolio.my.canva.site/vivo" target="_blank" rel="noopener noreferrer" className="img-frame block">
              {/* TODO: substituir href="#" pelo link real do projeto */}
              <img src={workVivo2} alt="VIVO - Endomarketing" className="art aspect-video" />
            </a>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Endomarketing", "Branding", "Identidade Visual", "Infográficos"].map((tag) => <span key={tag}
              className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                  {tag}
                </span>
              )}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* TAREA */}
      <div className="px-7 md:px-[60px] pb-20 md:pb-[120px] max-w-[1300px] mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-border pb-7 mb-16">
            <div>
              <h3 className="font-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.88] text-foreground">TAREA</h3>
              <div className="mt-1.5">
                <span className="text-[0.8rem] text-muted-foreground tracking-[0.06em]">
                  Tarea Management · Estágio em Marketing
                </span>
              </div>
            </div>
            <div className="text-left md:text-right mt-4 md:mt-0">
              <span className="text-[0.8rem] text-muted-foreground tracking-[0.06em]">Brasília, DF</span>
              <p className="font-serif italic text-[1.05rem] text-warm mt-1">2023 - 2024</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-20">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-serif italic text-primary text-[0.85rem]">01</span>
              <h4 className="font-display text-[1.6rem] tracking-[0.04em]">Social media e endomarketing</h4>
            </div>
            <p className="text-[0.86rem] leading-[1.8] text-muted-foreground max-w-[680px] mb-5">Construí o perfil institucional do zero: identidade visual, tom de voz, calendário editorial e todos os formatos de conteúdo para vagas, cultura e posicionamento da marca. Datas comemorativas, comunicados internos e kit completo de mídia para colaboradores: assinatura de e-mail personalizada, crachá, thumbnail LinkedIn e fundo de tela.

            </p>
            <a href="https://caio-portifolio.my.canva.site/tarea" target="_blank" rel="noopener noreferrer" className="img-frame block">
              {/* TODO: substituir href="#" pelo link real do projeto */}
              <img src={workTarea} alt="Trabalho TAREA" className="art aspect-video" />
            </a>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Endomarketing", "Branding", "Kit de Mídia"].map((tag) => <span
                key={tag}
                className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                
                  {tag}
                </span>
              )}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Freelance */}
      <div className="bg-bg2 py-20 md:py-[120px]">
        <div className="px-7 md:px-[60px] pb-16 flex items-baseline gap-6 max-w-[1300px] mx-auto">
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-primary flex items-center gap-2.5 whitespace-nowrap">
            <span className="w-6 h-px bg-primary inline-block" />
            03 · Freelance
          </p>
          <FadeIn>
            <h2 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.9]">Projetos</h2>
          </FadeIn>
          <div className="flex-1 h-px bg-border mb-1.5 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 px-7 md:px-[60px] max-w-[1300px] mx-auto">
          {[
          {
            img: workFreela1,
            num: "01",
            title: "editor de vídeo",
            desc: "Do curta \"Luz da Meia Noite\" (12min, UnB) ao vídeo motivacional do KickOff 2024. Storytelling audiovisual com narrativa, ritmo e impacto emocional.",
            link: "https://caio-portifolio.my.canva.site/freela-1" // TODO: substituir pelo link real do projeto
          },
          {
            img: workFreela2,
            num: "02",
            title: "Identidade visual",
            desc: "Liderança criativa e identidade visual 2024 do Instituto Verbo da Vida Brasília Asa Sul: conceito, paleta, tipografia e aplicações para o movimento jovem.",
            link: "https://www.canva.com/design/DAHEnmL5UHE/ptT6InKZA5p6f_cV6VOBbw/view?utm_content=DAHEnmL5UHE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he5ec969b8c" // TODO: substituir pelo link real do projeto
          },
          {
            img: workFreela3,
            num: "03",
            title: "Transmissão ao Vivo",
            desc: "Estruturei transmissões do zero: câmera, switcher, OBS/StreamYard, mesa de som e luz. Do talk show \"Culto On Us\" a eventos completos ao vivo.",
            link: "https://caio-portifolio.my.canva.site/freela-2" // TODO: substituir pelo link real do projeto
          },
          {
            img: workFreela4,
            num: "04",
            title: "Storymaker & Mobile Creator",
            desc: "Coordenei a cobertura do maior evento de publicidade da história da UnB. Planejamento, roteiros, manual de cobertura e templates. iPhone 16 Pro Max + CapCut Pro.",
            link: "https://www.canva.com/design/DAHEnkRvV7c/JJfE0xnkCWQhrCER3oxTpQ/view?utm_content=DAHEnkRvV7c&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=haefa44b335" // TODO: substituir pelo link real do projeto
          }].
          map((project) =>
          <FadeIn key={project.num}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="freela-card bg-bg3 overflow-hidden border border-transparent hover:border-border transition-colors duration-300 group block">
                <div className="overflow-hidden">
                  <img
                  src={project.img}
                  alt={project.title}
                  className="w-full aspect-video object-cover brightness-75 saturate-[0.8] group-hover:brightness-[0.9] group-hover:saturate-100 transition-all duration-500" />
                
                </div>
                <div className="p-8">
                  <span className="font-serif italic text-[2.8rem] text-primary/20 leading-none block mb-3.5">
                    {project.num}
                  </span>
                  <h4 className="font-display text-[1.55rem] tracking-[0.04em] mb-3">{project.title}</h4>
                  <p className="text-[0.84rem] leading-[1.78] text-muted-foreground group-hover:text-warm transition-colors">
                    {project.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-[18px] text-primary text-[0.72rem] tracking-[0.1em] uppercase hover:gap-3.5 transition-all duration-300">
                    Ver projeto →
                  </span>
                </div>
              </a>
            </FadeIn>
          )}
        </div>
      </div>
    </section>);

};

export default WorkSection;