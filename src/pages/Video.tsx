import PageLayout from "@/components/PageLayout";
import FadeIn from "@/components/FadeIn";
import workFreela1 from "@/assets/work-freela-1.jpg";
import workFreela3 from "@/assets/work-freela-3.jpg";

const Video = () => {
  return (
    <PageLayout
      eyebrow="06 — Edição de Vídeo"
      title="Vídeo"
      subtitle="Do roteiro ao corte final — narrativa, ritmo e impacto emocional."
    >
      <div className="space-y-20">
        {/* Case 01 — Curta Luz da Meia Noite */}
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-border pb-7 mb-10">
            <div>
              <h2 className="font-display text-[clamp(2.5rem,6vw,7rem)] leading-[0.88]">
                Luz da Meia Noite
              </h2>
              <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-1.5">
                Curta-metragem · 12 minutos · UnB
              </p>
            </div>
          </div>
          <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-8">
            Edição de curta-metragem de 12 minutos produzido na UnB. Montagem com atenção a
            ritmo narrativo, transições orgânicas e construção de tensão dramática. Uso de
            color grading para unidade visual entre cenas.
          </p>
          <div className="img-frame aspect-video mb-4">
            <img src={workFreela1} alt="Luz da Meia Noite" className="art w-full h-full object-cover" />
          </div>
          <div className="flex flex-wrap gap-2">
            {["Edição", "Color Grading", "Premiere Pro", "Curta-metragem"].map((tag) => (
              <span key={tag} className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Case 02 — Transmissão ao Vivo */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-border pb-7 mb-10">
            <div>
              <h2 className="font-display text-[clamp(2.5rem,6vw,7rem)] leading-[0.88]">
                Live Streaming
              </h2>
              <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-1.5">
                Transmissão ao vivo · OBS · StreamYard
              </p>
            </div>
          </div>
          <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-8">
            Estruturei transmissões do zero: câmera, switcher, OBS/StreamYard, mesa de som e
            iluminação. Do talk show "Culto On Us" a eventos completos ao vivo — direção técnica
            e criativa de ponta a ponta.
          </p>
          <div className="img-frame aspect-video mb-4">
            <img src={workFreela3} alt="Transmissão ao Vivo" className="art w-full h-full object-cover" />
          </div>
          <div className="flex flex-wrap gap-2">
            {["Live Streaming", "OBS Studio", "StreamYard", "Direção Técnica", "Som e Luz"].map((tag) => (
              <span key={tag} className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Coming Soon */}
        <FadeIn>
          <div className="border border-border p-10 text-center">
            <p className="text-[0.65rem] tracking-[0.22em] uppercase text-muted-foreground mb-3">Em construção</p>
            <p className="font-serif italic text-[1.1rem] text-warm">
              Reels, motion e vídeo motivacional KickOff 2024 chegando em breve.
            </p>
          </div>
        </FadeIn>
      </div>
    </PageLayout>
  );
};

export default Video;
