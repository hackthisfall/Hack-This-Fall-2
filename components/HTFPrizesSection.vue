<template>
  <Container id="prizes" name="prizes">
    <section class="content-section">
      <HashHeader title="PRIZES" />
      <div class="subheading">
        <h2 class="section-title">HACK THIS FALL PRIZES</h2>
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
                  <p class="prizeAmount" v-html="prize.amount">{{}}</p>
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
        <SponsoredPrizes />
        <FunPrizes />
      </div>
    </section>
  </Container>
</template>

<script>
import Container from "~/components/Container";
import HashHeader from "~/components/HashHeader";
import SponsoredPrizes from "~/components/prizesPage/SponsoredPrizes.vue";
import FunPrizes from "~/components/prizesPage/FunPrizes.vue";
import MLH from "~/components/prizesPage/MLH.vue";

export default {
  components: {
    Container,
    SponsoredPrizes,
    HashHeader,
    FunPrizes,
    MLH,
  },
  data() {
    return {
      prizes: [
        {
          name: "Winner",
          image: require("~/assets/Prizes/1st.svg"),
          details: "The team ranked 1st overall ",
          amount: "INR 50,000",
          description:
            "<ul><li><span style='color: rgba(233, 83, 34, 1)'>INR 50,000</span> Prize to winning team</li><li>Hack This Fall <span style='color: rgba(233, 83, 34, 1)'>Swag Pack</span></li></ul><br/><div style='text-align:center'>and more...</div>",
        },
        {
          name: "1st Runner-Up",
          image: require("~/assets/Prizes/2nd.svg"),
          details: "The team ranked 2nd overall ",
          amount: "INR 35,000",
          description:
            "<ul><li><span style='color: rgba(233, 83, 34, 1)'>INR 35,000</span> Prize to winning team</li><li>Hack This Fall <span style='color: rgba(233, 83, 34, 1)'>Swag Pack</span></li></ul><br/><div style='text-align:center'>and more...</div>",
        },
        {
          name: "2nd Runner-Up",
          image: require("~/assets/Prizes/3rd.svg"),
          details: "The team ranked 3rd overall",
          amount: "INR 20,000",
          description:
            "<ul><li><span style='color: rgba(233, 83, 34, 1)'>INR 20,000</span> Prize to winning team</li><li>Hack This Fall <span style='color: rgba(233, 83, 34, 1)'>Swag Pack</span></li></ul><br/><div style='text-align:center'>and more...</div>",
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

        .card-side.back {
          text-align: left;
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
