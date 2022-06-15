import React, { useEffect, useState } from 'react'
import NoticeModal from '../components/notice/NoticeModal'
import NoticeTbodyRow from '../components/notice/NoticeTbodyRow'
import { noticeFakeData } from '../data/notice'
import ChevronLeft from '../icons/ChevronLeft'
import ChevronRight from '../icons/ChevronRight'
import PageLayout from '../layouts/page-layout/PageLayout'

const noticePageInfo: PageInfo = {
  bgImage: 'header_bg_notice.png',
  headerTitle: 'Notice',
  mainTitle: '공지사항',
  subtitle: '메카스테이지 새로운 소식과 공지사항을 알려드립니다.',
}

const PAGE_SIZE = 10

type Pagination = {
  start: number
  end: number
  totalPage: number
}

function Notice() {
  const [open, setOpen] = useState<boolean>(false)
  const [modalProps, setModalProps] = useState<NoticeData>()
  const [postList, setPostList] = useState<NoticeData[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pagination, setPagination] = useState<Pagination>()

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

  const noticeList = postList
    .filter((it) => it.notice)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const normalList = postList
    .filter((it) => !it.notice)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const onChangePage = (page: number) => {
    setCurrentPage(page)
  }

  const normalSize = PAGE_SIZE - noticeList.length

  useEffect(() => {
    setPostList(noticeFakeData)

    const start = currentPage === 1 ? 0 : currentPage * normalSize
    const end =
      start + normalSize > postList.length
        ? postList.length
        : start + normalSize
    setPagination({
      totalPage: Math.ceil(normalList.length / (PAGE_SIZE - noticeList.length)),
      start,
      end,
    })
  }, [currentPage, normalSize, noticeList.length, normalList.length])

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
          {noticeList.map((data, idx) => (
            <NoticeTbodyRow
              key={idx}
              openModal={openModal}
              seq='공지'
              data={data}
            />
          ))}
          {pagination &&
            normalList
              .slice(pagination.start, pagination.end)
              .map((data, idx) => (
                <NoticeTbodyRow
                  key={idx}
                  openModal={openModal}
                  seq={normalList.length - idx}
                  data={data}
                />
              ))}
        </tbody>
      </table>
      <div className='flex items-center justify-center m-auto text-[12px] mt-10 space-x-1'>
        <span className='group cursor-pointer'>
          <ChevronLeft className='w-5 h-[32px] fill-gray-500 group-hover:fill-white rounded-md group-hover:bg-gray-900' />
        </span>
        {new Array(pagination?.totalPage).fill(0).map((_, idx) => (
          <span
            className={`p-2 rounded-md font-bold ${
              currentPage === idx + 1
                ? 'bg-gray-300 text-gray-900'
                : 'hover:bg-gray-900 hover:text-white cursor-pointer text-gray-500'
            } `}
            onClick={() => onChangePage(idx + 1)}
          >
            {idx + 1}
          </span>
        ))}

        <span className='group cursor-pointer'>
          <ChevronRight className='w-5 h-[32px] fill-gray-500 group-hover:fill-white rounded-md group-hover:bg-gray-900' />
        </span>
      </div>
      {open && modalProps && (
        <NoticeModal closeModal={closeModal} data={modalProps} />
      )}
    </PageLayout>
  )
}

export default Notice
