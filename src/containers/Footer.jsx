import React from 'react'
import './footer.css'

import { PrimaryButton, FooterLink } from '../components'

const Footer = () => {
  return (
    <div className='footer'>
      <PrimaryButton text='Experience Cinespot fully - Sign Up' />
      <div className="footer_content">
        <div className="footer_content-links">
          <div className="link1">
            {
              ['Home', 'Explore', 'Latest', 'Movies', 'TV Shows'].map(
                (link) => {
                  return <FooterLink text={link} />
                }
              )}
          </div>
          <div className="link2">
            {
              ['Profile', 'Watchlist', 'Watched'].map(
                (link) => {
                  return <FooterLink text={link} />
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