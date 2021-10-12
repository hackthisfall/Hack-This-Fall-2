<template>
  <div class="contents">
    <div class="prizes-wrapper">
      <img src="~/assets/Sponsors/agoric.svg" alt="company" />
      <p style="width: 90%; margin: auto">
        Agoric is offering
        <span style="color: rgba(233, 83, 34, 1)">3 prizes</span> for the
        <span style="color: rgba(233, 83, 34, 1)"
          >best NFT related projects</span
        >. Hackers can choose what they want to build in the NFT space.<br /><br />
        <span style="color: rgba(233, 83, 34, 1)">1.</span> Create and launch
        your own non-fungible token project using the Agoric smart contracting
        framework. <br /><br />
        <span style="color: rgba(233, 83, 34, 1)">2. Level Up:</span> Complete a
        contract to allow NFT creators to perform “NFT drops” which are
        currently popular on other blockchains. [Work with dapp-nft-drop as a
        starting point]
      </p>
      <br />
      <!-- <a
        class="cta-button smooth-transition"
        target="_blank"
        href="https://atsign.com/hack-this-fall-wavi-contest/"
        >More Info</a
      > -->
      <div class="cards-grid">
        <img
          class="background"
          src="~/assets/Prizes/mlhTransparent.png"
          alt="background"
        />
        <!-- <div class="company">
        <img src="~/assets/Prizes/mlh.png" alt="magic logo" />
        <h1>MLH</h1>
      </div> -->
        <div
          v-for="(prize, index) in magicLabPrizes"
          :key="index"
          :class="['card', prize.specialClass]"
        >
          <!-- <div class="card-side back">
            <div class="texts">
              <p class="prizeDescription" v-html="prize.details">{{}}</p>
            </div>
          </div> -->
          <div class="card-side front">
            <!-- <div class="image">
              <img :src="prize.image" :alt="prize.name" class="prizeImage1" />
            </div> -->
            <div class="texts">
              <h4 class="prizeName" v-html="prize.name">{{}}</h4>
              <p class="prize">{{ prize.prizeName }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Container from "~/components/Container";

export default {
  components: {
    Container
  },
  data() {
    return {
      magicLabPrizes: [
        {
          name: "Best Project",
          prizeName: "USD 1,500",
          details:
            "<span style='color: rgba(233, 83, 34, 1)'>INR 17,500</span> awarded to the person whose page stands out the most for all the right reasons."
        },
        {
          name: "Second Best Projects",
          prizeName: "USD 500 [2 winners]",
          details:
            "<span style='color: rgba(233, 83, 34, 1)'>INR 7,500</span> awarded to the person who used the custom content feature in the most creative and unique ways."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.contents {
  width: 99%;
  padding: 20px 0;
  margin: auto;

  .prizes-wrapper {
    background-color: #feede3;
    border-radius: 10px;
    text-align: center;
    padding: 30px;

    img {
      margin: auto auto 30px;
      width: 300px;

      @include respond-below(xs) {
        width: 90%;
      }
    }

    .cta-button {
      background-color: #e85325;
      color: white;
      border: none;
      text-decoration: none;
      margin-bottom: 1rem;
      height: 5rem;
      padding: 0.5rem 1rem;
      font-family: "Segoe UI Bold";
      border-radius: 0.5rem;
      cursor: pointer;
      box-shadow: rgba(255, 107, 0, 0.4) 0px 0px 20px 0px;

      &:hover {
        box-shadow: rgba(232, 82, 37, 0.25) 0px 0px 0px 6px;
      }
    }

    .cards-grid {
      display: grid;
      position: relative;
      grid-template-columns: 1fr 1fr;
      background-color: #feede3;
      border-radius: 10px;
      column-gap: 30px;
      margin-top: 1.5rem;
      row-gap: 30px;

      @include respond-below(md) {
        grid-template-columns: repeat(2, 1fr);
        margin-top: 30px;
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(2, 1fr);
        margin-top: 30px;
      }

      @include respond-below(xs) {
        grid-template-columns: repeat(1, 1fr);
        margin-top: 30px;
      }

      .background {
        position: absolute;
        top: 10%;
        left: 4rem;

        @include respond-below(lg) {
          left: 2rem;
        }

        @include respond-below(md) {
          top: 15%;
          left: 2rem;
        }

        @include respond-below(sm) {
          height: 10rem;
          top: 10rem;
          left: 2rem;
        }

        @include respond-below(xs) {
          display: none;
        }
      }

      .company {
        text-align: center;
        margin: auto;

        img {
          width: 110px;
          border-radius: 10px;
        }

        h1 {
          font-weight: 600;
          font-family: "Sen";
          font-size: 1.4rem;
        }
      }

      .card {
        min-height: 200px;
        position: relative;

        @include respond-below(sm) {
          min-height: 100px;
        }

        @media (max-width: 1000px) {
          width: 96%;
        }

        .card-side {
          width: 100%;
          border-radius: 15px;
          transition: all 0.8s ease;
          backface-visibility: hidden;
          position: absolute;
          display: flex;
          align-items: center;
          padding: 0.5rem;
          min-height: 95%;
          background-color: rgb(253, 250, 245);
          overflow: hidden;

          @include respond-below(sm) {
            flex-direction: column;
            padding: 40px 10px;
          }
        }
        .card-side.back {
          transform: rotateY(-180deg);

          @include respond-below(sm) {
            flex-direction: column;
          }
        }
        /* &:hover .card-side.front {
          transform: rotateY(180deg);
        } */
        &:hover .card-side.back {
          transform: rotateY(0deg);
        }

        &.hidden {
          .card-side {
            background-color: transparent;
          }

          @include respond-below(sm) {
            display: none;
          }
        }

        @include respond-between(md, lg) {
          min-height: 350px;
        }

        @include respond-below(md) {
          min-height: 250px;
        }

        @include respond-below(sm) {
          min-height: 200px;
        }

        .image {
          position: relative;
          display: flex;
          flex-direction: column;
          align-content: center;
          margin-left: auto;
          margin-right: auto;

          img {
            margin: 16px;
            width: 190px;
          }

          .line {
            position: absolute;
            right: 0px;
            border-left: 2px dashed #ff5100;
            top: -50px;
            height: 300%;
          }
        }

        .texts {
          margin-left: 1rem;
          flex: 1;

          @include respond-below(sm) {
            margin-left: 0;
          }
          .prizeName {
            font-size: 1.2rem;
            font-weight: bold;
            padding-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>
