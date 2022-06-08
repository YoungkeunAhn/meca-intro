import React, { useState } from 'react'
import NoticeModal from '../components/notice/NoticeModal'
import NoticeTbodyRow from '../components/notice/NoticeTbodyRow'
import { noticeFakeData } from '../data/notice'
import PageLayout from '../layouts/page-layout/PageLayout'

const noticePageInfo: PageInfo = {
  bgImage: 'header_bg_notice.png',
  headerTitle: 'Notice',
  mainTitle: '공지사항',
  subtitle: '메카스테이지 새로운 소식과 공지사항을 알려드립니다.',
}

function Notice() {
  const [open, setOpen] = useState<boolean>(false)
  const [modalProps, setModalProps] = useState<NoticeData>()

  const openModal = (data: NoticeData) => {
    setOpen(true)
    setModalProps(data)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setOpen(false)
    setModalProps(undefined)
    document.body.style.overflow = 'auto'
  }

  return (
    <PageLayout info={noticePageInfo}>
      <table className='w-[1200px] m-auto'>
        <thead
          className='bg-gray-100 border-y text-[12px]'
          style={{
            borderBottom: '3px double #ccc',
          }}
        >
          <th className='py-3'>No</th>
          <th className='py-3 pl-[155px]'>제목</th>
          <th className='py-3'>작성자</th>
          <th className='py-3'>작성일</th>
        </thead>
        <tbody>
          {noticeFakeData
            .filter((it) => it.notice)
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((data) => (
              <NoticeTbodyRow openModal={openModal} seq='공지' data={data} />
            ))}
          {noticeFakeData
            .filter((it) => !it.notice)
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((data, idx) => (
              <NoticeTbodyRow
                openModal={openModal}
                seq={noticeFakeData.filter((it) => !it.notice).length - idx}
                data={data}
              />
            ))}
        </tbody>
      </table>
      {open && modalProps && (
        <NoticeModal closeModal={closeModal} data={modalProps} />
      )}
    </PageLayout>
  )
}

export default Notice
