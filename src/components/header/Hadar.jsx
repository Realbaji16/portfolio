import React from 'react'
import Typed from 'react-typed'
import './hadar.css'
import CTA from './CTA' 
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {

    const arr =[
        "Hi, I'm OBAJI CHUKWUEMEKA. ",
        "A front end developer.",
         "Web Developer."
    ]

    
    return (
        <>
        <div className='header-wrapper'>
            <div className='main-info'>
           
                <Typed 
                    className='typed-text'
                    strings={arr}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                 <CTA />
            </div>
        </div>    
        <div className='container header__container'>
           
           <HeaderSocials />
           <a href='#contact' className='scroll__down'>Scroll Down</a>
           </div>
       </>
    )
}

export default Header
