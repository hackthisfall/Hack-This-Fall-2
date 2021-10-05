<template>
  <div class="container">
    <NavigationBar />
    <PeopleSection />
    <FooterSection />
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar";
import PeopleSection from "~/components/PeopleSection";
import FooterSection from "~/components/FooterSection";

export default {
  components: {
    NavigationBar,
    PeopleSection,
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
