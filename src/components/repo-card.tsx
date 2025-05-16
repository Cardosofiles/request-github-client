import type { GithubResponse } from '@/types/github'

type RepoCardProps = {
  repo: GithubResponse
}

export function RepoCard({ repo }: RepoCardProps) {
  return (
    <div className="border p-4 rounded shadow hover:bg-violet-400">
      <h2 className="text-lg font-semibold">{repo.name}</h2>
      <p className="text-sm text-gray-600">{repo.description}</p>

      <div className="w-full py-2">
        <img
          src={repo.owner.avatar_url}
          alt={`Avatar do dono do repositório ${repo.name}`}
          className="w-20 h-20 rounded-full object-cover mx-auto"
        />
      </div>

      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline flex items-center gap-2 justify-center"
      >
        Acessar repositório
      </a>
    </div>
  )
}
