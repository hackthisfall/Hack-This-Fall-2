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
              <p class="name">{{ speaker.name }}</p>
              <p class="description">{{ speaker.date }}</p>
              <div class="cta-buttons">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://bit.ly/htf2-cfp"
                  class="cta-button smooth-transition discord"
                >
                  WATCH NOW
                </a>
              </div>
            </div>
            <div class="speaker-img">
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
      <div class="cta-buttons center">
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
          title: "Getting started with Symbl.ai",
          name: "Mark Cohen",
          date: "2 Jan 2021 15:00",
          url: "https://twitter.com/mco_dev",
          picture: require("~/assets/Speakers/marc.jpg"),
          rotation: 30,
        },
      ],
    };
  },
  mounted() {
    let i = 5;
    while (i--) {
      this.speakers.push(this.speakers[0]);
    }
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
            font-size: 0.9rem;
            color: #707070;
          }

          .description {
            margin-top: 0.4rem;
            font-size: 0.9rem;
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
