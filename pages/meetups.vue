<template>
  <div class="container">
    <NavigationBar />
    <EventsSection />
    <FooterSection />
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar";
import EventsSection from "~/components/EventsSection";
import FooterSection from "~/components/FooterSection";

export default {
  components: {
    NavigationBar,
    EventsSection,
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
