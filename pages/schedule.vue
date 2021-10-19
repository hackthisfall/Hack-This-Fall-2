<template>
  <div class="container">
    <NavigationBar />
    <div style="margin-top: 4rem"></div>
    <ScheduleSection />
    <SpeakerScheduleSection />
    <FooterSection />
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar";
import SpeakerScheduleSection from "~/components/SpeakerScheduleSection";
import ScheduleSection from "~/components/ScheduleSection";
import FooterSection from "~/components/FooterSection";

export default {
  components: {
    NavigationBar,
    SpeakerScheduleSection,
    ScheduleSection,
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
