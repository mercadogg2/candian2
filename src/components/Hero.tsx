import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cadian-red text-white pt-20">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-20"
        style={{ y }}
      >
        <img 
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" 
          alt="Projeto 3D Complexo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cadian-red/80 to-cadian-red/95"></div>
      </motion.div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-semibold tracking-wider mb-6 uppercase">
              O Fim do Aluguel de Software
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-balance">
              VOCÊ É DONO DAS SUAS FERRAMENTAS OU APENAS AS ALUGA?
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 font-medium text-balance max-w-3xl mx-auto">
              Migre para o CADian Pro. 100% de compatibilidade com .DWG, interface que você já domina e Zero Anuidade. O software é seu, para sempre.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#lead-capture"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(255, 140, 0, 0.4), 0 8px 10px -6px rgba(255, 140, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-cadian-orange text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition-colors hover:bg-orange-500 w-full sm:w-auto justify-center shadow-lg shadow-orange-500/30"
                animate={{
                  boxShadow: ["0 0 0 0 rgba(255, 140, 0, 0.7)", "0 0 0 15px rgba(255, 140, 0, 0)"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
              >
                QUERO MINHA LICENÇA VITALÍCIA
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#comparativo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors w-full sm:w-auto justify-center text-center"
              >
                Ver Comparativo
              </motion.a>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-white font-medium pb-16">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Pagamento Único
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Suporte em Português
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                DWG Nativo
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
