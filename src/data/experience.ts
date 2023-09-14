import { IExperience } from '@/types';

export const experience: { [name: string]: IExperience } = {
  EktaChain: {
    name: 'EktaChain',
    website: 'https://ekta.io/',
    title: 'Frontend Developer & Web Designer',
    start: 'June 2022',
    end: 'Present',
    tasks: [
      `Communication with the team: project manager, backend and blockchain developers.`,
      `Design and development of blockchain web applications.`,
      `Code review of backend and blockchain developers.`,
      `Support for developed applications.`,
    ],
    subtitle: '',
  },
  Neti: {
    name: 'i-neti',
    website: 'https://i-neti.ru/',
    title: 'Frontend Developer',
    start: 'Aug 2021',
    end: 'Jun 2022',
    tasks: [
      `Communication with the team: project manager, backend developers, and designers.`,
      `Development and support of web applications.`,
      `Review of code from other front-end developers.`,
      `Mentoring new developers.`,
    ],
    subtitle: '',
  },
  Freelance: {
    name: 'Freelance',
    website: 'https://freelance.ru/',
    title: 'Frontend developer',
    start: 'Nov 2018',
    end: 'Aug 2021',
    tasks: [
      `Search for projects on the freelance platform.`,
      `Communicate with customers.`,
      `Project evaluation.`,
      `Web application development.`,
    ],
    subtitle: '',
  },
};
