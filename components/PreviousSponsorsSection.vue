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
              <div v-if="sponsor.image" class="card smooth-transition">
                <img :src="sponsor.image" alt="sponsor" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="subheading with-spacing">
        <h2 class="section-title">AND MORE</h2>
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
          url: "https://github.com/",
          image: require("~/assets/PreviousSponsors/github.png"),
        },
        {
          url: "https://www.devfolio.co/",
          image: require("~/assets/PreviousSponsors/devfolio.png"),
        },
        {
          url: "https://matic.network/",
          image: require("~/assets/PreviousSponsors/matic.png"),
        },
        {
          url: "https://quiknode.io/",
          image: require("~/assets/PreviousSponsors/quickNode.png"),
        },
        {
          url: "https://www.portis.io/",
          image: require("~/assets/PreviousSponsors/portis.png"),
        },
        {
          url: "https://fold.money/",
          image: require("~/assets/PreviousSponsors/fold.png"),
        },
        {
          url: "https://tezos.com/",
          image: require("~/assets/PreviousSponsors/tezos.png"),
        },
        {
          url: "https://codingblocks.com/",
          image: require("~/assets/PreviousSponsors/codingBlocks.png"),
        },
        {
          url: "https://balsamiq.com/",
          image: require("~/assets/PreviousSponsors/balsamiq.png"),
        },
        {
          url: "https://replit.com/",
          image: require("~/assets/PreviousSponsors/replit.png"),
        },
        {
          url: "https://www.wolfram.com/",
          image: require("~/assets/PreviousSponsors/wolfram.png"),
        },
        {
          url: "https://www.voiceflow.com/",
          image: require("~/assets/PreviousSponsors/voiceflow.png"),
        },
        {
          url: "https://www.echoar.xyz/",
          image: require("~/assets/PreviousSponsors/echoAR.png"),
        },
        {
          url: "https://1password.com/",
          image: require("~/assets/PreviousSponsors/1Password.png"),
        },
        {
          url: "https://www.taskade.com/",
          image: require("~/assets/PreviousSponsors/taskade.png"),
        },
        {
          url: "https://www.axure.com/",
          image: require("~/assets/PreviousSponsors/axure.png"),
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
        row-gap: 10px;
      }

      .card {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        box-shadow: rgba(255, 107, 0, 0.07) 0px 0px 10px 2px;
        height: 100px;
        padding: 2rem 4rem;
        border-radius: 0.5rem;
        filter: saturate(0);

        &:hover {
          filter: unset;
          transition: cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        @include respond-below(sm) {
          height: 120px;
        }

        img {
          width: 130px;
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
