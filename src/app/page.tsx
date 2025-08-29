import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VehicleShowcase from '@/components/VehicleShowcase';
import Innovation from '@/components/Innovation';
import Sustainability from '@/components/Sustainability';
import EnergyProducts from '@/components/EnergyProducts';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <VehicleShowcase />
      <Innovation />
      <Sustainability />
      <EnergyProducts />
      <Footer />
    </main>
  );
}