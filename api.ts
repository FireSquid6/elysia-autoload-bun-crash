import { Elysia } from "elysia"
import { autoload } from "elysia-autoload"


export const app = new Elysia()
  .use(await autoload())

export type App = typeof app
