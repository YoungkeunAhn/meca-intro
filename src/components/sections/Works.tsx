import React from 'react'
import { worksSectionInfo } from '../../data/section-info'
import SectionLayout from '../../layouts/section-layout/SectionLayout'

function Works() {
  return (
    <SectionLayout sectionInfo={worksSectionInfo}>
      <ul className='w-full grid grid-cols-4 gap-2 gap-y-4'>
        {worksSectionInfo.content.map((data, idx) => (
          <li key={idx}>
            <img src={data} alt={data.split('.')[0]} />
          </li>
        ))}
      </ul>
    </SectionLayout>
  )
}

export default Works
