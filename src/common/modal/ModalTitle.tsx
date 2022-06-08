import React from 'react'
import Close from '../../icons/Close'

type Props = {
  title: string
  children?: React.ReactNode
  onClose: () => void
}

function ModalTitle(props: Props) {
  const { title, children, onClose } = props

  return (
    <div className='flex justify-between items-center w-full p-4 border-b text-xxs'>
      <h1 className='font-bold'>{title}</h1>
      <div className='flex items-center space-x-5'>
        {children}
        <button onClick={onClose} className='group'>
          <Close className='w-5 h-5 fill-gray-400 group-hover:fill-gray-600' />
        </button>
      </div>
    </div>
  )
}
export default ModalTitle
