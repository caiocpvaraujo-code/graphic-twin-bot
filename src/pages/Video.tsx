import PageLayout from "@/components/PageLayout";
import FadeIn from "@/components/FadeIn";
import workFreela1 from "@/assets/work-freela-1.jpg";
import workFreela3 from "@/assets/work-freela-3.jpg";
import videoRedesSociais from "@/assets/video-redes-sociais.jpeg";

const Video = () => {
  return (
    <PageLayout
      eyebrow="06 — Edição de Vídeo"
      title="Vídeo"
      subtitle="Do roteiro ao corte final — narrativa, ritmo e impacto emocional."
    >
      <div className="space-y-20">

        {/* Case 01 — Vídeos Cinematográficos */}
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-border pb-7 mb-10">
            <div>
              <h2 className="font-display text-[clamp(2.5rem,6vw,7rem)] leading-[0.88]">
                Vídeos Cinematográficos
              </h2>
              <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-1.5">
                Curta-metragem · Narrativa visual · Direção de cena
              </p>
            </div>
          </div>
          <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-8">
            Cada cena conta uma história antes de qualquer palavra. A cinematografia não é apenas
            técnica — é ponto de vista, é luz escolhida, é silêncio editado no lugar certo.
            Do curta "Luz da Meia Noite" (12 min, UnB) ao vídeo motivacional do KickOff 2024,
            o trabalho começa no roteiro e termina no color grading: construção de tensão,
            transições orgânicas e unidade visual que fazem o espectador sentir antes de pensar.
          </p>
          <a
            href="https://caio-portifolio.my.canva.site/freela-1"
            target="_blank"
            rel="noopener noreferrer"
            className="img-frame block aspect-video mb-4"
          >
            <img src={workFreela1} alt="Vídeos Cinematográficos" className="art w-full h-full object-cover" />
          </a>
          <div className="flex flex-wrap gap-2">
            {["Edição", "Color Grading", "Premiere Pro", "Curta-metragem", "Storytelling"].map((tag) => (
              <span key={tag} className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Case 02 — Live Stream */}
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
          <a
            href="https://caio-portifolio.my.canva.site/freela-2"
            target="_blank"
            rel="noopener noreferrer"
            className="img-frame block aspect-video mb-4"
          >
            <img src={workFreela3} alt="Transmissão ao Vivo" className="art w-full h-full object-cover" />
          </a>
          <div className="flex flex-wrap gap-2">
            {["Live Streaming", "OBS Studio", "StreamYard", "Direção Técnica", "Som e Luz"].map((tag) => (
              <span key={tag} className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Case 03 — Redes Sociais */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-border pb-7 mb-10">
            <div>
              <h2 className="font-display text-[clamp(2.5rem,6vw,7rem)] leading-[0.88]">
                Redes Sociais
              </h2>
              <p className="text-[0.8rem] text-muted-foreground tracking-[0.06em] mt-1.5">
                CapCut Pro · Reels · Conteúdo dinâmico
              </p>
            </div>
          </div>
          <p className="text-[0.9rem] leading-[1.9] text-warm max-w-[720px] mb-8">
            Vídeo nas redes não tem pausa. Os primeiros três segundos definem tudo — e é aí
            que entra o corte certeiro, a trilha que bate junto com a virada de cena e o texto
            que aparece no momento exato. Edição no CapCut Pro com foco em ritmo, engajamento
            e identidade visual: Reels, TikToks e conteúdo para Stories que param o scroll.
            Cada transição tem motivo. Cada corte tem intenção.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1rfZfoMhUr2QhpgjHAUXOGXVlk7IfSaDT?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="img-frame block aspect-video mb-4 overflow-hidden"
          >
            <img
              src={videoRedesSociais}
              alt="Edição de vídeo para Redes Sociais — CapCut"
              className="art w-full h-full object-cover"
            />
          </a>
          <div className="flex flex-wrap gap-2">
            {["CapCut Pro", "Reels", "TikTok", "Edição Mobile", "Conteúdo Digital"].map((tag) => (
              <span key={tag} className="bg-primary/10 border border-primary/20 text-amber text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

      </div>
    </PageLayout>
  );
};

export default Video;
