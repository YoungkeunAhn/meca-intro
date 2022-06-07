import React, { useRef, useState } from 'react'
import { portfolioFakeData } from '../../data/section-info'

function ChangeTest() {
  const [seleted, setSelected] = useState<number>()
  const [currentCard, setCurrentCard] = useState<PortfolioContent>()
  const [offTop, setOffTop] = useState<number>()

  const onSelectedCard = function (idx: number, data: PortfolioContent) {
    const btn = document.getElementById(`btn${idx}`)
    setOffTop(btn?.offsetTop)

    if (seleted === idx) {
      setSelected(undefined)
      setCurrentCard(undefined)
    } else {
      setSelected(idx)
      setCurrentCard(data)
    }
  }

  return (
    <div className='m-auto w-[1200px]'>
      <div className='flex flex-col space-y-2'>
        <span>선택항목 : {seleted}</span>
        <span>행사제목 : {currentCard?.title}</span>
        <span>행사위치 : {currentCard?.location}</span>
        <span>행사일 : {currentCard?.date}</span>
        <span>행사문의 : {currentCard?.inquiry}</span>
        <span>offsetTop: {offTop} </span>
      </div>

      <ul className='grid grid-cols-4  gap-4'>
        {portfolioFakeData.content.map((data, idx) => (
          <li key={idx}>
            <div>
              <button
                id={`btn${idx}`}
                onClick={() => {
                  //console.log(this.getBoundingClientRect().top)
                  onSelectedCard(idx, data)
                }}
              >
                <img src={data.images[data.mainIdx]} alt='' />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChangeTest
