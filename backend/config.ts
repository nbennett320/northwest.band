import process from 'process'
import { readFileSync } from 'fs'

const getConfig = () => {
  const data = readFileSync('../config.json', 'utf-8')
  const conf: { store_name: string, access_token: string } = JSON.parse(data)

  return conf
}

const getArgs = () => {
  const args: {
    env: 'development' | 'production'
  } = {
    env: 'development',
  }

  process.argv.forEach((value, index) => {
    switch(value) {
      case '-e':
      case '--env':
        if(++index < process.argv.length) {
          const env = process.argv[++index] 
          if(env === 'development' || env === 'production') {
            args.env = env
          }
        }
        break
      default:
        console.warn(`Unknown argument at argv[${index}]: `, value)
        break
    }
  })

  return args
}

export const config = getConfig()
export const args = getArgs()
