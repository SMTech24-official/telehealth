
export enum AvailabilityDay {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
  AnyDay = "AnyDay"
}

export enum AvailabilityTime {
  Morning = "Morning",
  Noon = "Noon",
  Afternoon = "Afternoon",
  Evening = "Evening",
  Night = "Night",
  AnyTime = "AnyTime"
}
export type Clinician = {
  id: string;
  userId: string;
  email: string;
  name: string;
  practice: string;
  image: string | null;
  qualifications: string;
  descriptions: string;
  about: string;
  portfolioLink: string;
  therapeuticMethods: string[];
  specialities: string[];
  serviceTypes: string[];
  agesServed: string[];
  latitude: number;
  longitude: number;
  location: string;
  availabilityDay: AvailabilityDay[];
  availabilityTime: AvailabilityTime[];
  telehealthOnly: boolean;
  isCalendarConnected: boolean;
  googleRefreshToken: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ClinicianCardProps = {
    id: string;
    name: string;
    practice: string;
    descriptions: string;
    qualifications: string;
    image: string | null;
    location: string;
    telehealthOnly: boolean;
    specialities: string[];
    onMessage: () => void;
    onVisitProfile: () => void;
    onLocation: () => void;
  };
