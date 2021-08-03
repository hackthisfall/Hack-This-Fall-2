<template>
  <div id="about">
    <Container name="about">
      <section class="content-section">
        <HashHeader title="ABOUT US" />
        <div class="contents">
          <div class="about">
            <p>
              Hack This Fall Season 1 was a 24 Hours Virtual Hackathon organized
              on Oct 31st - Nov 1st, 2020. We organized this event during the
              global COVID19 crisis, where the entire world was suffering from a
              pandemic. The event allowed participants to join from the safety
              and comfort of their homes.

              <br />
              <br />
              In Season 1, we were joined by 500+ superb hackers from 170+
              cities, who all were motivated to build towards solving society’s
              everyday problems, and ended up building 50+ projects, which was
              in line with our motto i.e. “Build &amp; Solve”. Hackers truly
              understood the value of our motto and showed their excellent piece
              of innovation and problem-solving skills. Not only this, we found
              hackers hacking individually and collaborating in a team, but this
              didn’t stop them from engaging with other hackers in a meaningful
              way.
            </p>
            <div class="cta-buttons">
              <button class="cta-button smooth-transition">
                <img src="~/assets/HTF2/about-where.svg" />
                <div>
                  <span class="title">WHERE</span
                  ><span class="desc">Virtual Event</span>
                </div>
              </button>
              <button class="cta-button smooth-transition">
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
    column-gap: 5rem;
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
          border-radius: 0.5rem;
          width: 45%;
          box-shadow: rgba(255, 107, 0, 0.1) 0px 0px 10px 0px;

          img {
            margin-right: 0.7rem;
          }

          div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            .title {
              font-size: 1.1rem;
              font-family: "Segoe UI Bold";
              color: rgba(233, 83, 34, 1);
            }

            .desc {
              opacity: 0.6;
              font-size: 0.95rem;
              margin-top: 0.5rem;
            }
          }

          &:nth-of-type(2) {
            margin-left: 2rem;
          }

          &:hover {
            background-color: #feede3;
          }
        }

        @include respond-below(xs) {
          flex-direction: column;
          justify-content: center;
          .cta-button {
            width: 100%;

            &:nth-of-type(2) {
              margin-top: 1rem;
              margin-left: 0rem;
            }
          }
        }
      }
    }

    .img {
      justify-self: center;
      img {
        width: 50vw;
        max-width: 600px;
      }
    }
  }
}
</style>
