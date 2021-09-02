<template>
  <div class="container">
    <NavigationBar />
    <SwagSection />
    <FooterSection />
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar";
import FooterSection from "~/components/FooterSection";
import SwagSection from "~/components/SwagSection";

export default {
  components: {
    NavigationBar,
    SwagSection,
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
