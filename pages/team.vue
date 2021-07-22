<template>
  <div class="container">
    <NavigationBar />
    <Team2021Section />
    <FooterSection />
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar";
import Team2021Section from "~/components/Team2021Section";
import FooterSection from "~/components/FooterSection";

export default {
  components: {
    NavigationBar,
    Team2021Section,
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
