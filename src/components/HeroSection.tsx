import FadeIn from "./FadeIn";
import heroPhoto from "@/assets/hero-photo.jpg";

const chips = ["Social Media", "Copywriting", "Design", "EDIÇÃO DE VÍDEO", "Endomarketing", "Mobile Creator"];

const HeroSection = () => {
  return (
    <section className="min-h-[55vh] md:min-h-[60vh] grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
      <div className="flex flex-col justify-end p-[100px_28px_40px] md:p-[120px_60px_48px] relative z-[2]">
        <FadeIn>
          <p className="text-[0.68rem] tracking-[0.22em] uppercase text-primary mb-7 flex items-center gap-3">SEU PRÓXIMO PUBLICITÁRIO
            <span className="w-8 h-px bg-primary inline-block" />
            Publicidade · UnB · Brasília
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-display text-[clamp(4.5rem,9vw,11rem)] leading-[0.88] tracking-[0.01em] mb-10">
            A arte<br />
            de <span className="text-outline">conectar</span><br />
            <span className="text-primary">ideias</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="font-serif italic text-[1.25rem] text-warm leading-relaxed max-w-[380px] mb-12">
            Comunicação que transforma.<br />
            Criatividade que conecta.<br />
            Impacto que permanece.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap gap-2.5">
            {chips.map((chip) =>
            <span
              key={chip}
              className="chip border border-border px-[18px] py-[7px] rounded-full text-[0.68rem] tracking-[0.12em] uppercase text-muted-foreground hover:border-primary hover:text-foreground transition-all duration-300 cursor-default">
              
                {chip}
              </span>
            )}
          </div>
        </FadeIn>
      </div>
      <div className="relative overflow-hidden h-[50vh] md:h-auto">
        <img
          src={heroPhoto}
          alt="Caio Vinícios"
          className="w-full h-full object-cover object-top brightness-[0.92] contrast-[1.08] grayscale-[15%]" />
        
        <div
          className="absolute inset-0"
          style={{
            background:
            "linear-gradient(to right, hsl(var(--background)) 0%, transparent 30%), linear-gradient(to top, hsl(var(--background)) 0%, transparent 25%)"
          }} />
        
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 z-[3] opacity-60">
        <span className="text-[0.6rem] tracking-[0.22em] uppercase text-muted-foreground">Scroll</span>
        <div
          className="w-px h-14"
          style={{
            background: "linear-gradient(hsl(var(--terra)), transparent)",
            animation: "scrollPulse 2.2s infinite"
          }} />
        
      </div>
    </section>);

};

export default HeroSection;