import React from 'react'
import { serviceSectionInfo } from '../../data/section-info'
import SectionLayout from '../../layouts/section-layout/SectionLayout'

function Service() {
  return (
    <SectionLayout sectionInfo={serviceSectionInfo}>
      <ul className='flex items-center justify-between w-full'>
        {serviceSectionInfo.content.map((content, idx) => (
          <li className='flex flex-col items-center' key={idx}>
            <img
              src={content.icon}
              alt='content icon'
              className='object-contain h-[96px] mb-8'
            />
            <img
              src='sec_service_check.png'
              alt='check'
              width={50}
              className='object-contain mb-3'
            />
            <h3 className='text-lg font-bold mb-3'>{content.title}</h3>
            <div
              className='text-center text-sm leading-7'
              dangerouslySetInnerHTML={{ __html: content.text }}
            ></div>
          </li>
        ))}
      </ul>
    </SectionLayout>
  )
}

export default Service
