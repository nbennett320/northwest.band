const dev = "https://development.server"
const prod = "https://production.server"
export default process.env.NODE_ENV === 'development' ? dev : prod