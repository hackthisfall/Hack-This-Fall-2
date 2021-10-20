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
            {
              url: "https://hackon.tech/universe",
              image: require("~/assets/Sponsors/hackon.svg"),
            },
          ],
        },
        {
          type: "DIAMOND SPONSOR",
          logos: [
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
              url: "https://coil.com/",
              image: require("~/assets/Sponsors/coil.jpg"),
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
              url: "https://draftbit.com/",
              image: require("~/assets/Sponsors/draftbit.png"),
            },
            {
              url: "https://gen.xyz/",
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
              url: "https://hackp.ac/mlh-stickermule-hackathons",
              image: require("~/assets/Sponsors/stickermule.png"),
            },
            {
              url: "https://dev.to/",
              image: require("~/assets/Sponsors/devto.png"),
            },
          ],
        },
        {
          type: "STREAMING PARTNER",
          logos: [
            {
              url: "https://streamyard.com/about",
              image: require("~/assets/Sponsors/streamyard.png"),
            },
          ],
        },
        {
          type: "CERTIFICATE PARTNER",
          logos: [
            {
              url: "https://givemycertificate.com/",
              image: require("~/assets/Sponsors/gmc.png"),
            },
          ],
        },
        {
          type: "COMMUNITY PARTNER",
          logos: [
            {
              url: "https://www.youtube.com/c/KunalKushwaha",
              image: require("~/assets/Community-Partners/cclass.jpg"),
            },
            {
              url: "https://hackclub.com/",
              image: require("~/assets/Sponsors/hackclub.png"),
            },
            {
              url: "https://www.pugroups.in/",
              image: require("~/assets/Community-Partners/pug.png"),
            },
            {
              url: "https://iter.hackclub.com",
              image: require("~/assets/Community-Partners/hc-iter.png"),
            },
            {
              url: "https://twitter.com/EvokeCoders",
              image: require("~/assets/Community-Partners/coders-evoke.png"),
            },
            {
              url: "https://www.learnforcause.com/",
              image: require("~/assets/Community-Partners/lfc.jpg"),
            },
            {
              url: "https://semikolan.co",
              image: require("~/assets/Community-Partners/semikolan.png"),
            },
            {
              url: "https://githubsrm.tech/",
              image: require("~/assets/Community-Partners/github-srm.png"),
            },
            {
              url: "https://linktr.ee/devstrons",
              image: require("~/assets/Community-Partners/devstrons.png"),
            },
            {
              url: "https://www.linkedin.com/company/learn-with-community/",
              image: require("~/assets/Community-Partners/lwc.png"),
            },
            {
              url: "https://twitter.com/basecampXD",
              image: require("~/assets/Community-Partners/basecamp.png"),
            },
            {
              url: "https://apihacks.co/",
              image: require("~/assets/Community-Partners/phantom.jpg"),
            },
            {
              url: "https://community.mozilla.org/en/groups/moznuv/",
              image: require("~/assets/Community-Partners/moz-nuv.png"),
            },
            {
              url: "https://geeksforgeeksvitb.study/",
              image: require("~/assets/Community-Partners/gfg-bhopal.png"),
            },
            {
              url: "https://techsahead.netlify.app/",
              image: require("~/assets/Community-Partners/techsahead.png"),
            },
            {
              url: "https://www.srmkzilla.net/",
              image: require("~/assets/Community-Partners/srmkzilla.png"),
            },
            {
              url: "https://www.gdsclnct.xyz/",
              image: require("~/assets/Community-Partners/gdg-lnct.png"),
            },
            {
              url: "https://linktr.ee/opincocommunity/",
              image: require("~/assets/Community-Partners/opinco.png"),
            },
            {
              url: "https://gdsc.community.dev/university-institute-of-technology-rgpv-bhopal/",
              image: require("~/assets/Community-Partners/gdsc-rgpv.png"),
            },

            {
              url: "https://gdsc.community.dev/rajasthan-technical-university-kota/",
              image: require("~/assets/Community-Partners/gdg-rtu.jpg"),
            },
            {
              url: "https://twitter.com/hackclubsvit",
              image: require("~/assets/Community-Partners/hc-svit.png"),
            },
            {
              url: "https://alexadevsrm.com",
              image: require("~/assets/Community-Partners/alexa-srm.png"),
            },
            {
              url: "https://thesundayorg.social/",
              image: require("~/assets/Community-Partners/sunday.png"),
            },
            {
              url: "https://nitsurat.acm.org/",
              image: require("~/assets/Community-Partners/acm-surat.png"),
            },
            {
              url: "https://twitter.com/ankushsgandhi",
              image: require("~/assets/Community-Partners/codevisors.png"),
            },
            {
              url: "https://aitoss.club/",
              image: require("~/assets/Community-Partners/oss.png"),
            },
            {
              url: "https://twitter.com/pieai_jaipur",
              image: require("~/assets/Community-Partners/pie-jaipur.png"),
            },
            {
              url: "https://www.instagram.com/hackclub.duk/",
              image: require("~/assets/Community-Partners/hackclub-duk.png"),
            },
            {
              url: "https://linktr.ee/michispotlight",
              image: require("~/assets/Community-Partners/michi.png"),
            },
            {
              url: "https://codezoned.com/",
              image: require("~/assets/Community-Partners/codezoned.jpeg"),
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
