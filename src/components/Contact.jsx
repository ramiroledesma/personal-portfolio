import React from 'react'
import { SocialData } from '../assets/data/social';
import './contact.css'

const SocialContact = () => {

  const data = SocialData

  return (

    <div className="contact">
      <h2>Connect with me</h2>
      <p>If you'd like to reach me, please send me a direct message.</p>
      <div className='social-contact'>
        {data.map((el) => {
          return (
            <a key={el.id} href={el.link} target={'_blank'} rel='noreferrer'>
              <div className='social-icon-div'>
                <img src={el.icon} className='social-icon' alt='icon' />
              </div>
            </a>)
        })}
      </div>
    </div>

  )
}

export default SocialContact
