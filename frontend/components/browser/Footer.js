import React from 'react';

export default function Footer() {
    return (
        <footer className='center-container'>
            <div className='footer-align-left'>
                <a href="https://www.facebook.com/Altamar113" target='_blank'>
                    <img src="/static/images/facebook.png" alt="facebookLogo"/>
                    <span>No olvides darnos like</span>
                </a>
                <a href="https://www.instagram.com/altamar113/" target='_blank'>
                    <img src="/static/images/instagram.png" alt="instagramLogo"/>
                    <span>Siguenos en Instagram</span>
                </a>
                <a href="tel:+526692230386" target='_blank'>
                    <img src="/static/images/telephone.png" alt="instagramLogo"/>
                    <span>6692147852</span>
                </a>
                <a href="https://wa.me/526692230386?text=Mandame un sushi" target='_blank'>
                    <img src="/static/images/whatsapp.png" alt="instagramLogo"/>
                    <span>6692147852</span>
                </a>
            </div>
            <span style={{color: 'white', marginTop: '1em'}}>Sitio desarrollado por @frcios145</span>
        </footer>
    )
}
