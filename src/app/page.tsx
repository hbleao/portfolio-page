'use client'
import { Footer, Form, Header, Profile, RepoList } from '@/components'
import { githubService } from '@/services'
import { useEffect, useState } from 'react'

export default function Home() {
  const [repos, setRepos] = useState<any>([])
  const [state, setState] = useState<any>({
    name: '',
    email: '',
    enquiry: '',
    message: ''
  })

  const headerLinks = [
    {
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/henrique-braga/'
    },
    {
      label: 'Github',
      url: ''
    },
    {
      label: 'Email',
      url: ''
    }
  ]

  async function handleRepos() {
    try {
      const data = await githubService.GetRepos() as any

      setRepos(data)
    } catch (error) {
      console.error('githubService', error)
    }    
  }

  function handleSubmit(e: any) {
    e.preventDefault()

    alert('Obrigado pela mensagem')
  }

  useEffect(() => {
    handleRepos()
  }, [])

  return (
    <main className="bg-slate-500">
      <Header links={headerLinks} />
      <Profile />
      <RepoList repos={repos} />
      <Form handleSubmit={handleSubmit} state={state} setState={setState} />
      <Footer />
    </main>
  )
}
