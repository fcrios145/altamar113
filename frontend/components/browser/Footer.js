import React from 'react';
import { connect } from 'react-redux'

const footerTitleStyle = {
    marginBottom: '1em',
    color: '#E7F4FE',
    fontSize: '1.2em',
    fontWeight: 'bold'
}

const embarcateStyle = {
    color: '#E7F4FE',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: '1.8em'
}

function Footer({ counter }) {
    return (
        <footer className='center-container'>
            <div className='footer-align-left footer-row'>
                <span className='not-mobile' style={footerTitleStyle}>Mantente en contacto:</span>
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
            <p className='footer-row not-mobile' style={embarcateStyle}>Embarcate en nuestro sabor</p>
            <div className='footer-row not-mobile' style={{alignSelf: 'self-start'}} >
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <span style={footerTitleStyle}>Lo que la gente dice de nosotros:</span>
                    <span>lorem1 asjdjksadkdjksda</span>
                </div>
            </div>
            {/* <h5>counter: {counter}</h5> */}
            {/* <span style={{color: 'white', marginTop: '1em', flex: 10}}>Sitio desarrollado por @frcios145</span> */}
        </footer>
    )
}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
      counter: state
    }
  }
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
  export default connect(
    mapStateToProps,
    null
  )(Footer)
