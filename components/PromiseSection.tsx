
import React from 'react';
import SectionWrapper from './SectionWrapper';
import CTAButton from './CTAButton';

const CheckIcon = () => (
    <svg className="h-6 w-6 text-brand-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);

const PromiseSection: React.FC = () => {
    return (
        <SectionWrapper className="bg-brand-dark">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <span className="text-brand-gold font-semibold uppercase tracking-wider">A TRANSFORMAÇÃO</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">Comunicação que gera desejo. Decisão que gera vendas.</h2>
                    <p className="text-lg text-brand-gray-light">
                        Imagine ter a clareza para estruturar mensagens que não apenas informam, mas conduzem o leitor a uma única decisão lógica: a compra. Isso não é talento, é método. É a habilidade de entender o comportamento humano e usar palavras de forma estratégica.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <CheckIcon />
                            <span className="ml-3 text-brand-gray-light">Crie ofertas impossíveis de serem ignoradas.</span>
                        </li>
                        <li className="flex items-start">
                           <CheckIcon />
                            <span className="ml-3 text-brand-gray-light">Conduza seu cliente pela jornada de compra de forma natural.</span>
                        </li>
                        <li className="flex items-start">
                           <CheckIcon />
                            <span className="ml-3 text-brand-gray-light">Venda todos os dias, sem precisar parecer um vendedor chato.</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-brand-gray-dark p-8 rounded-lg shadow-lg border border-brand-gray-medium">
                    <h3 className="text-2xl font-bold text-white text-center">Pare de vender. Comece a ser escolhido.</h3>
                    <p className="mt-4 text-brand-gray-light text-center">
                        Com a estrutura certa, você deixa de perseguir clientes e passa a atraí-los. O 'COPY QUE VENDE' é o mapa para essa transformação.
                    </p>
                    <div className="mt-8">
                         <CTAButton>Quero essa transformação</CTAButton>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default PromiseSection;
