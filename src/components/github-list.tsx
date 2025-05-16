'use client'

import { useGithub } from '@/hooks/useGithub'
import { EmptyMessage } from './empty-message'
import { ErrorMessage } from './error-message'
import { Loader } from './loader'
import { RepoCard } from './repo-card'

export function GithubList() {
  const { data, isPending, error } = useGithub()

  if (isPending) return <Loader />
  if (error instanceof Error) return <ErrorMessage message={error.message} />
  if (!data || data.length < 0) return <EmptyMessage />

  return (
    <div className="grid grid-cols-5 gap-4 p-4 w-7xl">
      {data.map(repo => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  )
}
