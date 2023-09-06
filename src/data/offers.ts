import { LiaTelegram } from 'react-icons/lia';
import { LuLinkedin } from 'react-icons/lu';
import { TbBrandUpwork } from 'react-icons/tb';

export const offers = [
  {
    name: 'Upwork',
    icon: TbBrandUpwork({ size: 24, className: 'mr-3' }),
    url: 'https://www.upwork.com/freelancers/begmuhommet',
  },
  {
    name: 'Linkedin',
    icon: LuLinkedin({ size: 20, className: 'mr-3' }),
    url: 'https://www.linkedin.com/in/begmuhommet/',
  },
  { name: 'Telegram', icon: LiaTelegram({ size: 20, className: 'mr-3' }), url: 'https://t.me/begmuhommet' },
];
