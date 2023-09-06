import { AnimatePresence, motion } from 'framer-motion';
import { FC, ReactNode, useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

interface IProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}

export const Modal: FC<IProps> = props => {
  const { open, onClose, children, title } = props;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [open]);

  return (
    <AnimatePresence mode="popLayout">
      {open && (
        <>
          <motion.div
            className="bg-gray-900 w-screen h-screen block fixed top-0 left-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="fixed top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 p-4 bg-background-main min-w-[300px] rounded-lg"
            initial={{ y: '-10%', x: '-50%', opacity: 0 }}
            animate={{ y: '50%', opacity: 1 }}
            exit={{ y: '-10%', opacity: 0 }}
          >
            <h3 className="text-secondary-main font-bold text-xl">{title}</h3>
            <div className="py-2">{children}</div>
            <button
              onClick={onClose}
              className="rounded-full p-1 absolute top-3 right-3 hover:bg-background-light transition-colors active:scale-95"
            >
              <IoCloseOutline size={18} />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
