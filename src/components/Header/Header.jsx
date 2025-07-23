import React from 'react'
import"./Header.css"
import CTA from './CTA'
import AhmedImg from '../../assests/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <header>
      <div className="container header__container">
        <h5>hello I'm</h5>
        <h1>Kechrid Ahmed</h1>
        <h5 className='text-light'>FullStack developer</h5>
        <h5 className='text-light'>DataScientist</h5>
        <h5 className="text-light">
  Employed On <a href="https://www.linkedin.com/company/wkw-tunisie-s-a-r-l/posts/?feedView=all" class="company-link">
  <span class="wkw">WKW.</span><span class="automotive">automotive</span>
  </a>
</h5>

        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={AhmedImg} alt="me"/>

        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
   </header>
    
  )
}

export default Header