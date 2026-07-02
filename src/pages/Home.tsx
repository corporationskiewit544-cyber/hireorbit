import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Industries } from '../components/Industries';
import { Talent } from '../components/Talent';
import { TimelineFlow } from '../components/TimelineFlow';
import { Testimonials } from '../components/Testimonials';
import { Pricing } from '../components/Pricing';
import { CTA } from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Industries />
      <Talent />
      <TimelineFlow />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
}
