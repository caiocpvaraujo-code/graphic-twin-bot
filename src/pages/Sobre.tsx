import PageLayout from "@/components/PageLayout";
import FadeIn from "@/components/FadeIn";
import aboutPhoto from "@/assets/about-photo.jpg";

const Sobre = () => {
  return (
    <PageLayout
      eyebrow="01 — Sobre"
      title="Quem é Caio?"
      subtitle="Publicidade que faz sentido. Criatividade com propósito."
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-[100px] items-start">
        {/* Photo */}
        <FadeIn className="relative">
          <div className="relative inline-block w-full">
            <img
              src={aboutPhoto}
              alt="Caio Vinícios"
              className="w-full aspect-[3/4] object-cover object-top grayscale-[10%] contrast-[1.08]"
            />
            <div className="absolute top-4 left-4 right-[-16px] bottom-[-16px] border border-border z-[-1]" />
          </div>
        </FadeIn>

        {/* Text */}
        <div className="space-y-8">
          <FadeIn>
            <div className="space-y-5">
              <p className="text-base leading-[1.9] text-warm">
                Formado em{" "}
                <strong className="text-foreground font-medium">
                  Publicidade e Propaganda na UnB
                </strong>
                , apaixonado por comunicação que faz sentido. De social media a
                endomarketing, de copywriting a edição de vídeo — meu trabalho vive na
                interseção entre{" "}
                <strong className="text-foreground font-medium">estratégia e criatividade</strong>.
              </p>
              <p className="text-base leading-[1.9] text-warm">
                Passei pela{" "}
                <strong className="text-foreground font-medium">VIVO</strong> e pela{" "}
                <strong className="text-foreground font-medium">Tarea Management</strong>,
                onde transformei briefings em peças que engajam, convertem e constroem marca.
                Hoje atuo como{" "}
                <strong className="text-foreground font-medium">
                  Diretor de Arte na Vice-Governadoria do Distrito Federal
                </strong>
                , criando comunicação institucional para o governo do DF.
              </p>
              <p className="text-base leading-[1.9] text-warm">
                Sou também{" "}
                <strong className="text-foreground font-medium">Mobile Creator e Storymaker</strong>{" "}
                — cubro eventos e produzo conteúdo audiovisual no iPhone 16 Pro Max com
                workflow profissional de captação, edição e publicação.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <blockquote className="font-serif italic text-[1.4rem] leading-[1.5] text-amber border-l-2 border-primary pl-7 my-8">
              "Acredito que a melhor comunicação é a que faz as pessoas sentirem antes de
              pensarem."
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-3 gap-0.5">
              {[
                { value: "4+", label: "Anos em Comunicação" },
                { value: "20+", label: "Projetos Entregues" },
                { value: "3", label: "Empresas" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-bg3 p-6 border border-transparent hover:border-border transition-colors duration-300"
                >
                  <span className="font-display text-[2.5rem] text-primary leading-none block">
                    {stat.value}
                  </span>
                  <span className="text-[0.65rem] tracking-[0.12em] uppercase text-muted-foreground mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="border-t border-border pt-8">
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Contato direto
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:caio-cpv.araujo@hotmail.com"
                  className="bg-primary text-primary-foreground px-7 py-3 text-[0.72rem] tracking-[0.14em] uppercase hover:bg-accent transition-colors duration-300"
                >
                  ✉ E-mail
                </a>
                <a
                  href="https://wa.me/5561982801908"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border text-warm px-7 py-3 text-[0.72rem] tracking-[0.14em] uppercase hover:border-primary hover:text-foreground transition-all duration-300"
                >
                  WhatsApp
                </a>
                <a
                  href="https://www.linkedin.com/in/caio-vin%C3%ADcios-de-ara%C3%BAjo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border text-warm px-7 py-3 text-[0.72rem] tracking-[0.14em] uppercase hover:border-primary hover:text-foreground transition-all duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageLayout>
  );
};

export default Sobre;
