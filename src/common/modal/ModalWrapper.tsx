import React from 'react'

type Props = {
  children: React.ReactChild
  onClose: () => void
}

function ModalWrapper(props: Props) {
  const { children, onClose } = props

  return (
    <div
      className='fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.4)] flex justify-center items-center overflow-hidden'
      onClick={onClose}
    >
      {children}
    </div>
  )
}

export default ModalWrapper
