import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Learning from '@/components/Learning';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Learning />
      <Footer />
    </main>
  );
}
