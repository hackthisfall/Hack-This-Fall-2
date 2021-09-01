<template>
  <div class="container">
    <NavigationBar />
    <SpeakerScheduleSection />
    <FooterSection />
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar";
import SpeakerScheduleSection from "~/components/SpeakerScheduleSection";
import FooterSection from "~/components/FooterSection";

export default {
  components: {
    NavigationBar,
    SpeakerScheduleSection,
    FooterSection,
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
}
</style>
