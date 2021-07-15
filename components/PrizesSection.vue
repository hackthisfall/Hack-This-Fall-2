<template>
  <Container id="speakers">
    <section class="content-section">
      <HashHeader title="PRIZES" />
      <div class="contents">
        <div class="speakers-grid">
          <div
            v-for="(speaker, index) in speakers"
            :key="index"
            class="speakers-card"
          >
            <a :href="speaker.url" target="_blank" rel="noopener noreferrer">
              <div class="picture-wrapper">
                <img
                  :src="speaker.picture"
                  alt="profile picture"
                  class="profile-pic"
                />
              </div>
            </a>
            <h4 class="title">{{ speaker.name }}</h4>
            <p class="description">{{ speaker.description }}</p>
            <img
              v-if="speaker.companyLogo"
              :src="speaker.companyLogo"
              :title="speaker.company"
              alt="company logo"
              class="company-logo"
            />
          </div>
        </div>
        <a class="view-all" href="/speakers">
          <button>VIEW ALL ></button>
        </a>
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
      speakers: [
        {
          name: "First Prize",
          description: "Program Manager",
          url: "https://twitter.com/",
          picture: require("~/assets/Prizes/1st.svg"),
        },
        {
          name: "Second Prize",
          description: "Program Manager",
          url: "https://twitter.com/",
          picture: require("~/assets/Prizes/2nd.svg"),
        },
        {
          name: "Third Prize",
          description: "Program Manager",
          url: "https://twitter.com/",
          picture: require("~/assets/Prizes/3rd.svg"),
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
    background-image: url("~/assets/HTF2/prizes.svg");
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: bottom;

    .speakers-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 4rem;
      row-gap: 30px;
      margin-top: 2rem;

      @include respond-below(md) {
        grid-template-columns: repeat(3, 1fr);
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(2, 1fr);
      }

      .speakers-card {
        display: flex;
        flex-direction: column;
        background-color: white;
        border-radius: 1rem;
        padding-top: 2rem;
        padding-bottom: 1rem;
        // justify-content: center;
        z-index: 200;
        align-items: center;

        .picture-wrapper {
          width: 160px;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--colour-pink);
          border-radius: 50%;
          transition: 0.3s all ease-in-out;

          &:hover {
            background: var(--gradient-blue);
          }

          .profile-pic {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background: var(--color-secondary-light);
          }

          @include respond-below(md) {
            width: 120px;
            height: 120px;
            .profile-pic {
              width: 110px;
              height: 110px;
            }
          }

          @include respond-below(sm) {
            width: 100px;
            height: 100px;
            .profile-pic {
              width: 90px;
              height: 90px;
            }
          }
        }

        .title {
          font-size: 1.2rem;
          text-align: center;
          margin-top: 20px;
          color: rgba(233, 83, 34, 1);

          @include respond-below(sm) {
            font-size: 1rem;
            margin-top: 10px;
          }
        }

        .description {
          font-size: 0.8rem;
          color: rgba(233, 83, 34, 1);
          text-align: center;
        }

        .company-logo {
          font-size: 0.8rem;
          margin-top: 5px;
          height: 20px;
        }
      }
    }

    .view-all {
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

        img {
          margin-right: 0.5rem;
        }

        &:nth-of-type(2) {
          margin-left: 1rem;
        }
      }
      button {
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
      }
    }
  }
}
</style>
