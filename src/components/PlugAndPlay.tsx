import { motion } from 'motion/react';
import { Code2, Settings2, Keyboard, FileJson } from 'lucide-react';

const features = [
  {
    icon: <Code2 className="w-8 h-8 text-cadian-red" />,
    title: "Suporte a LISP",
    description: "Rode suas rotinas LISP, AutoLISP, Visual LISP e VBA sem precisar reescrever uma linha de código."
  },
  {
    icon: <Settings2 className="w-8 h-8 text-cadian-red" />,
    title: "Menus Customizados",
    description: "Importe seus arquivos .CUI, .CUIX, .MNU e .MNL. Seu ambiente de trabalho continua exatamente igual."
  },
  {
    icon: <Keyboard className="w-8 h-8 text-cadian-red" />,
    title: "Atalhos Clássicos",
    description: "L para Line, C para Circle. Não perca tempo reaprendendo atalhos. A memória muscular agradece."
  },
  {
    icon: <FileJson className="w-8 h-8 text-cadian-red" />,
    title: "API para Devs",
    description: "Integração total com .NET, C#, C++, e ObjectARX para desenvolver soluções sob medida."
  }
];

export default function PlugAndPlay() {
  return (
    <section className="py-24 bg-cadian-gray" id="tecnologia">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cadian-red mb-6 tracking-tight">
              Plug & Play 🛠️
            </h2>
            <p className="text-2xl text-gray-800 font-bold mb-4">
              Não mude seu jeito de trabalhar. Mude o quanto você paga.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              A transição é imediata. Instale o CADian, abra seus projetos e continue desenhando.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="bg-red-50 p-4 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
