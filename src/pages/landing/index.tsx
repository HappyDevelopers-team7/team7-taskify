import StLandingContainer from './style';
import { Navbar } from '@/components/landing-navbar';
import { Header } from '@/components/landing-header';
import { Section } from '@/components/landing-section';
import { Footer } from '@/components/landing-footer';

export const LandingImage = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

// ==================== Landing ==================

const Landing = () => {
  return (
    <StLandingContainer>
      <Navbar />
      <Header />
      <Section />
      <Footer />
    </StLandingContainer>
  );
};

export default Landing;
