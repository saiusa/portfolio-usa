import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Learning from '@/components/Learning';
import GetInTouch from '@/components/GetInTouch';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Learning />
      <GetInTouch />
      <Footer />
    </main>
  );
}
