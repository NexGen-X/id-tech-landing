export interface Plan {
  id: 'FREE_TRIAL' | 'STARTER' | 'PRO' | 'ENTERPRISE';
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  taskQuota: number | string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  workspaceName: string;
}
