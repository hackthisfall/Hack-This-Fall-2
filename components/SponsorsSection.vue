<template>
  <Container id="sponsors" name="sponsors">
    <section class="content-section">
      <HashHeader title="PREVIOUS SPONSORS" />
      <div class="contents">
        <div v-for="(section, index) in sponsors" :key="index">
          <div :class="['subheading', index !== 0 ? 'with-spacing' : null]">
            <h2 class="section-title">{{ section.type }}</h2>
          </div>
          <div class="cards-grid">
            <div
              v-for="(sponsor, index) in section.logos"
              :key="index"
              :class="[
                sponsor.image ? null : 'hide-small',
                sponsor.specialClass,
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
    HashHeader,
  },
  data() {
    return {
      sponsors: [
        {
          type: "",
          logos: [
            {
              url: "https://mlh.io/",
              image: require("~/assets/Sponsors/mlh.svg"),
            },
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

            {
              url: "https://filebase.com/?utm_source=website&utm_medium=sponsor&utm_campaign=hackthisfall",
              image: require("~/assets/Sponsors/filebase.svg"),
            },
            {
              url: "https://www.courier.com/",
              image: require("~/assets/Sponsors/courier.png"),
            },
            {
              url: "https://atsign.com/",
              image: require("~/assets/Sponsors/atsign.webp"),
            },
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
              url: "https://www.quicknode.com/",
              image: require("~/assets/Sponsors/quicknode.png"),
            },
            {
              url: "https://www.portis.io/",
              image: require("~/assets/Sponsors/portis.png"),
            },
            {
              url: "https://fold.money/",
              image: require("~/assets/Sponsors/fold.png"),
            },
            {
              url: "https://matic.network/",
              image: require("~/assets/Sponsors/matic.png"),
            },
            {
              url: "https://tezos.com/",
              image: require("~/assets/Sponsors/tezos.png"),
            },
            {
              url: "https://xinfin.org/",
              image: require("~/assets/Sponsors/xdc.png"),
            },
            {
              url: "https://www.twilio.com/",
              image: require("~/assets/Sponsors/twilio.png"),
            },
            {
              url: "https://coil.com/",
              image: require("~/assets/Sponsors/coil.jpg"),
            },
            {
              url: "https://registry.godaddy/",
              image: require("~/assets/Sponsors/godaddy.jpg"),
              specialClass: "godaddy",
            },
            {
              url: "https://www.linode.com/",
              image: require("~/assets/Sponsors/linode.svg"),
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
              url: "https://balsamiq.com/",
              image: require("~/assets/Sponsors/balsamiq.png"),
            },
            {
              url: "https://www.wolfram.com/",
              image: require("~/assets/Sponsors/wolfram.png"),
            },
            {
              url: "https://replit.com/",
              image: require("~/assets/Sponsors/replit.png"),
            },
            {
              url: "https://draftbit.com/",
              image: require("~/assets/Sponsors/draftbit.png"),
            },
            {
              url: "https://gen.xyz/",
              image: require("~/assets/Sponsors/xyz.svg"),
            },
            {
              url: "https://www.axure.com/",
              image: require("~/assets/Sponsors/axure.png"),
            },
            {
              url: "https://www.sashido.io/",
              image: require("~/assets/Sponsors/sashido.png"),
            },
            {
              url: "https://www.echoar.xyz/",
              image: require("~/assets/Sponsors/echoar.png"),
            },
            {
              url: "https://www.devhood.tech/",
              image: require("~/assets/Sponsors/devhood.png"),
            },
            {
              url: "https://codingblocks.com/",
              image: require("~/assets/Sponsors/cb.png"),
            },
            {
              url: "https://www.clerky.com/",
              image: require("~/assets/Sponsors/clerky.png"),
            },
            {
              url: "https://interwebs.host/",
              image: require("~/assets/Sponsors/iwh.png"),
            },
            {
              url: "https://1password.com/",
              image: require("~/assets/Sponsors/1p.png"),
            },
            {
              url: "https://rosenfeldmedia.com/",
              image: require("~/assets/Sponsors/rosenfeld.png"),
            },
            {
              url: "https://www.egghead.io/",
              image: require("~/assets/Sponsors/eh.png"),
            },
            {
              url: "https://www.taskade.com/",
              image: require("~/assets/Sponsors/taskade.png"),
            },
            {
              url: "https://www.framer.com/",
              image: require("~/assets/Sponsors/framer.png"),
            },
            {
              url: "https://www.voiceflow.com/",
              image: require("~/assets/Sponsors/voiceflow.png"),
            },
            {
              url: "http://joinglimpse.com/",
              image: require("~/assets/Sponsors/glimpse.png"),
            },
            {
              url: "https://progate.com/",
              image: require("~/assets/Sponsors/progate.png"),
            },
            // remaining except slido
            {
              url: "https://devhero.shop/",
              image: require("~/assets/Sponsors/devhero.png"),
            },
            {
              url: "https://hackp.ac/mlh-stickermule-hackathons",
              image: require("~/assets/Sponsors/stickermule.png"),
            },
            {
              url: "https://dev.to/",
              image: require("~/assets/Sponsors/devto.png"),
            },
            {
              url: "https://streamyard.com/about",
              image: require("~/assets/Sponsors/streamyard.png"),
            },
            {
              url: "https://givemycertificate.com/",
              image: require("~/assets/Sponsors/gmc.png"),
            },
            {
              url: "https://raahee.in/",
              image: require("~/assets/Prizes/raahee.png"),
            },
            {
              url: "https://hackon.tech/universe",
              image: require("~/assets/Sponsors/hackon.svg"),
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
