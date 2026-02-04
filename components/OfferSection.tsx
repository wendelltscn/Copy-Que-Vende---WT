
import React from 'react';
import SectionWrapper from './SectionWrapper';
import CTAButton from './CTAButton';

// Fix: Use a defined interface for props to resolve TypeScript error.
interface OfferItemProps {
    children: React.ReactNode;
}

const OfferItem: React.FC<OfferItemProps> = ({ children }) => (
    <li className="flex items-center">
        <svg className="h-5 w-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
        <span className="ml-3 text-lg text-brand-gray-light">{children}</span>
    </li>
);

const OfferSection: React.FC = () => {
    return (
        <SectionWrapper id="offer" className="bg-brand-dark">
            <div className="max-w-4xl mx-auto bg-brand-gray-dark border border-brand-gold rounded-xl shadow-2xl overflow-hidden">
                <div className="p-8 sm:p-12">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">Chega de tentar no escuro.</h2>
                        <p className="mt-3 text-xl text-brand-gold">Acesse agora o método claro para transformar palavras em vendas.</p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                         <div className="flex justify-center items-center">
                           <img 
                              src="https://i.imgur.com/0yEX8ki.png" 
                              alt="Capa do Ebook COPY QUE VENDE"
                              className="w-64 rounded-lg shadow-lg"
                            />
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-white">O que você recebe:</h3>
                            <ul className="mt-6 space-y-4">
                                <OfferItem>Ebook 'COPY QUE VENDE' (PDF)</OfferItem>
                                <OfferItem>Acesso imediato e vitalício</OfferItem>
                                <OfferItem>Conteúdo 100% prático e aplicável</OfferItem>
                                <OfferItem>Estrutura passo a passo</OfferItem>
                                <OfferItem>Linguagem simples e direta</OfferItem>
                                <OfferItem>Método claro, sem enrolação</OfferItem>
                                <OfferItem>Sem promessas vazias, só o que funciona</OfferItem>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12">
                        <CTAButton className="text-xl py-5" href="https://pay.kiwify.com.br/f07TyyJ">
                           Quero acessar o COPY QUE VENDE agora
                        </CTAButton>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default OfferSection;
