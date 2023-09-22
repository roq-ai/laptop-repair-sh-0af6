interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: [
    'Business Owner',
    'IT Manager',
    'Service Technician',
    'End Customer',
    'Customer Service Representative',
  ],
  tenantName: 'Company',
  applicationName: 'Laptop repair shop',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read laptop inventory', 'Read warranty details', 'Create service ticket', 'Read service status'],
  ownerAbilities: [
    'Manage laptop inventory',
    'Manage warranty details',
    'Manage service locations',
    'Manage service parts',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/f596f84e-991a-464b-9c66-626290c9f481',
};
