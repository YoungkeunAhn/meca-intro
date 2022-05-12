import React from 'react'
import Service from './components/sections/Service'

function App() {
  const purple = '#54009D'
  const lightPurple = '#A342F8'

  return (
    <div>
      <div
        className='flex flex-col h-screen relative justify-between'
        style={{
          backgroundImage: 'url(main_bg.png)',
          backgroundSize: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img
          src='logo_white.png'
          alt='메카스테이지'
          width='110px'
          className='object-contain'
        />
        <div
          className='flex flex-col items-center w-full text-white absolute top-[45%] left-[50%]'
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <h1 className='text-[70px] -tracking-[2.1px] font-bold'>
            설치작업물로 입증된
          </h1>
          <div
            className={`w-[642px] rounded-[100px] py-1 font-bold text-[70px] text-center bg-[${purple}]`}
          >
            고객만족도 100%
          </div>
          <div className='-tracking-[1.5px] text-[26px]'>
            완벽한 행사와 이벤트를 위한 감각적이고 디테일한 무대를
          </div>
          <div className='text-[26px]'>
            <span
              className={`bg-[${lightPurple}] -tracking-[1.14px] font-bold text-[38px]`}
            >
              MecaStage
            </span>
            의 숙련된 전문가들이 만들어드립니다
          </div>
        </div>
        <div
          className={`text-white bg-[${purple}] flex items-center justify-center`}
        >
          <div className='flex'>
            <img
              src='main_contact_icon.png'
              alt='contact icon'
              width='58px'
              className='object-contain'
            />
            <div className='flex flex-col'>
              <span>성함과 연락처만 간단하게 남겨주시면 담당자가 확인 후</span>
              <span>빠르게 연락드리도록 하겠습니다.</span>
            </div>
          </div>
          <div className='rounded-full '>X 닫기</div>
          <div className='flex items-center'>
            <div>
              <div className='flex items-center'>
                <span className='w-16'>성&nbsp;&nbsp;&nbsp;함 :</span>
                <input type='text' className='rounded-sm' />
              </div>
              <div className='flex items-center'>
                <span className='w-16'>연락처 :</span>
                <input type='text' className='rounded-sm' />
              </div>
            </div>
            <button
              style={{ color: purple }}
              className={`rounded-full bg-white text-center w-16 h-16`}
            >
              확인
            </button>
          </div>
        </div>
      </div>
      <Service />
    </div>
  )
}

export default App
