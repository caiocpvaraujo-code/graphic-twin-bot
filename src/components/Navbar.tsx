import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SECTIONS = ["Sobre", "Trabalhos", "Habilidades", "Contato"];

const Navbar = () => {
  const [solid, setSolid] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Na home o link é âncora normal.
  // Em subpáginas vira "/#secao": volta pra home e desce até a seção.
  const sectionHref = (item: string) =>
    isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`;

  return (
    <nav
      className={`fixed top-0 w-full z-[500] px-6 md:px-14 h-[72px] flex items-center justify-between transition-all duration-[400ms] ${
        solid ? "bg-background/[0.92] backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <Link
        to="/"
        onClick={() => {
          if (isHome) window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        aria-label="Voltar para a página inicial"
        className="font-serif text-[1.1rem] italic text-foreground tracking-[0.04em] cursor-pointer hover:text-primary transition-colors duration-300"
      >
        Caio <b className="not-italic text-primary font-semibold">Vinícios</b>
      </Link>

      <ul className="hidden md:flex gap-9 list-none">
        {SECTIONS.map((item) => (
          <li key={item}>
            <a
              href={sectionHref(item)}
              className="text-muted-foreground text-[0.72rem] tracking-[0.18em] uppercase hover:text-foreground transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={isHome ? "#contato" : "/#contato"}
        className="hidden md:inline-block bg-primary text-primary-foreground px-6 py-2.5 text-[0.72rem] tracking-[0.14em] uppercase hover:bg-accent transition-colors duration-300"
      >
        Fale comigo
      </a>
    </nav>
  );
};

export default Navbar;
