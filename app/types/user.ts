export interface User {
  id: number
  name: string
  account: string
  profileImageUrls: {
    medium: string
  }
  isFollowed: boolean
  comment?: string
}
export interface Profile {
  backgroundImageUrl: string
  birth: string
  gender: string
  isPremium: boolean
  region: string
  totalFollowUsers: number
  totalFollower: number
  totalIllustBookmarksPublic: number
  totalIllusts: number
  totalManga: number
  totalMypixivUsers: number
  totalNovels: number
  twitterAccounts: string
  twitterUrl: string | null | undefined
  webpage: string
}
export interface Users {
  [key: number]: User
}
