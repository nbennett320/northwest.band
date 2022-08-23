const dev = "http://localhost:3001"
const prod = ""
export default process.env.NODE_ENV === 'development' 
  ? dev 
  : prod