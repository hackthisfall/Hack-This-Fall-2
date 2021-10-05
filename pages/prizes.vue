<template>
  <div class="container">
    <NavigationBar />
    <HTFPrizesSection />
    <FooterSection />
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar";
import HTFPrizesSection from "~/components/HTFPrizesSection";
import FooterSection from "~/components/FooterSection";

export default {
  components: {
    NavigationBar,
    HTFPrizesSection,
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
