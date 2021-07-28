<template>
  <Container id="sponsors">
    <section class="content-section">
      <HashHeader title="EVENT SPONSORS" />
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
                <div v-if="sponsor.image" class="card">
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
          logos: [
            {},
            {
              image: require("~/assets/Sponsors/github.png"),
            },
            {
              image: require("~/assets/Sponsors/github.png"),
            },
          ],
        },
        {
          type: "GOLD SPONSORS",
          logos: [
            {
              image: require("~/assets/Sponsors/github.png"),
            },
            {
              image: require("~/assets/Sponsors/github.png"),
            },
            {
              image: require("~/assets/Sponsors/github.png"),
            },
            {
              image: require("~/assets/Sponsors/github.png"),
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

  .contents {
    .subheading {
      &.with-spacing {
        margin-top: 2rem;
      }
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
        border-radius: 0.5rem;
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
