// @flow

export type Account = {|
  +account: string,
  +id: string,
  +isMailAuthorized: boolean,
  +isPremium: boolean,
  +mailAddress: string,
  +name: string,
  +profileImageUrls: {|
    +px16x16: string,
    +px50x50: string,
    +px170x170: string,
  |},
  +xRestrict: number,
|}
