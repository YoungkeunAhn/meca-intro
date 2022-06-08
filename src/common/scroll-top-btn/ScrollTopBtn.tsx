import React from 'react'

function ScrollTopBtn() {
  const scrollTop = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }
  return (
    <div
      className='fixed right-0 bottom-10 p-2 w-[80px] rounded-l-3xl text-white bg-[#00A1B4] text-[14px] text-center cursor-pointer z-50'
      onClick={scrollTop}
    >
      TOP ↑
    </div>
  )
}

export default ScrollTopBtn
