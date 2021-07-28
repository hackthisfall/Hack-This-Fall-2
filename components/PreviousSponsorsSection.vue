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
          url: "https://1password.com/",
          image: require("~/assets/PreviousSponsors/1Password.png")
        },
        {
          url: "https://www.axure.com/",
          image: require("~/assets/PreviousSponsors/axure.png")
        },
        {
          url: "https://balsamiq.com/",
          image: require("~/assets/PreviousSponsors/balsamiq.png")
        },
        {
          url: "https://www.clerky.com/",
          image: require("~/assets/PreviousSponsors/clerky.png")
        },
        {
          url: "https://www.codeasylums.com/",
          image: require("~/assets/PreviousSponsors/codeAsylum.png")
        },
        {
          url: "https://codezoned.com/",
          image: require("~/assets/PreviousSponsors/codezoned.png")
        },
        {
          url: "https://codingblocks.com/",
          image: require("~/assets/PreviousSponsors/codingBlocks.png")
        },
        {
          url: "https://defhacks.co/",
          image: require("~/assets/PreviousSponsors/defHacks.png")
        },
        {
          url: "https://www.devfolio.co/",
          image: require("~/assets/PreviousSponsors/devfolio.png")
        },
        {
          url: "http://devhood.tech/",
          image: require("~/assets/PreviousSponsors/devHood.png")
        },
        {
          url: "https://www.echoar.xyz/",
          image: require("~/assets/PreviousSponsors/echoAR.png")
        },
        {
          url: "https://egghead.io/",
          image: require("~/assets/PreviousSponsors/eggHead.png")
        },
        {
          url: "https://www.meetup.com/fluttervadodara/",
          image: require("~/assets/PreviousSponsors/flutter.png")
        },
        {
          url: "https://fold.money/",
          image: require("~/assets/PreviousSponsors/fold.png")
        },
        {
          url: "https://www.framer.com/",
          image: require("~/assets/PreviousSponsors/framer.png")
        },
        {
          url: "https://gdgahmedabad.com/",
          image: require("~/assets/PreviousSponsors/gdgca.png")
        },
        {
          url: "https://github.com/",
          image: require("~/assets/PreviousSponsors/github.png")
        },
        {
          url: "https://www.joinglimpse.com/",
          image: require("~/assets/PreviousSponsors/glimpse.png")
        },
        {
          url: "https://givemycertificate.com/",
          image: require("~/assets/PreviousSponsors/gmc.png")
        },
        {
          url: "https://hackcbs.tech/",
          image: require("~/assets/PreviousSponsors/hackcbs.png")
        },
        {
          url: "https://interwebs.host/",
          image: require("~/assets/PreviousSponsors/interwebshost.png")
        },
        {
          url: "https://matic.network/",
          image: require("~/assets/PreviousSponsors/matic.png")
        },
        {
          url: "https://mehdev.club/",
          image: require("~/assets/PreviousSponsors/mdc.png")
        },
        {
          url: "https://studentambassadors.microsoft.com/",
          image: require("~/assets/PreviousSponsors/mlsa.png")
        },
        {
          url: "https://www.mozguj.org/",
          image: require("~/assets/PreviousSponsors/mozguj.png")
        },
        {
          url: "https://www.portis.io/",
          image: require("~/assets/PreviousSponsors/portis.png")
        },
        {
          url: "https://progate.com/",
          image: require("~/assets/PreviousSponsors/progate.png")
        },
        {
          url: "https://www.meetup.com/PyData-Ahmedabad/",
          image: require("~/assets/PreviousSponsors/pyData.png")
        },
        {
          url: "https://quiknode.io/",
          image: require("~/assets/PreviousSponsors/quickNode.png")
        },
        {
          url: "https://replit.com/",
          image: require("~/assets/PreviousSponsors/replit.png")
        },
        {
          url: "https://rosenfeldmedia.com/",
          image: require("~/assets/PreviousSponsors/rosenfeld.png")
        },
        {
          url: "https://www.sashido.io/en/",
          image: require("~/assets/PreviousSponsors/sashido.png")
        },
        {
          url: "https://www.sli.do/",
          image: require("~/assets/PreviousSponsors/slido.png")
        },
        {
          url: "https://streamyard.com/",
          image: require("~/assets/PreviousSponsors/streamyard.png")
        },
        {
          url: "https://www.taskade.com/",
          image: require("~/assets/PreviousSponsors/taskade.png")
        },
        {
          url: "https://tezos.com/",
          image: require("~/assets/PreviousSponsors/tezos.png")
        },
        {
          url: "https://tupweb.codes/",
          image: require("~/assets/PreviousSponsors/upw.png")
        },
        {
          url: "https://www.voiceflow.com/",
          image: require("~/assets/PreviousSponsors/voiceflow.png")
        },
        {
          url: "https://www.linkedin.com/company/witech-india/",
          image: require("~/assets/PreviousSponsors/witechindia.png")
        },
        {
          url: "https://www.wolfram.com/",
          image: require("~/assets/PreviousSponsors/wolfram.png")
        },
        {
          url: "https://www.facebook.com/wtmbaroda/about/",
          image: require("~/assets/PreviousSponsors/wtmb.jpeg")
        },
        {
          url: "https://xinfin.org/",
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
        height: 130px;
        filter: saturate(0);

        &:hover {
            filter: unset;
            transition: cubic-bezier(0.075, 0.82, 0.165, 1);
          }

        @include respond-below(sm) {
          height: 120px;
        }

        img {
          width: 55%;
          margin: auto;
        }
      }
    }
  }
}
</style>
