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

  const argv = process.argv.slice(2)
  for(let i = 0; i < argv.length; i++) {
    const value = argv[i]

    switch(value) {
      case '-e':
      case '--env':
        if(i+1 < argv.length) {
          const env = argv[i+1] 
          if(env === 'development' || env === 'production') {
            args.env = env
          } else {
            console.warn("Unknown environment argument: ", env)
          }

          i += 2
        }
        break
      default:
        console.warn(`Unknown argument at argv[${i}]: `, value)
        break
    }
  }

  return args
}

export const config = getConfig()
export const args = getArgs()
