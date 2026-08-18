import { Header } from "@/components/Header";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Stay } from "@/components/sections/Stay";
import { Experiences } from "@/components/sections/Experiences";
import { Dining } from "@/components/sections/Dining";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { Rooms } from "@/components/sections/Rooms";
import { Offers } from "@/components/sections/Offers";
import { Amenities } from "@/components/sections/Amenities";
import { Reviews } from "@/components/sections/Reviews";
import { Location } from "@/components/sections/Location";
import { Faq } from "@/components/sections/Faq";
import { BookingManager } from "@/components/BookingManager";

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <BookingManager />
      <Header />
      <main id="main-content">
        <Hero />
        <Story />
        <Stay />
        <Rooms />
        <Offers />
        <Amenities />
        <Experiences />
        <Dining />
        <Reviews />
        <Location />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
