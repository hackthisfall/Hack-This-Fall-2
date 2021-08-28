<template>
  <Container id="sponsors" name="sponsors">
    <section class="content-section">
      <HashHeader title="SPONSORS &amp; PARTNERS" />
      <div class="contents">
        <div v-for="(section, index) in sponsors" :key="index">
          <div :class="['subheading', index !== 0 ? 'with-spacing' : null]">
            <h2 class="section-title">{{ section.type }}</h2>
          </div>
          <div class="cards-grid">
            <div
              v-for="(sponsor, index) in section.logos"
              :key="index"
              :class="[sponsor.image ? null : 'hide-small']"
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
      <!-- <div class="cta-buttons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://bit.ly/htf2-sponsor"
          class="cta-button smooth-transition discord"
        >
          SPONSOR US
        </a>
      </div> -->
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
  data() {
    return {
      sponsors: [
        {
          type: "TITLE SPONSOR",
          logos: [
            {
              url: "https://www.storyblok.com/",
              image: require("~/assets/Sponsors/storyblok.svg"),
            },
            {
              url: "https://agoric.com/",
              image: require("~/assets/Sponsors/agoric.svg"),
            },
            {
              url: "https://www.inspiritai.com/",
              image: require("~/assets/Sponsors/InspiritAI.png"),
            },
            {
              url: "https://wrx.gg/htf",
              image: require("~/assets/Sponsors/wazirx.png"),
            },
          ],
        },
        {
          type: "HACKATHON PARTNER",
          logos: [
            {
              url: "https://mlh.io/",
              image: require("~/assets/Sponsors/mlh.svg"),
            },
            {
              url: "https://devpost.com/",
              image: require("~/assets/Sponsors/devpost.svg"),
            },
            {
              url: "https://raahee.in/",
              image: require("~/assets/Sponsors/raahee.png"),
            },
          ],
        },
        {
          type: "SILVER SPONSOR",
          logos: [
            {
              url: "https://education.github.com/discount_requests/student_application?utm_source=2021-10-22-hackthisfall",
              image: require("~/assets/Sponsors/github.svg"),
            },
            {
              url: "https://defhacks.co/",
              image: require("~/assets/Sponsors/defhacks.png"),
            },
            {
              url: "https://sawolabs.com/hackathon/redeemnow/?hackathon_name=HackThisFall2.0",
              image: require("~/assets/Sponsors/sawolabs.png"),
            },
            {
              url: "https://hackclub.com/",
              image: require("~/assets/Sponsors/hackclub.png"),
            },
            {
              url: "https://www.quicknode.com/",
              image: require("~/assets/Sponsors/quicknode.png"),
            },
          ],
        },
        {
          type: "BRONZE SPONSOR",
          logos: [
            {
              url: "https://www.twilio.com/",
              image: require("~/assets/Sponsors/twilio.png"),
            },
            {
              url: "https://symbl.ai/",
              image: require("~/assets/Sponsors/symbl.svg"),
            },
            {
              url: "https://www.digitalocean.com/",
              image: require("~/assets/Sponsors/digitalocean.svg"),
            },
            {
              url: "https://sketch.com",
              image: require("~/assets/Sponsors/sketch.png"),
            },
            {
              url: "https://draftbit.com/",
              image: require("~/assets/Sponsors/draftbit.png"),
            },
          ],
        },
        {
          type: "SPONSOR",
          logos: [
            {
              url: "https://balsamiq.com/",
              image: require("~/assets/Sponsors/balsamiq.png"),
            },
            {
              url: "https://www.wolfram.com/",
              image: require("~/assets/Sponsors/wolfram.png"),
            },
            {
              url: "https://www.linode.com/",
              image: require("~/assets/Sponsors/linode.svg"),
            },
            {
              url: "https://replit.com/",
              image: require("~/assets/Sponsors/replit.png"),
            },
            {
              url: "https://coil.com/",
              image: require("~/assets/Sponsors/coil.jpg"),
            },
            {
              url: "https:/gen.xyz/",
              image: require("~/assets/Sponsors/xyz.svg"),
            },
          ],
        },
        {
          type: "MERCHANDISE PARTNER",
          logos: [
            {
              url: "https://devhero.shop/",
              image: require("~/assets/Sponsors/devhero.png"),
            },
            {
              url: "https://www.stickermule.com/",
              image: require("~/assets/Sponsors/stickermule.png"),
            },
            {
              url: "https://dev.to/",
              image: require("~/assets/Sponsors/devto.png"),
            },
          ],
        },
      ],
    };
  },
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

  .subheading {
    &.with-spacing {
      margin-top: 2rem;
    }
    font-family: "Poppins";
    font-style: bold;
    justify-content: space-around;
    display: flex;
    align-self: center;
    color: rgba(128, 128, 128, 1);

    h2.section-title {
      font-size: 1.5rem;
      font-weight: 600;
      padding: 20px 10px 20px 0;
    }
  }

  .contents {
    .subheading {
      margin-top: 2rem;
      // padding: 20px 0px;
      font-family: "Poppins";
      font-style: bold;
      justify-content: space-around;
      display: flex;
      align-self: center;
      color: rgba(128, 128, 128, 1);

      h2.section-title {
        font-size: 1.5rem;
        font-weight: 600;
        padding: 20px 10px 20px 0;
      }
    }
    .cards-grid {
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
        box-shadow: rgba(255, 107, 0, 0.07) 0px 0px 10px 2px;
        height: 100px;
        min-width: 250px;
        padding: 2rem 4rem;
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

  // .cta-buttons {
  //   display: flex;
  //   margin-top: 3rem;
  //   justify-content: center;

  //   a {
  //     text-decoration: none;
  //   }

  //   .cta-button {
  //     background-color: #e85325;
  //     color: white;
  //     border: none;
  //     padding: 0.5rem 1rem;
  //     display: flex;
  //     align-items: center;
  //     justify-content: space-between;
  //     font-family: "Segoe UI Bold";
  //     border-radius: 0.5rem;
  //     cursor: pointer;
  //     box-shadow: rgba(255, 107, 0, 0.4) 0px 0px 20px 0px;

  //     &:hover {
  //       box-shadow: rgba(232, 82, 37, 0.25) 0px 0px 0px 6px;
  //     }

  //     img {
  //       margin-right: 0.5rem;
  //     }
  //   }
  // }
}
</style>
