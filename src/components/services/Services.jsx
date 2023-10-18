import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimizing the user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Using HTML, JavaScript and CSS to bring concepts to life.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developing and maintaining the user interface.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implementing design on mobile websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating tools that improve site interaction regardless of the browser.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Fixing bugs and testing for usability.</p>
            </li>
        
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Get and Stay Current</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Know Your Audience</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Use Shortcut Tools That Help You Create Awesome Content</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Copywriting.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>SaaS.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Technical Writing.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services