import { fetchUserRepos } from '@/services/github'
import type { GithubResponse } from '@/types/github'
import { useQuery } from '@tanstack/react-query'

export function useGithub() {
  return useQuery<GithubResponse[]>({
    queryKey: ['user-repos'],
    queryFn: fetchUserRepos,
    retry: 2,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  })
}
