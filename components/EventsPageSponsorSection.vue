<template>
  <Container id="event-sponsors" name="event-sponsors">
    <section class="content-section">
      <HashHeader title="SPONSORS" />
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
          type: "",
          logos: [
            {
              url: "https://hackp.ac/mlh-stickermule-hackathons",
              image: require("~/assets/Sponsors/stickermule.png")
            },
            {
              url: "https://hackclub.com/",
              image: require("~/assets/Sponsors/hackclub.png")
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
