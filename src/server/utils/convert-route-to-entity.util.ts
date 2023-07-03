const mapping: Record<string, string> = {
  invitations: 'invitation',
  renamedpublics: 'Renamedpublic',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
