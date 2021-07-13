<template>
  <Container id="sponsors">
    <section class="content-section">
      <HashHeader title="EVENT SPONSORS" />
      <div class="contents">
        <div v-for="(section, index) in sponsors" :key="index">
          <div class="subheading">
            <h2 class="section-title">{{ section.type }}</h2>
          </div>
          <div class="cards-grid">
            <div v-for="(sponsor, index) in section.logos" :key="index">
              <a :href="sponsor.url" rel="noopener noreferrer" target="_blank">
                <div class="card">
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
          type: "PLATINUM SPONSORS",
          image: require("~/assets/Sponsors/Types/platinum.svg"),
          logos: [
            {
              image: require("~/assets/Sponsors/elastic.svg"),
              url: "https://www.elastic.co",
            },
            {
              image: require("~/assets/Sponsors/Auth0.png"),
              url: "https://a0.to/Hackon",
            },
            {
              image: require("~/assets/Sponsors/Magic.png"),
              url: "https://magic.link/",
            },
          ],
        },
        {
          type: "GOLD SPONSORS",
          image: require("~/assets/Sponsors/Types/gold.svg"),
          logos: [
            {
              image: require("~/assets/Sponsors/wazirx.png"),
              url: "https://wazirx.com",
            },
            {
              image: require("~/assets/Sponsors/quickNode.png"),
              url: "https://www.quiknode.io/",
            },
            {
              image: require("~/assets/Sponsors/github.svg"),
              url: "https://github.com",
            },
            {
              image: require("~/assets/Sponsors/digitalocean.svg"),
              url: "https://digitalocean.com",
            },
            {
              image: require("~/assets/Sponsors/stickermule.svg"),
              url: "http://hackp.ac/mlh-stickermule-hackathons",
            },
          ],
        },
        {
          type: "SILVER SPONSORS",
          image: require("~/assets/Sponsors/Types/silver.svg"),
          logos: [
            {
              image: require("~/assets/Sponsors/GraphCMS.png"),
              url: "https://graphcms.com/",
            },
            {
              image: require("~/assets/Sponsors/sawolabs.png"),
              url: "https://sawolabs.com/?utm_source=hacakthon&utm_medium=hackon&utm_campaign=HackPartner",
            },
            {
              image: require("~/assets/Sponsors/outsystems.svg"),
              url: "https://www.outsystems.com/",
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
  flex-direction: column;
  padding: 20px 0;
  .contents {
    .subheading {
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
        // padding: 20px;
        background: rgb(0, 0, 0);
        // border-radius: 5px;
        height: 90px;

        @include respond-below(sm) {
          height: 120px;
        }

        img {
          width: 200px;
          margin: auto;

          @include respond-below(sm) {
            width: 120px;
          }
        }
      }
    }
  }
}
</style>
