// State codes for all US states
export type StateCode =
  | "AL" | "AK" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "FL" | "GA"
  | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD"
  | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ"
  | "NM" | "NY" | "NC" | "ND" | "OH" | "OK" | "OR" | "PA" | "RI" | "SC"
  | "SD" | "TN" | "TX" | "UT" | "VT" | "VA" | "WA" | "WV" | "WI" | "WY";

// Layer/checkbox types
export type LayerType =
  | "ibewDistricts"
  | "ibewRosendinContacts"
  | "necaChapters"
  | "necaRosendinContacts"
  | "activeProjects"
  | "license";

// Resource types
export type ResourceType = "pdf" | "external-link" | "placeholder";

// Resource interface
export interface Resource {
  id: string;
  type: ResourceType;
  title: string;
  description?: string;
  url?: string;
  message?: string;
  icon?: string; // Lucide icon name
}

// State configuration
export interface StateConfig {
  code: StateCode;
  name: string;
  resources: Partial<Record<LayerType, Resource>>;
}

// Layer configuration
export interface LayerConfig {
  id: LayerType;
  label: string;
  icon: string;
  defaultChecked: boolean;
  color: string;
}

// Map paths type
export type MapPaths = Record<StateCode, string>;
