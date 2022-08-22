import _ from 'lodash'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Scrollspy from 'react-scrollspy'
import { navMenu } from '../../data/nav'
import NavCircle from './NavCircle'

const scrollspyItems = navMenu.map((menu) => menu.sectionId)

function NavBar() {
  const [isBgWhite, setIsBgWhite] = useState<boolean>(false)

  const onClickMenu = (id: string) => {
    const sectionTop = document.getElementById(id)?.offsetTop
    window.scrollTo({ behavior: 'smooth', top: sectionTop })
  }

  window.addEventListener(
    'scroll',
    _.throttle(function (e) {
      const serviceSection = document.getElementById('service')
      if (serviceSection && window.scrollY > serviceSection.offsetTop - 400) {
        setIsBgWhite(true)
      } else {
        setIsBgWhite(false)
      }
    }, 300)
  )

  return (
    <Scrollspy
      items={scrollspyItems}
      currentClassName='currentMenu'
      className={`fixed top-1/3 right-[50px] flex flex-col items-end space-y-2.5 text-[16px] font-thin ${
        isBgWhite ? 'text-black' : 'text-white'
      }`}
      offset={-300}
    >
      {navMenu.map((menu, idx) => (
        <li
          key={idx}
          className='flex items-center cursor-pointer font-bold group'
          onClick={() => onClickMenu(menu.sectionId)}
        >
          <span
            style={{ transition: '0.3s' }}
            className='group-hover:translate-x-2'
          >
            {menu.title}
          </span>
          <NavCircle />
        </li>
      ))}
      {/* <Link to='notice'>
        <li className='flex items-center cursor-pointer font-bold group'>
          <span
            style={{ transition: '0.3s' }}
            className='group-hover:translate-x-2'
          >
            notice
          </span>
          <NavCircle />
        </li>
      </Link> */}
    </Scrollspy>
  )
}

export default NavBar
