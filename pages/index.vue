<template>
  <div class="container">
    <NavigationBar />
    <HeroSection />
    <AboutSection />
    <GlimpseSection />
    <TracksSection />
    <PrizesSection />
    <SpeakersSection />
    <SponsorsSection />
    <TestimonialsSection />
    <FAQSection />
    <FooterSection />
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar";
import HeroSection from "~/components/HeroSection";
import AboutSection from "~/components/AboutSection";
import GlimpseSection from "~/components/GlimpseSection";
import TracksSection from "~/components/TracksSection";
import PrizesSection from "~/components/PrizesSection";
import SpeakersSection from "~/components/SpeakersSection";
import SponsorsSection from "~/components/SponsorsSection";
import TestimonialsSection from "~/components/TestimonialsSection";
import FAQSection from "~/components/FAQSection";
import FooterSection from "~/components/FooterSection";

export default {
  components: {
    NavigationBar,
    HeroSection,
    AboutSection,
    GlimpseSection,
    TracksSection,
    PrizesSection,
    SpeakersSection,
    SponsorsSection,
    TestimonialsSection,
    FAQSection,
    FooterSection,
  },
};
</script>

<style>
.container {
  /* margin: 0 auto; */
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  /* text-align: center; */
}
</style>
