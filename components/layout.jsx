import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Loading Screen Component
export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-charcoal z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center">
        <motion.div
          className="inline-block rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-gold mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <p className="text-accent-gold font-inter font-light">Loading Portfolio...</p>
      </div>
    </motion.div>
  );
}

// Navigation Component
export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-40 glass-morphism transition-all duration-300 ${scrolled ? "bg-opacity-40" : "bg-opacity-70"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <img src="Logo Navbar.png" alt="Logo" style={{height:"100px", width:"120px"}}/>
          <div className="boxed-menu-wrapper navbar-menu-desktop">
            {['Home', 'About', 'Projects',].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="boxed-nav-item"
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
          
        </div>
      </div>
      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden glass-morphism ${mobileMenuOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, height: mobileMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-4 flex flex-col items-center gap-2">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => scrollToSection(item.toLowerCase())}
              className="nav-link w-full text-center"
              style={{ padding: 0, boxShadow: "none" }}
            >
              {item}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}

// Footer Component
export function Footer() {
  return (
    <motion.footer
      className="py-8 lg:px-8 border-t border-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
  <div className="mx-auto text-center flex-col ">
        <p className="text-gray-400 font-source"></p>
        <p className="text-gray-500 text-sm">Interested in collaborating on digital solutions or data analytics? Let's connect and discuss your next strategic idea! </p>
      </div>
    </motion.footer>
  );
}

