
import React from 'react';
import SectionWrapper from './SectionWrapper';
import CTAButton from './CTAButton';

const FinalCTASection: React.FC = () => {
  return (
    <SectionWrapper className="bg-gradient-to-t from-brand-gray-dark to-brand-dark">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Você tem duas escolhas.
        </h2>
        <p className="mt-6 text-xl text-brand-gray-light">
          Você pode fechar esta página e continuar tentando no escuro, gastando tempo e dinheiro com estratégias que não funcionam…
        </p>
        <p className="my-4 text-xl text-white font-semibold">
          …ou pode tomar uma decisão hoje e aprender a transformar palavras em decisões de compra de forma consistente e previsível.
        </p>
        <div className="mt-10">
          <CTAButton className="text-xl py-5 shadow-yellow-500/20" href="https://pay.kiwify.com.br/f07TyyJ">
            Quero acessar o COPY QUE VENDE agora
          </CTAButton>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FinalCTASection;
