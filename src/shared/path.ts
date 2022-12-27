export const AppRoutes = {
  Logs: () => "/logs",
  Calculator: () => "/",
  Ammo: (code?: string) => (code ? `/ammo/${code}` : `/ammo/:code`),
  NewLogPage: () => "/new-log",
} as const;

export type AppPath = ReturnType<typeof AppRoutes[keyof typeof AppRoutes]>;
