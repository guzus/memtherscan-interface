export function memeFetch() {

    const BASE_URL = 'https://crypto-meme-server-k5sr2csqpa-ue.a.run.app'

    return fetch(BASE_URL + '/image?shuffle=true').then((response)=>{
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`,
          )
        }
        return response.json()
      })
  }