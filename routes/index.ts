import type { App } from "../api"


export default (app: App) => {
  app.get('/', () => {
    return "hello world!"
  })
}
