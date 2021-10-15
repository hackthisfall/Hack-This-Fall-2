<template>
  <div class="contents">
    <div class="prizes-wrapper">
      <a href="https://atsign.com/" rel="noopener noreferrer" target="_blank">
        <img src="~/assets/Sponsors/atsign.webp" alt="company"
      /></a>
      <p style="width: 90%; margin: auto">
        <span
          style="color: rgba(233, 83, 34, 1); font-size: 18px; font-weight: 600"
          >The @wavi Contest</span
        >
        <br /><br /><span style="color: rgba(233, 83, 34, 1)">@wavi</span> is an
        app from
        <span style="color: rgba(233, 83, 34, 1)">The @ Company</span> that
        allows you to create a highly customizable microsite in a matter of
        minutes. This can be a public space for your business, your project,
        your pet or yourself.<br /><br />
        Skills needed for using
        <span style="color: rgba(233, 83, 34, 1)">@wavi</span> - Creativity,
        typing, copy-pasting and the ability to Google well. If you want to kick
        it up a notch, cutting and pasting embed codes will come in super
        handy.<br /><br />
        <span style="color: rgba(233, 83, 34, 1)">Pro tip</span>: For really
        cool CUSTOM CONTENT, try pasting HTML into the TEXT field.
      </p>
      <br />
      <a
        class="cta-button smooth-transition"
        target="_blank"
        href="https://atsign.com/hack-this-fall-wavi-contest/"
        >More Info</a
      >
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
          name: "Best Overall Winner",
          prizeName: "INR 17,500",
          details:
            "<span style='color: rgba(233, 83, 34, 1)'>INR 17,500</span> awarded to the person whose page stands out the most for all the right reasons.",
        },
        {
          name: "Most Creative Use of Custom Content",
          prizeName: "INR 7,500",
          details:
            "<span style='color: rgba(233, 83, 34, 1)'>INR 7,500</span> awarded to the person who used the custom content feature in the most creative and unique ways.",
        },
        {
          name: "Most Desi/Festive",
          prizeName: "INR 7,500",
          details:
            "<span style='color: rgba(233, 83, 34, 1)'>INR 7,500</span> awarded to the page that showcases Indian culture, art, traditions, the festivals and its people the best.",
        },
        {
          name: "Best Pet Page",
          prizeName: "INR 7,500",
          details:
            "<span style='color: rgba(233, 83, 34, 1)'>INR 7,500</span> awarded to the person with the best page about their pet(s)",
        },
        {
          name: "Most Nerdy Page",
          prizeName: "INR 7,500",
          details:
            "<span style='color: rgba(233, 83, 34, 1)'>INR 7,500</span> awarded to the person with the most nerdy page. We expect the content on this to be super techy!",
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
      grid-template-columns: 1fr 1fr 1fr;
      background-color: #feede3;
      border-radius: 10px;
      column-gap: 30px;
      margin-top: 1.5rem;
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

        @include respond-below(sm) {
          min-height: 100px;
        }

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
