<template>
  <div id="top">
    <Container name="hero">
      <section class="content-section">
        <div class="contents">
          <div class="img">
            <img src="~/assets/HTF2/hero.svg" />
          </div>
          <div class="about">
            <img class="logo" src="~/assets/HTF2/HTFLogo.svg" />
            <span class="tagline"> Innovate For Good </span>
            <span class="date"> 22 - 24 October 2021 </span>
            <div class="cta-buttons">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://hackthisfall.devpost.com/"
                class="cta-button smooth-transition register"
              >
                <img src="~/assets/HTF2/devpost.svg" />REGISTER NOW
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.hackthisfall.tech/"
                class="cta-button smooth-transition discord"
              >
                <img src="~/assets/HTF2/discord.svg" />JOIN DISCORD
              </a>
            </div>
          </div>
        </div>
      </section>
    </Container>
  </div>
</template>

<script>
import HashHeader from "~/components/HashHeader";
import Container from "~/components/Container";
export default {
  components: {
    HashHeader,
    Container,
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  border-radius: 1rem;
  background-color: #feede3;
  @include respond-below(sm) {
    padding: 2rem 1rem;
  }

  .contents {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;

    @include respond-below(md) {
      grid-template-columns: repeat(1, 1fr);
    }

    .img {
      margin-top: 2rem;
      width: 38vw;
      @include respond-below(md) {
        display: none;
      }
    }
    .about {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 2rem;
      margin-top: 2rem;

      .logo {
        width: 38vw;
        @include respond-below(sm) {
          width: 75vw;
        }
      }

      .tagline {
        font-family: "Poppins";
        font-weight: bold;
        letter-spacing: 0.25rem;
        font-size: 2rem;
        margin-top: 2rem;
      }

      .date {
        font-family: "Poppins";
        font-weight: bold;
        font-size: 1.5rem;
        color: rgba(226, 62, 37, 1);
      }

      .cta-buttons {
        display: flex;
        margin-top: 3rem;

        a {
          text-decoration: none;
        }

        .cta-button {
          background-color: #e85325;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: "Segoe UI Bold";
          border-radius: 0.5rem;
          cursor: pointer;
          box-shadow: rgba(255, 107, 0, 0.4) 0px 0px 20px 0px;

          &:hover {
            box-shadow: rgba(232, 82, 37, 0.25) 0px 0px 0px 6px;
          }

          img {
            margin-right: 0.5rem;
          }

          &:nth-of-type(2) {
            margin-left: 1rem;
          }
        }

        @include respond-below(xxs) {
          flex-direction: column;
          width: 80%;

          .cta-button {
            &:nth-of-type(2) {
              margin-top: 1rem;
              margin-left: 0rem;
            }
          }
        }
      }
    }
  }
}
</style>
