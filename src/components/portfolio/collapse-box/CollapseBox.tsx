import React, { useEffect, useState } from 'react'
import Close from '../../../icons/Close'

type Props = {
  top: number
  height: number
  currentCard: PortfolioContent | undefined
  closeCollapse: () => void
}

function CollapseBox(props: Props) {
  const { top, height, currentCard, closeCollapse } = props
  const [mainImage, setMainImage] = useState<string>('')

  useEffect(() => {
    if (currentCard) setMainImage(currentCard.images[currentCard.mainIdx])
  }, [currentCard])

  const onClickImageItem = (item: string) => {
    setMainImage(item)
  }
  return (
    <div
      className='absolute left-0 bg-black w-full flex items-center overflow-hidden'
      style={{
        top,
        height,
        transition: 'height 0.3s',
      }}
    >
      <button className='absolute top-[24px] right-60' onClick={closeCollapse}>
        <Close className='w-7 h-7 fill-gray-500 z-[999]' />
      </button>
      <div className='w-[1200px] m-auto grid grid-cols-2 gap-4 py-4'>
        <img src={mainImage} alt='main' className='w-full' />
        <div className='flex flex-col justify-between items-start '>
          <ul className='grid grid-cols-3 gap-4 w-full h-[280px]'>
            {currentCard &&
              new Array(6).fill(0).map((_, idx) => (
                <li
                  key={idx}
                  onClick={() =>
                    currentCard.images[idx] &&
                    onClickImageItem(currentCard.images[idx])
                  }
                  className={`w-full h-full  ${
                    currentCard.images[idx] ? 'cursor-pointer' : ''
                  } 
                `}
                  style={{
                    backgroundImage: `url(${
                      currentCard?.images[idx] ?? 'portfolio_noImage.png'
                    })`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                ></li>
              ))}
          </ul>
          <div className='text-white'>
            <h2 className='font-bold text-base mb-3'>{currentCard?.title}</h2>
            <ul className='space-y-2'>
              <li className='text-xs'>- 행사장: {currentCard?.location}</li>
              <li className='text-xs'>- 행사일: {currentCard?.date}</li>
              <li className='text-xs'>- 행사문의: {currentCard?.inquiry}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollapseBox
