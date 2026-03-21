import FadeIn from "./FadeIn";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 md:py-40 px-7 text-center relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 80% at 50% 50%, hsla(var(--terra) / 0.07) 0%, transparent 65%)"
        }} />
      
      <div className="relative">
        <FadeIn>
          <h2 className="font-display text-[clamp(4rem,12vw,13rem)] leading-[0.88] mb-9">
            <span>Vamos</span><br />
            <span className="text-outline">criar</span><br />
            <span>juntos?</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="font-serif italic text-[1.3rem] text-warm max-w-[480px] mx-auto mb-16">Aberto a projetos, freelas, trainee e oportunidades.
Se tem um desafio criativo, me conta.<br />
            Se tem um desafio criativo, me conta.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex justify-center gap-5 flex-wrap">
            <a
              href="mailto:caio.araujo@tarea.com.br"
              className="bg-primary text-primary-foreground px-11 py-4 text-[0.75rem] tracking-[0.15em] uppercase inline-flex items-center gap-2.5 hover:bg-accent hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.97]">
              
              ✉ Enviar e-mail
            </a>
            <a
              href="https://www.linkedin.com/in/caio-vinicios"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border text-warm px-9 py-4 text-[0.75rem] tracking-[0.15em] uppercase hover:border-primary hover:text-foreground hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.97]">
              
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/caio.vinicios"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border text-warm px-9 py-4 text-[0.75rem] tracking-[0.15em] uppercase hover:border-primary hover:text-foreground hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.97]">WHATSAPP


            </a>
          </div>
        </FadeIn>
      </div>
    </section>);

};

export default ContactSection;