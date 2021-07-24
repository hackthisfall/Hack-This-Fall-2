<template>
  <Container id="speakers">
    <section class="content-section">
      <HashHeader title="SPEAKERS" />
      <div class="contents">
        <div class="speakers-grid">
          <div
            v-for="(speaker, index) in speakers"
            :key="index"
            :class="['team-card', `rot-${speaker.rotation}`]"
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
        <a class="view-more" href="/speakers">
          <button>VIEW ALL</button>
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
          name: "Siddharth Dayalwal",
          description: "Program Manager",
          url: "https://twitter.com/",
          picture: require("~/assets/Speakers/Juan-Pablo.png"),
          companyLogo: require("~/assets/Sponsors/github.png"),
          company: "GitHub",
          rotation: 30,
        },
        {
          name: "Siddharth Dayalwal",
          description: "Program Manager",
          url: "https://twitter.com/",
          picture: require("~/assets/Speakers/Juan-Pablo.png"),
          companyLogo: require("~/assets/Sponsors/github.png"),
          company: "GitHub Stars",
          rotation: 60,
        },
        {
          name: "Siddharth Dayalwal",
          description: "Program Manager",
          url: "https://twitter.com/",
          picture: require("~/assets/Speakers/Juan-Pablo.png"),
          companyLogo: require("~/assets/Sponsors/github.png"),
          company: "The Julia Language",
          rotation: 90,
        },
        {
          name: "Siddharth Dayalwal",
          description: "Program Manager",
          url: "https://twitter.com/",
          picture: require("~/assets/Speakers/Juan-Pablo.png"),
          companyLogo: require("~/assets/Sponsors/github.png"),
          company: "Postman",
          rotation: 120,
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
  font-family: "Segoe UI";

  .contents {
    padding: 1rem 4rem;
    text-align: center;

    @include respond-below(sm) {
      padding: 1rem 0rem;
    }

    .speakers-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 20px;
      row-gap: 30px;

      @include respond-below(md) {
        grid-template-columns: repeat(3, 1fr);
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(2, 1fr);
      }

      .team-card {
        display: flex;
        flex-direction: column;
        box-shadow: rgba(255, 107, 0, 0.07) 0px 0px 10px 2px;
        border-radius: 1rem;
        // justify-content: center;
        align-items: center;

        .picture-wrapper {
          border-style: solid;
          border-width: 2px;
          border-color: red red white red;
          width: 160px;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: 0.3s all ease-in-out;
          margin-top: 1rem;

          .profile-pic {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            // background: var(red);
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
          margin-top: 1rem;
          color: rgba(233, 83, 34, 1);

          @include respond-below(sm) {
            font-size: 1rem;
            margin-top: 10px;
          }
        }

        .description {
          margin-top: 1rem;
          font-size: 0.8rem;
          color: rgba(112, 112, 112, 1);
          text-align: center;
        }

        .company-logo {
          margin: 1rem auto;
          font-size: 0.8rem;
          height: 20px;
        }
      }
    }

    .view-more {
      display: none;
      cursor: pointer;
      color: var(--colour-pink);

      img {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
