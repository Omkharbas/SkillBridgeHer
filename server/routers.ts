import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { storagePut } from "./storage";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  storage: router({
    uploadProfileAsset: protectedProcedure
      .input(z.object({ filename: z.string(), contentType: z.string(), base64Data: z.string() }))
      .mutation(async ({ ctx, input }) => {
        const buffer = Buffer.from(input.base64Data.replace(/^data:.*;base64,/, ""), "base64");
        const key = `profiles/${ctx.user.id}/${Date.now()}-${input.filename}`;
        const result = await storagePut(key, buffer, input.contentType);
        return { url: result.url, key: result.key };
      }),
  }),
});

export type AppRouter = typeof appRouter;
