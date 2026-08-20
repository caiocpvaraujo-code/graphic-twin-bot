import PageLayout from "@/components/PageLayout";
import FadeIn from "@/components/FadeIn";
import aboutPhoto from "@/assets/about-photo.jpg";

const Sobre = () => {
  return (
    <PageLayout
      eyebrow="01 · Sobre"
      title="Quem é Caio?"
      subtitle="Redator e diretor de arte. Escrevo, dirijo e edito. Geralmente a mesma peça."
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
                Formando em{" "}
                <strong className="text-foreground font-medium">
                  Publicidade e Propaganda na UnB
                </strong>
                , nascido no meio do caminho entre a redação e a direção de arte. Nunca
                consegui escolher um lado, e virou vantagem: entrego{" "}
                <strong className="text-foreground font-medium">
                  o conceito e também a peça pronta
                </strong>{" "}
                no mesmo pacote.
              </p>
              <p className="text-base leading-[1.9] text-warm">
                Hoje sou{" "}
                <strong className="text-foreground font-medium">
                  redator e copywriter na Incine Comunicação
                </strong>
                , atuando com três pré-candidatos do Distrito Federal: roteiro de vídeo e
                Reels, copy de carrossel, design das peças estáticas e edição de vídeos
                curtos com criação por IA.
              </p>
              <p className="text-base leading-[1.9] text-warm">
                Antes disso, na{" "}
                <strong className="text-foreground font-medium">
                  Vice-Governadoria do Distrito Federal
                </strong>
                , criei peças institucionais e desenvolvi a logo da VGDF a partir da nova
                identidade visual do GDF. Passei também pela{" "}
                <strong className="text-foreground font-medium">VIVO</strong>, onde
                participei da campanha "Coração do Brasil" com a Ana Castela, e pela{" "}
                <strong className="text-foreground font-medium">Tarea</strong>, com
                endomarketing e marca empregadora.
              </p>
              <p className="text-base leading-[1.9] text-warm">
                Produzo audiovisual{" "}
                <strong className="text-foreground font-medium">desde 2016</strong>.
                Comecei fazendo conteúdo curto no celular e nunca parei. Como voluntário no
                Jovens Líderes pela Paz, fiz criação e mídia num projeto que{" "}
                <strong className="text-foreground font-medium">
                  venceu o Prêmio LED, da TV Globo
                </strong>
                .
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <blockquote className="font-serif italic text-[1.4rem] leading-[1.5] text-amber border-l-2 border-primary pl-7 my-8">
              "Inspiração sem pesquisa é palpite. Pesquisa sem inspiração é planilha. Meu
              eureka acontece quando os dois param de brigar."
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-3 gap-0.5">
              {[
                { value: "10", label: "Anos em Audiovisual" },
                { value: "20+", label: "Projetos Entregues" },
                { value: "5", label: "Empresas" },
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
