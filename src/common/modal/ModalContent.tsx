import React from 'react'

type Props = {
  className?: string
  children: React.ReactNode
}

function ModalContent(props: Props) {
  const { className, children } = props

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`flex flex-col bg-white rounded-md ${
        className ? className : 'w-1/2 h-3/4'
      }`}
    >
      {children}
    </div>
  )
}

export default ModalContent
