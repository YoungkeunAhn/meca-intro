import React from 'react'

type Props = {
  current: boolean
}

function NavCircle(props: Props) {
  const { current } = props

  return (
    <div
      className={`w-2.5 rounded-full ml-5 ${
        current ? 'h-10 bg-[#b36fff]' : 'h-2.5 bg-white'
      }`}
    ></div>
  )
}

export default NavCircle
