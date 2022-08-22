import axios from 'axios'
import React, { useState } from 'react'
import { contactSuccessMsg } from '../../data/msg'
import { contactSectionInfo } from '../../data/section-info'
import Check from '../../icons/Check'
import SectionLayout from '../../layouts/section-layout/SectionLayout'
import { IsStringNotNull } from '../../validation/IsNullString'
import TermsModal from '../terms-modal/TermsModal'

type InputsType = {
  companyName: string
  manager: string
  companyCallNum: string
  phoneNum: string
  email: string
  budget: string
}

const initInputs: InputsType = {
  companyName: '',
  manager: '',
  companyCallNum: '',
  phoneNum: '',
  email: '',
  budget: '',
}

const formData = new FormData()

function Contact() {
  const [inputs, setInputs] = useState<InputsType>(initInputs)
  const [textareaValue, setTextareaValue] = useState<string>('')
  const [agreeCheck, setAgreeCheck] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)

  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }

  const onChangeTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value)
  }

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      formData.append('image', event.target.files[0])
    }
  }

  const onToggleAgreeCheck = () => {
    setAgreeCheck(!agreeCheck)
  }

  const valiContact = () => {
    if (
      IsStringNotNull(inputs.companyName) &&
      IsStringNotNull(inputs.companyCallNum) &&
      IsStringNotNull(inputs.email) &&
      IsStringNotNull(inputs.phoneNum) &&
      IsStringNotNull(inputs.manager)
    ) {
      if (!agreeCheck) {
        alert('개인정보처리방침에 동의해주세요.')
        return false
      }
    } else {
      alert(
        '회사명, 담당자명, 회사연락처, 휴대폰번호, 이메일은 필수 항목 입니다.'
      )
      return false
    }
    return true
  }

  const onSubmit = async () => {
    try {
      if (valiContact()) {
        formData.append('data', JSON.stringify(inputs))
        const { data } = await axios({
          method: 'POST',
          url: '/api/contact',
          data: formData,
        })
        console.log(data)
        alert(contactSuccessMsg)
        setInputs(initInputs)
        setTextareaValue('')
        setAgreeCheck(false)
      }
    } catch (e) {
      console.error(e)
      alert('실패')
    }
  }

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

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
              onChange={onChangeInputs}
              value={inputs.companyName}
              required
            />
          </div>
          <div className='flex items-center'>
            <label htmlFor='manager' className='font-bold w-40 text-left'>
              담당자명
            </label>
            <input
              name='manager'
              className='border-o outline-none rounded-md w-[355px] h-[50px] px-3 hover:bg-[#D1EFF2]'
              onChange={onChangeInputs}
              value={inputs.manager}
              required
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
              onChange={onChangeInputs}
              value={inputs.companyCallNum}
              required
            />
          </div>
          <div className='flex items-center'>
            <label htmlFor='phoneNum' className='font-bold w-40 text-left'>
              휴대폰번호
            </label>
            <input
              name='phoneNum'
              className='border-o outline-none rounded-md w-[355px] h-[50px] px-3 hover:bg-[#D1EFF2]'
              onChange={onChangeInputs}
              value={inputs.phoneNum}
              required
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
              type='email'
              className='border-o outline-none rounded-md w-[355px] h-[50px] px-3 hover:bg-[#D1EFF2]'
              onChange={onChangeInputs}
              value={inputs.email}
              required
            />
          </div>
          <div className='flex items-center'>
            <label htmlFor='budget' className='font-bold w-40 text-left'>
              제작예산
            </label>
            <input
              name='budget'
              className='border-o outline-none rounded-md w-[355px] h-[50px] px-3 hover:bg-[#D1EFF2]'
              onChange={onChangeInputs}
              value={inputs.budget}
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
              value={textareaValue}
              onChange={onChangeTextarea}
            />
          </div>
        </div>
        {/* <div className='flex justify-start w-full'>
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
                  accept='image/*'
                  onChange={onChangeFile}
                />
              </div>
              <div className='text-[15px] -tracking-[0.5px] mt-4'>
                첨부파일은 최대 10MB까지 전송이 가능합니다. 대용량 파일은
                meca3@meca51.com으로 보내주세요.
              </div>
            </div>
          </div>
        </div> */}
        <div className='flex justify-start w-full'>
          <div className='flex items-center w-full'>
            <label htmlFor='content' className='font-bold w-[160px] text-left'>
              개인정보처리방침
            </label>
            <div className='flex items-center'>
              <div
                className={`flex rounded-[100px] py-2 px-4 items-center cursor-pointer ${
                  agreeCheck
                    ? 'bg-black text-white'
                    : 'bg-white group hover:bg-[#D1EFF2]'
                }`}
                onClick={onToggleAgreeCheck}
              >
                <Check
                  className={`h-5 w-5 rounded-full ${
                    agreeCheck
                      ? 'bg-[#D1EFF2] fill-black'
                      : 'bg-gray-500 fill-white group-hover:fill-[#000]'
                  }`}
                />

                <span className='text-xs font-bold ml-2'>동의함</span>
              </div>
              <span
                className='cursor-pointer ml-2 text-xxs'
                onClick={openModal}
              >
                [내용확인]
              </span>
            </div>
          </div>
        </div>
        <div>
          <button
            type='submit'
            className='rounded-md w-[250px] py-5 bg-[#007F8E] text-white font-bold text-lg'
            onClick={onSubmit}
          >
            문의남기기
          </button>
        </div>
      </div>
      {open && <TermsModal closeModal={closeModal} />}
    </SectionLayout>
  )
}

export default Contact
