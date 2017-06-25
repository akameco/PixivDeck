// @flow
export type COLOSE_ILLUST_VIEWER_TYPE = 'IllustPreview/close'
export type OPEN_ILLUST_VIEWER_TYPE = 'IllustPreview/open'

export type Action = {|
  +type: OPEN_ILLUST_VIEWER_TYPE | COLOSE_ILLUST_VIEWER_TYPE,
|}

// closeImageView,
// finishImgLoaded,
// startImgLoading,
