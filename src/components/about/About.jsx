import React from 'react'
import './about.css'
import ME from '../../assets/baji.jpg'
import { FaAward } from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


      <div className='container about__container'>
        <div className='hehe'>
          <div className='mare'>
            <img src={ME} alt='ABOUT IMG'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about_cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
          I'm obsessed with making things and even more obsessed with making things better. I've been in the business of creating for some years now. After graduating from High School, I've been actively involved in the web design community for the last 2 years. I've designed websites for small businesses, nonprofits, and more. My specialty is full website strategy, design and development, turning pixel magic into beautiful, semantic HTML & CSS. My interests, however, extend beyond the web and I love helping people with branding, and marketing strategy. .
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About