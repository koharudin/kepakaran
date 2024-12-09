import { z } from "zod"
import { publicProcedure, router } from "../trpc"

export const bookRouter = router({
 
  getz: publicProcedure.query(async ({ input, ctx }) => {
    return 123
  }),
  get: publicProcedure
  
  .input(
    z.object({
      isFavorite: z.boolean(),
    })
  )
    .query(() => {
      return `1234`
    }),
  delete: publicProcedure
    .input(
      z.object({
        bookId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const data = await ctx.prisma.books.delete({
        where: {
          id: input.bookId,
        },
      })
      return { data }
    }),
  updateFavorite: publicProcedure
    .input(
      z.object({
        bookId: z.string(),
        isFavorite: z.boolean(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const data = await ctx.prisma.books.update({
        where: {
          id: input.bookId,
        },
        data: { isFavorite: input.isFavorite },
      })
      return { data }
    }),
})
