
import React from 'react';
import SectionWrapper from './SectionWrapper';

// Fix: Use a defined interface for props to resolve TypeScript error.
interface PainPointProps {
  children: React.ReactNode;
}

const PainPoint: React.FC<PainPointProps> = ({ children }) => (
  <div className="bg-brand-gray-dark border border-brand-gray-medium rounded-lg p-6 flex items-center space-x-4">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <p className="text-lg text-brand-gray-light">{children}</p>
  </div>
);

const PainSection: React.FC = () => {
  return (
    <SectionWrapper className="bg-brand-gray-dark">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Você se esforça, mas o resultado não vem?</h2>
        <p className="mt-4 text-lg text-brand-gray-light max-w-3xl mx-auto">
          Muitas ideias boas morrem por falta de uma comunicação que conecta e convence. Se você se identifica com algum destes pontos, você não está sozinho.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <PainPoint>Você tem um produto incrível, mas ele simplesmente não vende como deveria.</PainPoint>
        <PainPoint>Você cria conteúdo, posta todos os dias, e o retorno financeiro é quase zero.</PainPoint>
        <PainPoint>Seus anúncios geram cliques, mas as conversões são frustrantes e caras.</PainPoint>
        <PainPoint>Você sente que sua comunicação é fraca e não consegue transmitir o real valor do que oferece.</PainPoint>
        <PainPoint>A dificuldade de vender trava seu crescimento e gera uma enorme insegurança.</PainPoint>
        <PainPoint>Sua mensagem parece se perder no meio de tanto ruído no mercado digital.</PainPoint>
      </div>
    </SectionWrapper>
  );
};

export default PainSection;
