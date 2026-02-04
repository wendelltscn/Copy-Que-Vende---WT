
import React from 'react';
import SectionWrapper from './SectionWrapper';

const Objection = ({ question, answer }: { question: string, answer: string }) => (
    <div className="border-t border-brand-gray-medium py-6">
        <dt className="text-lg font-semibold text-white">{question}</dt>
        <dd className="mt-2 text-brand-gray-light">{answer}</dd>
    </div>
);

const ObjectionSection: React.FC = () => {
    return (
        <SectionWrapper>
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">"Mas será que isso funciona para mim?"</h2>
                <p className="mt-4 text-lg text-brand-gray-light max-w-3xl mx-auto">
                    É normal ter dúvidas. Vamos esclarecer as mais comuns. A resposta para todas elas é a mesma: o ebook ensina estrutura, não exige talento.
                </p>
            </div>
            <div className="mt-12 max-w-3xl mx-auto">
                <dl className="">
                    <Objection
                        question="“Não sei vender, tenho vergonha.”"
                        answer="Ótimo. O método ensina a escrever de uma forma que atrai e converte, sem que você precise 'forçar a barra'. A venda se torna uma consequência natural de uma boa comunicação."
                    />
                    <Objection
                        question="“Não sou bom com palavras, não sei escrever bem.”"
                        answer="Você não precisa ser um poeta. Copywriting é sobre clareza e estrutura, não sobre escrita complexa. Se você consegue conversar, você consegue aplicar o método."
                    />
                    <Objection
                        question="“Nunca estudei marketing na vida.”"
                        answer="Perfeito. Este ebook foi feito para você. Ele vai direto ao ponto, sem jargões complicados, ensinando a base que realmente importa para gerar resultados."
                    />
                    <Objection
                        question="“Não tenho um produto para vender ainda.”"
                        answer="Aprender copywriting é o primeiro passo. Essa habilidade vai te dar a clareza para criar um produto que as pessoas realmente queiram comprar."
                    />
                     <Objection
                        question="“Já tentei outros cursos e não tive resultado.”"
                        answer="Muitos cursos focam em teoria ou em 'hacks' que param de funcionar. O 'COPY QUE VENDE' foca nos princípios e na estrutura. É um conhecimento que não fica obsoleto."
                    />
                </dl>
            </div>
        </SectionWrapper>
    );
};

export default ObjectionSection;
