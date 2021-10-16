import dotenv from 'dotenv'

dotenv.config()

const APP_PORT = process.env.APP_PORT || 3000

export default {
  verbose: true,
  displayName: 'Personnel management service',
  globals: {
    __SERVER__: `http://localhost:${APP_PORT}`,
  },
}
