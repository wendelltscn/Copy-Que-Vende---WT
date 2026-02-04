
import React from 'react';
import SectionWrapper from './SectionWrapper';

const AuthorSection: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="bg-brand-gray-dark rounded-lg p-8 md:p-12 shadow-lg border border-brand-gray-medium">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <img 
              className="h-48 w-48 rounded-full object-cover ring-4 ring-brand-gold"
              src="https://i.imgur.com/HMs32CE.jpeg" 
              alt="Wendell Toscano" 
            />
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-3xl font-bold text-white">Wendell Toscano</h3>
            <p className="mt-2 text-lg text-brand-gold font-semibold">Autor, Educador e Estrategista Digital</p>
            <p className="mt-4 text-brand-gray-light">
              Com foco em ensinar escrita persuasiva, criação de produtos digitais e estruturação de comunicação estratégica, Wendell ajuda empreendedores e criadores de conteúdo a transformar ideias em negócios lucrativos. 
            </p>
            <p className="mt-4 text-brand-gray-light">
              Sua abordagem é direta e prática, focada em métodos que geram resultados reais, sem promessas vazias ou complexidade desnecessária.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AuthorSection;
