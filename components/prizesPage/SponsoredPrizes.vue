<template>
  <section class="content-section">
    <div class="subheading">
      <h2 class="section-title">SPONSORED PRIZES</h2>
    </div>
    <AtSign />
    <MLH />
    <p style="text-align: center">More prizes coming soon...</p>
  </section>
</template>

<script>
import Container from "~/components/Container";
import HashHeader from "~/components/HashHeader";
// import SubHashHeader from "~/components/SubHashHeader";
// import OtherPrizes from "~/components/prizesPage/OtherPrizes.vue";
// import AmagiAndElastic from "~/components/prizesPage/AmagiAndElastic.vue";
// import Auth0AndRaahee from "~/components/prizesPage/Auth0AndRaahee.vue";
// import MagicLabs from "~/components/prizesPage/magicLabs.vue";
// import SawoAndPolygon from "~/components/prizesPage/SawoAndPolygon.vue";
// import GraphCMS from "~/components/prizesPage/graphCMS.vue";
import MLH from "~/components/prizesPage/MLH.vue";
import AtSign from "~/components/prizesPage/TheAtcompany.vue";
// import Symbl from "~/components/prizesPage/Symbl.vue";

export default {
  components: {
    Container,
    HashHeader,
    // SubHashHeader,
    // OtherPrizes,
    // AmagiAndElastic,
    // Auth0AndRaahee,
    // MagicLabs,
    // SawoAndPolygon,
    // GraphCMS,
    MLH,
    AtSign
    // Symbl
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 0px 0;
  margin-top: -0.5rem;

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
