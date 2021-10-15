<template>
  <section class="content-section">
    <div class="subheading">
      <h2 class="section-title">FUN PRIZES</h2>
    </div>
    <p style="text-align: center">To be announced soon...</p>
  </section>
</template>

<script>
import Container from "~/components/Container";
import HashHeader from "~/components/HashHeader";
import MLH from "~/components/prizesPage/MLH.vue";

export default {
  components: {
    Container,
    HashHeader,
    MLH,
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 0px 0;

  .subheading {
    font-family: "Poppins";
    font-style: bold;
    justify-content: space-around;
    display: flex;
    align-self: center;
    color: rgba(128, 128, 128, 1);

    h2.section-title {
      font-size: 1.5rem;
      font-weight: 600;
      padding: 20px 10px 20px 0;
    }
  }
}
</style>
