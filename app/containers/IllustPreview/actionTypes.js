// @flow
export type OPEN_ILLUST_VIEWER_TYPE = 'IllustPreview/open'
export type COLOSE_ILLUST_VIEWER_TYPE = 'IllustPreview/close'

export type START_IMG_LOADING_TYPE = 'IllustPreview/START_IMG_LOADING'
export type FINISH_IMG_LOADING_TYPE = 'IllustPreview/FINISH_IMG_LOADING'

export type Action =
  | {|
      +type:
        | COLOSE_ILLUST_VIEWER_TYPE
        | START_IMG_LOADING_TYPE
        | FINISH_IMG_LOADING_TYPE,
    |}
  | {| +type: OPEN_ILLUST_VIEWER_TYPE, id: number |}
