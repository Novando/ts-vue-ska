type EnvConfig = {
  env: string;
}

export const envConfig: EnvConfig = {
  env: import.meta.env.VITE_ENV || "dev",
}