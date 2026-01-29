import type { StateCode, StateConfig, LayerConfig } from "@/types";

// State names mapping
const STATE_NAMES: Record<StateCode, string> = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California",
  CO: "Colorado", CT: "Connecticut", DE: "Delaware", FL: "Florida", GA: "Georgia",
  HI: "Hawaii", ID: "Idaho", IL: "Illinois", IN: "Indiana", IA: "Iowa",
  KS: "Kansas", KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland",
  MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MS: "Mississippi", MO: "Missouri",
  MT: "Montana", NE: "Nebraska", NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey",
  NM: "New Mexico", NY: "New York", NC: "North Carolina", ND: "North Dakota", OH: "Ohio",
  OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina",
  SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont",
  VA: "Virginia", WA: "Washington", WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming",
};

// Helper to create placeholder resources for a state
const createPlaceholderState = (code: StateCode): StateConfig => ({
  code,
  name: STATE_NAMES[code],
  resources: {
    ibewDistricts: {
      id: `${code.toLowerCase()}-ibew-1`,
      type: "placeholder",
      title: "IBEW Districts",
      message: `IBEW Districts coming soon for ${STATE_NAMES[code]}`,
    },
    ibewRosendinContacts: {
      id: `${code.toLowerCase()}-ibew-rosendin-1`,
      type: "placeholder",
      title: "IBEW Rosendin Contacts",
      message: `IBEW Rosendin Contacts coming soon for ${STATE_NAMES[code]}`,
    },
    necaChapters: {
      id: `${code.toLowerCase()}-neca-1`,
      type: "placeholder",
      title: "NECA Chapters",
      message: `NECA Chapters coming soon for ${STATE_NAMES[code]}`,
    },
    necaRosendinContacts: {
      id: `${code.toLowerCase()}-neca-rosendin-1`,
      type: "placeholder",
      title: "NECA Rosendin Contacts",
      message: `NECA Rosendin Contacts coming soon for ${STATE_NAMES[code]}`,
    },
    activeProjects: {
      id: `${code.toLowerCase()}-projects-1`,
      type: "placeholder",
      title: "Active Projects",
      message: `Active Projects coming soon for ${STATE_NAMES[code]}`,
    },
    license: {
      id: `${code.toLowerCase()}-license-1`,
      type: "placeholder",
      title: "License Information",
      message: `License information coming soon for ${STATE_NAMES[code]}`,
    },
  },
});

// Map configuration for all states
export const MAP_CONFIG: Record<StateCode, StateConfig> = {
  CA: {
    code: "CA",
    name: "California",
    resources: {
      ibewDistricts: {
        id: "ca-ibew-1",
        type: "pdf",
        title: "IBEW California Districts",
        url: "https://ibew.org/wp-content/uploads/2024/10/CA_Inside_Final.pdf",
      },
      necaChapters: {
        id: "ca-neca-1",
        type: "external-link",
        title: "NECA California Chapters",
        url: "https://www.necanet.org/find-a-local-chapter?pg=1&searchWithin=california",
      },
      ibewRosendinContacts: {
        id: "ca-ibew-rosendin-1",
        type: "placeholder",
        title: "IBEW Rosendin Contacts",
        message: "IBEW Rosendin Contacts coming soon for California",
      },
      necaRosendinContacts: {
        id: "ca-neca-rosendin-1",
        type: "placeholder",
        title: "NECA Rosendin Contacts",
        message: "NECA Rosendin Contacts coming soon for California",
      },
      activeProjects: {
        id: "ca-projects-1",
        type: "placeholder",
        title: "Active Projects",
        message: "Active Projects coming soon for California",
      },
      license: {
        id: "ca-license-1",
        type: "placeholder",
        title: "License Information",
        message: "License information coming soon for California",
      },
    },
  },

  NY: {
    code: "NY",
    name: "New York",
    resources: {
      ibewDistricts: {
        id: "ny-ibew-1",
        type: "pdf",
        title: "IBEW New York Districts",
        url: "https://ibew.org/wp-content/uploads/2024/10/NY_Inside_Final.pdf",
      },
      necaChapters: {
        id: "ny-neca-1",
        type: "external-link",
        title: "NECA New York Chapters",
        url: "https://www.necanet.org/find-a-local-chapter?pg=1&searchWithin=new-york",
      },
      ibewRosendinContacts: {
        id: "ny-ibew-rosendin-1",
        type: "placeholder",
        title: "IBEW Rosendin Contacts",
        message: "IBEW Rosendin Contacts coming soon for New York",
      },
      necaRosendinContacts: {
        id: "ny-neca-rosendin-1",
        type: "placeholder",
        title: "NECA Rosendin Contacts",
        message: "NECA Rosendin Contacts coming soon for New York",
      },
      activeProjects: {
        id: "ny-projects-1",
        type: "placeholder",
        title: "Active Projects",
        message: "Active Projects coming soon for New York",
      },
      license: {
        id: "ny-license-1",
        type: "placeholder",
        title: "License Information",
        message: "License information coming soon for New York",
      },
    },
  },

  TX: {
    code: "TX",
    name: "Texas",
    resources: {
      ibewDistricts: {
        id: "tx-ibew-1",
        type: "pdf",
        title: "IBEW Texas Districts",
        url: "https://ibew.org/wp-content/uploads/2024/10/TX_Inside_Final.pdf",
      },
      necaChapters: {
        id: "tx-neca-1",
        type: "external-link",
        title: "NECA Texas Chapters",
        url: "https://www.necanet.org/find-a-local-chapter?pg=1&searchWithin=texas",
      },
      ibewRosendinContacts: {
        id: "tx-ibew-rosendin-1",
        type: "placeholder",
        title: "IBEW Rosendin Contacts",
        message: "IBEW Rosendin Contacts coming soon for Texas",
      },
      necaRosendinContacts: {
        id: "tx-neca-rosendin-1",
        type: "placeholder",
        title: "NECA Rosendin Contacts",
        message: "NECA Rosendin Contacts coming soon for Texas",
      },
      activeProjects: {
        id: "tx-projects-1",
        type: "placeholder",
        title: "Active Projects",
        message: "Active Projects coming soon for Texas",
      },
      license: {
        id: "tx-license-1",
        type: "placeholder",
        title: "License Information",
        message: "License information coming soon for Texas",
      },
    },
  },

  // All other states with placeholder data
  AL: createPlaceholderState("AL"),
  AK: createPlaceholderState("AK"),
  AZ: createPlaceholderState("AZ"),
  AR: createPlaceholderState("AR"),
  CO: createPlaceholderState("CO"),
  CT: createPlaceholderState("CT"),
  DE: createPlaceholderState("DE"),
  FL: createPlaceholderState("FL"),
  GA: createPlaceholderState("GA"),
  HI: createPlaceholderState("HI"),
  ID: createPlaceholderState("ID"),
  IL: createPlaceholderState("IL"),
  IN: createPlaceholderState("IN"),
  IA: createPlaceholderState("IA"),
  KS: createPlaceholderState("KS"),
  KY: createPlaceholderState("KY"),
  LA: createPlaceholderState("LA"),
  ME: createPlaceholderState("ME"),
  MD: createPlaceholderState("MD"),
  MA: createPlaceholderState("MA"),
  MI: createPlaceholderState("MI"),
  MN: createPlaceholderState("MN"),
  MS: createPlaceholderState("MS"),
  MO: createPlaceholderState("MO"),
  MT: createPlaceholderState("MT"),
  NE: createPlaceholderState("NE"),
  NV: createPlaceholderState("NV"),
  NH: createPlaceholderState("NH"),
  NJ: createPlaceholderState("NJ"),
  NM: createPlaceholderState("NM"),
  NC: createPlaceholderState("NC"),
  ND: createPlaceholderState("ND"),
  OH: createPlaceholderState("OH"),
  OK: createPlaceholderState("OK"),
  OR: createPlaceholderState("OR"),
  PA: createPlaceholderState("PA"),
  RI: createPlaceholderState("RI"),
  SC: createPlaceholderState("SC"),
  SD: createPlaceholderState("SD"),
  TN: createPlaceholderState("TN"),
  UT: createPlaceholderState("UT"),
  VT: createPlaceholderState("VT"),
  VA: createPlaceholderState("VA"),
  WA: createPlaceholderState("WA"),
  WV: createPlaceholderState("WV"),
  WI: createPlaceholderState("WI"),
  WY: createPlaceholderState("WY"),
};

// Layer configuration
export const LAYER_CONFIG: Record<string, LayerConfig> = {
  ibewDistricts: {
    id: "ibewDistricts",
    label: "IBEW districts",
    icon: "Building2",
    defaultChecked: true,
    color: "gold",
  },
  ibewRosendinContacts: {
    id: "ibewRosendinContacts",
    label: "IBEW Rosendin Contacts",
    icon: "Users",
    defaultChecked: false,
    color: "blue",
  },
  necaChapters: {
    id: "necaChapters",
    label: "NECA chapters",
    icon: "Building",
    defaultChecked: false,
    color: "cyan",
  },
  necaRosendinContacts: {
    id: "necaRosendinContacts",
    label: "NECA Rosendin Contacts",
    icon: "UserCircle",
    defaultChecked: false,
    color: "emerald",
  },
  activeProjects: {
    id: "activeProjects",
    label: "Active Projects",
    icon: "FolderKanban",
    defaultChecked: false,
    color: "purple",
  },
  license: {
    id: "license",
    label: "License",
    icon: "FileText",
    defaultChecked: false,
    color: "orange",
  },
};

// Helper function to check if a state has data configured (now all states have at least placeholder data)
export const hasStateData = (stateCode: string): boolean => {
  return stateCode in MAP_CONFIG;
};

// Helper to check if a state has actual (non-placeholder) resources
export const hasRealResources = (stateCode: StateCode): boolean => {
  const state = MAP_CONFIG[stateCode];
  if (!state) return false;

  return Object.values(state.resources).some(
    (resource) => resource && (resource.type === "pdf" || resource.type === "external-link")
  );
};

// Get configured states
export const getConfiguredStates = (): StateCode[] => {
  return Object.keys(MAP_CONFIG) as StateCode[];
};
