import { FC } from 'react';

interface IProps {
  name: 'ru' | 'tr' | 'en';
}

const LanguageIcon: FC<IProps> = props => {
  const { name } = props;

  const renderIcon = () => {
    switch (name) {
      case 'en':
        return (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_14_1114)">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 0H32V32H0V0Z" fill="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M0 10.6688H32V32H0V10.6688Z" fill="#0039A6" />
              <path fillRule="evenodd" clipRule="evenodd" d="M0 21.3312H32V32H0V21.3312Z" fill="#D52B1E" />
            </g>
            <defs>
              <clipPath id="clip0_14_1114">
                <rect rx="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      case 'tr':
        return (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_14_1114)">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 0H32V32H0V0Z" fill="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M0 10.6688H32V32H0V10.6688Z" fill="#0039A6" />
              <path fillRule="evenodd" clipRule="evenodd" d="M0 21.3312H32V32H0V21.3312Z" fill="#D52B1E" />
            </g>
            <defs>
              <clipPath id="clip0_14_1114">
                <rect rx="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      case 'ru':
        return (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_14_1114)">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 0H32V32H0V0Z" fill="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M0 10.6688H32V32H0V10.6688Z" fill="#0039A6" />
              <path fillRule="evenodd" clipRule="evenodd" d="M0 21.3312H32V32H0V21.3312Z" fill="#D52B1E" />
            </g>
            <defs>
              <clipPath id="clip0_14_1114">
                <rect rx="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
    }
  };
  return <>{renderIcon()}</>;
};

const enSvg = (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_14_1114)">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 0H32V32H0V0Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M0 10.6688H32V32H0V10.6688Z" fill="#0039A6" />
      <path fillRule="evenodd" clipRule="evenodd" d="M0 21.3312H32V32H0V21.3312Z" fill="#D52B1E" />
    </g>
    <defs>
      <clipPath id="clip0_14_1114">
        <rect rx="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default LanguageIcon;
