import React from 'react'
import CV from '../../assets/OBAJI_EMEKA_CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn1'>Download CV</a>
        <a href='#contact' className='btn1 btn-primary1'>Let's Talk</a>
    </div>
  )
}

export default CTA