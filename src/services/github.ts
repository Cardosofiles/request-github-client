import type { GithubResponse } from '@/types/github'
import { api } from './api'

export const fetchUserRepos = async (): Promise<GithubResponse[]> => {
  const { data } = await api.get('/users/Cardosofiles/repos')
  return data
}
