import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

const PageLayout = ({ children, eyebrow, title, subtitle }: PageLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="pt-[100px] min-h-screen">
        {/* Page Header */}
        <div className="px-7 md:px-[60px] pt-16 pb-12 max-w-[1300px] mx-auto border-b border-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.18em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 mb-8 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
              Voltar
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.65rem] tracking-[0.22em] uppercase text-primary flex items-center gap-2.5 mb-5"
          >
            <span className="w-6 h-px bg-primary inline-block" />
            {eyebrow || "Portfólio"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(4rem,10vw,10rem)] leading-[0.88] tracking-[0.01em]"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif italic text-[1.2rem] text-warm mt-6 max-w-[560px]"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Page Content */}
        <div className="px-7 md:px-[60px] py-16 max-w-[1300px] mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
