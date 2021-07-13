<template>
  <div id="about">
    <section class="content-section">
      <div class="contents">
        <div class="img">
          <img src="~/assets/HTF2/hero.svg" />
        </div>
        <div class="about">
          <img src="~/assets/HTF2/logo-light.svg" />

          Innovate For Good
          <br />
          22 - 24 October 2021

          <button>REGISTER NOW</button>
          <button>JOIN DISCORD</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HashHeader from "~/components/HashHeader";
export default {
  components: {
    HashHeader,
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 40px 0 10px;

  .contents {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;

    @include respond-below(md) {
      grid-template-columns: repeat(1, 1fr);
    }

    .about {
      display: flex;
      flex-direction: column;
      padding: 10px 0;
      align-items: center;
    }
  }

  .stats {
    text-align: center;
    justify-content: center;
    padding: 30px 0 10px;

    .gridLayout {
      display: grid;
      margin-top: 15px;
      grid-template-columns: repeat(2, 180px);
      column-gap: 10px;
      row-gap: 10px;
      justify-content: center;

      @include respond-below(sm) {
        grid-template-columns: repeat(2, 150px);
      }
    }

    .statData {
      height: 150px;
      width: 150px;
      margin: 0;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      padding: 15px;
      background: var(--color-secondary-light);
      border-radius: 8px;

      h4 {
        font-size: 2rem;
        font-weight: bold;
        padding-bottom: 10px;
      }

      @include respond-below(sm) {
        width: 120px;
        height: 120px;
      }
    }
  }
}
</style>
