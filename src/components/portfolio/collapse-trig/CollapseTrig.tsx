import React from 'react'

type Props = {
  top: number
  left: number
  open: boolean
}

function CollapseTrig(props: Props) {
  const { top, left, open } = props

  return (
    <div
      style={{
        overflow: 'hidden',
        borderLeft: '15px solid white',
        borderRight: '15px solid white',
        borderBottom: '15px solid black',
        borderTop: '0px solid white',
        position: 'absolute',
        top,
        left,
        opacity: open ? 1 : 0,
      }}
    ></div>
  )
}

export default CollapseTrig
