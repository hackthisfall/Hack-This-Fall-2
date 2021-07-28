<template>
  <Container id="tracks">
    <section class="content-section">
      <HashHeader title="TRACKS" />
      <div class="grid">
        <div class="panel text">
          <div class="track-box">
            <img
              src="~/assets/Tracks/climate.png"
              alt="Track Climate Change and Environment"
            />
          </div>
          <div class="texts">
            <h3 class="title">CLIMATE CHANGE AND ENVIRONMENT</h3>
            <p class="description">
              Climate change is an ongoing problem with our planet and one that
              must be dealt with, so we encourage hackers to build solutions to
              tackle this issue and come up with some innovative solutions.
            </p>
          </div>
        </div>
        <div class="panel text">
          <div class="track-box">
            <img
              src="~/assets/Tracks/blockchain.png"
              alt="Track Blockchain and Crypto"
            />
          </div>
          <div class="texts">
            <h3 class="title">BLOCKCHAIN AND CRYPTO</h3>
            <p class="description">
              Blockchain, the next generation of the internet, is decentralized.
              It'll be a great experience for the hackers to learn new
              blockchain techs, work with various chains and come up with unique
              ideas.
            </p>
          </div>
        </div>

        <div class="panel text">
          <div class="track-box">
            <img src="~/assets/Tracks/open.png" alt="Track Open Innovation" />
          </div>
          <div class="texts">
            <h3 class="title">OPEN INNOVATION</h3>
            <p class="description">
              We don't want our hackers to limit their ideas, so we also have an
              Open Innovation track where hackers can come up with their own
              ideas, and make awesome innovative projects irrespective of any
              theme.
            </p>
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

  .grid {
    padding: 1rem 0;
    display: flex;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 4rem;
    row-gap: 3rem;
    justify-content: center;
    flex-wrap: wrap;

    .panel {
      box-shadow: rgba(255, 107, 0, 0.07) 0px 0px 10px 2px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 38%;
      border-radius: 1rem;
      align-items: center;

      @include respond-below(sm) {
        width: unset;
      }

      .track-box {
        display: inline-block;
        box-sizing: border-box;
        margin-left: 1.5rem;
        img {
          float: left;
          width: 7rem;
          align-content: center;
        }
      }

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
