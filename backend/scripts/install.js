const path = require('path')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

const getPwd = async () => {
  const { err, stdout, stderr } = await exec('pwd')

  if (err) {
    console.log(`pwd error: ${err.message}`)
    return
  } else if (stderr) {
    console.log(`pwd stderr: ${stderr}`)
    return
  }

  if(/(\/.*\/)*northwest\.band\/backend/.test(stdout))

  return `${stdout.slice(0, --stdout.length)}/backend`
}

const main = async () => {
  const prefix = await getPwd()
  console.log('prefix: ',prefix)
  
}

main()
