import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <img 
              src="https://i.postimg.cc/HsdpdbbM/logo-cadian-branco.png" 
              alt="CADian Brasil" 
              className="h-10 mb-6"
            />
            <p className="text-sm leading-relaxed mb-6">
              A alternativa definitiva para quem busca performance, compatibilidade e economia real em softwares CAD.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Produto</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#economia" className="hover:text-cadian-orange transition-colors">Economia</a></li>
              <li><a href="#comparativo" className="hover:text-cadian-orange transition-colors">Comparativo</a></li>
              <li><a href="#tecnologia" className="hover:text-cadian-orange transition-colors">Tecnologia</a></li>
              <li><a href="#clientes" className="hover:text-cadian-orange transition-colors">Clientes</a></li>
              <li><a href="#lead-capture" className="hover:text-cadian-orange transition-colors">Baixar Trial</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Suporte</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-cadian-orange transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-cadian-orange transition-colors">Tutoriais</a></li>
              <li><a href="#" className="hover:text-cadian-orange transition-colors">Fórum da Comunidade</a></li>
              <li><a href="#" className="hover:text-cadian-orange transition-colors">Requisitos de Sistema</a></li>
              <li><a href="#" className="hover:text-cadian-orange transition-colors">Contato Técnico</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cadian-orange shrink-0" />
                <span>Av. Paulista, 1000 - Bela Vista<br/>São Paulo - SP, 01310-100</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cadian-orange shrink-0" />
                <span>(11) 4000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cadian-orange shrink-0" />
                <span>contato@cadianbrasil.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} CADian Brasil. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
