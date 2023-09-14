export type TLang = 'en' | 'ru' | 'tr';

export interface IExperience {
  name: string;
  website: string;
  title: string;
  start: string;
  end: string;
  tasks: string[];
  subtitle?: string;
}
