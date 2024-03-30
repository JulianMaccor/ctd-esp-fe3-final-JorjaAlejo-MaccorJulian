import { memo } from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="Footer">
        <section className="Student">
          <p className='label bold'>Jorja Alejo - Maccor Julian</p>
          <div style={{paddingTop: "5px"}}>
            <p className='caption'>Frontend III</p>
            <p className='caption'>2024</p>
          </div>
        </section>

        <section className="DH">
          <div className="SocialMedia">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src="/images/ico-facebook.png" alt='facebook-logo' />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <img src="/images/ico-instagram.png" alt='instagram-logo' />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
              <img src="/images/ico-whatsapp.png" alt='whatsapp-logo' />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
              <img src="/images/ico-tiktok.png" alt='tiktok-logo' />
            </a>
          </div>
          
          <div className="Logo">
            <p>Powered by</p>
            <img src="/images/DH.png" alt='DH-logo' />
          </div>
        </section>

        <div className="RainbowContainer"></div>
    </footer>
  )
}

export default memo(Footer)
