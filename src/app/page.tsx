'use client'

import { GithubList } from '@/components/github-list'
import { ReactQueryProvider } from '@/lib/tanstack-query/provider'

export default function Home() {
  return (
    <ReactQueryProvider>
      <GithubList />
    </ReactQueryProvider>
  )
}
