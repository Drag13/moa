export const AppRoutes = {
  Logs: () => "/logs" as const,
  Calculator: () => "/" as const,
  Ammo: (code?: string) => (code ? (`/ammo/${code}` as const) : `/ammo/:code`),
};

export type AppPath = ReturnType<typeof AppRoutes[keyof typeof AppRoutes]>;
