export type EducationEntry = {
  institution: string;
  degree: string;
  location?: string;
  start: string;
  end: string;
};

export const education: EducationEntry[] = [
  {
    institution: 'University of the Punjab',
    degree: 'Bachelor of Science (Information Technology)',
    location: 'Lahore, Pakistan',
    start: '2010',
    end: '2014',
  },
];
