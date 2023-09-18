import i18n from '@/i18n';

const Footer = () => {
  return (
    <footer className="relative py-4 bg-background-main text-white border-t border-secondary-light">
      <div className="container px-3 mx-auto">
        <div className="flex justify-center items-center mb-2">
          <span className="mr-2">{i18n.t('designed')}</span>
          <span className="mr-2">&</span>
          <span className="mr-2">{i18n.t('built')}</span>
          {i18n.language === 'en' && <span className="mr-2">{i18n.t('by')}</span>}
          <span className="mr-2 text-secondary-main">{i18n.t('name')}</span>
          <span>(2023)</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
