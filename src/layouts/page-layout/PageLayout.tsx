import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

type Props = {
  info: PageInfo
  children: React.ReactNode
}

function PageLayout(props: Props) {
  const { info, children } = props
  const { bgImage, headerTitle, mainTitle, subtitle } = info

  return (
    <div>
      <header
        className='w-full h-screen pt-[46px] relative'
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Link to='/'>
          <img
            src='logo_white.png'
            alt='메카스테이지'
            width='100px'
            className='object-contain ml-[69px]'
          />
        </Link>
        <h1
          className='absolute bottom-[150px] text-[60px] font-bold text-white'
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {headerTitle}
        </h1>
      </header>
      <main className='pt-[150px] pb-[240px]'>
        <div className='flex flex-col items-center mb-12'>
          <h2 className='text-[60px] font-bold text-center mb-2.5'>
            {mainTitle}
          </h2>
          <div className='border-2 border-[#00A1B4] w-[100px]'></div>
        </div>
        <h3 className='text-center text-base text-[#707070] mb-14'>
          {subtitle}
        </h3>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default PageLayout
