<template>
  <Container id="testimonials">
    <section class="content-section">
      <HashHeader title="TESTIMONIALS" />
      <div class="grid">
        <div class="panel text">
          <div class="track-box healthcare">
            <!-- <img src="~/assets/Tracks/healthcare.png" alt="Track Healthcare" /> -->
          </div>
          <div class="texts">
            <h3 class="title">Gita Alekhya Paul</h3>
            <p class="description">Season 1 Winner</p>
          </div>
        </div>
        <div class="panel text">
          <div class="track-box healthcare">
            <!-- <img src="~/assets/Tracks/healthcare.png" alt="Track Healthcare" /> -->
          </div>
          <div class="texts">
            <h3 class="title">Praveen Kumar</h3>
            <p class="description">Mentor and Speaker</p>
          </div>
        </div>
        <div class="panel text">
          <div class="track-box healthcare">
            <!-- <img src="~/assets/Tracks/healthcare.png" alt="Track Healthcare" /> -->
          </div>
          <div class="texts">
            <h3 class="title">Aditya Oberai</h3>
            <p class="description">Mentor</p>
          </div>
        </div>
        <div class="panel text">
          <div class="track-box healthcare">
            <!-- <img src="~/assets/Tracks/healthcare.png" alt="Track Healthcare" /> -->
          </div>
          <div class="texts">
            <h3 class="title">Shivay Lamba</h3>
            <p class="description">Speaker</p>
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
  padding: 2rem 6rem;
  border-radius: 1rem;
  background-color: #feede3;

  @include respond-below(sm) {
    padding: 2rem 1rem;
  }

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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 6rem;
    row-gap: 2rem;

    .panel {
      border-radius: 1rem;
      display: flex;
      flex-direction: row;
      background-color: white;
      justify-content: flex-start;
      box-shadow: rgba(255, 107, 0, 0.07) 0px 0px 10px 2px;
      align-items: center;

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
