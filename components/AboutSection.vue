<template>
  <div id="about">
    <Container>
      <section class="content-section">
        <HashHeader title="ABOUT US" />
        <div class="contents">
          <div class="about">
            <p>
              Hack This Fall is a 48 Hours Virtual Hackathon where we aim to
              promote hackers and help them nurture their new ideas and
              prototypes in various domains. Our motto is also to involve more
              beginner hackers and support everyone to solve the shared problems
              of our society to bring a change in a revolutionary way.
              <br />
              <br />
              For season 2, we are focussing on creating more learning
              opportunities along with building and solving. We will talk about
              various technologies, create awareness, encourage others, hack to
              contribute, and participate in many more exciting events &amp;
              sessions.
            </p>
            <div class="cta-buttons">
              <button class="cta-button register">
                <img src="~/assets/HTF2/about-where.svg" />
                <div>
                  <span class="title">WHERE</span
                  ><span class="desc">Virtual Event</span>
                </div>
              </button>
              <button class="cta-button discord">
                <img src="~/assets/HTF2/about-when.svg" />
                <div>
                  <span class="title">WHEN</span
                  ><span class="desc">22-24 Oct, 2021</span>
                </div>
              </button>
            </div>
          </div>
          <div class="img hide-small">
            <img src="~/assets/HTF2/about-us.svg" />
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
  padding: 2rem 0 10px;
  font-family: "Segoe UI";

  .contents {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    align-items: flex-end;

    @include respond-below(md) {
      grid-template-columns: repeat(1, 1fr);
    }

    .about {
      padding: 10px 0;

      p {
        color: rgba(112, 112, 112, 1);
        font-weight: bold;
        margin-top: 2rem;
        font-size: 1.2rem;

        @include respond-below(md) {
          padding-top: 20px;
        }
      }

      .cta-buttons {
        margin-top: 1rem;
        display: flex;
        .cta-button {
          background-color: white;
          border: none;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          font-family: "Segoe UI Bold";
          border-radius: 0.5rem;
          width: 50%;
          box-shadow: rgba(255, 107, 0, 0.1) 0px 0px 10px 0px;

          img {
            margin-right: 0.5rem;
          }

          div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            .title {
              color: rgba(233, 83, 34, 1);
            }
          }

          &:nth-of-type(2) {
            margin-left: 1rem;
          }
        }
      }
    }

    .img {
      width: 50vw;
    }
  }
}
</style>
