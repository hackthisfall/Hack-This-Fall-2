<template>
  <Container id="previous sponsors">
    <section class="content-section">
      <HashHeader title="PREVIOUS SPONSORS" />
      <div class="contents">
        <div class="cards-grid">
          <div
            v-for="(sponsor, index) in sponsors"
            :key="index"
            :class="[sponsor.image ? null : 'hide-small']"
          >
            <a :href="sponsor.url" rel="noopener noreferrer" target="_blank">
              <div v-if="sponsor.image" class="card">
                <img :src="sponsor.image" alt="sponsor" />
              </div>
            </a>
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
          url: "",
          image: require("~/assets/PreviousSponsors/1Password.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/axure.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/balsamiq.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/clerky.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/codeAsylum.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/codezoned.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/codingBlocks.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/defHacks.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/devfolio.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/devHood.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/echoAR.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/eggHead.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/flutter.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/fold.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/framer.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/gdgca.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/github.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/glimpse.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/gmc.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/hackcbs.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/interwebshost.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/matic.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/mdc.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/mlsa.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/mozguj.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/portis.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/progate.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/pyData.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/quickNode.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/replit.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/rosenfeld.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/sashido.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/slido.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/streamyard.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/taskade.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/tezos.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/upw.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/voiceflow.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/witechindia.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/wolfram.png")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/wtmb.jpeg")
        },
        {
          url: "",
          image: require("~/assets/PreviousSponsors/xdc.png")
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
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 30px;
      row-gap: 30px;

      @include respond-below(md) {
        grid-template-columns: repeat(3, 1fr);
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 10px;
        row-gap: 10px;
      }

      .card {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        box-shadow: rgba(255, 107, 0, 0.07) 0px 0px 10px 2px;
        // padding: 20px;
        // border-radius: 5px;
        height: 90px;

        @include respond-below(sm) {
          height: 120px;
        }

        img {
          width: 100px;
          margin: auto;

          @include respond-below(sm) {
            width: 60px;
          }
        }
      }
    }
  }
}
</style>
