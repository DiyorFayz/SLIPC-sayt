export type Language = 'uz' | 'ru' | 'en';

export type RoomCategory = 
  | 'all'
  | 'sintez-insilico'
  | 'instrumental'
  | 'in-vitro'
  | 'in-vivo'
  | 'vivariy';

export interface RoomEquipmentItem {
  name: string;
  model: string;
  specs: string;
  role: string;
}

export interface RoomMethodology {
  id: string;
  name: string;
  description: string;
  targetMetric: string;
  standardProtocol: string;
}

export interface AcademicLinkItem {
  title: string;
  type: 'protocol' | 'database' | 'publication' | 'passport' | 'dataset';
  url: string;
  isExternal?: boolean;
}

export interface RoomResearchPillar {
  id: string;
  number: number;
  title: Record<Language, string>;
  description: Record<Language, string>;
  image: string;
  tags: string[];
}

export interface CellLineInfo {
  name: string;
  category: Record<Language, string>;
  origin: Record<Language, string>;
  badgeColor?: string;
}

export interface LabRoom {
  id: string;
  code: string; // e.g. "LAB-IV-101"
  number: number;
  slug: string;
  category: RoomCategory;
  accentColor: string; // HEX
  lightTint: string; // HEX
  darkColor: string; // HEX
  
  // Multilingual content
  title: Record<Language, string>;
  subTitle: Record<Language, string>;
  shortDescription: Record<Language, string>;
  fullFocus: Record<Language, string>;
  
  headOfRoom: {
    name: string;
    degree: string;
    orcid?: string;
    email: string;
  };
  
  location: {
    floor: string;
    roomNumber: string;
    area: string; // m²
    biosafetyLevel: string; // e.g. BSL-2
  };
  
  keyEquipment: RoomEquipmentItem[];
  methodologies: RoomMethodology[];
  methodologyTags: string[];
  cellLinesOrModels?: string[];
  cellLinesList?: CellLineInfo[];
  academicLinks: AcademicLinkItem[];
  researchPillars?: RoomResearchPillar[];
  vivariumDetails?: {
    zones: {
      number: number;
      name: Record<Language, string>;
      description: Record<Language, string>;
    }[];
    staffRoles?: {
      role: Record<Language, string>;
      description: Record<Language, string>;
    }[];
    checklist: {
      criteria: Record<Language, string>;
      detail: Record<Language, string>;
    }[];
    animalModels?: {
      name: Record<Language, string>;
      scientificName: string;
      strain: string;
      description: Record<Language, string>;
      image: string;
      tags: string[];
    }[];
  };
  
  operationalSpecs: {
    temperature: string;
    humidity: string;
    airCleanliness: string; // e.g. ISO Class 7 / Class 10,000
    certification: string;
  };
}

export interface Equipment {
  id: string;
  name: string;
  model: string;
  manufacturer: string;
  originCountry: string;
  roomId: string;
  roomCode: string;
  roomName: Record<Language, string>;
  accentColor: string;
  category: string;
  technicalSpecs: {
    resolution?: string;
    range?: string;
    detector?: string;
    temperatureRange?: string;
    capacity?: string;
    speed?: string;
    [key: string]: string | undefined;
  };
  scientificApplication: Record<Language, string>;
  sopCode: string;
  maintenanceStatus: 'optimal' | 'calibrated' | 'in-use';
}

export interface Publication {
  id: string;
  title: Record<Language, string>;
  authors: string;
  journal: string;
  year: number;
  quartile: 'Q1' | 'Q2' | 'Q3';
  impactFactor: number;
  doi: string;
  scopusId?: string;
  abstract: Record<Language, string>;
  roomCodes: string[];
  topics: string[];
  pdfAvailable: boolean;
}

export interface SOPDocument {
  id: string;
  code: string;
  title: Record<Language, string>;
  category: string;
  version: string;
  author: string;
  approvalDate: string;
  targetRoomCode: string;
  accentColor: string;
  purpose: Record<Language, string>;
  equipmentNeeded: string[];
  reagentsNeeded: string[];
  steps: {
    step: number;
    title: Record<Language, string>;
    desc: Record<Language, string>;
  }[];
}

export interface LabMetric {
  value: string;
  label: Record<Language, string>;
  icon: string;
}

export interface ResearchProject {
  id: number;
  year: number;
  title: Record<Language, string>;
  originalTitle: string;
  authors: string;
  journal: string;
  database: Record<Language, string>;
  doi: string;
  doiUrl: string;
  coverImage?: string;
}

export type StaffCategory = 'all' | 'leadership' | 'researchers' | 'technicians' | 'quality';

export interface StaffMember {
  name: string;
  image: string;
  category: 'leadership' | 'researchers' | 'technicians' | 'quality';
  title: Record<Language, string>;
  room: Record<Language, string>;
  roomCode: string;
  orcid?: string;
  email: string;
  telegram?: string;
  focus: Record<Language, string>;
  color: string;
}


