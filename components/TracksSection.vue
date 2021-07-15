<template>
  <Container>
    <section class="content-section">
      <HashHeader title="TRACKS" />
      <div class="grid">
        <div class="panel text">
          <div class="track-box healthcare"></div>
          <div class="texts">
            <h3 class="title">Siddharth Dayalwal</h3>
            <p class="description">Lorem ipsum dolor sit amet, vim quidam</p>
          </div>
        </div>
        <div class="panel text">
          <div class="track-box healthcare">
            <!-- <img src="~/assets/Tracks/healthcare.png" alt="Track Healthcare" /> -->
          </div>
          <div class="texts">
            <h3 class="title">Siddharth Dayalwal</h3>
            <p class="description">Lorem ipsum dolor sit amet, vim quidam</p>
          </div>
        </div>

        <div class="panel text">
          <div class="track-box healthcare">
            <!-- <img src="~/assets/Tracks/healthcare.png" alt="Track Healthcare" /> -->
          </div>
          <div class="texts">
            <h3 class="title">Siddharth Dayalwal</h3>
            <p class="description">Lorem ipsum dolor sit amet, vim quidam</p>
          </div>
        </div>
      </div>
    </section>
  </Container>
</template>

<script>
import Container from "~/components/Container";
import HashHeader from "~/components/HashHeader";

export default {
  components: {
    Container,
    HashHeader,
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  .track-box {
    border-radius: 20%;
    display: inline-block;
    padding: 1rem;
    height: 5.5rem;
    margin-top: 1rem;
    width: 5.5rem;
    box-sizing: border-box;
  }

  img {
    float: left;
    width: 3rem;
    align-content: center;
  }

  .grid {
    padding: 10px 0;
    display: flex;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 4rem;
    row-gap: 1em;
    justify-content: center;
    flex-wrap: wrap;

    .panel {
      border: 1px solid red;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      &.text {
        justify-content: space-between;
      }

      .texts {
        margin-left: 1em;
        display: flex;
        flex-direction: column;
        padding: 10px;

        .title {
          font-family: "Segoe UI Bold";
          color: rgba(233, 83, 34, 1);
          font-size: 1.1rem;
        }

        .description {
          font-family: "Segoe UI";
          margin-top: 0.5em;
          opacity: 0.7;
        }
      }
    }

    @include respond-below(sm) {
      grid-template-columns: repeat(1, 1fr);

      .texts {
        padding: 10px 0;
      }
    }
  }
}
</style>
