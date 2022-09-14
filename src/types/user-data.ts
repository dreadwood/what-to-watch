export type UserData = {
  id: number
  email: string
  token: string
  name: string
  avatarUrl: string
}

// TODO: 2022-09-14 / упростить если нужен только avatarUrl
export type StateUserData = Omit<UserData, 'token'>
