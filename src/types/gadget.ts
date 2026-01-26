export interface Gadget {
    id: number;
    name: string;
    description: string;
    icon?: string;
    route: string;
    category?: string;
    isActive?: boolean;
    tags?: string[];
  }