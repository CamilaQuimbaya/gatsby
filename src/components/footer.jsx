import React from 'react';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;