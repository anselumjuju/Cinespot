import React from 'react'
import { useNavigate } from 'react-router-dom'
import './footer.css'

import { PrimaryButton, FooterLink } from '../../components'

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className='footer'>
      <PrimaryButton text='Experience Cinespot fully' onClick={() => navigate('/explore')} />
      <div className="footer_content">
        <div className="footer_content-links">
          <div className="link1">
            {
              ['Home', 'Explore', 'Latest', 'Movies', 'TV Shows'].map(
                (link,index) => {
                  return <FooterLink key={index} text={link} />
                }
              )}
          </div>
          <div className="link2">
            {
              ['Profile', 'Watchlist', 'Watched'].map(
                (link,index) => {
                  return <FooterLink key={index} text={link} />
                }
              )}
          </div>
        </div>
        <p className="footer_content-copyright">&copy; 2022 Cinespot. All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer