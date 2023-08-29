const mapping: Record<string, string> = {
  admins: 'admin',
  companies: 'company',
  rentals: 'rental',
  tools: 'tool',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
