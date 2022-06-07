import React, { useState } from 'react'
import { navMenu } from '../../data/nav'
import NavCircle from './NavCircle'

function NavMenu() {
  const [currentSection, setCurrentSection] = useState<string>('home')

  const onClickMenu = (id: string) => {
    setCurrentSection(id)
  }

  return (
    <ul className='fixed top-1/3 right-[100px] flex flex-col items-end text-white space-y-2.5 text-[16px] font-thin'>
      {navMenu.map((menu, idx) => (
        <li
          key={idx}
          className='flex items-center cursor-pointer font-bold group'
          onClick={() => onClickMenu(menu.sectionId)}
        >
          <span
            style={{ transition: '0.3s' }}
            className={`group-hover:translate-x-2 ${
              currentSection === menu.sectionId
                ? 'first-letter:text-[#b36fff] first-letter:text-[20px] first-letter:uppercase'
                : ''
            }`}
          >
            {menu.title}
          </span>
          <NavCircle current={currentSection === menu.sectionId} />
        </li>
      ))}
    </ul>
  )
}

export default NavMenu
