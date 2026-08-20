import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

/* Sobre e Trabalhos viram rotas próprias.
   Habilidades e Contato continuam sendo seções da home. */
const NAV_ITEMS = [
  { label: "Sobre", kind: "route", target: "/sobre" },
  { label: "Trabalhos", kind: "route", target: "/curriculo" },
  { label: "Habilidades", kind: "anchor", target: "habilidades" },
  { label: "Contato", kind: "anchor", target: "contato" },
] as const;

const Navbar = () => {
  const [solid, setSolid] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const anchorHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  const linkClass =
    "text-muted-foreground text-[0.72rem] tracking-[0.18em] uppercase hover:text-foreground transition-colors duration-300";

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
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            {item.kind === "route" ? (
              <Link to={item.target} className={linkClass}>
                {item.label}
              </Link>
            ) : (
              <a href={anchorHref(item.target)} className={linkClass}>
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>

      <a
        href={anchorHref("contato")}
        className="hidden md:inline-block bg-primary text-primary-foreground px-6 py-2.5 text-[0.72rem] tracking-[0.14em] uppercase hover:bg-accent transition-colors duration-300"
      >
        Fale comigo
      </a>
    </nav>
  );
};

export default Navbar;
