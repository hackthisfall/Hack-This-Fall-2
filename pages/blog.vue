<template>
  <div class="container">
    <NavigationBar />
    <BlogSection />
    <FooterSection />
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar";
import BlogSection from "~/components/BlogSection";
import FooterSection from "~/components/FooterSection";

export default {
  components: {
    NavigationBar,
    BlogSection,
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
