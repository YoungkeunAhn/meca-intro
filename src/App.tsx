import React from 'react'
import AboutUs from './components/sections/AboutUs'
import MainSection from './components/sections/MainSection'
import Portfoilo from './components/sections/Portfoilo'
import Service from './components/sections/Service'
import Works from './components/sections/Works'
import { contactSectionInfo } from './data/section-info'
import SectionLayout from './layouts/section-layout/SectionLayout'

function App() {
  return (
    <div>
      <MainSection />
      <Service />
      <Portfoilo />
      <AboutUs />
      <Works />
      <SectionLayout sectionInfo={contactSectionInfo}>
        <div className='bg-[#F5F5F5] rounded-md p-5 space-y-4'>
          <div className='flex items-center justify-start space-x-10'>
            <div className='flex items-center'>
              <label htmlFor='companyName' className='font-bold w-40 text-left'>
                회사명
              </label>
              <input
                name='companyName'
                className='border-o outline-none rounded-md w-[350px] h-[50px] px-3'
              />
            </div>
            <div className='flex items-center'>
              <label htmlFor='manager' className='font-bold w-40 text-left'>
                담당자명
              </label>
              <input
                name='manager'
                className='border-o outline-none rounded-md w-[350px] h-[50px] px-3'
              />
            </div>
          </div>
          <div className='flex items-center justify-start space-x-10'>
            <div className='flex items-center'>
              <label
                htmlFor='companyCallNum'
                className='font-bold w-40 text-left'
              >
                회사연락처
              </label>
              <input
                name='companyCallNum'
                className='border-o outline-none rounded-md w-[350px] h-[50px] px-3'
              />
            </div>
            <div className='flex items-center'>
              <label htmlFor='phoneNum' className='font-bold w-40 text-left'>
                휴대폰번호
              </label>
              <input
                name='phoneNum'
                className='border-o outline-none rounded-md w-[350px] h-[50px] px-3'
              />
            </div>
          </div>
          <div className='flex items-center justify-start space-x-10'>
            <div className='flex items-center'>
              <label htmlFor='email' className='font-bold w-40 text-left'>
                이메일
              </label>
              <input
                name='email'
                className='border-o outline-none rounded-md w-[350px] h-[50px] px-3'
              />
            </div>
            <div className='flex items-center'>
              <label htmlFor='budget' className='font-bold w-40 text-left'>
                제작예산
              </label>
              <input
                name='budget'
                className='border-o outline-none rounded-md w-[350px] h-[50px] px-3'
              />
            </div>
          </div>
          <div className='flex justify-start w-full'>
            <div className='flex items-center w-full'>
              <label
                htmlFor='content'
                className='font-bold w-[188px] text-left'
              >
                문의내용
              </label>
              <textarea
                name='content'
                rows={10}
                className='border-o outline-none rounded-md w-full px-3'
              />
            </div>
          </div>
          <div className='flex justify-start w-full'></div>
        </div>
      </SectionLayout>
    </div>
  )
}

export default App
