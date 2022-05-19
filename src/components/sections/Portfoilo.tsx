import React from 'react'
import { portfolioSectionInfo } from '../../data/section-info'
import SectionLayout from '../../layouts/section-layout/SectionLayout'

function Portfoilo() {
  return (
    <SectionLayout sectionInfo={portfolioSectionInfo}>
      <div className='w-full grid grid-cols-4 gap-2'>
        {portfolioSectionInfo.content.map((data, idx) => (
          <div
            className='relative flex justify-center items-center group w-full h-[222px]'
            key={idx}
            style={{
              backgroundImage: `url(${data.thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'cetner',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              style={{
                background: 'rgba(0,0,0,0.7)',
              }}
              className='absolute w-0 h-0 flex items-center justify-center text-white overflow-hidden cursor-pointer group-hover:w-full group-hover:h-full'
            >
              <div className='flex flex-col justify-start items-center'>
                <span className='text-base'>{data.title}</span>
                <span className='text-sm'>{data.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  )
}

export default Portfoilo
