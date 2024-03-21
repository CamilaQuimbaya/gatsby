import React from 'react';

import { StaticImage } from "gatsby-plugin-image"

const Card = ({imageUrl}) => {
    return (
        <div class="bg-white shadow-lg mb-4">
            <StaticImage
                src={imageUrl}
                alt="Ejemplo de imagen"
                
                />
            <div class="p-6">
            <h2 class="text-xl font-semibold mb-2">Título de la Card 3</h2>
            <p class="text-gray-700 mb-4">Descripción de la Card 3. Puedes escribir aquí algunos detalles sobre esta card.</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Botón</button>
            </div>
        </div>
    );
};

export default Card;