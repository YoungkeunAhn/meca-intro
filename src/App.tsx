import React from 'react'
import { serviceSectionInfo } from './data/section-info'
import SectionLayout from './layouts/section-layout/SectionLayout'

function App() {
  return (
    <div>
      <SectionLayout sectionInfo={serviceSectionInfo}>테스트</SectionLayout>
    </div>
  )
}

export default App
