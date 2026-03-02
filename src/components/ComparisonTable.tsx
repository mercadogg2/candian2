import { motion } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function ComparisonTable() {
  return (
    <section className="py-24 bg-white" id="comparativo">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cadian-red mb-6 tracking-tight">
              O Fim das Desculpas ⚔️
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Compare e entenda por que os maiores escritórios estão migrando.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl shadow-2xl border border-gray-200 bg-white">
            <table className="w-full min-w-[768px] text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-5 md:p-8 border-b border-gray-100 bg-white text-gray-500 font-bold uppercase tracking-widest text-xs md:text-sm w-1/3">
                    Funcionalidade
                  </th>
                  <th className="p-5 md:p-8 border-b-2 border-cadian-red bg-red-50 text-cadian-red font-black text-xl md:text-2xl w-1/3 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-cadian-red"></div>
                    CADian Professional
                  </th>
                  <th className="p-5 md:p-8 border-b border-gray-100 bg-gray-50 text-gray-400 font-bold text-lg md:text-xl w-1/3">
                    O "Padrão" do Mercado
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50/50 transition-colors group">
                  <td className="p-5 md:p-6 pl-5 md:pl-8 font-bold text-gray-800 border-b border-gray-100 text-sm md:text-base">Licenciamento</td>
                  <td className="p-5 md:p-6 bg-red-50/30 border-b border-red-100/50 group-hover:bg-red-50/60 transition-colors">
                    <div className="flex items-center gap-2 md:gap-3 font-bold text-cadian-red text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-cadian-red shrink-0" />
                      <span>Vitalício (Pagamento Único)</span>
                    </div>
                  </td>
                  <td className="p-5 md:p-6 bg-gray-50/50 border-b border-gray-100">
                    <div className="flex items-center gap-2 md:gap-3 text-gray-600 font-medium text-sm md:text-base">
                      <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-400 shrink-0" />
                      <span>Aluguel Eterno (Assinatura)</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors group">
                  <td className="p-5 md:p-6 pl-5 md:pl-8 font-bold text-gray-800 border-b border-gray-100 text-sm md:text-base">Arquivos .DWG</td>
                  <td className="p-5 md:p-6 bg-red-50/30 border-b border-red-100/50 group-hover:bg-red-50/60 transition-colors">
                    <div className="flex items-center gap-2 md:gap-3 font-bold text-gray-900 text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-cadian-red shrink-0" />
                      <span>Nativo (Leitura e Escrita total)</span>
                    </div>
                  </td>
                  <td className="p-5 md:p-6 bg-gray-50/50 border-b border-gray-100">
                    <div className="flex items-center gap-2 md:gap-3 text-gray-600 font-medium text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-gray-400 shrink-0" />
                      <span>Nativo</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors group">
                  <td className="p-5 md:p-6 pl-5 md:pl-8 font-bold text-gray-800 border-b border-gray-100 text-sm md:text-base">Interface / Comandos</td>
                  <td className="p-5 md:p-6 bg-red-50/30 border-b border-red-100/50 group-hover:bg-red-50/60 transition-colors">
                    <div className="flex items-center gap-2 md:gap-3 font-bold text-gray-900 text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-cadian-red shrink-0" />
                      <span>Idênticos (Zero curva de aprendizado)</span>
                    </div>
                  </td>
                  <td className="p-5 md:p-6 bg-gray-50/50 border-b border-gray-100">
                    <div className="flex items-center gap-2 md:gap-3 text-gray-600 font-medium text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-gray-400 shrink-0" />
                      <span>Padrão</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors group">
                  <td className="p-5 md:p-6 pl-5 md:pl-8 font-bold text-gray-800 border-b border-gray-100 text-sm md:text-base">Suporte Técnico</td>
                  <td className="p-5 md:p-6 bg-red-50/30 border-b border-red-100/50 group-hover:bg-red-50/60 transition-colors">
                    <div className="flex items-center gap-2 md:gap-3 font-bold text-gray-900 text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-cadian-red shrink-0" />
                      <span>Incluso e em Português</span>
                    </div>
                  </td>
                  <td className="p-5 md:p-6 bg-gray-50/50 border-b border-gray-100">
                    <div className="flex items-center gap-2 md:gap-3 text-gray-600 font-medium text-sm md:text-base">
                      <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-400 shrink-0" />
                      <span>Complexo / Ticket em Inglês</span>
                    </div>
                  </td>
                </tr>
                <tr className="group">
                  <td className="p-5 md:p-8 pl-5 md:pl-8 font-black text-gray-900 text-base md:text-lg border-t-2 border-gray-100">Custo Total</td>
                  <td className="p-5 md:p-8 bg-red-50 border-t-2 border-cadian-red">
                    <div className="font-black text-2xl md:text-4xl text-cadian-red mb-1">R$ 2.500</div>
                    <div className="text-xs md:text-sm font-bold text-cadian-red/70 uppercase tracking-wider">Única vez</div>
                  </td>
                  <td className="p-5 md:p-8 bg-gray-50 border-t-2 border-gray-100">
                    <div className="font-bold text-xl md:text-2xl text-gray-400 mb-1">R$ 4.500</div>
                    <div className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">Todo santo ano</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 text-center">
            <motion.a
              href="#lead-capture"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(255, 140, 0, 0.4), 0 8px 10px -6px rgba(255, 140, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-cadian-orange text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors hover:bg-orange-500 shadow-lg shadow-orange-500/30"
            >
              BAIXAR VERSÃO TRIAL
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
