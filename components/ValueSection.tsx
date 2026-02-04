
import React from 'react';
import SectionWrapper from './SectionWrapper';

const ValueCard = ({ title, description }: { title: string, description: string }) => (
  <div className="border border-brand-gray-medium bg-brand-gray-dark rounded-lg p-6">
    <h3 className="text-xl font-bold text-brand-gold">{title}</h3>
    <p className="mt-2 text-brand-gray-light">{description}</p>
  </div>
);

const ValueSection: React.FC = () => {
  return (
    <SectionWrapper className="bg-brand-gray-dark">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Você não está comprando um ebook. Você está adquirindo uma ferramenta.</h2>
        <p className="mt-4 text-lg text-brand-gray-light max-w-3xl mx-auto">
          Copywriting é uma habilidade vitalícia que, uma vez aprendida, serve como um ativo para qualquer projeto, negócio ou fase da sua vida.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ValueCard 
          title="Para qualquer negócio" 
          description="Seja você um infoprodutor, freelancer, ou dono de e-commerce, a comunicação persuasiva é o motor das vendas." 
        />
        <ValueCard 
          title="Para qualquer produto" 
          description="De serviços de consultoria a produtos físicos, saber comunicar valor é o que diferencia você da concorrência." 
        />
        <ValueCard 
          title="Para qualquer nicho" 
          description="Não importa se você vende para o mercado de finanças ou de artesanato. Pessoas compram de quem elas entendem e confiam." 
        />
        <ValueCard 
          title="Uma habilidade para a vida" 
          description="Aprenda a negociar, persuadir e defender suas ideias no trabalho, nos negócios e na vida pessoal." 
        />
        <ValueCard 
          title="Independência" 
          description="Pare de depender de 'gurus' ou de fórmulas mágicas. Entenda os princípios para criar sua própria comunicação autêntica." 
        />
         <ValueCard 
          title="Ativo de alto valor" 
          description="Enquanto ferramentas de marketing mudam, a psicologia humana e a habilidade de se comunicar com ela permanecem constantes." 
        />
      </div>
    </SectionWrapper>
  );
};

export default ValueSection;
