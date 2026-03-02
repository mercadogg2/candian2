import { motion } from 'motion/react';

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1200px-Y_Combinator_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="clientes">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cadian-red mb-6 tracking-tight">
            Prova Social e Autoridade Vertical 🏆
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium mb-16">
            "Mais de 20.000 profissionais e as maiores universidades do Brasil já demitiram as anuidades caras."
          </p>

          <div className="slider">
            <div className="slide-track">
              {/* Duplicate logos for infinite scroll effect */}
              {[...logos, ...logos].map((logo, index) => (
                <div className="slide" key={index}>
                  <img src={logo} alt={`Cliente ${index}`} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
