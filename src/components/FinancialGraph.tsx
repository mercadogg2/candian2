import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: 'Ano 1', cadian: 2500, assinatura: 4500 },
  { year: 'Ano 2', cadian: 2500, assinatura: 9000 },
  { year: 'Ano 3', cadian: 2500, assinatura: 13500 },
  { year: 'Ano 4', cadian: 2500, assinatura: 18000 },
  { year: 'Ano 5', cadian: 2500, assinatura: 22500 },
];

export default function FinancialGraph() {
  return (
    <section className="py-24 bg-cadian-gray" id="economia">
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
              O Gráfico da Liberdade Financeira
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              "Em 5 anos, você terá gasto o equivalente a um carro popular em assinaturas de CAD. Com a Cadian, você investe uma única vez e economiza até 80% do seu orçamento de TI."
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorAssinatura" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6b7280" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#6b7280" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorCadian" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#BC1F30" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#BC1F30" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontWeight: 500 }} />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#6b7280', fontWeight: 500 }}
                    tickFormatter={(value) => `R$ ${value / 1000}k`}
                  />
                  <Tooltip 
                    formatter={(value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="assinatura" 
                    name="Aluguel Eterno (Assinatura)"
                    stroke="#6b7280" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorAssinatura)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="cadian" 
                    name="CADian Professional"
                    stroke="#BC1F30" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorCadian)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-gray-800 font-bold text-lg mb-2">O Custo do "Padrão"</h3>
                <p className="text-gray-600 text-3xl font-black">R$ 22.500,00</p>
                <p className="text-sm text-gray-500 mt-2 font-medium">Gasto acumulado em 5 anos por licença.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h3 className="text-cadian-red font-bold text-lg mb-2">O Investimento Inteligente</h3>
                <p className="text-cadian-red text-3xl font-black">R$ 2.500,00</p>
                <p className="text-sm text-red-700 mt-2 font-medium">Pagamento único. O software é seu.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
