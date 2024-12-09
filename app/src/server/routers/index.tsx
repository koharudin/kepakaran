import { router } from "../trpc"
import { bookRouter } from "@/server/routers/book"

export const appRouter = router({
  book: bookRouter,
})

export type AppRouter = typeof appRouter