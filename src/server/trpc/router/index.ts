// src/server/router/index.ts
import { t } from "../trpc";

import { defaultRouter } from "./default";

export const appRouter = t.router({
  default: defaultRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
