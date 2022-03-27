<template>
  <section class="content-section">
    <div class="subheading">
      <h2 class="section-title">SPONSORED PRIZES</h2>
    </div>
    <Agoric />
    <Storyblok />
    <AtSign />
    <Courier />
    <MLH />
    <SawoAndSymbl />
  </section>
</template>

<script>
import Container from "~/components/Container";
import HashHeader from "~/components/HashHeader";
import MLH from "~/components/prizesPage/MLH.vue";
import AtSign from "~/components/prizesPage/TheAtcompany.vue";
import Agoric from "~/components/prizesPage/Agoric.vue";
import Storyblok from "~/components/prizesPage/Storyblok.vue";
import Courier from "~/components/prizesPage/Courier.vue";
import SawoAndSymbl from "~/components/prizesPage/SawoAndSymbl.vue";

export default {
  components: {
    Container,
    HashHeader,
    SawoAndSymbl,
    MLH,
    AtSign,
    Agoric,
    Storyblok,
    Courier,
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 0px 0;
  margin-top: -0.5rem;
  justify-content: center;

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
