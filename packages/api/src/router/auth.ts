import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const authUsingEmailRouter = router({
  auth: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findFirst({
        where: { email: input.email, password: input.password },
      });
    }),
});
