<template>
  <section class="content-section">
    <div class="subheading">
      <h2 class="section-title" id="fun">FUN PRIZES</h2>
    </div>
    <div class="contents">
      <div class="cards-grid">
        <div v-for="(prize, index) in prizes" :key="index">
          <div class="card" :class="prize.specialClass">
            <div class="card-side front">
              <div class="image">
                <img :src="prize.image" :alt="prize.name" />
              </div>
              <div class="texts">
                <h4 class="prizeName" v-html="prize.name">{{}}</h4>
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
          name: "Mascot Challenge",
          image: require("~/assets/Prizes/github-bag.png"),
          details: "Win GitHub Bag 🎒",
          description:
            "<ul><li>Bring in your creativity and show it to us by designing a Mascot for Hack This Fall.</li><li>Tweet your design and tag us <a style='color: rgba(233, 83, 34, 1)' target='_blank' rel='noopener noreferrer' href='https://twitter.com/hackthisfall'>@hackthisfall</a> using hashtag <a style='color: rgba(233, 83, 34, 1)' target='_blank' rel='noopener noreferrer' href='https://twitter.com/hashtag/HTFMascot'>#HTFMascot</a> & <a style='color: rgba(233, 83, 34, 1)' target='_blank' rel='noopener noreferrer' href='https://twitter.com/hashtag/hackthisfall'>#HackThisFall</a></li><li>The mascot which wins our heart gets a <span style='color: rgba(233, 83, 34, 1)'>GitHub Bag</span> as a prize and a Sketch license worth <span style='color: rgba(233, 83, 34, 1)'>USD 99</span>!</li></ul>",
        },
        {
          name: "Meme Challenge",
          image: require("~/assets/Prizes/gh-tee.png"),
          details: "Win GitHub Tee 👕",
          description:
            "<ul><li>Tickle our funny bones and create some amazing memes to stand out. </li><li>Tweet them by tagging us <a style='color: rgba(233, 83, 34, 1)' target='_blank' rel='noopener noreferrer' href='https://twitter.com/hackthisfall'>@hackthisfall</a> using hashtag <a style='color: rgba(233, 83, 34, 1)' target='_blank' rel='noopener noreferrer' href='https://twitter.com/hashtag/HTFMeme'>#HTFMeme</a> & <a style='color: rgba(233, 83, 34, 1)' target='_blank' rel='noopener noreferrer' href='https://twitter.com/hashtag/hackthisfall'>#HackThisFall</a></li><li>The best meme maker will receive a <span style='color: rgba(233, 83, 34, 1)'>GitHub Tshirt</span> as a prize👕</li></ul>",
        },
        {
          name: "Octocat Challenge",
          image: require("~/assets/Prizes/octocat.png"),
          details: "Win GitHub Swags 🐙",
          description:
            "<ul><li>Draw an Octocat & tweet it by tagging us <a style='color: rgba(233, 83, 34, 1)' target='_blank' rel='noopener noreferrer' href='https://twitter.com/hackthisfall'>@hackthisfall</a>, <a style='color: rgba(233, 83, 34, 1)' target='_blank' rel='noopener noreferrer' href='https://twitter.com/GitHubEducation'>@GitHubEducation</a> & <a style='color: rgba(233, 83, 34, 1)' target='_blank' rel='noopener noreferrer' href='https://twitter.com/MLHacks'>@MLHacks</a> using hashtag <a style='color: rgba(233, 83, 34, 1)' target='_blank' rel='noopener noreferrer' href='https://twitter.com/hashtag/hackthisfall'>#HackThisFall</a> & <a style='color: rgba(233, 83, 34, 1)' target='_blank' rel='noopener noreferrer' href='https://twitter.com/hashtag/hackthisfall'>#MyOctocat</a></li><li>The best octocat will receive <span style='color: rgba(233, 83, 34, 1)'>GitHub Swags</span> as a prize 🐙</li></ul>",
        },
        {
          name: "Best Raahee <br/> Mascot Design",
          image: require("~/assets/Sponsors/raahee.png"),
          details: "Free Therapy Voucher",
          specialClass: "raahee",
          description:
            "<ul><li>Create a mascot for Raahee and upload it on Twitter and tag <a style='color: rgba(233, 83, 34, 1)' target='_blank' rel='noopener noreferrer' href='https://twitter.com/raahee_'>@Raahee_</a> using hashtag <a style='color: rgba(233, 83, 34, 1)' target='_blank' rel='noopener noreferrer' href='https://twitter.com/hashtag/hackthisfall'>#HackThisFall</a></li><li style='margin-top: 0.4rem'>The winner gets <span style='color: rgba(233, 83, 34, 1)'>Free Therapy Voucher</span> &amp; a chance to be a <span style='color: rgba(233, 83, 34, 1)'>Raahee Design Intern</span>.</li><li>Also win a Sketch license worth <span style='color: rgba(233, 83, 34, 1)'>USD 99</span>!</li></ul>",
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
      grid-template-columns: repeat(3, 1fr);
      column-gap: 20px;
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
          width: 100%;
        }

        @media (max-width: 400px) {
          min-height: 220px;
        }

        .card-side {
          width: 100%;
          margin: auto;
          border-radius: 15px;
          transition: all 0.8s ease;
          backface-visibility: hidden;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.5rem 0 0.5rem 0;
          min-height: 100%;
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
          padding-right: 0.2rem;
        }

        .image {
          align-content: center;
          img {
            width: 150px;
            margin: 10px 10px 10px 0;
          }
        }

        &.raahee {
          .image {
            align-content: center;
            img {
              width: 100px;
              margin: 10px 10px 10px 0;
            }
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
