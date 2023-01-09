export const AppRoutes = {
  Logs: () => "/logs",
  Calculator: () => "/",
  Ammo: (code?: string) => (code ? `/ammo/${code}` : `/ammo/:code`),
  NewLogPage: () => "/new-log",
  Progress: () => "/progress",
} as const;

export type AppPath = ReturnType<typeof AppRoutes[keyof typeof AppRoutes]>;
