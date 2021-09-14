<template>
  <Container id="schedule">
    <section class="content-section">
      <HashHeader title="SCHEDULE" />
      <div class="contents">
        <div class="speakers-grid">
          <div
            v-for="(speaker, index) in speakers"
            :key="index"
            :class="['team-card', `rot-${Math.floor(Math.random() * 24) * 15}`]"
          >
            <div class="details">
              <h4 class="title">{{ speaker.title }}</h4>
              <span
                ><p class="name">
                  <span v-if="speaker.name2">{{ ` ${speaker.name2}` }}</span>
                  <span v-if="speaker.name2">{{ ` and` }}</span>
                  <br v-if="speaker.name2" />
                  {{ speaker.name }}
                </p>
                <p class="description">{{ `${speaker.date} IST` }}</p>
              </span>
              <div class="cta-buttons">
                <a
                  v-if="speaker.buttonText"
                  target="_blank"
                  rel="noopener noreferrer"
                  :href="
                    speaker.sessionUrl ||
                    'https://www.youtube.com/c/HackThisFall'
                  "
                  class="cta-button smooth-transition discord"
                >
                  {{ speaker.buttonText }}
                </a>
              </div>
            </div>
            <div class="speaker-img">
              <a
                v-if="speaker.name2"
                :href="speaker.url2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="picture-wrapper smooth-transition">
                  <img
                    :src="speaker.picture2"
                    alt="profile picture"
                    class="profile-pic"
                  />
                </div>
              </a>
              <br />
              <a :href="speaker.url" target="_blank" rel="noopener noreferrer">
                <div class="picture-wrapper smooth-transition">
                  <img
                    :src="speaker.picture"
                    alt="profile picture"
                    class="profile-pic"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Container>
</template>

<script>
import Container from "~/components/Container";
import HashHeader from "~/components/HashHeader";
import dayjs from "dayjs";

export default {
  components: {
    Container,
    HashHeader,
  },
  data() {
    return {
      speakers: [
        {
          title: "Dear Performant App,",
          name: "Nishu Goel",
          sessionUrl: "https://bit.ly/htf2-nishu",
          buttonText: "WATCH NOW",
          date: "2 Sep 2021 20:30",
          endDate: "2 Sep 2021 21:30",
          url: "https://twitter.com/TheNishuGoel",
          picture: require("~/assets/Speakers/nishu.png"),
          rotation: 30,
        },
        {
          title: "Build a Twitter UI Clone using React JS",
          sessionUrl: "https://bit.ly/htf2-praveen",
          name: "Praveen Kumar",
          buttonText: "WATCH NOW",
          date: "4 Sep 2021 18:00",
          endDate: "4 Sep 2021 19:30",
          url: "https://praveen.science/",
          picture: require("~/assets/Speakers/praveen.jpeg"),
          rotation: 30,
        },
        {
          title: "Sailing with Containers",
          sessionUrl: "https://bit.ly/htf2-gourav",
          name: "Gourav Sharma",
          buttonText: "WATCH NOW",
          date: "7 Sep 2021 19:00",
          endDate: "7 Sep 2021 20:00",
          url: "https://twitter.com/rhcasharma",
          picture: require("~/assets/Speakers/gourav.jpg"),
          rotation: 30,
        },
        {
          title: "Living on the edge until your 30s",
          sessionUrl: "https://bit.ly/htf2-narayanan",
          name: "Narayanan S",
          buttonText: "WATCH NOW",
          date: "9 Sep 2021 18:00",
          endDate: "9 Sep 2021 19:00",
          url: "https://www.linkedin.com/in/chalkmeout/",
          picture: require("~/assets/Speakers/narayanan.png"),
          rotation: 30,
        },
        {
          title: "Integrating SAWO API In Your Project",
          sessionUrl: "https://bit.ly/htf2-soumaya",
          name: "Soumaya Ranjan",
          buttonText: "WATCH NOW",
          date: "11 Sep 2021 19:00",
          endDate: "11 Sep 2021 20:00",
          url: "https://www.linkedin.com/in/soumayaranjan/",
          picture: require("~/assets/Speakers/soumaya.jpeg"),
          rotation: 30,
        },
        {
          title: "Introduction to Computer Vision and Inspirit AI",
          name: "Amanda Somvilay",
          buttonText: "WATCH NOW",
          date: "14 Sep 2021 20:00",
          endDate: "14 Sep 2021 21:00",
          url: "https://twitter.com/hackthisfall",
          picture: require("~/assets/Speakers/amanda.png"),
          rotation: 30,
        },
        {
          title: "Crash Course into the Jamstack with Next.js & Storyblok",
          name: "Facundo Giuliani",
          buttonText: "WATCH NOW",
          date: "16 Sep 2021 19:00",
          endDate: "16 Sep 2021 20:30",
          url: "https://twitter.com/facundozurdo",
          picture: require("~/assets/Speakers/facundo.jpg"),
          rotation: 30,
          name2: "Samuel Snopko",
          url2: "https://twitter.com/samuelsnopko",
          picture2: require("~/assets/Speakers/samuel.jpg"),
        },
        {
          title: "Introduction to Decentralized Finance",
          name: "Rowland Graus",
          buttonText: "WATCH NOW",
          date: "17 Sep 2021 20:30",
          endDate: "17 Sep 2021 21:00",
          url: "https://twitter.com/rowlandgraus",
          picture: require("~/assets/Speakers/rowland.jpeg"),
          rotation: 30,
        },
        {
          title: "Blockchain Is Ready For You",
          name: "Dean Tribble",
          buttonText: "WATCH NOW",
          date: "17 Sep 2021 21:00",
          endDate: "17 Sep 2021 21:30",
          url: "https://twitter.com/deantribble",
          picture: require("~/assets/Speakers/dean.jpeg"),
          rotation: 30,
        },
        {
          title: "How to Quickly Build an NFT Application",
          name: "Kate Sills",
          buttonText: "WATCH NOW",
          date: "17 Sep 2021 21:30",
          endDate: "17 Sep 2021 22:00",
          url: "https://twitter.com/kate_sills",
          picture: require("~/assets/Speakers/kate.jpeg"),
          rotation: 30,
        },
        {
          title: "Azure Services for Your Hacks",
          name: "Sashrika Kaur",
          buttonText: "WATCH NOW",
          date: "18 Sep 2021 17:00",
          endDate: "18 Sep 2021 18:00",
          url: "https://twitter.com/SashrikaKaur",
          picture: require("~/assets/Speakers/sashrika.jpg"),
          rotation: 30,
        },
        {
          title: "Building Modern CMS Driven Web Application",
          name: "Daniel Phir",
          buttonText: "WATCH NOW",
          date: "21 Sep 2021 20:00",
          endDate: "21 Sep 2021 21:00",
          url: "https://twitter.com/malgamves",
          picture: require("~/assets/Speakers/daniel.jpg"),
          rotation: 30,
        },
        {
          title: "Getting started with Symbl.AI",
          name: "Akanksha Bhasin",
          buttonText: "WATCH NOW",
          date: "23 Sep 2021 21:00",
          endDate: "23 Sep 2021 22:00",
          url: "https://www.linkedin.com/in/akankshabhasin",
          picture: require("~/assets/Speakers/akanksha.jpeg"),
          rotation: 30,
          name2: "Eric Giannini",
          url2: "https://www.linkedin.com/in/unicornmobile",
          picture2: require("~/assets/Speakers/eric.jpeg"),
        },
        {
          title: "Dockerizing your Discord Bot",
          name: "Harshil Agrawal",
          buttonText: "WATCH NOW",
          date: "25 Sep 2021 18:00",
          endDate: "25 Sep 2021 19:00",
          url: "https://twitter.com/harshil1712",
          picture: require("~/assets/Speakers/harshil.jpeg"),
          rotation: 30,
        },
        {
          title: "Unleashing the Power of Communities",
          name: "Khushboo Verma",
          buttonText: "WATCH NOW",
          date: "26 Sep 2021 17:30",
          endDate: "26 Sep 2021 18:00",
          url: "https://twitter.com/khushbooverma_",
          picture: require("~/assets/Speakers/khushboo.jpg"),
          rotation: 30,
        },
        {
          title: "Using GitHub to win Hackathons",
          name: "Eddie Jaoude",
          buttonText: "WATCH NOW",
          date: "27 Sep 2021 18:30",
          endDate: "27 Sep 2021 19:30",
          url: "https://twitter.com/eddiejaoude/",
          picture: require("~/assets/Speakers/eddie.jpg"),
          rotation: 30,
        },
        {
          title: "Move your Local Development Environment to the Cloud",
          name: "Pauline Narvas",
          buttonText: "WATCH NOW",
          date: "30 Sep 2021 16:00",
          endDate: "30 Sep 2021 16:30",
          url: "https://twitter.com/paulienuh",
          picture: require("~/assets/Speakers/pauline.jpg"),
          rotation: 30,
        },
      ],
    };
  },
  mounted() {
    const now = dayjs();
    const alreadyDone = [];
    const toBeLive = [];
    const currentlyLive = [];
    this.speakers.forEach((speaker) => {
      const startDate = dayjs(speaker.date, "D MMM YYYY HH:mm");
      const endDate = dayjs(speaker.endDate, "D MMM YYYY HH:mm");

      if (endDate.isBefore(now)) {
        speaker.buttonText = "WATCH NOW";
        alreadyDone.push(speaker);
      }

      if (startDate.isAfter(now)) {
        speaker.buttonText = "TO BE LIVE";
        toBeLive.push(speaker);
      }

      if (startDate.isBefore(now) && endDate.isAfter(now)) {
        speaker.buttonText = "LIVE";
        currentlyLive.push(speaker);
      }
    });

    this.speakers = [...currentlyLive, ...toBeLive, ...alreadyDone];
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

    @include respond-below(sm) {
      padding: 1rem 0rem;
    }

    .speakers-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 3rem;
      row-gap: 3rem;

      @include respond-below(md) {
        grid-template-columns: repeat(2, 1fr);
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(1, 1fr);
      }

      .team-card {
        display: flex;
        box-shadow: rgba(255, 107, 0, 0.07) 0px 0px 10px 2px;
        border-radius: 1rem;
        padding: 1rem;
        padding-bottom: 1.5rem;
        justify-content: space-between;
        align-items: center;
        background-color: #feede3;

        .details {
          height: 100%;
          flex-direction: column;
          display: flex;
          justify-content: space-between;

          .title {
            font-size: 1.1rem;
            color: rgba(233, 83, 34, 1);

            @include respond-below(sm) {
              font-size: 1rem;
            }
          }

          .name {
            font-family: "Segoe UI Bold";
            margin-top: 1rem;
            font-size: 1rem;
            color: #707070;
          }

          .description {
            margin-top: 0.4rem;
            font-size: 1rem;
            color: #707070;
          }

          .company-logo {
            margin-top: 1rem;
            font-size: 0.8rem;
            height: 20px;
          }
        }

        .speaker-img {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          height: 100%;
          .picture-wrapper {
            border-style: solid;
            border-width: 3px;
            border-color: red red #feede3 red;
            width: 100px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            margin-right: 1rem;
            margin-bottom: 0;

            .profile-pic {
              width: 90px;
              height: 90px;
              border-radius: 50%;
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
    margin-bottom: 0px;

    &.center {
      justify-content: center;
    }

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
    }
  }
}
</style>
