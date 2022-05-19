import React, { useState } from 'react'
import { contactSuccessMsg } from '../../data/msg'

const purple = '#54009D'
const lightPurple = '#A342F8'

type InputsType = {
  name: string
  phoneNum: string
}

const initInputs: InputsType = {
  name: '',
  phoneNum: '',
}

function MainSection() {
  const [inputs, setInputs] = useState<InputsType>(initInputs)
  const [close, setClose] = useState<boolean>(false)

  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }

  const onSubmit = () => {
    alert(contactSuccessMsg)
    setInputs(initInputs)
  }

  const onToggleClose = () => {
    setClose(!close)
  }

  return (
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
        width='100px'
        className='object-contain ml-[69px] mt-[46px]'
      />
      <div
        className='flex flex-col items-center w-full text-white absolute top-[45%] left-[50%]'
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <h1 className='text-[70px] -tracking-[2.1px] font-bold'>
          설치작업물로 입증된
        </h1>
        <div
          style={{ background: purple }}
          className='w-[642px] rounded-[100px] py-1 font-bold text-[70px] text-center mb-5'
        >
          고객만족도 100%
        </div>
        <div className='-tracking-[1.5px] text-[26px]'>
          완벽한 행사와 이벤트를 위한 감각적이고 디테일한 무대를
        </div>
        <div className='text-[26px]'>
          <span
            style={{ color: lightPurple }}
            className='-tracking-[1.5px] font-bold text-[38px]'
          >
            MecaStage
          </span>
          의 숙련된 전문가들이 만들어드립니다
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div
          style={{
            background: purple,
            transform: 'translateX(-50%)',
          }}
          className={`rounded-t-full w-[78px] h-[40px] text-center leading-[56px] cursor-pointer text-white ${
            close ? 'bottom-0' : 'bottom-10'
          }`}
          onClick={onToggleClose}
        >
          {close ? 'Open' : 'Close'}
        </div>
        <div
          style={{
            background: purple,
            height: close ? 0 : '100px',
            transition: '0.5s ease-in-out',
            overflow: 'hidden',
          }}
          className={`text-white w-full relative ${close ? 'py-0' : 'py-5'}`}
        >
          <div className='flex justify-center items-center text-xs'>
            <div className='flex mr-96'>
              <img
                src='main_contact_icon.png'
                alt='contact icon'
                width='58px'
                className='object-contain mr-5'
              />
              <div className='flex flex-col leading-8'>
                <span>
                  성함과 연락처만 간단하게 남겨주시면 담당자가 확인 후
                </span>
                <span>빠르게 연락드리도록 하겠습니다.</span>
              </div>
            </div>

            <div className='flex items-center relative left-[-100px]'>
              <div className='flex flex-col items-start space-y-3 mr-4'>
                <div className='flex items-center'>
                  <span className='w-16'>성&nbsp;&nbsp;&nbsp;함 :</span>
                  <input
                    type='text'
                    className='rounded-sm text-black'
                    name='name'
                    value={inputs.name}
                    onChange={onChangeInputs}
                  />
                </div>
                <div className='flex items-center'>
                  <span className='w-16'>연락처 :</span>
                  <input
                    type='text'
                    className='rounded-sm text-black'
                    name='phoneNum'
                    value={inputs.phoneNum}
                    onChange={onChangeInputs}
                  />
                </div>
              </div>
              <button
                style={{ color: purple }}
                className='rounded-full bg-white text-center w-16 h-16'
                onClick={onSubmit}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection
