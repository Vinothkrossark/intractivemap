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
    necaChapters: {
      id: `${code.toLowerCase()}-neca-1`,
      type: "placeholder",
      title: "NECA Chapters",
      message: `NECA Chapters coming soon for ${STATE_NAMES[code]}`,
    },
    licenses: {
      id: `${code.toLowerCase()}-licenses-1`,
      type: "placeholder",
      title: "Licenses",
      message: `License information coming soon for ${STATE_NAMES[code]}`,
    },
    activeParticipantList: {
      id: `${code.toLowerCase()}-participant-1`,
      type: "excel-viewer",
      title: "NECA - IBEW Rosendin Contacts",
      url: "/documents/NECA - IBEW Rosendin Contacts.xlsx",
    },
    cbasMous: {
      id: `${code.toLowerCase()}-cbas-1`,
      type: "placeholder",
      title: "CBAs and MOUs",
      message: `CBAs and MOUs coming soon for ${STATE_NAMES[code]}`,
    },
    activeProjects: {
      id: `${code.toLowerCase()}-projects-1`,
      type: "placeholder",
      title: "Active Projects",
      message: `Active Projects coming soon for ${STATE_NAMES[code]}`,
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
        title: "IBEW Districts",
        url: "https://ibew.org/wp-content/uploads/2024/10/CA_Inside_Final.pdf",
      },
      necaChapters: {
        id: "ca-neca-1",
        type: "external-link",
        title: "NECA Chapters",
        url: "https://www.necanet.org/find-a-local-chapter?pg=1&chapterregions=Western%20Region&addressstate=California",
      },
      licenses: {
        id: "ca-licenses-1",
        type: "placeholder",
        title: "Licenses",
        message: "License information coming soon for California",
      },
      activeParticipantList: {
        id: "ca-participant-1",
        type: "excel-viewer",
        title: "NECA - IBEW Rosendin Contacts",
        url: "/documents/NECA - IBEW Rosendin Contacts.xlsx",
      },
      cbasMous: {
        id: "ca-cbas-1",
        type: "placeholder",
        title: "CBAs and MOUs",
        message: "CBAs and MOUs coming soon for California (Shared file location TBD)",
      },
      activeProjects: {
        id: "ca-projects-1",
        type: "placeholder",
        title: "Active Projects",
        message: "Active Projects coming soon for California",
      },
    },
  },

  VA: {
    code: "VA",
    name: "Virginia",
    resources: {
      ibewDistricts: {
        id: "va-ibew-1",
        type: "pdf",
        title: "IBEW Districts",
        url: "https://ibew.org/wp-content/uploads/2024/10/VA_Inside_Final.pdf",
      },
      necaChapters: {
        id: "va-neca-1",
        type: "external-link",
        title: "NECA Chapters",
        url: "https://www.necanet.org/find-a-local-chapter?pg=1&addressstate=Virginia",
      },
      licenses: {
        id: "va-licenses-1",
        type: "placeholder",
        title: "Licenses",
        message: "License information coming soon for Virginia",
      },
      activeParticipantList: {
        id: "va-participant-1",
        type: "excel-viewer",
        title: "NECA - IBEW Rosendin Contacts",
        url: "/documents/NECA - IBEW Rosendin Contacts.xlsx",
      },
      cbasMous: {
        id: "va-cbas-1",
        type: "placeholder",
        title: "CBAs and MOUs",
        message: "CBAs and MOUs coming soon for Virginia (Shared file location TBD)",
      },
      activeProjects: {
        id: "va-projects-1",
        type: "placeholder",
        title: "Active Projects",
        message: "Active Projects coming soon for Virginia",
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
  NY: createPlaceholderState("NY"),
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
  TX: createPlaceholderState("TX"),
  UT: createPlaceholderState("UT"),
  VT: createPlaceholderState("VT"),
  WA: createPlaceholderState("WA"),
  WV: createPlaceholderState("WV"),
  WI: createPlaceholderState("WI"),
  WY: createPlaceholderState("WY"),
};

// Layer configuration
export const LAYER_CONFIG: Record<string, LayerConfig> = {
  ibewDistricts: {
    id: "ibewDistricts",
    label: "IBEW Districts",
    icon: "Building2",
    defaultChecked: true,
    color: "gold",
  },
  necaChapters: {
    id: "necaChapters",
    label: "NECA Chapters",
    icon: "Building",
    defaultChecked: false,
    color: "cyan",
  },
  licenses: {
    id: "licenses",
    label: "Licenses",
    icon: "FileText",
    defaultChecked: false,
    color: "orange",
  },
  activeParticipantList: {
    id: "activeParticipantList",
    label: "Active Participant List",
    icon: "Users",
    defaultChecked: false,
    color: "blue",
  },
  cbasMous: {
    id: "cbasMous",
    label: "CBAs and MOUs",
    icon: "FileStack",
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
    (resource) => resource && (resource.type === "pdf" || resource.type === "external-link" || resource.type === "excel-viewer")
  );
};

// Get configured states
export const getConfiguredStates = (): StateCode[] => {
  return Object.keys(MAP_CONFIG) as StateCode[];
};
