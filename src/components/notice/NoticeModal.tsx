import React from 'react'
import ModalContent from '../../common/modal/ModalContent'
import ModalTitle from '../../common/modal/ModalTitle'
import ModalWrapper from '../../common/modal/ModalWrapper'

type Props = {
  data: NoticeData
  closeModal: () => void
}

function NoticeModal(props: Props) {
  const { data, closeModal } = props

  window.addEventListener('keyup', function (e) {
    if (e.key === 'Escape') {
      closeModal()
    }
  })

  return (
    <ModalWrapper onClose={closeModal}>
      <ModalContent>
        <ModalTitle title={data.title} onClose={closeModal} />
        <div
          className='p-4 overflow-y-auto h-full noticeContent'
          dangerouslySetInnerHTML={{ __html: data.content }}
        ></div>
      </ModalContent>
    </ModalWrapper>
  )
}

export default NoticeModal
