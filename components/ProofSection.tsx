
import React from 'react';
import SectionWrapper from './SectionWrapper';

const ProofItem = ({ text }: { text: string }) => (
  <div className="text-center bg-brand-dark p-6 rounded-lg border-2 border-brand-gold">
    <p className="text-2xl font-bold tracking-wider uppercase text-white">{text}</p>
  </div>
);

const ProofSection: React.FC = () => {
  return (
    <SectionWrapper className="bg-brand-gray-dark">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Vender com palavras não é dom, sorte ou talento.</h2>
        <p className="mt-4 text-lg text-brand-gold font-semibold max-w-3xl mx-auto">
          É um sistema lógico que qualquer pessoa pode aprender e aplicar.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <ProofItem text="Método" />
        <ProofItem text="Estrutura" />
        <ProofItem text="Técnica" />
        <ProofItem text="Processo" />
        <ProofItem text="Sistema" />
        <ProofItem text="Estratégia" />
      </div>
      <p className="mt-10 text-center text-brand-gray-light max-w-3xl mx-auto">
        Quando você entende as regras do jogo, você para de jogar no escuro e começa a criar resultados de forma consistente.
      </p>
    </SectionWrapper>
  );
};

export default ProofSection;
