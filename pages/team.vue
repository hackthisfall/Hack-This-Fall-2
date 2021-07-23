<template>
  <div class="container">
    <NavigationBar />
    <Team2021Section />
    <Team2020Section />
    <FooterSection />
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar";
import Team2021Section from "~/components/Team2021Section";
import Team2020Section from "~/components/Team2020Section";
import FooterSection from "~/components/FooterSection";

export default {
  components: {
    NavigationBar,
    Team2021Section,
    Team2020Section,
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
