import i18n from '@/i18n';
import { IExperience } from '@/types';

export const experience: { [name: string]: IExperience } = {
  EktaChain: {
    website: 'https://ekta.io/',
    name: i18n.t('experience.ekta.company'),
    title: i18n.t('experience.ekta.title'),
    start: i18n.t('experience.ekta.start'),
    end: i18n.t('experience.ekta.end'),
    tasks: i18n.t('experience.ekta.tasks', { returnObjects: true }),
    subtitle: '',
  },
  Neti: {
    website: 'https://i-neti.ru/',
    name: i18n.t('experience.neti.company'),
    title: i18n.t('experience.neti.title'),
    start: i18n.t('experience.neti.start'),
    end: i18n.t('experience.neti.end'),
    tasks: i18n.t('experience.neti.tasks', { returnObjects: true }),
    subtitle: '',
  },
  Freelance: {
    website: 'https://freelance.ru/begmuhommet',
    name: i18n.t('experience.freelance.company'),
    title: i18n.t('experience.freelance.title'),
    start: i18n.t('experience.freelance.start'),
    end: i18n.t('experience.freelance.end'),
    tasks: i18n.t('experience.freelance.tasks', { returnObjects: true }),
    subtitle: '',
  },
};
