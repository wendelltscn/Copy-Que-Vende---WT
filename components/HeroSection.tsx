
import React from 'react';
import CTAButton from './CTAButton';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-dark pt-20 pb-10">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="text-white">Aprenda a transformar palavras em decisões de compra — </span>
              <span className="text-brand-gold">e transforme sua comunicação em dinheiro.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-brand-gray-light max-w-2xl mx-auto lg:mx-0">
              Um método prático de copywriting e marketing de resposta direta para quem quer vender qualquer produto, serviço ou ideia usando palavras.
            </p>
            <div className="mt-10 flex justify-center lg:justify-start">
              <CTAButton href="https://pay.kiwify.com.br/f07TyyJ">Quero acessar o ebook agora</CTAButton>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-auto transform perspective-1000 rotate-y-15 hover:rotate-y-0 transition-transform duration-500">
              <img 
                src="https://i.imgur.com/0yEX8ki.png" 
                alt="Capa do Ebook COPY QUE VENDE"
                className="w-80 sm:w-96 rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
       <style jsx global>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, rgba(212, 175, 55, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212, 175, 55, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .perspective-1000 { transform-style: preserve-3d; perspective: 1000px; }
        .rotate-y-15 { transform: rotateY(15deg); }
        .hover\\:rotate-y-0:hover { transform: rotateY(0deg); }
      `}</style>
    </section>
  );
};

export default HeroSection;
