import React from 'react'
import { contactSectionInfo } from '../../data/section-info'
import SectionLayout from '../../layouts/section-layout/SectionLayout'

function Contact() {
  return (
    <SectionLayout sectionInfo={contactSectionInfo}>
      <div className='bg-[#F5F5F5] rounded-md p-16 space-y-4'>
        <div className='flex items-center justify-start space-x-10'>
          <div className='flex items-center'>
            <label htmlFor='companyName' className='font-bold w-40 text-left'>
              회사명
            </label>
            <input
              name='companyName'
              className='border-o outline-none rounded-md w-[355px] h-[50px] px-3 hover:bg-[#D1EFF2]'
            />
          </div>
          <div className='flex items-center'>
            <label htmlFor='manager' className='font-bold w-40 text-left'>
              담당자명
            </label>
            <input
              name='manager'
              className='border-o outline-none rounded-md w-[355px] h-[50px] px-3 hover:bg-[#D1EFF2]'
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
              className='border-o outline-none rounded-md w-[355px] h-[50px] px-3 hover:bg-[#D1EFF2]'
            />
          </div>
          <div className='flex items-center'>
            <label htmlFor='phoneNum' className='font-bold w-40 text-left'>
              휴대폰번호
            </label>
            <input
              name='phoneNum'
              className='border-o outline-none rounded-md w-[355px] h-[50px] px-3 hover:bg-[#D1EFF2]'
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
              className='border-o outline-none rounded-md w-[355px] h-[50px] px-3 hover:bg-[#D1EFF2]'
            />
          </div>
          <div className='flex items-center'>
            <label htmlFor='budget' className='font-bold w-40 text-left'>
              제작예산
            </label>
            <input
              name='budget'
              className='border-o outline-none rounded-md w-[355px] h-[50px] px-3 hover:bg-[#D1EFF2]'
            />
          </div>
        </div>
        <div className='flex justify-start w-full'>
          <div className='flex items-center w-full'>
            <label htmlFor='content' className='font-bold w-[188px] text-left'>
              문의내용
            </label>
            <textarea
              name='content'
              rows={10}
              className='border-o outline-none rounded-md w-full p-3 hover:bg-[#D1EFF2]'
            />
          </div>
        </div>
        <div className='flex justify-start w-full'>
          <div className='flex items-start w-full'>
            <label
              htmlFor='imageFile'
              className='font-bold w-[188px] text-left'
            >
              이미지파일
            </label>
            <div className='w-full flex flex-col items-start'>
              <div className='bg-white rounded-md w-full flex flex-col py-3'>
                <input
                  type='file'
                  name='imageFile'
                  className='border-o outline-none rounded-md w-full px-3 text-[13px]'
                />
              </div>
              <div className='text-[15px] -tracking-[0.5px] mt-4'>
                첨부파일은 최대 10MB까지 전송이 가능합니다. 대용량 파일은
                meca3@meca51.com으로 보내주세요.
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-start w-full'>
          <div className='flex items-center w-full'>
            <label htmlFor='content' className='font-bold w-[160px] text-left'>
              개인정보처리방침
            </label>
            <div className='flex items-center'>
              <div className='flex rounded-[100px] bg-white space-x-3 p-2 items-center cursor-pointer group hover:bg-[#D1EFF2]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 bg-gray-500 rounded-full fill-white group-hover:fill-[#000]'
                  viewBox='0 0 20 20'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span className='text-xs font-bold'>동의함</span>
              </div>
              <span className='cursor-pointer ml-4'>[내용확인]</span>
            </div>
          </div>
        </div>
        <div>
          <button
            type='button'
            className='rounded-md w-[250px] py-5 bg-[#007F8E] text-white font-bold text-lg'
          >
            문의남기기
          </button>
        </div>
      </div>
    </SectionLayout>
  )
}

export default Contact