import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          {isScrolled ? (
            <img 
              src="https://i.postimg.cc/m2KWhMHv/Logo-cadian-alta-vermelho.png" 
              alt="CADian Brasil" 
              className="h-8 transition-all duration-300"
            />
          ) : (
            <img 
              src="https://i.postimg.cc/HsdpdbbM/logo-cadian-branco.png" 
              alt="CADian Brasil" 
              className="h-8 transition-all duration-300"
            />
          )}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#economia" className={`font-semibold text-sm uppercase tracking-wider hover:text-cadian-orange transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>
            Economia
          </a>
          <a href="#comparativo" className={`font-semibold text-sm uppercase tracking-wider hover:text-cadian-orange transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>
            Comparativo
          </a>
          <a href="#tecnologia" className={`font-semibold text-sm uppercase tracking-wider hover:text-cadian-orange transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>
            Tecnologia
          </a>
          <a href="#clientes" className={`font-semibold text-sm uppercase tracking-wider hover:text-cadian-orange transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>
            Clientes
          </a>
          
          <motion.a
            href="#lead-capture"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-colors ${
              isScrolled 
                ? 'bg-cadian-orange text-white hover:bg-orange-500 shadow-md shadow-orange-500/20' 
                : 'bg-white text-cadian-red hover:bg-gray-100'
            }`}
          >
            TESTAR GRÁTIS
          </motion.a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col gap-4">
          <a href="#economia" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-gray-800 p-2 border-b border-gray-100">Economia</a>
          <a href="#comparativo" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-gray-800 p-2 border-b border-gray-100">Comparativo</a>
          <a href="#tecnologia" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-gray-800 p-2 border-b border-gray-100">Tecnologia</a>
          <a href="#clientes" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-gray-800 p-2 border-b border-gray-100">Clientes</a>
          <a 
            href="#lead-capture" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-cadian-orange text-white text-center font-bold py-3 rounded-lg mt-2"
          >
            TESTAR GRÁTIS
          </a>
        </div>
      )}
    </header>
  );
}
