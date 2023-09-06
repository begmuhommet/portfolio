import { Modal } from '@/components/Modal';
import { offers } from '@/data/offers';
import i18n from '@/i18n';
import { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { IoConstructOutline } from 'react-icons/io5';

const email = 'begmuhommet.jumayev@gmail.com';

const OfferProjectModal = () => {
  const [openOffer, setOpenOffer] = useState(false);
  const [copyEmail, setCopyEmail] = useState(false);

  // Handlers
  const handleOpenOffer = () => {
    setOpenOffer(true);
  };

  const handleCloseOffer = () => {
    setOpenOffer(false);
  };

  const handleCopyEmail = () => {
    window.navigator.clipboard.writeText(email);
    setCopyEmail(true);
    setTimeout(() => {
      setCopyEmail(false);
    }, 1000);
  };

  // Renders
  return (
    <>
      <button
        type="button"
        className="px-4 py-2 border border-secondary-main rounded-md text-secondary-main w-60 hover:bg-secondary-light transition-colors active:scale-95 flex items-center justify-center"
        onClick={handleOpenOffer}
      >
        <IoConstructOutline className="mr-2" size={18} />
        <span>{i18n.t('offer')}</span>
      </button>

      <Modal open={openOffer} onClose={handleCloseOffer} title="Offer project">
        <div className="pt-6">
          {offers.map(({ name, icon, url }, index) => (
            <a
              key={index}
              href={url}
              className="flex items-center justify-center w-full p-2 border border-secondary-main rounded-md mb-3 active:scale-95 hover:bg-secondary-light transition-colors"
              target="_blank"
              rel="nooper noreferrer"
            >
              {icon}
              {name}
            </a>
          ))}
          <button
            onClick={handleCopyEmail}
            className="flex items-center justify-center w-full p-2 border border-secondary-main rounded-md mb-3 active:scale-95 hover:bg-secondary-light transition-colors"
          >
            <HiOutlineMail size={18} className="mr-3" />
            {copyEmail ? 'Email copied' : 'Email'}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default OfferProjectModal;
