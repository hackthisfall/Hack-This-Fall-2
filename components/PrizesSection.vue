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
import MLH from "~/components/prizesPage/MLH.vue";

export default {
  components: {
    Container,
    HashHeader,
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
            "<ul><li><span style='color: rgba(233, 83, 34, 1)'>INR 50,000</span> Prize to winning team</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 250</span> Amazon Gift Card from Quicknode.</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 250 </span>of free S3-compatible object storage credits with Filebase</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 449</span> of 1 year of Draftbit Pro</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 375</span> of In-Kind Wolfram Award</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 250</span> of Digital Ocean Credits</li><li>Hack This Fall <span style='color: rgba(233, 83, 34, 1)'>Swag Pack</span></li><li><span style='color: rgba(233, 83, 34, 1)'>Certificates</span> to members</li><li>Special Mention on <a style='color: rgba(233, 83, 34, 1)'  target='_blank' rel='noopener noreferrer' href='https://twitter.com/hackthisfall'>@hackthisfall</a> socials</li></ul>",
        },
        {
          name: "1st Runner-Up",
          image: require("~/assets/Prizes/2nd.svg"),
          details: "The team ranked 2nd overall ",
          amount: "INR 35,000",
          description:
            "<ul><li><span style='color: rgba(233, 83, 34, 1)'>INR 35,000</span> Prize to winning team</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 100</span> Amazon Gift Card from Quicknode.</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 150 </span>of free S3-compatible object storage credits with Filebase</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 449</span> of 1 year of Draftbit Pro</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 375</span> of In-Kind Wolfram Award</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 125 </span>of Digital Ocean Credits</li><li>Hack This Fall <span style='color: rgba(233, 83, 34, 1)'>Swag Pack</span></li><li><span style='color: rgba(233, 83, 34, 1)'>Certificates</span> to members</li><li>Special Mention on <a style='color: rgba(233, 83, 34, 1)'  target='_blank' rel='noopener noreferrer' href='https://twitter.com/hackthisfall'>@hackthisfall</a> socials</li></ul>",
        },
        {
          name: "2nd Runner-Up",
          image: require("~/assets/Prizes/3rd.svg"),
          details: "The team ranked 3rd overall",
          amount: "INR 20,000",
          description:
            "<ul><li><span style='color: rgba(233, 83, 34, 1)'>INR 20,000</span> Prize to winning team</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 250 </span>of free S3-compatible object storage credits with Filebase</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 449</span> of 1 year of Draftbit Pro</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 375</span> of In-Kind Wolfram Award</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 100</span> of Digital Ocean Credits</li><li>Hack This Fall <span style='color: rgba(233, 83, 34, 1)'>Swag Pack</span></li><li><span style='color: rgba(233, 83, 34, 1)'>Certificates</span> to members</li><li>Special Mention on <a style='color: rgba(233, 83, 34, 1)'  target='_blank' rel='noopener noreferrer' href='https://twitter.com/hackthisfall'>@hackthisfall</a> socials</li></ul>",
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
        border-radius: 15px;
        text-align: center;
        min-height: 300px;
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
