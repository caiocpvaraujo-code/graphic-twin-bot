import { useEffect, useState } from "react";

const Navbar = () => {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[500] px-6 md:px-14 h-[72px] flex items-center justify-between transition-all duration-[400ms] ${
        solid ? "bg-background/[0.92] backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <a href="#" className="font-serif text-[1.1rem] italic text-foreground tracking-[0.04em]">
        Caio <b className="not-italic text-primary font-semibold">Vinícios</b>
      </a>
      <ul className="hidden md:flex gap-9 list-none">
        {["Sobre", "Trabalhos", "Habilidades", "Contato"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground text-[0.72rem] tracking-[0.18em] uppercase hover:text-foreground transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contato"
        className="hidden md:inline-block bg-primary text-primary-foreground px-6 py-2.5 text-[0.72rem] tracking-[0.14em] uppercase hover:bg-accent transition-colors duration-300"
      >
        Fale comigo
      </a>
    </nav>
  );
};

export default Navbar;
