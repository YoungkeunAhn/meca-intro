import React from 'react'

type Props = {
  sectionInfo: SectionBase
  children: React.ReactNode
}

function SectionLayout(props: Props) {
  const { sectionInfo, children } = props
  const { title, mainText, subText } = sectionInfo

  return (
    <section
      id={sectionInfo.id}
      className='flex flex-col items-center pt-[150px] text-center w-[1200px] mx-auto'
    >
      <div className='flex flex-col items-center mb-20'>
        <h3 className='text-lg mb-4'>{title}</h3>
        <hr className='w-16 border border-[#00A1B4]' />
      </div>
      {mainText && (
        <div
          className='mb-14 text-xl'
          dangerouslySetInnerHTML={{ __html: mainText }}
        ></div>
      )}
      {subText && (
        <div
          className='mb-14 text-base leading-10'
          dangerouslySetInnerHTML={{ __html: subText }}
        ></div>
      )}
      <div className='w-full'>{children}</div>
    </section>
  )
}

export default SectionLayout
