import React from 'react'

type Props = {
  label: string
  value: string
  name: string
  onChange: () => void
  textaear?: true
}

function LableInputForm(props: Props) {
  const { label, value, name, textaear, onChange } = props

  return <div className='flex'> LableInputForm </div>
}

export default LableInputForm
