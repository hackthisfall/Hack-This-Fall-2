<template>
  <div class="contents">
    <div class="prizes-wrapper" id="mlh">
      <a href="https://mlh.io/" rel="noopener noreferrer" target="_blank">
        <img src="~/assets/Sponsors/mlh.svg" alt="company"
      /></a>
      <div class="cards-grid">
        <img
          class="background"
          src="~/assets/Prizes/mlhTransparent.png"
          alt="background"
        />
        <div
          v-for="(prize, index) in magicLabPrizes"
          :key="index"
          :class="['card', prize.specialClass]"
        >
          <div class="card-side back">
            <div class="texts">
              <p class="prizeDescription" v-html="prize.details">{{}}</p>
            </div>
          </div>
          <div class="card-side front">
            <div class="image">
              <img :src="prize.image" :alt="prize.name" class="prizeImage1" />
            </div>
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
    Container,
  },
  data() {
    return {
      magicLabPrizes: [
        {
          name: "Best Web Monetization Project",
          image: require("~/assets/Sponsors/coil.png"),
          prizeName: "Portable Charger, Coil Pin & $60 Credit [2 winners]",
          details:
            "Coil is all about providing better ways to access and reward the creators, publishers and platforms that you love. Build a web monetized hack using Coil for a chance to win an <span style='color: rgba(233, 83, 34, 1)'>Anker - PowerCore Quick Charge Portable Charger, exclusive Coil pin and a $60 coil credit redemption card!</span> Bonus points for originality and creativity!",
        },
        {
          name: "Best Use of Linode Cloud",
          image: require("~/assets/Sponsors/linode.png"),
          prizeName: "Raspberry Pi 4 Starter Kit",
          details:
            "Use any one of Linode's wide array of cloud products and take your hack to the next level! Whether you're looking for data storage, compute power or hosting, Linode has what you need and the complimentary credits to get you started. Sign up and start hacking for your chance to win a <span style='color: rgba(233, 83, 34, 1)'>Raspberry Pi 4 Starter Kit</span>.",
        },
        {
          name: "Best Domain Name from GoDaddy Registry",
          image: require("~/assets/Sponsors/godaddy.jpg"),
          prizeName: "Hack from Home Kit",
          details:
            "GoDaddy Registry is giving you everything you need to be the best hacker no matter where you are. Register your domain name with GoDaddy Registry for a chance to win a Hack from Home Kit! <span style='color: rgba(233, 83, 34, 1)'>Each Kit contains wireless earbuds, blue light glasses, selfie ring light and a pouch for easy transport</span>.",
        },
        {
          name: "Most Creative Use of Twilio",
          image: require("~/assets/Sponsors/twilio.png"),
          prizeName: "Twilio Swag Box GameGo Console",
          details:
            "Twilio allows you to incorporate mobile messaging, phone calls and a ton of other awesome communication features right into your hackathon project using web service APIs. Build a hack that simplifies your life using any one of Twilio’s APIs for a chance to win a <span style='color: rgba(233, 83, 34, 1)'>Twilio Swag Box and GameGo Console</span> for you and each of your teammates!",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.contents {
  width: 99%;
  padding: 20px 0;

  .prizes-wrapper {
    background-color: #feede3;
    border-radius: 10px;
    text-align: center;
    padding: 30px;

    img {
      margin: auto auto 30px;
      width: 200px;
    }

    .cards-grid {
      display: grid;
      position: relative;
      grid-template-columns: 1fr 1fr;
      background-color: #feede3;
      border-radius: 10px;
      column-gap: 30px;
      row-gap: 30px;

      @include respond-below(md) {
        grid-template-columns: repeat(3, 1fr);
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

        @media (max-width: 1000px) {
          width: 100%;
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
        &:hover .card-side.front {
          transform: rotateY(180deg);
        }
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
          min-height: 350px;
        }

        @include respond-below(sm) {
          min-height: 400px;
        }

        @media (max-width: 341px) {
          min-height: 500px;
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
