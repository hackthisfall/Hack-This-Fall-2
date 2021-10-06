<template>
  <Container id="prizes" name="prizes">
    <section class="content-section">
      <div class="subheading">
        <h2 class="section-title">FUN PRIZES</h2>
      </div>
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
                <p>
                  <span v-html="prize.description">{{}}</span>
                </p>
              </div>
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
          name: "Mascot Challenge",
          image: require("~/assets/Prizes/github-bag.png"),
          details: "Win GitHub Bag 🎒",
          description:
            "<ul><li>Bring in your creativity and show it to us by designing a Mascot for Hack This Fall.</li><li>Tweet your design and tag us <a style='color: rgba(233, 83, 34, 1)' target='_blank' rel='noopener noreferrer' href='https://twitter.com/hackthisfall'>@hackthisfall</a> using hashtag <a style='color: rgba(233, 83, 34, 1)' target='_blank' rel='noopener noreferrer' href='https://twitter.com/hashtag/hackthisfall'>#HackThisFall</a></li><li>The mascot which wins our heart gets a <b style='color: rgba(233, 83, 34, 1)'>GitHub Bag</b> as a prize!🎒</li></ul>",
        },
        {
          name: "Meme Challenge",
          image: require("~/assets/Prizes/gh-tee.png"),
          details: "Win GitHub Tee 👕",
          description:
            "<ul><li>Tickle our funny bones and create some amazing memes to stand out. </li><li>Tweet them by tagging us <a style='color: rgba(233, 83, 34, 1)' target='_blank' rel='noopener noreferrer' href='https://twitter.com/hackthisfall'>@hackthisfall</a> using hashtag <a style='color: rgba(233, 83, 34, 1)' target='_blank' rel='noopener noreferrer' href='https://twitter.com/hashtag/hackthisfall'>#HackThisFall</a></li><li>The best meme maker will receive a <b style='color: rgba(233, 83, 34, 1)'>GitHub Tshirt</b> as a prize👕</li></ul>",
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

  .subheading {
    font-family: "Poppins";
    font-style: bold;
    justify-content: space-around;
    display: flex;
    align-self: center;
    color: rgba(128, 128, 128, 1);
    margin-top: -2rem;

    h2.section-title {
      font-size: 1.5rem;
      font-weight: 600;
      padding: 20px 10px 20px 0;
    }
  }

  .contents {
    padding: 20px 0;

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
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
        border-radius: 15px;
        text-align: center;
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
          justify-content: space-evenly;
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

        .card-side.back {
          text-align: left;
        }

        .image {
          align-content: center;
          img {
            width: 150px;
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
