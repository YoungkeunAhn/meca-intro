declare type SectionBaseType = {
  title: string
  mainText?: string
  subText?: string
}

declare interface SeviceSectionType extends SectionBaseType {
  content: { icons: string; title: string; text: string }[]
}
