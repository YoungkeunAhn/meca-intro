declare type SectionBaseType = {
  title: string
  mainText?: string
  subText?: string
}

declare interface SectionSeviceType extends SectionBaseType {
  content: { icon: string; title: string; text: string }[]
}
