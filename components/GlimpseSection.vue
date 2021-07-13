<template>
  <div id="about">
    <section class="content-section">
      <HashHeader title="GLIMPSE OF SEASON 1" />
      <div class="contents">
        <div class="about">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div class="stats">
          <div class="gridLayout">
            <div class="statData">
              <h4>48</h4>
              <p>Hours</p>
            </div>
            <div class="statData">
              <h4>24+</h4>
              <p>Projects</p>
            </div>
            <div class="statData">
              <h4>400+</h4>
              <p>Hackers</p>
            </div>
            <div class="statData">
              <h4>170+</h4>
              <p>Cities</p>
            </div>
          </div>
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
      padding: 10px 0;

      p {
        padding-top: 60px;
        font-size: 1.2rem;

        span {
          color: var(--colour-pink);
        }

        @include respond-below(md) {
          padding-top: 20px;
        }
      }
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
