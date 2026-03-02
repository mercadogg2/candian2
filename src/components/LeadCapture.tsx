import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Send, ShieldCheck } from 'lucide-react';

export default function LeadCapture() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to RD Station / Hubspot
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section className="py-24 bg-cadian-red text-white relative overflow-hidden" id="lead-capture">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white text-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
        >
          <div className="p-10 md:w-1/2 bg-gray-50 flex flex-col justify-center border-r border-gray-100">
            <h2 className="text-3xl font-bold text-cadian-red mb-4 leading-tight">
              Pronto para ser dono do seu software?
            </h2>
            <p className="text-gray-600 mb-8 font-medium">
              Preencha o formulário e receba imediatamente o link para download da versão trial completa de 30 dias.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                Sem cartão de crédito
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                Instalação em 5 minutos
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                Suporte técnico gratuito no trial
              </li>
            </ul>
          </div>

          <div className="p-10 md:w-1/2">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Tudo Certo!</h3>
                <p className="text-gray-600 font-medium">
                  Enviamos o link de download e as instruções para o seu e-mail.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadian-blue focus:border-cadian-blue outline-none transition-all"
                    placeholder="João da Silva"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">E-mail Corporativo</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadian-blue focus:border-cadian-blue outline-none transition-all"
                    placeholder="joao@suaempresa.com.br"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadian-blue focus:border-cadian-blue outline-none transition-all"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-bold text-gray-700 mb-1">Cargo</label>
                  <select 
                    id="role" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadian-red focus:border-cadian-red outline-none transition-all bg-white"
                  >
                    <option value="">Selecione...</option>
                    <option value="engenheiro">Engenheiro</option>
                    <option value="arquiteto">Arquiteto</option>
                    <option value="gestor_ti">Gestor de TI</option>
                    <option value="proprietario">Proprietário / Sócio</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cadian-orange text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-colors hover:bg-orange-500 shadow-lg shadow-orange-500/30 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? 'PROCESSANDO...' : 'QUERO BAIXAR AGORA'}
                  {!isSubmitting && <Send className="w-5 h-5" />}
                </motion.button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  Seus dados estão seguros. Não enviamos spam.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Helper component for success state
function CheckCircle2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
