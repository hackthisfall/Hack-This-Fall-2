<template>
  <div class="container">
    <NavigationBar />
    <ScrollTopArrow />
    <SponsorsSectionPage />
    <FooterSection />
  </div>
</template>

<script>
// import SponsorsSectionPage from "~/components/SponsorsSectionPage";

import NavigationBar from "~/components/NavigationBar";
import HeroSection from "~/components/HeroSection";
import AboutSection from "~/components/AboutSection";
import GlimpseSection from "~/components/GlimpseSection";
import TracksSection from "~/components/TracksSection";
import PrizesSection from "~/components/PrizesSection";
import SpeakersSection from "~/components/SpeakersSection";
import ScrollTopArrow from "~/components/ScrollTopArrow";
import SponsorsSectionPage from "~/components/SponsorsSectionPage";
import TestimonialsSection from "~/components/TestimonialsSection";
import FAQSection from "~/components/FAQSection";
import FooterSection from "~/components/FooterSection";
import aosMixin from "~/mixins/aos";

export default {
  // components: {
  //   NavigationBar,
  //   ScrollTopArrow,
  //   FooterSection,
  //   SponsorsSectionPage,
  // },
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
