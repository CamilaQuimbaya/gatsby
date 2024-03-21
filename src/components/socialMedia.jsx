import React from 'react';
import '../styles/components/socialmedia.css';

import { StaticImage } from "gatsby-plugin-image"

const SocialMedia = () => {
    return (
        <div className='mySocialMediaContainer'>
            <div className='containerimg'>
            <StaticImage
                src="../images/socialmediaimg.png"
                alt="Ejemplo de imagen"
                className='socialmediaimg'
                width={140} />
            </div>
        </div>
    );
};

export default SocialMedia;