import React from 'react'
import { broadcaterProgramsSectionInfo } from '../../data/section-info'
import SectionLayout from '../../layouts/section-layout/SectionLayout'

function BroadcasterPrograms() {
  return (
    <SectionLayout sectionInfo={broadcaterProgramsSectionInfo}>
      <ul className='w-full grid grid-cols-4 gap-2 gap-y-4'>
        {new Array(56).fill(0).map((x, idx) => (
          <li key={idx + 1} className='relative hover:-top-2 hover:-left-2'>
            <img src={`program_logo/00${idx + 1}.png`} alt='program_logo' />
          </li>
        ))}
      </ul>
    </SectionLayout>
  )
}

export default BroadcasterPrograms
