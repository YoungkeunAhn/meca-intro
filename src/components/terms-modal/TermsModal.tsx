import React from 'react'
import { termsData } from '../../data/terms-data'
import Close from '../../icons/Close'

type Props = {
  closeModal: () => void
}

function TermsModal(props: Props) {
  const { closeModal } = props

  window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  })

  return (
    <div className='fixed top-0 left-0 bg-[rgba(17,26,39,0.9)] w-screen h-screen flex flex-col justify-center items-center text-left shadow-lg'>
      <div
        className='flex items-center justify-center absolute top-[125px] bg-[#007F8E] rounded-full w-16 h-16 text-center font-bold group hover:rotate-180 hover:bg-[#111427] hover:w-20 hover:h-20 hover:top-[115px] cursor-pointer'
        onClick={closeModal}
        style={{ transition: '0.3s' }}
      >
        <Close className='h-6 w-6 fill-white group-hover:w-10 group-hover:h-10' />
      </div>
      <div className='w-3/4 h-2/3 bg-white rounded-md p-24 overflow-y-scroll'>
        <h1 className='text-lg font-bold mb-8'>개인정보처리방침</h1>
        <ul className='w-full space-y-8'>
          {termsData.map((term, idx) => (
            <li key={idx} className='termsRow'>
              <h2 className='text-[20px] font-bold mb-2 relative pl-[20px]'>
                {term.title}
              </h2>
              <div className='text-xs text-[#777] pl-[20px]'>
                <span>{term.content}</span>
                {term.subContent && (
                  <ul className='list-disc pl-5'>
                    {term.subContent.map((sub, idx) => (
                      <li key={idx}>{sub}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TermsModal
