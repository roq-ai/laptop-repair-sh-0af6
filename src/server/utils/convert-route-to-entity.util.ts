const mapping: Record<string, string> = {
  companies: 'company',
  'laptop-inventories': 'laptop_inventory',
  'laptop-models': 'laptop_model',
  'laptop-owners': 'laptop_owner',
  'service-histories': 'service_history',
  'service-locations': 'service_location',
  'service-parts': 'service_parts',
  'service-statuses': 'service_status',
  'service-tickets': 'service_ticket',
  'service-types': 'service_type',
  users: 'user',
  'warranty-details': 'warranty_details',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
