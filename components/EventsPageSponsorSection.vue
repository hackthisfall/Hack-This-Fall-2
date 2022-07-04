<template>
  <Container id="event-sponsors" name="event-sponsors">
    <section class="content-section">
      <div class="contents">
        <div v-for="(section, index) in sponsors" :key="index">
          <div :class="['subheading', index === 0 ? 'no-spacing' : null]">
            <HashHeader
              class="section-title"
              color="#d74f4b"
              :title="section.type"
            />
          </div>
          <div class="cards-grid">
            <div
              v-for="(sponsor, index) in section.logos"
              :key="index"
              :class="[
                sponsor.image ? null : 'hide-small',
                sponsor.specialClass
              ]"
            >
              <a :href="sponsor.url" rel="noopener noreferrer" target="_blank">
                <div
                  v-if="sponsor.image"
                  class="card smooth-transition-sponsor"
                >
                  <img :src="sponsor.image" alt="sponsor" />
                </div>
              </a>
            </div>
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
    HashHeader
  },
  data() {
    return {
      sponsors: [
        {
          type: "SPONSORS",
          logos: [
            {
              url: "https://atsign.com/",
              image: require("~/assets/Sponsors/atsign.webp")
            },
            {
              url: "https://education.github.com/discount_requests/student_application?utm_source=2022-04-2022-06-HackThisFallCityMeetups",
              image: require("~/assets/Sponsors/github.png")
            },
            {
              url: "https://www.esamudaay.com/",
              image: require("~/assets/Sponsors/eSamudaay.svg"),
            },
            {
              url: "https://symbl.ai/",
              image: require("~/assets/Sponsors/symbl.svg"),
            },
            {
              url: "https://hack2skill.com/",
              image: require("~/assets/Sponsors/hack2skill.png")
            },
            {
              url: 'https://www.communitycoldcoffee.com/',
              image: require("~/assets/Sponsors/C3Universe.png")
            },
            {
              url: "https://hackclub.com/",
              image: require("~/assets/Sponsors/hackclub.png")
            },
            {
              url: "https://devhero.shop/",
              image: require("~/assets/Sponsors/devhero.png"),
            },
            
          ]
        },
        {
          type: "VENUE PARTNERS",
          logos: [
            {
              url: "https://cowocoli.com/",
              image: require("~/assets/Meetup/Venue/cowocoli.png")
            },
            {
              url: "https://www.91springboard.com/",
              image: require("~/assets/Meetup/Venue/springboard.png")
            },
            {
              url: "https://redbrickoffices.com/",
              image: require("~/assets/Meetup/Venue/red-brick-logo.svg")
            },
            {
              url: "https://www.thecircle.work/",
              image: require("~/assets/Meetup/Venue/the-circle-work.png")
            },
            {
              url: "https://www.devx.work/",
              image: require("~/assets/Meetup/Venue/devx.png")
            }
          ]
        },
        {
          type: "ECOSYSTEM PARTNERS",
          logos: [
            {
              url: "https://www.thecirclefc.com",
              image: require("~/assets/Meetup/Ecosystem/circle.png"),
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  padding: 1rem 4rem;
  flex-direction: column;
  text-align: center;

  @include respond-below(sm) {
    padding: 1rem 1rem;
  }

  .contents {
    .subheading {
      margin: 2rem 0 2rem;
      font-family: "Poppins";
      font-style: bold;
      color: rgba(128, 128, 128, 1);

      .section-title {
        font-size: 1.5rem;
        font-weight: 600;
        padding: 20px 10px 20px 0;
      }
    }

    .no-spacing {
      margin: -3rem 0 2rem;
    }

    .cards-grid {
      margin-top: -4rem;
      display: flex;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 30px;
      row-gap: 30px;
      justify-content: center;
      flex-wrap: wrap;

      @include respond-below(md) {
        grid-template-columns: repeat(3, 1fr);
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 10px;
        row-gap: 30px;
      }

      .card {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        background-color: #fff;
        box-shadow: rgba(255, 107, 0, 0.07) 0px 0px 10px 2px;
        height: 100px;
        min-width: 200px;
        padding: 2rem 0rem;
        border-radius: 1rem;

        &:hover {
          background-color: #feede3;
        }

        @include respond-below(xs) {
          height: unset;
          min-width: 70vw;
        }

        img {
          max-width: 130px;
          max-height: 70px;
          height: auto;
          width: auto;
          margin: auto;
          @include respond-below(xs) {
            max-width: 80px;
          }
        }
      }
    }
  }
}
</style>
