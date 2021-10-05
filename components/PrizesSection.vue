<template>
  <Container id="prizes">
    <section class="content-section">
      <HashHeader title="PRIZES" />
      <div class="contents">
        <div class="cards-grid">
          <div v-for="(prize, index) in prizes" :key="index">
            <div class="card">
              <div class="image">
                <img :src="prize.image" :alt="prize.name" class="prizeImage" />
              </div>
              <div class="texts">
                <p class="prizeName">{{ prize.name }}</p>
                <h4 class="prizeAmount">{{ prize.amount }}</h4>
              </div>
            </div>
          </div>
        </div>
        <a class="view-all" href="/prizes"
          ><button class="smooth-transition">VIEW ALL</button></a
        >
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
      prizes: [
        {
          name: "First Prize",
          image: require("~/assets/Prizes/1st.svg"),
          amount: "₹20000",
        },
        {
          name: "Second Prize",
          image: require("~/assets/Prizes/2nd.svg"),
          amount: "₹15000",
        },
        {
          name: "Third Prize",
          image: require("~/assets/Prizes/3rd.svg"),
          amount: "₹10000",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  font-family: "Segoe UI";
  background-color: #feede3;
  border-radius: 1rem;

  .contents {
    padding: 1rem 8rem;
    text-align: center;
    // background-image: url("~/assets/HTF2/prizes.svg");
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: bottom;

    @include respond-below(md) {
      padding: 1rem 4rem;
    }

    @include respond-below(sm) {
      padding: 1rem 1rem;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 4rem;
      row-gap: 30px;

      @include respond-below(md) {
        grid-template-columns: repeat(3, 1fr);
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(1, 1fr);
      }

      .card {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        background-color: white;
        border-radius: 1rem;
        padding-top: 2rem;
        padding-bottom: 1rem;
        // justify-content: center;
        z-index: 200;
        align-items: center;
        min-height: 275px;

        .image {
          img {
            height: 150px;
            width: 150px;
            margin: 10px;
          }
        }

        .texts {
          font-size: 1.2rem;
          text-align: center;
          margin-top: 20px;
          color: rgba(233, 83, 34, 1);
          text-align: center;
          .prizeAmount {
            color: rgba(128, 128, 128, 1);
            font-size: 0.8rem;
            text-align: center;
            font-weight: bold;
            padding-bottom: 10px;
          }
        }
      }
    }

    .view-all {
      button {
        cursor: pointer;
        margin-top: 2rem;
        color: white;
        padding: 0.5rem 1rem;
        background-color: #e85325;
        border: none;
        font-family: "Segoe UI Bold";
        border-radius: 0.5rem;
        img {
          transform: rotate(90deg);
          height: 0.4rem;
        }

        &:hover {
          box-shadow: rgba(232, 82, 37, 0.25) 0px 0px 0px 6px;
        }
      }
    }
  }
}
</style>
