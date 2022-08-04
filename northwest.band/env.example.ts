export const SERVER_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:4432'
  : 'https://server.ip'
