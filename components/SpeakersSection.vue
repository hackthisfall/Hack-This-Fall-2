<template>
  <Container id="speakers" name="speakers">
    <section class="content-section">
      <HashHeader title="PREVIOUS SPEAKERS" />
      <div class="contents">
        <div class="speakers-grid">
          <div
            v-for="(speaker, index) in speakers"
            :key="index"
            :class="['team-card', `rot-${Math.floor(Math.random() * 24) * 15}`]"
          >
            <a :href="speaker.url" target="_blank" rel="noopener noreferrer">
              <div class="picture-wrapper smooth-transition">
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
      <div class="cta-buttons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://bit.ly/htf2-cfp"
          class="cta-button smooth-transition discord"
        >
          APPLY TO BE A SPEAKER
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
          name: "Marc Cohen",
          description: "Developer Advocate, GCP-Google",
          url: "https://twitter.com/marcacohen",
          picture: require("~/assets/Speakers/marc.jpg"),
          // companyLogo: require("~/assets/Sponsors/github.png"),
          // company: "GitHub",
          rotation: 30,
        },
        {
          name: "John Coghlan",
          description: "Developer Evangelism, GitLab",
          url: "https://twitter.com/john_cogs",
          picture: require("~/assets/Speakers/john.jpeg"),
          // companyLogo: require("~/assets/Sponsors/github.png"),
          // company: "GitHub",
          rotation: 30,
        },
        {
          name: "Eddie Jaoude",
          description: "GitHub Star of the Year",
          url: "https://twitter.com/eddiejaoude",
          picture: require("~/assets/Speakers/eddie.jpg"),
          // companyLogo: require("~/assets/Sponsors/github.png"),
          // company: "GitHub Stars",
          rotation: 60,
        },
        {
          name: "Dmitry Shklovsky",
          description: "Co Founder, Quiknode",
          url: "https://twitter.com/dimidj",
          picture: require("~/assets/Speakers/dmitry.jpeg"),
          // companyLogo: require("~/assets/Sponsors/github.png"),
          // company: "The Julia Language",
          rotation: 90,
        },
        {
          name: "Aloon Grinshpoon",
          description: "Founder & CEO, echoAR",
          url: "https://twitter.com/alongrinshpoon",
          picture: require("~/assets/Speakers/alon.webp"),
          // companyLogo: require("~/assets/Sponsors/github.png"),
          // company: "Postman",
          rotation: 120,
        },
        {
          name: "Akanksha Bhasin",
          description: "Community Evangelist, Symbl.AI",
          url: "https://twitter.com/Akii_20",
          picture: require("~/assets/Speakers/akanksha.jpeg"),
          // companyLogo: require("~/assets/Sponsors/github.png"),
          // company: "GitHub",
          rotation: 30,
        },
        {
          name: "Aanisha Mishra",
          description: "Engineer-II, Cisco",
          url: "https://twitter.com/the_crazy_lady",
          picture: require("~/assets/Speakers/aanisha.jpeg"),
          // companyLogo: require("~/assets/Sponsors/github.png"),
          // company: "Postman",
          rotation: 120,
        },
        {
          name: "Praveen Kumar",
          description: "Full Stack JS Developer",
          url: "https://twitter.com/praveenscience",
          picture: require("~/assets/Speakers/praveen.webp"),
          // companyLogo: require("~/assets/Sponsors/github.png"),
          // company: "Postman",
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
        padding-bottom: 1rem;
        // justify-content: center;
        align-items: center;

        .picture-wrapper {
          border-style: solid;
          border-width: 3px;
          border-color: red red white red;
          width: 160px;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
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
          margin-top: 1rem;
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

      &:nth-of-type(2) {
        margin-left: 1rem;
      }
    }

    @include respond-below(xxs) {
      flex-direction: column;
      width: 80%;

      .cta-button {
        &:nth-of-type(2) {
          margin-top: 1rem;
          margin-left: 0rem;
        }
      }
    }
  }
}
</style>
