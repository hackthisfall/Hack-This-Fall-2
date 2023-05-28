<template>
  <div class="container">
    <NavigationBar />
    <ScrollTopArrow />
    <HeroSection
      data-aos="fade-left"
      data-aos-delay="100"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    />
    <AboutSection
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    />
    <GlimpseSection
      data-aos="fade-left"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    />
    <!-- <TracksSection
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    /> -->
    <!-- <PrizesSection
      data-aos="fade-left"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    /> -->
    <!-- <ScheduleSection /> -->
    <SpeakersSection
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    />
    <SponsorsSection
      data-aos="fade-left"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    />
    <TestimonialsSection
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    />
    <!-- <FAQSection
      data-aos="fade-left"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    /> -->
    <FooterSection
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    />
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar";
import HeroSection from "~/components/HeroSection";
import AboutSection from "~/components/AboutSection";
import GlimpseSection from "~/components/GlimpseSection";
import TracksSection from "~/components/TracksSection";
import PrizesSection from "~/components/PrizesSection";
import ScheduleSection from "~/components/ScheduleSection";
import SpeakersSection from "~/components/SpeakersSection";
import ScrollTopArrow from "~/components/ScrollTopArrow";
import SponsorsSection from "~/components/SponsorsSection";
import TestimonialsSection from "~/components/TestimonialsSection";
import FAQSection from "~/components/FAQSection";
import FooterSection from "~/components/FooterSection";
import aosMixin from "~/mixins/aos";

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
    ScheduleSection,
    FAQSection,
    ScrollTopArrow,
    FooterSection,
  },
  mixins: [aosMixin],
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
