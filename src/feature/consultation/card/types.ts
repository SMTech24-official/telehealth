type ConsultationProps = {
  name: string;
  title: string;
  location: string;
  availability: boolean;
  hourlyRate: string;
  rating: number;
  skills: string[];
  description: string;
  imageUrl: string;
  bio: string;
};

export type ConsultationCardProps = ConsultationProps & {
  onMessage: () => void;
  onVisitProfile: () => void;
};
