<template>
  <div class="contents">
    <div class="main-grid">
      <div class="prizes-wrapper" id="sawo">
        <a
          href="https://sawolabs.com/hackathon/redeemnow/?hackathon_name=HackThisFall2.0"
          target="_blank"
        >
          <img src="~/assets/Sponsors/sawolabs.png" alt="company" />
        </a>
        <p style="color: rgb(233, 83, 34); font-size: 18px; font-weight: 600">
          #SAWOforAuth Challenge
        </p>
        <p style="margin-bottom: 2rem; margin-top: 0.5rem">
          It is simple, just incorporate the
          <span style="color: rgb(233, 83, 34)">SAWO Auth API</span> in your
          hack to be eligible for amazing rewards as below!
        </p>
        <a
          class="cta-button smooth-transition"
          target="_blank"
          href="https://drive.google.com/file/d/15N7aUy8EJT38ZnfwdVfLq_skMGNYl_gA/view"
          style=""
          >More Info</a
        >
        <div class="cards-grid" style="margin-top: 2rem">
          <div class="card">
            <div class="card-side front">
              <div class="texts">
                <p
                  class="prize"
                  style="
                    font-size: 5rem;
                    font-weight: 600;
                    font-family: monospace;
                  "
                >
                  $100
                </p>
                and more prizes.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="prizes-wrapper" id="symbl">
        <a href="https://symbl.ai/" target="_blank"
          ><img src="~/assets/Sponsors/symbl.svg" alt="company"
        /></a>
        <p style="color: rgb(233, 83, 34); font-size: 18px; font-weight: 600">
          #BuildWithSymbl
        </p>
        <p style="margin-bottom: 2rem; margin-top: 0.5rem">
          Build your hack using the
          <span style="color: rgb(233, 83, 34)">SymblAI APIs</span> for a chance
          to wins a $100 Amazon Gift card + SymblAI Swags.
        </p>
        <a
          class="cta-button smooth-transition"
          target="_blank"
          href="https://docs.symbl.ai/docs/"
          style=""
          >More Info</a
        >
        <div class="cards-grid" style="margin-top: 2rem">
          <div class="card">
            <div class="card-side front">
              <div class="texts">
                <p
                  class="prize"
                  style="
                    font-size: 5rem;
                    font-weight: 600;
                    font-family: monospace;
                  "
                >
                  $100
                </p>
                Amazon Card + Swags
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="prizes-wrapper" id="raahee">
        <a href="https://raahee.in"
          ><img
            src="~/assets/Prizes/raahee.png"
            alt="company"
            style="height: 3.2rem"
        /></a>
        <p
          style="
            color: rgb(233, 83, 34);
            font-size: 18px;
            font-weight: 600;
            margin-top: 0.8rem;
          "
        >
          Mental Health Track
        </p>
        <p style="margin-bottom: 2rem; margin-top: 0.5rem">
          Builds your hack based on the
          <span style="color: rgb(233, 83, 34)">Mental Health Track</span>, the
          project should be unique and innovative.
        </p>
        <a
          class="cta-button smooth-transition"
          target="_blank"
          href="https://docs.google.com/document/d/1nOf5Fz1A46TpUJnD_tnGtByQra0aE4IhSwltWRG-dog/"
          style=""
          >More Info</a
        >
        <div class="cards-grid" style="margin-top: 2rem">
          <div class="card">
            <div class="card-side front">
              <div class="texts">
                <h4 class="prizeName">
                  Grab
                  <span style="color: rgb(233, 83, 34)"
                    >2 months internship</span
                  >
                  and get mentored by mentors from
                  <span style="color: rgb(233, 83, 34)">
                    CISCO ThingQbator</span
                  >
                </h4>
                <!-- <p class="prize">{{ prize.prizeName }}</p> -->
              </div>
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
          name: "Best Domain Name from GoDaddy Registry",
          image: require("~/assets/Sponsors/godaddy.jpg"),
          prizeName: "Hack from Home Kit",
          details:
            "GoDaddy Registry is giving you everything you need to be the best hacker no matter where you are. Register your domain name with GoDaddy Registry for a chance to win a Hack from Home Kit! <span style='color: rgba(233, 83, 34, 1)'>Each Kit contains wireless earbuds, blue light glasses, selfie ring light and a pouch for easy transport</span>.",
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

  .main-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;

    @include respond-below(sm) {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 1rem;
    }

    @include respond-below(xs) {
      grid-template-columns: repeat(1, 1fr);
    }

    .prizes-wrapper {
      background-color: #feede3;
      border-radius: 10px;
      text-align: center;
      padding: 30px;

      @include respond-below(sm) {
        width: 90vw;
      }

      img {
        margin: auto auto 30px;
        height: 4rem;
        width: auto;
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
        margin-top: 1rem;

        &:hover {
          box-shadow: rgba(232, 82, 37, 0.25) 0px 0px 0px 6px;
        }
      }

      .cards-grid {
        display: grid;
        position: relative;
        grid-template-columns: 1fr;
        background-color: #feede3;
        border-radius: 10px;
        column-gap: 30px;
        row-gap: 30px;

        @include respond-below(md) {
          grid-template-columns: repeat(1, 1fr);
          margin-top: 30px;
        }

        @include respond-below(sm) {
          grid-template-columns: repeat(1, 1fr);
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

          @include respond-between(md, lg) {
            min-height: 300px;
          }

          @include respond-below(md) {
            min-height: 350px;
          }

          @include respond-below(sm) {
            min-height: 200px;
          }

          @media (max-width: 341px) {
            min-height: 300px;
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
}
</style>
