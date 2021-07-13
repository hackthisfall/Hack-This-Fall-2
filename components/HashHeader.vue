<template>
  <div class="heading">
    <h2 class="section-title" v-html="title"></h2>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.heading {
  display: flex;
  flex-direction: column;
  align-items: center;

  h2.section-title {
    font-family: "Poppins";
    font-size: 2rem;
    font-weight: bold;
    padding: 10px;
    color: rgba(214, 93, 32, 1);

    &:after {
      content: "";
      height: 1.5px;
      background: #ccc;
      display: block;
      margin-top: 0.2rem;
    }
  }
  .line {
    flex: 1;
    height: 1px;
    background: var(--colour-pink);
  }

  @include respond-below(sm) {
    flex-direction: column;
    align-items: stretch;

    .line {
      height: 1px;
    }
  }
}
</style>
