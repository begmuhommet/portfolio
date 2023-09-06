import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const MainLayout: FC<IProps> = props => {
  const { children } = props;

  // const wrapperRef = useRef<HTMLDivElement | null>(null);
  // const { scrollYProgress, scrollXProgress } = useScroll({
  //   target: wrapperRef,
  //   offset: ['end end', 'end start'],
  // });

  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  // const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  // const position = useTransform(scrollYProgress, pos => (pos >= 1 ? 'relative' : 'fixed'));

  // Effects
  // useEffect(() => {
  //   const updateMousePosition = (event: MouseEvent) => {
  //     if (!wrapperRef.current) return;
  //     const { clientX, clientY } = event;
  //     wrapperRef.current.style.setProperty('styl', `${clientX}px`);
  //     wrapperRef.current.style.setProperty('y', `${clientY}px`);
  //   };

  //   window.addEventListener('mousemove', updateMousePosition);

  //   return () => {
  //     window.removeEventListener('mousemove', updateMousePosition);
  //   };
  // }, []);

  // Renders
  return <main className="bg-background-main text-white relative">{children}</main>;
};

export default MainLayout;
