import Hero from '../components/Hero';
import Features from '../components/Features';
import ServiceList from '../components/ ServiceList';
import BlogSection from '../components/BlogSection';
import FooterComponent from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ServiceList />
      <BlogSection />
      <FooterComponent />
    </>
  );
}
