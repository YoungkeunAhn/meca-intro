import React from 'react'

type Props = {
  seq: number | string
  data: NoticeData
  openModal: (data: NoticeData) => void
}

function NoticeTbodyRow(props: Props) {
  const { data, seq, openModal } = props

  return (
    <tr className={`border-b text-[12px] ${data.notice ? 'font-bold' : ''}`}>
      <td className='py-3 text-center w-[150px]'>{seq}</td>
      <td
        className='py-3 text-left cursor-pointer'
        onClick={() => openModal(data)}
      >
        {data.title}
      </td>
      <td className='py-3 text-center w-[150px] font-bold'>{data.manager}</td>
      <td className='py-3 text-center w-[150px] text-gray-500 font-normal'>
        {data.date}
      </td>
    </tr>
  )
}

export default NoticeTbodyRow
