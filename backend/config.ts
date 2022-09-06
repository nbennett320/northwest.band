import { readFileSync } from 'fs'

const getConfig = () => {
  const data = readFileSync('../config.json', 'utf-8')
  const conf: { store_name: string, access_token: string } = JSON.parse(data)

  return conf
}

export default getConfig()
