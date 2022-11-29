import { router } from "../trpc";
import { authUsingEmailRouter } from "./auth";

export const appRouter = router({
  authEmail: authUsingEmailRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
