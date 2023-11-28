import { RepoListProps } from "./types"

export const RepoList = ({ repos }: RepoListProps) => (
  <section className='w-4/5 mx-auto mt-32'>
    <h2 className='text-5xl text-center mb-16'>Github repositories</h2>
    <div className='flex justify-center gap-8 flex-wrap'>
      {repos.length > 0 && repos.map((repo: any) => (
        <div key={repo?.name} className='h-52 flex flex-col justify-between bg-white w-80 py-4 px-4 rounded-lg'>
          <div>
            <p className='text-slate-600 ' >Id: {repo.id}</p>
            <p className='text-slate-600' >Repository: {repo.name}</p>
            <p className='text-slate-600'>Language: {repo.language}</p>
            <p className='text-slate-600'>Created at: {repo.created_at}</p>
          </div>
          <a href={repo.html_url}>
            <p className='bg-slate-700 text-white py-2 rounded text-center'>Visit</p>
          </a>
        </div>
      ))}
    </div>
  </section>
)

