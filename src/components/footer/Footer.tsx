import React from 'react'

function Footer() {
  return (
    <footer className='mt-10 w-full py-10 flex justify-center bg-[#20003B] text-white text-xs space-x-7 tracking-normal'>
      <img
        src='logo_white.png'
        alt='메카스테이지'
        width='100px'
        className='object-contain'
      />
      <ul className='flex flex-col items-start space-y-2 mt-6'>
        <li className='flex space-x-4'>
          <span>상호 : 주식회사 메카스테이지</span>
          <span>l&nbsp;&nbsp; 대표 : 이형노</span>
          <span>l&nbsp;&nbsp; 사업자등록번호 : 868-87-02652</span>
        </li>
        <li>
          주소 : 경기도 고양시 일산동구 통일로 1267번길 143-31 가동(지영동)
        </li>
        <li>Copyright © 2022 메카스테이지 All rights reserved.</li>
      </ul>
      <ul className='flex flex-col items-start space-y-2 mt-6'>
        <li className='flex space-x-7'>
          <span className='flex'>
            <img
              src='icon_phone.png'
              alt='phone'
              width='16px'
              className='object-contain mr-2'
            />
            <span>02-1533-1902</span>
          </span>
          <span className='flex'>
            <img
              src='icon_building.png'
              alt='building'
              width='16px'
              className='object-contain mr-2'
            />
            <span>031-975-1902</span>
          </span>
          <span className='flex'>
            <img
              src='icon_email.png'
              alt='email'
              width='16px'
              className='object-contain mr-2'
            />
            <span>meca3@meca51.com</span>
          </span>
        </li>
        <li className='flex'>
          <img
            src='icon_location.png'
            alt='location'
            className='h-[18px] object-contain mr-2'
          />
          <span className='flex flex-col space-y-2'>
            <span>
              143-31, Tongil-ro 1267beon-gil, Ilsandong-gu, Goyang-si,
            </span>
            <span>Gyeonggi-do, Republic of Korea</span>
          </span>
        </li>
      </ul>
      <img
        src='qr_code.png'
        alt='qr_code'
        width='100px'
        className='object-contain'
      />
    </footer>
  )
}

export default Footer
