import FadeIn from "./FadeIn";
import aboutPhoto from "@/assets/about-photo.jpg";

const stats = [
{ value: "4+", label: "Anos em Comunicação" },
{ value: "20+", label: "Projetos Entregues" },
{ value: "2", label: "Empresas" }];


const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-40 px-7 md:px-[60px]">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-[120px] items-start">
        <FadeIn className="relative">
          <div className="relative inline-block w-full">
            <img
              src={aboutPhoto}
              alt="Caio Vinícios"
              className="w-full aspect-[3/4] object-cover object-top grayscale-[10%] contrast-[1.08]" />
            
            <div className="absolute top-4 left-4 right-[-16px] bottom-[-16px] border border-border z-[-1]" />
          </div>
        </FadeIn>

        <div>
          <FadeIn>
            <p className="text-[0.65rem] tracking-[0.22em] uppercase text-primary mb-5 flex items-center gap-2.5">
              <span className="w-6 h-px bg-primary inline-block" />
              01 — Sobre
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-[clamp(3rem,6vw,6rem)] leading-[0.9] tracking-[0.02em] mb-12">
              Quem é<br />Caio?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-5">
              <p className="text-base leading-[1.9] text-warm">Formado em Publicidade e Propaganda na UnB, apaixonado por comunicação que faz sentido. De social media ao marketing, da redação publicitária a edição de vídeo — meu trabalho vive na interseção entre estratégia e criatividade.
                <strong className="text-foreground font-medium">Publicidade e Propaganda na UnB</strong>, 
                apaixonado por comunicação que faz sentido. De social media a endomarketing, de copywriting a edição de vídeo — 
                meu trabalho vive na interseção entre <strong className="text-foreground font-medium">estratégia e criatividade</strong>.
              </p>
              <p className="text-base leading-[1.9] text-warm">Passei pela VIVO e pela Tarea Management, onde transformei briefings em peças que engajam, convertem e impactam.
                <strong className="text-foreground font-medium">VIVO</strong> e pela <strong className="text-foreground font-medium">Tarea Management</strong>, 
                onde transformei briefings em peças que engajam, convertem e constroem marca.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <blockquote className="font-serif italic text-[1.55rem] leading-[1.5] text-amber border-l-2 border-primary pl-7 my-11">
              "Acredito que a melhor comunicação é a que faz as pessoas sentirem antes de pensarem."
            </blockquote>
          </FadeIn>
          <FadeIn delay={0.35}>
            <div className="grid grid-cols-3 gap-0.5 mt-12">
              {stats.map((stat) =>
              <div
                key={stat.label}
                className="bg-bg3 p-7 border border-transparent hover:border-border transition-colors duration-300">
                
                  <span className="font-display text-[3rem] text-primary leading-none block">{stat.value}</span>
                  <span className="text-[0.68rem] tracking-[0.12em] uppercase text-muted-foreground mt-1 block">
                    {stat.label}
                  </span>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>);

};

export default AboutSection;