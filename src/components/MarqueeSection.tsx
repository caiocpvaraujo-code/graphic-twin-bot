const items = [
  "Social Media", "Copywriting", "Direção Criativa", "marketing",
  "Redação publicitária", "MOBILE CREATOR", "STORYMAKER", "Identidade Visual",
];

const MarqueeSection = () => {
  return (
    <div className="overflow-hidden border-y border-border py-[18px] bg-bg2">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-8 font-display text-[1.1rem] tracking-[0.1em] text-muted-foreground"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;
