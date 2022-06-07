import React, { useState } from 'react'
import { portfolioFakeData } from '../../data/section-info'
import SectionLayout from '../../layouts/section-layout/SectionLayout'
import CollapseBox from '../portfolio/collapse-box/CollapseBox'
import CollapseTrig from '../portfolio/collapse-trig/CollapseTrig'

type OffsetType = {
  top: number
  left: number
  width: number
}

function Portfoilo() {
  const [seletedCardIdx, setSelectedCardIdx] = useState<number>()
  const [offset, setOffset] = useState<OffsetType>()

  const [open, setOpen] = useState<boolean>(false)
  const [currentCard, setCurrentCard] = useState<PortfolioContent>()

  const onClickCard = (data: PortfolioContent, idx: number) => {
    const div = document.getElementById(`div${idx}`)

    if (seletedCardIdx === idx) {
      setOpen(false)
      setSelectedCardIdx(undefined)
    } else {
      setOpen(true)
      setSelectedCardIdx(idx)
    }

    setCurrentCard(data)

    setTimeout(() => {
      setOffset({
        top: div?.offsetTop ?? 0,
        left: div?.offsetLeft ?? 0,
        width: div?.offsetWidth ?? 0,
      })
    }, 0)
  }

  const closeCollapse = () => {
    setOpen(false)
    setSelectedCardIdx(undefined)
  }

  return (
    <div className='w-full relative'>
      <SectionLayout sectionInfo={portfolioFakeData}>
        <div className='w-full grid grid-cols-4 gap-2 gap-y-12 relative'>
          {portfolioFakeData.content.map((data, idx) => (
            <div
              id={`div${idx}`}
              key={idx}
              onClick={() => onClickCard(data, idx)}
              className={`flex flex-col cursor-pointer ${
                seletedCardIdx === idx ? 'mb-[560px]' : ''
              }`}
            >
              <div
                className='w-full h-[222px]'
                style={{
                  backgroundImage: `url(${data.images[data.mainIdx]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'cetner',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
              <span className='text-xs mt-8 font-bold'>{data.title}</span>
            </div>
          ))}
        </div>
      </SectionLayout>
      <CollapseTrig
        top={offset ? offset.top + 675 : 0}
        left={offset ? offset.left + offset.width / 2 + 345 : 0}
        open={open}
      />
      <CollapseBox
        currentCard={currentCard}
        top={offset ? offset.top + 690 : 0}
        height={open ? 550 : 0}
        closeCollapse={closeCollapse}
      />
    </div>
  )
}

export default Portfoilo
