declare type SectionBase = {
  id: string
  title: string
  mainText?: string
  subText?: string
}

declare interface SectionSevice extends SectionBase {
  content: { icon: string; title: string; text: string }[]
}

declare interface SectionPortfolio extends SectionBase {
  content: PortfolioContent[]
}

declare type PortfolioContent = {
  mainIdx: number
  title: string
  location: string
  date: string
  inquiry: string
  images: string[]
}

declare interface SectionMecastage extends SectionBase {
  content: { image: string; title: string; text: string }[]
}

declare interface SectionWork extends SectionBase {
  content: string[]
}

declare interface SectionContact extends SectionBase {}
