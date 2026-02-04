
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-brand-gray-medium">
      <div className="max-w-5xl mx-auto py-6 px-6 lg:px-8">
        <p className="text-center text-sm text-brand-gray-light">
          &copy; {new Date().getFullYear()} Wendell Toscano. Todos os direitos reservados.
        </p>
         <p className="text-center text-xs text-brand-gray-medium mt-2">
          Este é um produto digital e você receberá acesso a ele imediatamente após a confirmação da compra.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
