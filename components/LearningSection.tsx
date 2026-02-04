
import React from 'react';
import SectionWrapper from './SectionWrapper';

// Fix: Use a defined interface for props to resolve TypeScript error.
interface ListItemProps {
    children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ children }) => (
    <li className="flex items-start py-3">
        <svg className="flex-shrink-0 h-6 w-6 text-brand-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="ml-4 text-lg text-brand-gray-light">{children}</span>
    </li>
);

const LearningSection: React.FC = () => {
    const learningPoints = [
        "O que é copywriting de verdade (e o que não é)",
        "Como funciona a mente do seu comprador",
        "A estrutura exata de uma copy que vende",
        "O poder do marketing de resposta direta",
        "Headlines que prendem a atenção instantaneamente",
        "Como quebrar qualquer objeção antes que ela surja",
        "Gatilhos mentais usados de forma ética e eficaz",
        "Como gerar desejo real pelo seu produto",
        "A arte de conduzir o leitor a uma decisão",
        "Como estruturar ofertas que convertem",
        "Como transformar sua comunicação em vendas",
        "O método para vender sem parecer um vendedor"
    ];

    return (
        <SectionWrapper className="bg-brand-gray-dark">
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Um guia prático, direto ao ponto.</h2>
                <p className="mt-4 text-lg text-brand-gray-light max-w-3xl mx-auto">
                    Dentro do 'COPY QUE VENDE', você terá acesso a um arsenal de técnicas e estruturas aplicáveis imediatamente.
                </p>
            </div>
            <div className="mt-12 bg-brand-dark border border-brand-gray-medium p-8 rounded-xl shadow-lg">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 divide-y md:divide-y-0 divide-brand-gray-medium">
                    {learningPoints.map((point, index) => (
                        <ListItem key={index}>{point}</ListItem>
                    ))}
                </ul>
            </div>
        </SectionWrapper>
    );
};

export default LearningSection;
