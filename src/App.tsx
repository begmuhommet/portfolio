import '@/i18n';
import '@/styles/global.css';
import { withTranslation } from 'react-i18next';
import MainLayout from './components/MainLayout';
import Footer from './components/footer/Footer';
import Socials from './components/footer/Socials';
import Header from './components/header/Header';
import AboutSection from './sections/about/AboutSection';
import ExperienceSection from './sections/experience/ExperienceSection';
import HeroSection from './sections/hero/HeroSection';
import ProjectsSection from './sections/projects/ProjectsSection';

function App() {
  return (
    <>
      <Header />
      <MainLayout>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </MainLayout>
      <Socials />
      <Footer />
    </>
  );
}

export default withTranslation()(App);
