type TherapistProps = {
  name: string;
  title: string;
  location: string;
  number: string;
  skills: string[];
  description: string;
  imageUrl: string;
  bio: string;
  telehealth: boolean;
};

export type TherapistCardProps = TherapistProps & {
  onMessage: () => void;
  onVisitProfile: () => void;
  onLocation: () => void;
};
