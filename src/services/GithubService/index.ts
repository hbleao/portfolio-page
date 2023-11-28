const url = 'https://api.github.com/users/hbleao/repos'

export const githubService = {
  GetRepos: async () => {
    const httpResponse = await fetch(url)
    const repos = await httpResponse.json()
  
    return repos;
  }
}
