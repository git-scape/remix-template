import { z } from "zod";

const envSchema = z.object({
  SITE_URL: z.string().min(1, "The SITE_URL should be defined."),
});
declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}

export function init() {
  envSchema.parse(process.env);
}
