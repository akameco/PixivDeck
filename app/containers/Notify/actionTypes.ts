export type ADD_NOTIFY_TYPE = 'Notify/add'
export type ADD_NOTIFY_WITH_ILLUST_TYPE = 'Notify/ADD_NOTIFY_WITH_ILLUST'
export type Action =
  | {
      type: ADD_NOTIFY_TYPE
    }
  | {
      type: ADD_NOTIFY_WITH_ILLUST_TYPE
      title: string
      id: number
    }
