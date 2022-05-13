import React from 'react'
import { mecastageSectionInfo } from '../../data/section-info'
import SectionLayout from '../../layouts/section-layout/SectionLayout'

function AboutUs() {
  return (
    <SectionLayout sectionInfo={mecastageSectionInfo}>
      <ul className='flex space-x-3 justify-between'>
        {mecastageSectionInfo.content.map((data, idx) => (
          <li key={idx} className='w-full h-full relative'>
            <img src={data.image} alt='content_bg' />
            <div
              className='absolute top-[120px] left-[50%] text-center w-2/3 text-white text-base font-bold'
              style={{ wordBreak: 'keep-all', transform: 'translateX(-50%)' }}
            >
              {data.title}
            </div>
            <div
              className='absolute top-[270px] left-[50px] text-left text-xs leading-7'
              dangerouslySetInnerHTML={{ __html: data.text }}
            ></div>
          </li>
        ))}
      </ul>
    </SectionLayout>
  )
}

export default AboutUs
