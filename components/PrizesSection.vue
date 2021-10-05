<template>
  <Container id="prizes" name="prizes">
    <section class="content-section">
      <HashHeader title="PRIZES" />
      <div class="contents">
        <div class="cards-grid">
          <div v-for="(prize, index) in prizes" :key="index">
            <div class="card">
              <div class="card-side front">
                <div class="image">
                  <img :src="prize.image" :alt="prize.name" />
                </div>
                <div class="texts">
                  <h4 class="prizeName">{{ prize.name }}</h4>
                  <p class="prizeDescription" v-html="prize.details">{{}}</p>
                </div>
              </div>
              <div class="card-side back">
                <div class="image">
                  <img :src="prize.prizeImage" :alt="prize.name" />
                </div>
                <p>
                  <span v-html="prize.description">{{}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="cta-buttons">
          <a
            href="/prizes"
            class="cta-button smooth-transition discord"
            rel="noopener noreferrer"
            target="_blank"
          >
            VIEW MORE
          </a>
        </div>
      </div>
    </section>
  </Container>
</template>

<script>
import Container from "~/components/Container";
import HashHeader from "~/components/HashHeader";
// import SubHashHeader from "~/components/SubHashHeader";
// import OtherPrizes from "~/components/prizesPage/OtherPrizes.vue";
// import AmagiAndElastic from "~/components/prizesPage/AmagiAndElastic.vue";
// import Auth0AndRaahee from "~/components/prizesPage/Auth0AndRaahee.vue";
// import MagicLabs from "~/components/prizesPage/magicLabs.vue";
// import SawoAndPolygon from "~/components/prizesPage/SawoAndPolygon.vue";
// import GraphCMS from "~/components/prizesPage/graphCMS.vue";
import MLH from "~/components/prizesPage/MLH.vue";
// import Symbl from "~/components/prizesPage/Symbl.vue";

export default {
  components: {
    Container,
    HashHeader,
    // SubHashHeader,
    // OtherPrizes,
    // AmagiAndElastic,
    // Auth0AndRaahee,
    // MagicLabs,
    // SawoAndPolygon,
    // GraphCMS,
    MLH,
    // Symbl
  },
  data() {
    return {
      prizes: [
        {
          name: "Winner (1st Prize)",
          image: require("~/assets/Prizes/1st.svg"),
          prizeImage: require("~/assets/Prizes/1st.svg"),
          amount: "₹25,000",
          details: "The team ranked 1st overall ",
          description: "₹25000 Prize to winning team",
        },
        {
          name: "First Runner-Up",
          image: require("~/assets/Prizes/2nd.svg"),
          prizeImage: require("~/assets/Prizes/2nd.svg"),
          amount: "₹15,000",
          details: "The team ranked 2nd overall ",
          description: "₹15000 Prize to winning team",
        },
        {
          name: "2nd Runner-Up",
          image: require("~/assets/Prizes/3rd.svg"),
          prizeImage: require("~/assets/Prizes/3rd.svg"),
          amount: "₹10,000",
          details: "The team ranked 3rd overall",
          description: "₹10000 Prize to winning team",
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
    padding: 20px 0;

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 30px;
      row-gap: 30px;

      @include respond-below(md) {
        grid-template-columns: repeat(1, 1fr);
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(1, 1fr);
      }

      .card {
        position: relative;
        text-align: center;
        border-radius: 15px;
        min-height: 200px;
        margin: auto;

        @media (max-width: 1000px) {
          width: 96%;
        }

        .card-side {
          width: 96%;
          margin: auto;
          border-radius: 15px;
          transition: all 0.8s ease;
          backface-visibility: hidden;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.5rem;
          min-height: 95%;
          background-color: #feede3;
        }
        .card-side.back {
          transform: rotateY(-180deg);
        }
        &:hover .card-side.front {
          transform: rotateY(180deg);
        }
        &:hover .card-side.back {
          transform: rotateY(0deg);
        }

        .image {
          align-content: center;
          img {
            width: 100px;
            margin: 10px;
          }
        }

        .texts {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .prizeName {
            font-size: 1.2rem;
            font-weight: bold;
            padding-bottom: 10px;
          }
        }
      }

      .clickable {
        cursor: pointer;
      }
    }
    .cta-buttons {
      display: flex;
      margin-top: 3rem;
      justify-content: center;

      a {
        text-decoration: none;
      }

      .cta-button {
        background-color: #e85325;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: "Segoe UI Bold";
        border-radius: 0.5rem;
        cursor: pointer;
        box-shadow: rgba(255, 107, 0, 0.4) 0px 0px 20px 0px;

        &:hover {
          box-shadow: rgba(232, 82, 37, 0.25) 0px 0px 0px 6px;
        }

        img {
          margin-right: 0.5rem;
        }

        &:hover {
          box-shadow: rgba(232, 82, 37, 0.25) 0px 0px 0px 6px;
        }
      }
    }
  }
}
</style>
