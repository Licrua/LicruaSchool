import BenefitsSection from '@/components/BenefitsSection';
import heroSections from '@/data/benefits';
import { Container } from '@/components/Container';
import { Header } from '@/components/header/Header';
import { HeroSection } from '@/components/HeroSection';
import { CompanyAndPartners } from '@/components/main/CompanyAndPartners';
import { OurCourse } from '@/components/main/OurCourse';
import { FeaturesAndServices } from '@/components/main/FeaturesAndServices';
import { NewsAndArticles } from '@/components/main/NewsAndArticles';
import { Subscribe } from '@/components/main/Subscribe';
import { Footer } from '@/components/footer/Footer';
import { Main } from '@/components/main/Main';

const Home = () => {
  return (
    <Container>
      <Header />
      <Main>
        <HeroSection />
        <div className="bg-white">
          <CompanyAndPartners />
          <OurCourse />
          <FeaturesAndServices />
          {heroSections.map((section) => (
            <BenefitsSection
              key={section.id}
              headerText={section.title}
              paragraphText={section.description}
              buttonText={section.buttonText}
              imageSrc={section.imageSrc}
              buttonColor={section.buttonColor}
              imageOrder={section.imageOrder}
            />
          ))}
          <NewsAndArticles />
          <Subscribe />
          <Footer />
        </div>
      </Main>
    </Container>
  );
};

export default Home;
