import React from 'react'
import { entertainmentsSectionInfo } from '../../data/section-info'
import SectionLayout from '../../layouts/section-layout/SectionLayout'

function Entertainments() {
  return (
    <SectionLayout sectionInfo={entertainmentsSectionInfo}>
      <ul className='w-full grid grid-cols-4 gap-2 gap-y-4'>
        {entertainmentsSectionInfo.content.map((data, idx) => (
          <li key={idx + 1}>
            <img src={`enter_logo/a${idx + 1}.png`} alt={data} />
            <div className='text-xs font-bold mt-4'>{data}</div>
          </li>
        ))}
      </ul>
    </SectionLayout>
  )
}

export default Entertainments
